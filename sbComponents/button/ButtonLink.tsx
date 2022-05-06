import React from 'react';

import { ButtonExternalLinkStyled } from '@/sbComponents/button/Button.styles';
import { ButtonLinkProps } from '@/sbComponents/button/Button.types';

import { NotDefined } from '@/lib/storyblok/notDefined/NotDefined';
import { useLocale } from '@/hooks/useLocale/useLocale';
import {
  buildTargetLinkHref,
  isExternalStoryblokTargetLink,
  isExternalTargetLink, isInternalStoryblokTargetLink
} from "@/lib/storyblok/link/link.utils";
import Link from "next/link";

export const ButtonLink = ({ blok, ...rest }: ButtonLinkProps) => {
  const { locale } = useLocale();

  if (!blok.target) {
    return null;
  }

  if (isExternalTargetLink(blok.target) || isExternalStoryblokTargetLink(blok.target)) {
    return (
      <ButtonExternalLinkStyled
        {...rest}
        $variant={blok.variant}
        rel={'noopener noreferrer nofollow'}
        target={'_blank'}
        href={buildTargetLinkHref(blok.target, locale)}
        data-testid={'button-external-link'}
      >
        {blok.content}
      </ButtonExternalLinkStyled>
    );
  }
  if (isInternalStoryblokTargetLink(blok.target)) {
    return (
        <Link href={buildTargetLinkHref(blok.target, locale)}>
          <ButtonExternalLinkStyled
              {...rest}
              $variant={blok.variant}
              rel={'noopener noreferrer nofollow'}
              target={'_blank'}
              href={buildTargetLinkHref(blok.target, locale)}
              data-testid={'button-external-link'}
          >
            {blok.content}
          </ButtonExternalLinkStyled>
        </Link>
    );
  }

  return <NotDefined componentName={'button-link'} />;
};

import React from 'react';
import { Helmet as RHHelmet } from 'react-helmet';
import { useRouter } from 'next/router';

import { useBuildMode } from '@/hooks/useBuildMode/useBuildMode';
import { useStoryblokContext } from '@/hooks/useStoryblokContext/useStoryblokContext';
import { HelmetProps } from '@/components/helmet/Helmet.types';
import { storyblokToi18nMap } from '@/i18n/i18n.utils';
import { SbLanguage } from '@/lib/storyblok/storyblok.types';

export const Helmet = ({}: HelmetProps) => {
  const { isPreview } = useBuildMode();
  const { story } = useStoryblokContext();
  const seo = story?.content?.seo?.[0];
  const url = `${process.env.APP_BASE_URL}{${useRouter().pathname}}`;

  if (!seo) {
    return null;
  }

  const { keywords, metaplugin } = seo;

  const lang = storyblokToi18nMap[(story?.lang as SbLanguage) ?? SbLanguage.Pl];

  return (
    <RHHelmet title={`Uszanowanko Storyblokowanko - ${metaplugin.title}`}>
      {isPreview && (
        <script
          async
          src={'https://app.storyblok.com/f/storyblok-v2-latest.js'}
          type={'text/javascript'}
          id={'storyblokBridge'}
        />
      )}
      <title>Uszanowanko Storyblokowanko - ${metaplugin.title}</title>
      <link rel={'canonical'} href={url} />
      <meta property={'og:url'} content={url} />
      <meta name={'description'} content={metaplugin.description} />
      <meta name={'image'} content={metaplugin.og_image} />
      {metaplugin.title && <meta property={'og:title'} content={metaplugin.title} />}
      {metaplugin.description && <meta property={'og:description'} content={metaplugin.description} />}
      {metaplugin.og_image && <meta property={'og:image'} content={metaplugin.og_image} />}
      <meta name={'twitter:card'} content={'summary_large_image'} />
      <meta name={'og:type'} content={'website'} />
      {metaplugin.title && <meta name={'twitter:title'} content={metaplugin.title} />}
      {metaplugin.description && <meta name={'twitter:description'} content={metaplugin.description} />}
      {metaplugin.og_image && <meta name={'twitter:image'} content={metaplugin.og_image} />}
      {keywords && <meta name={'keywords'} content={keywords} />}
    </RHHelmet>
  );
};

import { LinkProps } from 'next/link';

import { LinkType, SbRichTextLink, SbTargetLink } from 'lib/storyblok/storyblok.types';
import { I18nLanguage } from 'context/localeContext/LocaleContext.types';

const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL;
const landingsRoot = process.env.NEXT_PUBLIC_APP_CATALOG;

export const isInternalStoryblokTargetLink = (link: SbTargetLink) => {
  if (!landingsRoot) {
    return false;
  }
  return link.linktype === LinkType.Story && link?.story?.full_slug?.includes(landingsRoot);
};

export const isExternalStoryblokTargetLink = (link: SbTargetLink) => {
  if (!landingsRoot) {
    return false;
  }
  return link.linktype === LinkType.Story && !link?.story?.full_slug?.includes(landingsRoot);
};

export const isExternalTargetLink = (link: SbTargetLink) => {
  if (!landingsRoot) {
    return false;
  }
  return link.linktype === LinkType.Url;
};

export const isExternalRichTextLink = (link: SbRichTextLink) => {
  if (!landingsRoot) {
    return false;
  }
  return link.linktype === LinkType.Url;
};

export const isInternalStoryblokRichTextLink = (link: SbRichTextLink) => {
  if (!landingsRoot) {
    return false;
  }
  return link.linktype === LinkType.Story && link?.story?.full_slug?.includes(landingsRoot);
};

export const isExternalStoryblokRichTextLink = (link: SbRichTextLink) => {
  if (!landingsRoot) {
    return false;
  }
  return link.linktype === LinkType.Story && !link?.story?.full_slug?.includes(landingsRoot);
};

export const isEmailTypeLink = (link: SbRichTextLink) => {
  return link.linktype === LinkType.Email;
};

export const isAnchorLink = (link: SbRichTextLink | SbTargetLink) => {
  return !!link.anchor;
};

export const buildTargetLinkHref = (link: SbTargetLink, locale: I18nLanguage): string => {
  let href = '';

  if (isInternalStoryblokTargetLink(link)) {
    href = `/${removeRootAndLocaleCatalog(link.story?.full_slug, locale) ?? ''}`;
  } else if (isExternalStoryblokTargetLink(link)) {
    href = `${baseURL}/${link.story?.full_slug}`;
  } else if (isExternalTargetLink(link)) {
    href = link.url;
  }

  if (isAnchorLink(link)) {
    href += `#${link?.anchor}`;
  }

  return href;
};

export const buildRichTextLinkHref = (link: SbRichTextLink, locale: I18nLanguage): string | undefined => {
  if (!landingsRoot || !link.story?.full_slug || !link.href) {
    return undefined;
  }

  let href = '';

  if (isInternalStoryblokRichTextLink(link)) {
    href = `/${removeRootAndLocaleCatalog(link.story.full_slug, locale) ?? ''}`;
  } else if (isExternalStoryblokRichTextLink(link)) {
    href = `${baseURL}/${link.story.full_slug}`;
  } else if (isExternalRichTextLink(link)) {
    href = link.href;
  }

  if (isAnchorLink(link)) {
    href += `#${link?.anchor}`;
  }

  return href;
};

export const removeRootCatalog = (fullSlug: string | undefined) => {
  const regExpRoot = new RegExp(`^${landingsRoot}\/`);
  return fullSlug?.replace(regExpRoot, '');
};

export const removeRootAndLocaleCatalog = (fullSlug: string | undefined, locale: I18nLanguage) => {
  if (!fullSlug) {
    return null;
  }

  const regExpLocale = new RegExp(`^${locale}\/`);
  const regExpRoot = new RegExp(`^${landingsRoot}\/`);

  let pathname = fullSlug;

  if (locale !== I18nLanguage.Pl) {
    pathname = pathname.replace(regExpLocale, '');
  }

  pathname = pathname.replace(regExpRoot, '');

  return pathname;
};

export const getPathPrefixedWithLocale = (langCode: I18nLanguage, path: LinkProps['href']) =>
  langCode === I18nLanguage.Pl ? (path as string) : `/${langCode}${path}`;

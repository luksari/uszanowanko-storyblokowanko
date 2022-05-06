import { StoryData } from 'storyblok-js-client';
import { ComponentType } from 'react';
import { SbEditableResult } from '@storyblok/storyblok-editable';


export type SbComponentName =
  | 'header-animation'
  | 'section-title'
  | 'small-illustration-text-grid'
  | 'module-text-line-separator'
  | 'module-button'
  | 'module-icon-grid'
  | 'illustration-text-section'
  | 'cta'
  | 'spacing'
  | 'my-new-module';

export type SbStoryData<
  Component extends AllowedComponents,
  Content extends Record<string, unknown>,
  AllowedComponents extends string = SbComponentName,
> = StoryData<SbBlok<Component, Content, AllowedComponents>>;

/** By default storyBlok returns SbBlok type but when you wrap it with sbEditable(blok) then it becomes SbEditableComponent */
export type SbBlok<
  Component extends AllowedComponents,
  Content extends Record<string, unknown>,
  AllowedComponents extends string = SbComponentName,
> = {
  _uid: string;
  component: Component;
  _editable?: string;
} & Content;

export type SbEditableComponent<
  Component extends AllowedComponents,
  Content extends Record<string, unknown>,
  AllowedComponents extends string = SbComponentName,
> = {
  blok: SbBlok<Component, Content, AllowedComponents>;
} & SbEditableResult;

export enum SbLanguage {
  Pl  = 'default',
  Es = 'es-es',
  En = 'en-gb',
}

export type SbSEO = {
  component: 'seo';
  keywords: string;
  metaplugin: {
    description: string;
    og_description: string;
    og_image: string;
    og_title: string;
    title: string;
    twitter_description: string;
    twitter_image: string;
    twitter_title: string;
    _uid: string;
  };
};

type SbPageConfig = {
  body: SbBlok<'page', any, 'page'>[];
  seo: SbSEO[];
};

export type SbPageModel = SbStoryData<'page', SbPageConfig, 'page'> & {
  default_full_slug: string;
  lang: SbLanguage;
};

export type SbComponentsMap<AllowedComponents extends string = SbComponentName> = Record<
  AllowedComponents,
  ComponentType<any>
>;

export type MaybeSbAsset = {
  alt: string | '';
  copyright: string;
  fieldtype: 'asset';
  filename: string | null;
  focus: string | null;
  id: number;
  name: string | '';
  title: string | '';
};

export type SbAsset = {
  alt: string;
  copyright: string;
  fieldtype: 'asset';
  filename: string;
  focus: null;
  id: number;
  name: string;
  title: string;
};

export type SbTable = {
  fieldtype: 'table';
  thead: SbBlok<'_table_head', { value: string }, '_table_head'>[];
  tbody: SbBlok<'_table_row', { body: SbBlok<'_table_col', { value: string }, '_table_col'>[] }, '_table_row'>[];
};

export type SbResolvedStory = {
  id: number;
  full_slug: string;
  name: string;
  slug: string;
  url: string;
  uuid: string;
};

export type SbTargetLink = {
  id: string;
  url: string;
  anchor: string;
  linktype: LinkType;
  fieldtype: 'multilink';
  cached_url: string;
  story?: SbResolvedStory;
};

export type SbRichTextLink = {
  href: string;
  uuid: string;
  anchor: string | null;
  target: string;
  linktype: LinkType;
  story?: SbResolvedStory;
};

export enum LinkType {
  Url = 'url',
  Story = 'story',
  Email = 'email',
}

export type WithBaseColor<T = unknown> = { $baseColor: string } & T;
export type WithSidePadding = { $sidePadding: number };

export type TranslatedSlug = {
  name: string | null;
  lang: SbLanguage;
  path: string;
};

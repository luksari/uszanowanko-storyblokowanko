import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer';

import { MaybeSbAsset, SbEditableComponent } from 'lib/storyblok/storyblok.types';

export type SbModuleIconElementConfig = {
  image: MaybeSbAsset;
  title_content: StoryblokRichtext;
  title_color: string;
  description_content: StoryblokRichtext;
  description_color: string;
};

export type AllowedComponent = 'module-icon-element';

export type ModuleIconElementProps = SbEditableComponent<AllowedComponent, SbModuleIconElementConfig, AllowedComponent>;

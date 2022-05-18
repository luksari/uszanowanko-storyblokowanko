import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer';

import { MaybeSbAsset, SbEditableComponent } from 'lib/storyblok/storyblok.types';

export type SbModuleIconElementConfig = {
  image: MaybeSbAsset;
  title_content: StoryblokRichtext;
  description_content: StoryblokRichtext;
};

export type AllowedComponent = 'module-icon-element';

export type ModuleIconElementProps = SbEditableComponent<AllowedComponent, SbModuleIconElementConfig, AllowedComponent>;

import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer';

import { SbEditableComponent } from 'lib/storyblok/storyblok.types';

export type SbModuleTextLineSeparatorConfig = {
  text_content: StoryblokRichtext;
  section_id: string;
};

export type ModuleTextLineSeparatorProps = SbEditableComponent<
  'module-text-line-separator',
  SbModuleTextLineSeparatorConfig
>;

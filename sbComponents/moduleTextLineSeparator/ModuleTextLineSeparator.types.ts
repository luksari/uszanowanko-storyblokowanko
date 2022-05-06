import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer';

import { SbEditableComponent } from 'lib/storyblok/storyblok.types';

export type SbModuleTextLineSeparatorConfig = {
  text_content: StoryblokRichtext;
  text_color: string;
  section_id: string;
  section_background: string;
  separator_color: string;
};

export type ModuleTextLineSeparatorProps = SbEditableComponent<
  'module-text-line-separator',
  SbModuleTextLineSeparatorConfig
>;

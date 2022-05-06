import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer';

import { SbBlok } from 'lib/storyblok/storyblok.types';

export type SbSectionTitle = {
  section_id: string;
  title_content: StoryblokRichtext;
  title_color: string;
  description_content: StoryblokRichtext;
  description_color: string;
  bg_color: string;
};

export type SectionTitleProps = {
  blok: SbBlok<'section-title', SbSectionTitle>;
};

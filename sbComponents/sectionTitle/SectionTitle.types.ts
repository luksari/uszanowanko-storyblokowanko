import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer';

import { SbBlok } from 'lib/storyblok/storyblok.types';

export type SbSectionTitle = {
  section_id: string;
  title_content: StoryblokRichtext;
  description_content: StoryblokRichtext;
};

export type SectionTitleProps = {
  blok: SbBlok<'section-title', SbSectionTitle>;
};

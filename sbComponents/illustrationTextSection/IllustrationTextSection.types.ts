import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer';

import { MaybeSbAsset, SbEditableComponent } from 'lib/storyblok/storyblok.types';

export enum ImagePosition {
  Left = 'left',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
}

export type SbIllustrationTextSectionConfig = {
  section_id: string;
  title_content: StoryblokRichtext;
  description_content: StoryblokRichtext;
  image_position: ImagePosition;
  image: MaybeSbAsset;
};

export type IllustrationTextSectionProps = SbEditableComponent<
  'illustration-text-section',
  SbIllustrationTextSectionConfig
>;

import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer';

import { MaybeSbAsset, SbEditableComponent } from 'lib/storyblok/storyblok.types';
import { ImagePosition } from 'sbComponents/smallIllustrationTextGrid/SmallIllustrationTextGrid.types';

export type SbSmallIllustrationTextElementConfig = {
  image: MaybeSbAsset;
  title_content: StoryblokRichtext;
  title_color: string;
  description_content: StoryblokRichtext;
  description_color: string;
};

export type SmallIllustrationTextElementOwnProps = {
  imagePosition: ImagePosition;
};

export type AllowedComponent = 'small-illustration-text-element';

export type SmallIllustrationTextElementProps = SbEditableComponent<
  AllowedComponent,
  SbSmallIllustrationTextElementConfig,
  AllowedComponent
> &
  SmallIllustrationTextElementOwnProps;

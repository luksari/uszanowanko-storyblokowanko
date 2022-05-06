import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer';

import { MaybeSbAsset, SbBlok, SbEditableComponent } from 'lib/storyblok/storyblok.types';
import { AllowedBtnLinkComponent, SbButtonLinkConfig } from 'sbComponents/button/Button.types';

export type SbHeaderAnimationConfig = {
  title_content: StoryblokRichtext;
  animation_movie: MaybeSbAsset;
  animation_svg: MaybeSbAsset;
  description: StoryblokRichtext;
  buttons?: SbBlok<'button-link', SbButtonLinkConfig, AllowedBtnLinkComponent>[];
};

export type HeaderAnimationProps = SbEditableComponent<'header-animation', SbHeaderAnimationConfig>;

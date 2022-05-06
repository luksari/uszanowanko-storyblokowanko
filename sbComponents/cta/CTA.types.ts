import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer';

import { MaybeSbAsset, SbBlok, SbEditableComponent } from 'lib/storyblok/storyblok.types';
import { AllowedBtnLinkComponent, SbButtonLinkConfig } from 'sbComponents/button/Button.types';

export enum CTABackground {
  DarkerBlueGradient = 'darkerBlueGradient',
  BlueGradient = 'blueGradient',
  BluishGrayGradient = 'bluishGrayGradient',
  WhiteSolid = 'whiteSolid',
  BluishGraySolid = 'bluishGraySolid',
}

export type SbCTAConfig = {
  section_id: string;
  section_background: CTABackground;
  title_content: StoryblokRichtext;
  title_color: string;
  description_content: StoryblokRichtext;
  description_color: string;
  image: MaybeSbAsset;
  image_position: ImagePosition;
  buttons?: SbBlok<'button-link', SbButtonLinkConfig, AllowedBtnLinkComponent>[];
};

export enum ImagePosition {
  Left = 'left',
  Right = 'right',
}

export type CTAProps = SbEditableComponent<'cta', SbCTAConfig>;

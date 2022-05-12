import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer';

import { MaybeSbAsset, SbEditableComponent, SbBlok } from 'lib/storyblok/storyblok.types';
import { AllowedBtnLinkComponent, SbButtonLinkConfig } from 'sbComponents/button/Button.types';

export type SbHeaderBasicConfig = {
  title_content: StoryblokRichtext;
  description_content: StoryblokRichtext;
  buttons?: SbBlok<'button-link', SbButtonLinkConfig, AllowedBtnLinkComponent>[];
  image: MaybeSbAsset;
};

export type HeaderBasicProps = SbEditableComponent<'header-basic', SbHeaderBasicConfig>;

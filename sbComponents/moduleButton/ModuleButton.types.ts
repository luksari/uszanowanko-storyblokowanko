import { SbBlok, SbEditableComponent } from 'lib/storyblok/storyblok.types';
import { AllowedBtnLinkComponent, SbButtonLinkConfig } from 'sbComponents/button/Button.types';

export type SbModuleButtonConfig = {
  section_id: string;
  section_background: string;
  buttons?: SbBlok<'button-link', SbButtonLinkConfig, AllowedBtnLinkComponent>[];
};

export type ModuleButtonProps = SbEditableComponent<'module-button', SbModuleButtonConfig>;

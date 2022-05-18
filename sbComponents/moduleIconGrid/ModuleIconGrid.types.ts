import { SbBlok, SbEditableComponent } from 'lib/storyblok/storyblok.types';
import {
  AllowedComponent,
  SbModuleIconElementConfig,
} from 'sbComponents/moduleIconGrid/moduleIconElement/ModuleIconElement.types';

export type SbModuleIconGridConfig = {
  section_id: string;
  columns: number;
  side_padding: number;
  elements: SbBlok<AllowedComponent, SbModuleIconElementConfig, AllowedComponent>[];
};

export type ModuleIconGridProps = SbEditableComponent<'module-icon-grid', SbModuleIconGridConfig>;

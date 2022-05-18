import { SbBlok, SbEditableComponent } from 'lib/storyblok/storyblok.types';

import {
  AllowedComponent,
  SbSmallIllustrationTextElementConfig,
} from './smallIllustrationTextElement/SmallIllustrationTextElement.types';

export type SbSmallIllustrationTextGridConfig = {
  section_id: string;
  image_position: ImagePosition;
  columns: number;
  elements: SbBlok<AllowedComponent, SbSmallIllustrationTextElementConfig, AllowedComponent>[];
};

export enum ImagePosition {
  AboveTheText = 'above-the-text',
  AsideTheText = 'aside-the-text',
}

export type SmallIllustrationTextGridProps = SbEditableComponent<
  'small-illustration-text-grid',
  SbSmallIllustrationTextGridConfig
>;

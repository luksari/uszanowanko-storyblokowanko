import { SbEditableComponent } from 'lib/storyblok/storyblok.types';

export type SbSpacingConfig = {
  background_color: string;
  size: number;
};

export type SpacingProps = SbEditableComponent<'spacing', SbSpacingConfig>;

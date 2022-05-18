import { SbEditableComponent } from 'lib/storyblok/storyblok.types';

export type SbSpacingConfig = {
  size: number;
};

export type SpacingProps = SbEditableComponent<'spacing', SbSpacingConfig>;

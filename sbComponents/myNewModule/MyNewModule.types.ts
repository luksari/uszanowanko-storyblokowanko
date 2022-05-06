import { SbEditableComponent } from 'lib/storyblok/storyblok.types';

export type SbMyNewModuleConfig = {
  new_field: string;
};

export type MyNewModuleProps = SbEditableComponent<'my-new-module', SbMyNewModuleConfig>;

const INLINE_TEMPLATE = {
  STORYBLOK_MAP_TYPE_UNION: "export type SbComponentName =\n  | '{{kebabCase name}}'",
  COMPONENT_MAP_IMPORT: "import { {{pascalCase name}} } from 'sbComponents/{{camelCase name}}/{{pascalCase name}}';\n",
  COMPONENT_MAP_PROPERTY:
    "export const sbRootComponents: SbComponentsMap = {\n  '{{kebabCase name}}': {{pascalCase name}},",
};

const addComponent = () => ({
  type: 'add',
  path: 'sbComponents/{{camelCase name}}/{{pascalCase name}}.tsx',
  templateFile: 'plop/templates/SbComponent.hbs',
});

const addTypes = () => ({
  type: 'add',
  path: 'sbComponents/{{camelCase name}}/{{pascalCase name}}.types.ts',
  templateFile: 'plop/templates/SbComponent.types.hbs',
});

const addStyles = () => ({
  type: 'add',
  path: 'sbComponents/{{camelCase name}}/{{pascalCase name}}.styles.ts',
  templateFile: 'plop/templates/SbComponent.styles.hbs',
});

const addTests = () => ({
  type: 'add',
  path: 'sbComponents/{{camelCase name}}/{{pascalCase name}}.test.tsx',
  templateFile: 'plop/templates/SbComponent.test.hbs',
});

const modifyTypesToIncludeNewComponent = () => ({
  type: 'modify',
  pattern: 'export type SbComponentName =',
  path: 'lib/storyblok/storyblok.types.ts',
  template: INLINE_TEMPLATE.STORYBLOK_MAP_TYPE_UNION,
});

const modifyComponentsMapToIncludeNewComponentImport = () => ({
  type: 'modify',
  path: 'lib/storyblok/componentsMap/componentsMap.ts',
  pattern: /^/,
  template: INLINE_TEMPLATE.COMPONENT_MAP_IMPORT,
});

const modifyComponentsMapToIncludeNewComponent = () => ({
  type: 'modify',
  path: 'lib/storyblok/componentsMap/componentsMap.ts',
  pattern: /export const sbRootComponents: SbComponentsMap = {/,
  template: INLINE_TEMPLATE.COMPONENT_MAP_PROPERTY,
});

export const action = {
  addComponent,
  addTypes,
  addTests,
  addStyles,
  modifyTypesToIncludeNewComponent,
  modifyComponentsMapToIncludeNewComponentImport,
  modifyComponentsMapToIncludeNewComponent,
};

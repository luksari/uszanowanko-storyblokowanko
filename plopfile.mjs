import { action } from './plop/actions/index.mjs';

const registerPlop = (plop) => {
  /** @type {import('plop').NodePlopAPI} */
  plop.setGenerator('React SbComponent', {
    description: `Corresponding component to the Storyblok's one`,
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: `paste here kebab-cased name of your component created in Storyblok:`,
      },
    ],
    actions: [
      action.addComponent(),
      action.addTypes(),
      action.addStyles(),
      action.modifyTypesToIncludeNewComponent(),
      action.modifyComponentsMapToIncludeNewComponentImport(),
      action.modifyComponentsMapToIncludeNewComponent(),
    ],
  });
};

// eslint-disable-next-line import/no-default-export
export default registerPlop;

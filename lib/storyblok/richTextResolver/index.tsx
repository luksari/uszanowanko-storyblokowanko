import React from 'react';
import { render, RenderOptions, StoryblokRichtext } from 'storyblok-rich-text-react-renderer';

const customRender = (doc: StoryblokRichtext, options?: RenderOptions) => render(doc, options);

export * from 'storyblok-rich-text-react-renderer';
export { customRender as render };

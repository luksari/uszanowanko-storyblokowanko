import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer';

import { areNotEmpty, isValidColor } from 'lib/storyblok/storyblok.typeguards';

export const getColor = (color: string) => (areNotEmpty(color) && isValidColor(color) && color) || undefined;

export const isRichTextEmpty = (obj: StoryblokRichtext) => {
  if (!obj?.content?.[0]) {
    return true;
  }
  return !obj.content[0].content;
};

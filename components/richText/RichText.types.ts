import { RenderOptions, StoryblokRichtext } from 'storyblok-rich-text-react-renderer';

export type RichTextProps = {
  content: StoryblokRichtext;
  options?: RenderOptions;
};

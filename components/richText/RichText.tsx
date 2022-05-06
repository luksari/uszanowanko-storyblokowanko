import { RichTextProps } from 'components/richText/RichText.types';
import { render } from 'lib/storyblok/richTextResolver';

export const RichText = ({ content, options }: RichTextProps) => {
  return render(content, options);
};

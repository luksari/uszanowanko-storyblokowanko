import React from 'react';

import { SbBlok, SbEditableComponent } from 'lib/storyblok/storyblok.types';
import { render } from 'lib/test';
import { sbEditableComponentMockFactory } from 'lib/test/factory/sbEditableComponentMockFactory';
import { getBasicRichText } from 'lib/test/factory/richTextFactory';
import { ModuleTextLineSeparator } from 'sbComponents/moduleTextLineSeparator/ModuleTextLineSeparator';
import { hexToRGB } from 'utils/hexToRGB';

import { SbModuleTextLineSeparatorConfig } from './ModuleTextLineSeparator.types';

let sbComponent: SbEditableComponent<'module-text-line-separator', SbModuleTextLineSeparatorConfig>;
const blok: SbBlok<'module-text-line-separator', SbModuleTextLineSeparatorConfig> = {
  _uid: '',
  component: 'module-text-line-separator',
  text_content: getBasicRichText('Hey'),
  section_background: '#FFFFFF',
  separator_color: '#BADA55',
  section_id: 'module',
  text_color: '#CBA997',
};

describe('Module Text Line Separator', () => {
  beforeEach(() => {
    sbComponent = sbEditableComponentMockFactory(blok);
  });
  it(`renders component when all necessary props are provided`, () => {
    const { queryByTestId } = render(<ModuleTextLineSeparator {...sbComponent} />);

    const section = queryByTestId('module-text-line-separator');
    const textSeparatorWrapper = queryByTestId('separator-wrapper');

    expect(section).toBeInTheDocument();
    expect(textSeparatorWrapper).toBeInTheDocument();
    expect(section).toHaveAttribute('id', 'module');

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const textColor = window.getComputedStyle(textSeparatorWrapper!).getPropertyValue('color');
    expect(textColor).toBe(hexToRGB('#CBA997'));
  });
});

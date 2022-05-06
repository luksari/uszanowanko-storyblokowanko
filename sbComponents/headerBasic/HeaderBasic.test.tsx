import React from 'react';

import { render } from 'lib/test';
import { SbBlok, SbEditableComponent } from 'lib/storyblok/storyblok.types';
import { getBasicRichText } from 'lib/test/factory/richTextFactory';
import { sbEditableComponentMockFactory } from 'lib/test/factory/sbEditableComponentMockFactory';

import { HeaderBasic } from './HeaderBasic';
import { SbHeaderBasicConfig } from './HeaderBasic.types';

let sbComponent: SbEditableComponent<'header-basic', SbHeaderBasicConfig>;
const blok: SbBlok<'header-basic', SbHeaderBasicConfig> = {
  _uid: 'befce12a-ea50-4615-b22b-5d6fabf8f561',
  image: {
    copyright: '',
    fieldtype: 'asset',
    focus: null,
    name: 'some',
    id: 3701780,
    alt: 'Man and machines',
    title: 'Idea',
    filename: 'https://a.storyblok.com/f/139631/571x526/fe2ea444c1/header-picture-placeholder.png',
  },
  title_content: getBasicRichText('Lorem'),
  description_content: getBasicRichText('Lorem'),
  buttons: [],
  component: 'header-basic',
};

describe('Header basic', () => {
  beforeEach(() => {
    sbComponent = sbEditableComponentMockFactory(blok);
  });

  it(`renders image section when all required image props are provided`, () => {
    const { queryByTestId } = render(<HeaderBasic {...sbComponent} />);

    const image = queryByTestId('header-basic-image');

    expect(image).toBeInTheDocument();
  });

  it(`doesn't render image section when image's filename is null`, () => {
    sbComponent.blok.image.filename = null;
    const { queryByTestId } = render(<HeaderBasic {...sbComponent} />);

    const image = queryByTestId('header-basic-image');

    expect(image).not.toBeInTheDocument();
  });

  it(`doesn't render image section when image's alt is empty string`, () => {
    sbComponent.blok.image.alt = '';
    const { queryByTestId } = render(<HeaderBasic {...sbComponent} />);

    const image = queryByTestId('header-basic-image');

    expect(image).not.toBeInTheDocument();
  });

  it(`doesn't render image section when image's title is empty string`, () => {
    sbComponent.blok.image.alt = '';
    const { queryByTestId } = render(<HeaderBasic {...sbComponent} />);
    const image = queryByTestId('header-basic-image');

    expect(image).not.toBeInTheDocument();
  });
});

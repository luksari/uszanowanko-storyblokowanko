import { renderHook } from '@testing-library/react-hooks';

import { useBuildMode } from './useBuildMode';

describe('useBuildMode hook', () => {
  afterEach(() => {
    delete process.env.GATSBY_BUILD_MODE;
  });

  it('returns correct values in preview mode', () => {
    process.env.GATSBY_BUILD_MODE = 'preview';
    const {
      result: { current },
    } = renderHook(useBuildMode);

    expect(current.isMissingEnv).toEqual(false);
    expect(current.isPreview).toEqual(true);
    expect(current.isLanding).toEqual(false);
  });

  it('returns correct values in landings mode', () => {
    process.env.GATSBY_BUILD_MODE = 'landings';
    const {
      result: { current },
    } = renderHook(useBuildMode);

    expect(current.isMissingEnv).toEqual(false);
    expect(current.isPreview).toEqual(false);
    expect(current.isLanding).toEqual(true);
  });

  it('returns correct values if env is missing', () => {
    const {
      result: { current },
    } = renderHook(useBuildMode);

    expect(current.isMissingEnv).toEqual(true);
    expect(current.isPreview).toEqual(false);
    expect(current.isLanding).toEqual(false);
  });
});

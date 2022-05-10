import { useMemo } from 'react';

import { BuildModeConfig, BuildMode } from './useBuildMode.types';

export const useBuildMode = (): BuildModeConfig => {
  const isPreview = useMemo(() => process.env.NEXT_BUILD_MODE === BuildMode.Preview, []);
  const isLanding = useMemo(() => !isPreview && !!process.env.NEXT_BUILD_MODE, [isPreview]);

  return {
    isPreview,
    isLanding,
    isMissingEnv: !process.env.NEXT_BUILD_MODE,
  };
};

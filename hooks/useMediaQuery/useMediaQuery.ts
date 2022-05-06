import { useCallback, useLayoutEffect, useState } from 'react';

import { UseMediaQueryConfig } from 'hooks/useMediaQuery/useMediaQuery.types';

export const useMediaQuery = ({ minWidth }: UseMediaQueryConfig, defaultValue = false): boolean => {
  const [isConditionMet, setIsConditionMet] = useState<boolean>(defaultValue);

  const setCondition = useCallback(() => {
    setIsConditionMet(window.innerWidth >= minWidth);
  }, [minWidth]);

  useLayoutEffect(() => {
    setCondition();
    window.addEventListener('resize', setCondition);
    return () => {
      window.removeEventListener('resize', setCondition);
    };
  }, [setCondition]);

  return isConditionMet;
};

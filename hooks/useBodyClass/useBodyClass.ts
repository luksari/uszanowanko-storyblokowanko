import { useEffect } from 'react';

import { UseBodyClassConfig } from 'hooks/useBodyClass/useBodyClass.types';

export const useBodyClass = ({ condition, className }: UseBodyClassConfig) => {
  useEffect(() => {
    if (condition && typeof window !== `undefined`) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }, [condition, className]);
};

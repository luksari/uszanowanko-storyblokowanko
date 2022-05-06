import { createContext } from 'react';

import { LocaleContextState } from './LocaleContext.types';

export const LocaleContext = createContext<LocaleContextState | null>(null);

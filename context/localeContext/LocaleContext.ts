import { createContext } from 'react';

import { LocaleContextDispatch, LocaleContextState } from './LocaleContext.types';

export const LocaleContext = createContext<(LocaleContextState & LocaleContextDispatch) | null>(null);

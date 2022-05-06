import { createContext } from 'react';

import { TranslationsContextState } from 'context/translationsContext/TranslationsContext.types';

export const TranslationsContext = createContext<TranslationsContextState>({ t: (key) => key });

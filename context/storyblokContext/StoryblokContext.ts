import { createContext } from 'react';

import { StoryblokContextState } from './StoryblokContext.types';

export const StoryblokContext = createContext<StoryblokContextState | null>(null);

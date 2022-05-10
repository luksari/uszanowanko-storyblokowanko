import { AlternateObject } from 'storyblok-js-client';

import { SbPageModel } from '@/lib/storyblok/storyblok.types';

export type GetStoryRes = {
  data: {
    cv: number;
    rels: unknown[];
    story: SbPageModel;
  };
  perPage: number;
  total: number;
  headers: any;
};

export type GetLinksRes = {
  data: {
    cv: number;
    links: Record<string, AlternateObject>;
  };
};

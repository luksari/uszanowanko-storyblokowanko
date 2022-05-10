import { StoryblokResult } from 'storyblok-js-client';

import { SbPageModel } from '@/lib/storyblok/storyblok.types';

export type GetStoriesRes = StoryblokResult & {
  data: {
    cv: number;
    rels: unknown[];
    links: unknown[];
    story: SbPageModel;
  };
  perPage: number;
  total: number;
  headers: any;
};

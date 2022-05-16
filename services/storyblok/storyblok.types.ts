import { SbLinkModel, SbPageModel } from '@/lib/storyblok/storyblok.types';

export type GetStoryRes = {
  data: {
    cv: number;
    rels: unknown[];
    story: SbPageModel;
  };
};

export type GetStoriesRes = {
  data: {
    cv: number;
    rels: unknown[];
    stories: SbPageModel[];
  };
  perPage: number;
  total: number;
  headers: any;
};

export type GetLinksRes = {
  data: {
    cv: number;
    links: Record<string, SbLinkModel>;
  };
};

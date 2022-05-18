import { SbLinkModel, SbPageModel } from '@/lib/storyblok/storyblok.types';

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

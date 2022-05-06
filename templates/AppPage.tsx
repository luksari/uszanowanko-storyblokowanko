import React from 'react';

import { SbPage } from 'lib/storyblok/sbPage/SbPage';
import {PageProps} from "@/types/page";

export const AppPage = ({ ctx }: { ctx: PageProps }) => {
  if (!ctx) {
    return null;
  }

  return <SbPage story={ctx.story} />;
};

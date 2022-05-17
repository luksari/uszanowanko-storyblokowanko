import React from 'react';
import { Helmet as RHHelmet } from 'react-helmet';
import { useRouter } from 'next/router';

import { HelmetProps } from '@/components/helmet/Helmet.types';

export const Helmet = ({ story }: HelmetProps) => {
  const seo = story?.content?.seo?.[0];
  const url = `${process.env.NEXT_PUBLIC_APP_BASE_URL}{${useRouter().pathname}}`;

  if (!seo) {
    return null;
  }

  const { keywords, metaplugin } = seo;

  return (
    <RHHelmet title={`Uszanowanko Storyblokowanko - ${metaplugin.title}`}>
      <title>Uszanowanko Storyblokowanko - ${metaplugin.title}</title>
      <link rel={'canonical'} href={url} />
      <meta property={'og:url'} content={url} />
      <meta name={'description'} content={metaplugin.description} />
      <meta name={'image'} content={metaplugin.og_image} />
      {metaplugin.title && <meta property={'og:title'} content={metaplugin.title} />}
      {metaplugin.description && <meta property={'og:description'} content={metaplugin.description} />}
      {metaplugin.og_image && <meta property={'og:image'} content={metaplugin.og_image} />}
      <meta name={'twitter:card'} content={'summary_large_image'} />
      <meta name={'og:type'} content={'website'} />
      {metaplugin.title && <meta name={'twitter:title'} content={metaplugin.title} />}
      {metaplugin.description && <meta name={'twitter:description'} content={metaplugin.description} />}
      {metaplugin.og_image && <meta name={'twitter:image'} content={metaplugin.og_image} />}
      {keywords && <meta name={'keywords'} content={keywords} />}
    </RHHelmet>
  );
};

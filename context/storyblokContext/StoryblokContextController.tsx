import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import StoryblokClient from 'storyblok-js-client';
import { parse } from 'query-string';

import { SbLinkModel, SbPageModel } from 'lib/storyblok/storyblok.types';

import { StoryblokContext } from './StoryblokContext';
import { StoryblokContextState } from './StoryblokContext.types';

export const sbClient = new StoryblokClient(
  {
    accessToken: process.env.NEXT_PUBLIC_SB_PREVIEW_TOKEN,
    cache: {
      clear: 'auto',
      type: 'memory',
    },
  },
  process.env.NEXT_PUBLIC_STORYBLOK_API,
);

export const StoryblokContextController = ({ children }: { children: ReactNode }) => {
  const [story, setStory] = useState<SbPageModel | null>(null);
  const [links, setLinks] = useState<SbLinkModel[] | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const [isInitial, setIsInitial] = useState<boolean>(true);

  // see https://www.storyblok.com/docs/Guides/storyblok-latest-js
  const initEventListeners = () => {
    const { StoryblokBridge } = window;
    if (typeof StoryblokBridge !== 'undefined') {
      const storyblokInstance = new StoryblokBridge();

      storyblokInstance.on(['published', 'change'], () => {
        // reload project on save and publish
        window.location.reload();
      });

      storyblokInstance.on(['input'], (event?: StoryblokEventPayload) => {
        setStory(event?.story);
      });

      storyblokInstance.on(['enterEditmode'], (event?: StoryblokEventPayload) => {
        // loading the draft version on initial view of the page
        sbClient
          .get(`cdn/stories/${event?.storyId}`, {
            version: 'draft',
            resolve_links: 'url',
            language,
          })
          .then(({ data }) => {
            if (data.story) {
              setStory(data.story);
            }
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error(error);
          });
      });
    }
  };

  const addBridge = (callback: VoidFunction) => {
    // check if the script is already present
    const existingScript = document.getElementById('storyblokBridge');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `//app.storyblok.com/f/storyblok-v2-latest.js`;
      script.id = 'storyblokBridge';
      document.body.appendChild(script);
      script.onload = () => {
        callback();
      };
    } else {
      existingScript.onload = () => {
        callback();
      };
    }
  };

  useEffect(() => {
    if (location.search.includes('_storyblok')) {
      const params = parse(location.search);

      sbClient
        .get(`cdn/stories/${params._storyblok}`, {
          version: 'draft',
          resolve_links: 'url',
          language: params._storyblok_lang,
        })
        .then(({ data }) => {
          if (data.story) {
            setStory(data.story);
            setLanguage(params._storyblok_lang as string);
          }
        });
    }
  }, [setStory]);

  useEffect(() => {
    if (typeof window === 'undefined' || !language || !isInitial) {
      return;
    }
    // load bridge only inside the storyblok editor
    if (window.location.search.includes('_storyblok')) {
      // first load the bridge and then attach the events
      addBridge(initEventListeners);
      setIsInitial(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]); // it's important to run the effect only once to avoid multiple event attachment

  const ctxValue = useMemo<StoryblokContextState>(() => ({ story, setStory, setLinks, links }), [links, story]);

  return <StoryblokContext.Provider value={ctxValue}>{children}</StoryblokContext.Provider>;
};

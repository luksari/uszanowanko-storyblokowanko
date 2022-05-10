import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import StoryblokClient from 'storyblok-js-client';
import { parse } from 'query-string';

import { SbPageModel } from 'lib/storyblok/storyblok.types';
import { useBuildMode } from 'hooks/useBuildMode/useBuildMode';

import { StoryblokContext } from './StoryblokContext';
import { StoryblokContextState } from './StoryblokContext.types';

export const sbClient = new StoryblokClient({
  accessToken: process.env.NEXT_SB_PREVIEW_TOKEN,
  cache: {
    clear: 'auto',
    type: 'memory',
  },
});

export const StoryblokContextController = ({ children }: { children: ReactNode }) => {
  const [story, setStory] = useState<SbPageModel | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const [isInitial, setIsInitial] = useState<boolean>(true);
  const { isPreview } = useBuildMode();

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
            console.log(error);
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
    if (location.search.includes('_storyblok') && isPreview) {
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
  }, [isPreview, setStory]);

  useEffect(() => {
    if (typeof window === 'undefined' || !language || !isInitial) {
      return;
    }
    // load bridge only inside the storyblok editor
    if (window.location.search.includes('_storyblok') && isPreview) {
      // first load the bridge and then attach the events
      addBridge(initEventListeners);
      setIsInitial(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]); // it's important to run the effect only once to avoid multiple event attachment

  const ctxValue = useMemo<StoryblokContextState>(() => ({ story, setStory }), [story]);

  return <StoryblokContext.Provider value={ctxValue}>{children}</StoryblokContext.Provider>;
};

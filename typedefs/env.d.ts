export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_STORYBLOK_API: string;
      NEXT_PUBLIC_SB_VERSION: string;
      NEXT_PUBLIC_APP_CATALOG: string;
      NEXT_PUBLIC_SB_PREVIEW_TOKEN: string;
      NEXT_PUBLIC_SB_PUBLISHED_TOKEN: string;
      NEXT_PUBLIC_APP_BASE_URL: string;
      NEXT_PREVIEW_MODE_SECRET: string;

      NODE_ENV: 'development' | 'production';
    }
  }

  interface Window {
    StoryblokBridge: any;
  }
}

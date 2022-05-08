export declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_STORYBLOK_API: string;
            NEXT_SB_VERSION: 'draft' | 'published';
            NEXT_APP_CATALOG: string;
            NEXT_SB_PREVIEW_TOKEN: string;
            NEXT_SB_PUBLISHED_TOKEN: string;
            NEXT_BUILD_MODE: 'preview' | 'app';
            NEXT_APP_BASE_URL: string;
            NODE_ENV: 'development' | 'production';
        }
    }

    interface Window {
        StoryblokBridge: any;
        grecaptcha: any;
    }
}

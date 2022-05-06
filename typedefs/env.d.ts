export declare global {
    namespace NodeJS {
        interface ProcessEnv {
            STORYBLOK_API: string;
            STORYBLOK_VERSION: 'draft' | 'published';
            APP_CATALOG: string;
            SB_PREVIEW_TOKEN: string;
            SB_PUBLISHED_TOKEN: string;
            GATSBY_BUILD_MODE?: 'preview' | 'app';
            APP_BASE_URL: string;
            NODE_ENV: 'development' | 'production';
            MOCK_API: string;
        }
    }

    interface Window {
        StoryblokBridge: any;
        grecaptcha: any;
    }
}

import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
    accessToken: "your-preview-token",
    use: [apiPlugin]
});
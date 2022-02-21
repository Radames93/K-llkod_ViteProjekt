import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        background_color: "grey",
        display: "standalone",
        icons: [
          {
            purpose: "any",
            sizes: "192x192",
            src: "manifest-icon-192.maskable.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "192x192",
            src: "manifest-icon-192.maskable.png",
            type: "image/png",
          },
          {
            purpose: "any",
            sizes: "512x512",
            src: "manifest-icon-512.maskable.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "512x512",
            src: "manifest-icon-512.maskable.png",
            type: "image/png",
          },
        ],
        name: "Testapplikation",
        short_name: "Testapp",
        start_url: ".",
        theme_color: "red",
      },
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["assets/**", "index.html", "manifest.webmanifest"],
      },
      runtimeCaching: [
        {
          handler: "NetworkFirst",
          // Cache GET requests to https://x-math.herokuapp.com/api/add/
          urlPattern: "https://x-math.herokuapp.com/api/add/",
        },
        {
          handler: "NetworkFirst",
          // Regular expression to cache GET requests to
          // “https://x-math.herokuapp.com/api/add/
          urlPattern:
            /https:\/\/x-math.herokuapp\.com\/api\/add\/[0-9a-f-]+\/?/,
        },
        {
          handler: "NetworkFirst",
          // Cache GET requests to https://x-math.herokuapp.com/api/sub/
          urlPattern: "https://x-math.herokuapp.com/api/sub/",
        },
        {
          handler: "NetworkFirst",
          // Regular expression to cache GET requests to
          // https://x-math.herokuapp.com/api/add/
          urlPattern:
            /https:\/\/x-math.herokuapp\.com\/api\/sub\/[0-9a-f-]+\/?/,
        },
        {
          handler: "NetworkFirst",
          // Cache GET requests to https://x-math.herokuapp.com/api/mul/
          urlPattern: "https://x-math.herokuapp.com/api/mul/",
        },
        {
          handler: "NetworkFirst",
          // Regular expression to cache GET requests to
          // https://x-math.herokuapp.com/api/mul/
          urlPattern:
            /https:\/\/x-math.herokuapp\.com\/api\/mul\/[0-9a-f-]+\/?/,
        },
        {
          handler: "NetworkFirst",
          // Cache GET requests to https://x-math.herokuapp.com/api/div/
          urlPattern: "https://x-math.herokuapp.com/api/div/",
        },
        {
          handler: "NetworkFirst",
          // Regular expression to cache GET requests to
          // https://x-math.herokuapp.com/api/div/
          urlPattern:
            /https:\/\/x-math.herokuapp\.com\/api\/div\/[0-9a-f-]+\/?/,
        },
      ],
    }),
    vue(),
  ],
});

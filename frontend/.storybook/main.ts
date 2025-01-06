
import { StorybookConfig } from '@storybook/sveltekit'

export const config: StorybookConfig = {
  "core":{
    "disableTelemetry": true,
  },
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|ts|svelte)"
  ],
  "addons": [
    "@storybook/addon-svelte-csf",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/sveltekit",
    "options": {}
  }
};

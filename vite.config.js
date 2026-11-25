import { defineConfig, mergeConfig } from 'vite';
import mdx from '@mdx-js/rollup';

import sharedConfig from '@olegpolyakov/frontend/viteconfig';

export default defineConfig(mergeConfig(
    sharedConfig({
        basePath: import.meta.dirname
    }), {
        plugins: [mdx()]
    })
);
/**
 * MIT License
 *
 * Copyright (c) 2023 Josef Barnes
 *
 * vite.config.ts: This file provides the configuration for vite
 */

/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [],
   test: {
      coverage: {
         provider: 'v8',
         all: true,
      },
      environment: 'jsdom'
   },
});

'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { projectId, dataset, apiVersion } from './src/sanity/env';
import { schema } from './src/sanity/schemas';

// Studio de edição embutido, acessível em /studio.
export default defineConfig({
  basePath: '/studio',
  title: 'WHP — Conteúdo',
  projectId: projectId || 'placeholder',
  dataset,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});

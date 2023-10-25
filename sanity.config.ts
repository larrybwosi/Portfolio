/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\larrydean\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { assist } from '@sanity/assist'

import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'

export default defineConfig({
  basePath: '/larrydean',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool(),
    assist(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})

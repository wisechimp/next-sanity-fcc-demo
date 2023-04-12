import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

const config = defineConfig({
  title: "Next FCC Sanity Demo",
  projectId: "a6fg8fxh",
  dataset: "production",
  apiVersion: "2023-04-12",
  basePath: "/studio",
  plugins: [deskTool()],
})

export default config

import { createClient } from "next-sanity"

const clientConfig = createClient({
  projectId: "a6fg8fxh",
  dataset: "production",
  apiVersion: "2023-04-12",
  useCdn: true,
})

export default clientConfig

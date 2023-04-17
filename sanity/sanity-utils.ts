import Project from "@/types/Project"
import { createClient, groq } from "next-sanity"

// Kapehe suggests rather than adding the project type where we are using the project in the
// map we can define the type here and it will feed down to wherever we use it in the, er,
// project (ho, ho!)
const getProjects = async (): Promise<Project[]> => {
  const client = createClient({
    projectId: "a6fg8fxh",
    dataset: "production",
    apiVersion: "2023-04-12",
    useCdn: true,
  })

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "imageAlt": image.alt,
      url,
      content
    }`
  )
}

export { getProjects }

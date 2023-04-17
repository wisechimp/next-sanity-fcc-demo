import Project from "@/types/Project"
import { groq } from "next-sanity"
import clientConfig from "./config/client-config"

// Kapehe suggests rather than adding the project type where we are using the project in the
// map we can define the type here and it will feed down to wherever we use it in the, er,
// project (ho, ho!)
const getProjects = async (): Promise<Project[]> => {
  return clientConfig.fetch(
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

const getProject = async (slug: string): Promise<Project> => {
  return clientConfig.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "imageAlt": image.alt,
      url,
      content
    }`,
    { slug: slug }
  )
}

export { getProjects, getProject }

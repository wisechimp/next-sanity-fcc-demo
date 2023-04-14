import { createClient, groq } from "next-sanity"

const getProjects = async () => {
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
      url,
      content
    }`
  )
}

export { getProjects }

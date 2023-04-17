import { PortableTextBlock } from "sanity"

type Project = {
  _id: string
  _createdAt: Date
  name: string
  slug: string
  image: string
  imageAlt: string
  url: string
  content: PortableTextBlock[]
}

export default Project

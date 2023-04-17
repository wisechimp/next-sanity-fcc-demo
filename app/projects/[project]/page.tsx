type ProjectProps = {
  params: { project: string }
}

import { getProject, getProjects } from "@/sanity/sanity-utils"

const Project = async ({ params }: ProjectProps) => {
  const slug = params.project
  const project = await getProject(slug)

  return <div>{project.name}</div>
}

export default Project

import { PortableText } from "@portabletext/react"
import Image from "next/image"

import { getProject } from "@/sanity/sanity-utils"

type ProjectProps = {
  params: { project: string }
}

const Project = async ({ params }: ProjectProps) => {
  const slug = params.project
  const project = await getProject(slug)
  const { name, url, content, image, imageAlt } = project

  return (
    <div className='max-w-3xl mx-auto py-20'>
      <header className='flex items-center justify-between'>
        <h1 className='bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold'>
          {name}
        </h1>
        <a
          className='bg-blue-900 rounded-lg text-blue-300 font-bold py-3 px-4 whitespace-nowrap hover:bg-blue-300 hover:text-blue-900 hover:border-blue-900 hover:border-2 transition'
          href={url}
          title='View Project'
          target='_blank'
        >
          View Project
        </a>
      </header>
      <div className='text-lg text-blue-900 mt-4'>
        <PortableText value={content} />
      </div>
      <Image
        src={image}
        alt={imageAlt}
        width={960}
        height={600}
        className='mt-10 border-2 border-blue-900 object-cover rounded-xl'
      />
    </div>
  )
}

export default Project

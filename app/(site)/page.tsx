import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"

const Home = async () => {
  const projects = await getProjects()
  console.log(JSON.stringify(projects))

  return (
    <div>
      <h1 className='text-7xl font-extrabold text-blue-950'>
        Hello I&apos;m{" "}
        <span className='bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
          Stuart!
        </span>
      </h1>
      <p className='mt-3 text-xl text-blue-900'>
        Hi everyone! Check out some of my projects below:
      </p>
      <h2 className='mt-24 font-bold text-blue-800 text-3xl'>My Projects</h2>
      <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <div
            key={project._id}
            className='border-2 border-blue-900 rounded-lg p-1'
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={750}
                height={300}
                className='object-cover rounded-lg border border-blue-800'
              />
            )}
            <div className='mt-2 font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
              {project.name}
            </div>
            <div className='bg-blue-900 text-blue-300 float-right rounded-lg m-2 p-2 w-1/2 text-center hover:scale-105 transition'>
              <Link href={`/projects/${project.slug}`}>View Test</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

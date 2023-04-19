import { PortableText } from "@portabletext/react"

import { getPage } from "@/sanity/sanity-utils"

type PageProps = {
  params: { page: string }
}

const Page = async ({ params }: PageProps) => {
  const slug = params.page
  const page = await getPage(slug)
  console.log(page)
  console.log(page.content)
  const { title, content } = page

  return (
    <div>
      <header className='flex items-center justify-between'>
        <h1 className='bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold'>
          {title}
        </h1>
      </header>
      <div className='text-lg text-blue-900 mt-10'>
        <PortableText value={content} />
      </div>
    </div>
  )
}

export default Page

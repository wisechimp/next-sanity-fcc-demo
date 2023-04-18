import Link from "next/link"
import "../globals.css"

export const metadata = {
  title: "My Next/Sanity Experiment",
  description:
    "My test project generated by create next app with data hosted on Sanity",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-blue-300 max-w-3xl mx-auto py-10'>
        <header>
          <Link href='/' className='text-lg text-blue-800 font-bold'>
            Home
          </Link>
        </header>
        <main className='py-20'>{children}</main>
      </body>
    </html>
  )
}

import Head from 'next/head'
import { Inter } from '@next/font/google'
import { GET } from '@/Utilites/webService'
import Header from '@/components/Header'
import News from '@/components/News/News'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ newsData }: any) {

  const {channel} = newsData?.rss

  return (
    <>
      <Head>
        <title>{channel?.title}</title>
        <meta name="description" content={channel?.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={channel?.image?.url} />
      </Head>

      <main className='font-montserrat relative'>
        <div className='h-full bg-gray-200'>
          <section className="container w-screen  p-8">

            <Header channel={channel} />
            <News newsList={newsData?.rss?.channel?.item}/>

          </section>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {

  let data = await GET('/api/news')
  let newsData = data.data

  return { props: { newsData } }
}


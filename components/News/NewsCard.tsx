import React from 'react'
import Image from 'next/image'
import { handleDateFormat } from '@/Utilites/dateFormatter'
import { useRouter } from 'next/router'
import { IoPersonOutline } from 'react-icons/io5'

function NewsCard({ news, index }: any) {

  const router = useRouter()

  return (
    <article className={`relative bg-white ${(index == 0) ? 'col-span-full' : ''} rounded-lg border shadow-lg max-w-xs md:max-w-none overflow-hidden`} key={index}>
      <Image
        className={`${(index == 0) ? 'h-96' : 'h-60'} object-fit`}
        src={news?.['media:content'].url}
        alt={news?.title}
        height={120}
        width={1110}
      />
      <div className="p-3 mb-16 mt-1">
        <div className='flex justify-between text-sm'>
          <span>{handleDateFormat(news?.pubDate)}</span>
          <div className='text-red-600 flex items-center '>
            <IoPersonOutline/>
            <span className='p-1'>{news?.['dc:creator']}</span>
          </div>
        </div>
        <h3 className="font-semibold text-base leading-6 text-stone-800 my-2">
          {news?.title}
        </h3>
      </div>
      <div className="absolute p-3 mb-2 bottom-0">
        <button className="rounded-md h-12 w-36 bg-stone-900 font-bold text-base text-white hover:bg-red-800"
          onClick={() => { router.push(news?.link) }}
        >
          Read More
        </button>
      </div>
    </article>
  )
}

export default NewsCard
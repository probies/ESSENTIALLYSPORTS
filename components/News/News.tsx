import React from 'react'
import NewsCard from './NewsCard'

function News({ newsList }: any) {

  return (
    <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
      {
        newsList?.map((news: any, index: number) => {
          return (
            <NewsCard news={news} key={index} />
          )
        })
      }
    </div>
  )
}

export default News
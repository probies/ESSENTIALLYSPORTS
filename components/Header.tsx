import React from 'react'
import Image from 'next/image'

function Header({ channel }: any) {
    return (
        <header>
            <div className='flex justify-center'>
                <Image
                    src={channel?.image?.url}
                    alt={channel?.title}
                    height={32}
                    width={32}
                />
                <h1 className='text-2xl md:text-4xl px-2 text-stone-800 font-semibold'>{channel?.title?.toUpperCase()}</h1>
            </div>
        </header>
    )
}

export default Header
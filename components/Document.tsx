import Image from 'next/image'
import React from 'react'

const Document = ({ h, w, label, image }: { h: number, w: number, label: string, image: any }) => {
    return (
        <div style={{ width: w, height: h }} className='relative flex flex-col items-center gap-2 transform duration-300 opacity-95 hover:opacity-100 cursor-pointer select-none group'>
            <div className='relative w-full h-full'>
                <Image
                    src={image}
                    alt={label}
                    width={w}
                    height={h}
                    objectFit='cover'
                    className='transition-all duration-100 group-hover:blur-[1.5px]'
                />
                <Image
                    src='/icons/delete.svg'
                    alt='Delete-Icon'
                    width={50}
                    height={50}
                    className='text-red-600 absolute bottom-[0] hover:scale-110 left-1/2 transform -translate-x-1/2 transition-all duration-100 opacity-0 group-hover:opacity-100 active:scale-100'
                />
            </div>
            <div className='text-white text-xl font-bold'>{label}</div>
        </div>
    )
}

export default Document

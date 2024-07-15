import Image from 'next/image'
import React from 'react'

const Document = ({ h, w, label, image }: { h: number, w: number, label: string, image: any }) => {
    return (
        <div style={{ width: w, height: h }} className='flex flex-col items-center gap-2 hover:scale-105 transform duration-300 opacity-95 hover:opacity-100 cursor-pointer active:scale-95 select-none'>
            <Image
                src={image}
                alt={label}
                width={w}
                height={h}
                objectFit='cover'
                className='inline-flex '
            />
            <div className='text-white text-xl font-bold '>{label}</div>
        </div>
    )
}

export default Document

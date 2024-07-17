import React from 'react'

const CreateDoc = () => {
    return (
        <div className='flex flex-col items-center gap-3 hover:scale-105 transform duration-300 cursor-pointer active:scale-95'>
            <div className='bg-white w-[130px] h-[165px] text-[5rem] items-center flex justify-center font-light '>+</div>
            <p className='text-white text-xl'>Blank Document</p>
        </div>
    )
}

export default CreateDoc
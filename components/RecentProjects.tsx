import React from 'react'

const RecentProjects = () => {
    return (
        <div className='flex gap-10'>
            <div className='flex flex-col items-center gap-3 hover:scale-105 transform duration-300 cursor-pointer active:scale-95'>
                <div className='bg-white w-[130px] h-[165px] items-center flex justify-center font-light select-none'>
                    <div className='bg-[#fc5656] rounded-[5px] w-[110px] h-[30px] text-white flex items-center justify-center'>Project #1</div>
                </div>
                <p className='text-white text-xl '>Recent Project #1</p>
            </div>

            <div className='flex flex-col items-center gap-3 hover:scale-105 transform duration-300 cursor-pointer active:scale-95'>
                <div className='bg-white w-[130px] h-[165px] items-center flex justify-center font-light select-none'>
                    <div className='bg-[#fc5656] rounded-[5px] w-[110px] h-[30px] text-white flex items-center justify-center'>Project #2</div>
                </div>
                <p className='text-white text-xl '>Recent Project #2</p>
            </div>

            <div className='flex flex-col items-center gap-3 hover:scale-105 transform duration-300 cursor-pointer active:scale-95'>
                <div className='bg-white w-[130px] h-[165px] items-center flex justify-center font-light select-none'>
                    <div className='bg-[#fc5656] rounded-[5px] w-[110px] h-[30px] text-white flex items-center justify-center'>Project #3</div>
                </div>
                <p className='text-white text-xl '>Recent Project #3</p>
            </div>
        </div>
    )
}

export default RecentProjects
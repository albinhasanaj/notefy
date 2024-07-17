import React from 'react'
import CreateDoc from './CreateDoc'

const ControlPanel = () => {
    return (
        <div className='flex gap-10'>
            <CreateDoc />
            <div className='flex flex-col items-center gap-3 hover:scale-105 transform duration-300 cursor-pointer active:scale-95'>
                <div className='bg-white w-[130px] h-[165px] items-center flex justify-center font-light select-none'>
                    <div className='bg-[#0A0324] rounded-[5px] w-[110px] h-[30px] text-white flex items-center justify-center'>Document ID</div>
                </div>
                <p className='text-white text-xl '>View Document</p>
            </div>
        </div>
    )
}

export default ControlPanel
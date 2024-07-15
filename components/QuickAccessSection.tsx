import React from 'react'
import ControlPanel from './ControlPanel'
import RecentProjects from './RecentProjects'

const QuickAccessSection = () => {
    return (
        <section className='h-[240px] bg-[#210456] w-full flex justify-center select-none'>
            <div className='flex items-center h-full max-w-[1440px] w-full gap-36  justify-center'>
                {/* CONTROL PANEL FOR CREATING AND VIEWING DOCUMENTS*/}
                <ControlPanel />
                {/* LINE SEPARATOR */}
                <div className='h-[80%] w-[1px] bg-white' />
                {/* DISPLAY FOR THE 3 MOST RECENTLY OPENED DOCUMENTS */}
                <RecentProjects />

            </div>
        </section>
    )
}

export default QuickAccessSection
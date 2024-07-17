import Document from '@/components/Document'
import React from 'react'
import { documentData } from '@/constants/documentData'
import QuickAccessSection from '@/components/QuickAccessSection'

const dashboard = () => {
    return (
        <div className='bg-[#0A0324] h-screen'>
            <div className='bg-[#0A0324] h-auto pt-20'>
                {/* QUCIK ACCESS SECTION CONTAINING CONTROL PANEL + RECENT PROJECTS*/}
                <QuickAccessSection />
                {/* WHERE ALL TOTAL DOCUMENTS ARE */}
                <div className='flex flex-wrap py-20 justify-start gap-24 mx-auto max-w-[1440px]'>
                    {documentData.map((doc, index) => (
                        <Document key={index} {...doc} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default dashboard
import React from 'react'
import { FaGoogle, FaGithub } from "react-icons/fa";


const AuthButton = ({ provider }: { provider: string }) => {

    return (
        <button className="bg-[#F4F2F0] text-black p-3 rounded-lg flex items-center gap-2 text-[16px]">
            {provider === 'Google' ? <FaGoogle size={20} /> : <FaGithub size={20} />} <span className='hidden md:block'>Continue with {provider}</span>
        </button>
    )
}

export default AuthButton
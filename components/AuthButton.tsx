"use client";
import React from 'react'
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signIn } from 'next-auth/react';


const AuthButton = ({ provider }: { provider: "Github" | "Google" }) => {

    const handleClick = async () => {
        try {
            await signIn(provider, { redirect: false, callbackUrl: "/" });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <button
            onClick={handleClick}
            className="bg-[#F4F2F0] text-black p-3 rounded-lg flex items-center gap-2 text-[16px]">
            {provider === 'Google' ? <FaGoogle size={20} /> : <FaGithub size={20} />} <span className='hidden md:block'>Continue with {provider}</span>
        </button>
    )
}

export default AuthButton
import AuthButton from '@/components/AuthButton'
import Link from 'next/link'
import React from 'react'

const LogIn = () => {
    return (
        <form className='w-[550px] h-[650px] lg:w-[650px] lg:h-[750px] rounded-3xl card__bg flex flex-col items-center justify-between py-20 text-white md:relative'>
            <h1 className="text-[40px] font-bold">Log In</h1>
            <div className="flex flex-col gap-2 w-full px-20 items-center font-bold text-[20px]">
                <div className="flex flex-col w-full">
                    {/* username or email for login */}
                    <label htmlFor="usernameoremail">Username or Email</label>
                    <input type="text" id="usernameoremail" className="rounded-lg p-2 text-[16px] text-black"
                        placeholder="example@gmail.com"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="rounded-lg p-2 text-[16px] text-black"
                        placeholder="********"
                    />
                </div>
                <div className="flex w-full mt-2 justify-around md:justify-between">
                    <AuthButton provider="Google" />
                    <AuthButton provider="GitHub" />
                </div>
            </div>
            <div className='w-[150px] h-[150px] bg-[#B915CC] absolute left-0 top-0 blur-[150px] -z-10' />
            <div className='w-[150px] h-[150px] bg-[#B915CC] absolute right-0 bottom-0 blur-[150px] -z-10' />
            <div className="flex flex-col w-full px-20">
                <button className="bg-[#F4F2F0] text-black py-2 rounded-lg lg:text-[20px] font-bold">Log In</button>
            </div>
            <Link href="/signup"
                className="text-[20px] font-bold"
            >
                Don't have an account? Sign up
            </Link>
        </form>
    )
}

export default LogIn
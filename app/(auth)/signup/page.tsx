"use client";
import AuthButton from '@/components/AuthButton'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import toast from 'react-hot-toast';

const SignUp = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }

            toast.success('Account created successfully');
        } catch (error) {
            toast.error(error.message);
            console.error(error);
        }

    };

    return (
        <form onSubmit={handleSubmit} className='w-[550px] h-[650px] lg:w-[650px] lg:h-[750px] rounded-3xl card__bg flex flex-col items-center justify-between py-20 text-white md:relative'>
            <h1 className="text-[40px] font-bold">Sign Up</h1>
            <div className="flex flex-col gap-2 w-full px-20 items-center font-bold text-[20px]">
                <div className="flex flex-col w-full">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="rounded-lg p-2 text-[16px] text-black"
                        placeholder="johndoe"
                        onChange={handleChange}
                        value={values.username}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="rounded-lg p-2 text-[16px] text-black"
                        placeholder="example@gmail.com"
                        onChange={handleChange}
                        value={values.email}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="rounded-lg p-2 text-[16px] text-black"
                        placeholder="********"
                        onChange={handleChange}
                        value={values.password}
                    />
                </div>
                <div className="flex w-full mt-2 justify-around md:justify-between">
                    <AuthButton provider="Google" />
                    <AuthButton provider="Github" />
                </div>
            </div>
            <div className='w-[150px] h-[150px] bg-[#B915CC] absolute left-0 top-0 blur-[150px] -z-10' />
            <div className='w-[150px] h-[150px] bg-[#B915CC] absolute right-0 bottom-0 blur-[150px] -z-10' />
            <div className="flex flex-col w-full px-20">
                <button className="bg-[#F4F2F0] text-black py-2 rounded-lg lg:text-[20px] font-bold">Log In</button>
            </div>
            <Link href="/login"
                className="text-[20px] font-bold"
            >
                Already have an account? Log in
            </Link>
        </form>
    )
}

export default SignUp
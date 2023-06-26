"use client"
import Image from 'next/image'
import React from 'react'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section>
       <div className='flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-14 md:flex-row md_space-x-4 md:text-left'>
        <div className='md:w-1/2 md:mt-2'>
            <Image className="rounded-full" src="/hero_sec_photo.jpeg" alt=""  width="250" height="250"/>
        </div>
        <div className='md:mt-2 md:w-3/4'>
            <h1 className="font-bold text-4xl mt-6 md:text-5xl md:mt-0">Hi, I&#39;m Randy</h1>
            <h2 className='font-semibold text-2xl mt-6'>I build things for the web.</h2>
            <p className='text-base font-thin mt-4 mb-6 md:text-2xl'>
                I&#39;m a {" "}
                <span className='font-semibold text-cyan-800'>Web Developer </span>
                based in Madrid, Spain. Currently I work on projects using latest technologies like frontend as server side ones.
            </p>
            <Link
                to='projects'
                className='text-neutral-100 font-semibold px-6 py-2 bg-cyan-800 rounded shadow hover:bg-cyan-600'
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >
                Projects
            </Link>
        </div>
       </div>

       <div className="flex flex-row justify-center">
            <Link
                to='about'
                className=''
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >
                <HiArrowDown size={35} className='animate-bounce'/>
            </Link>
       </div>
    </section>
  )
}

export default HeroSection
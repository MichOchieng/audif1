import React from 'react'
import Image from 'next/image'
import img from '../public/carImgs/heroImg.jpg'
import logo from '../public/audiLogo.png'
import { BiChevronDown } from 'react-icons/bi'
import { InView } from 'react-intersection-observer'
const Hero = () => {
    return (
        <div className='relative flex flex-col items-center justify-center bg-black'>
            {/* Bg img */}
            <div className='h-screen flex z-0'>
                <InView threshold={1} triggerOnce>
                    {({ inView, ref }) => (
                        <Image
                            ref={ref}
                            className={`object-cover h-[900px] ${(inView) ? 'opacity-100' : 'opacity-0'} transition-all ease-in-out duration-[1500ms]`}
                            src={img}
                            alt='bg'
                        />
                    )}
                </InView>
            </div>
            {/* Header */}
            <div className='absolute flex flex-col items-start justify-center top-0 w-full h-28 z-10 md:h-36'>
                <Image className='h-14 w-24 mx-5 md:h-24 md:w-44' src={logo} alt='logo' />
                <h1 className="mx-6 text-sm text-white font-formulaRegular md:text-lg md:mx-8">2026 Audi F1</h1>
            </div>
            {/* Swipe arrows */}
            <div className='absolute animate-bounce bottom-0 z-10 text-[50px] text-white/60 md:bottom-52'>
                <BiChevronDown className='animate-pulse -my-4' />
                <BiChevronDown className='animate-pulse -my-10' />
                <BiChevronDown className='animate-pulse -my-2' />
            </div>
        </div>
    )
}

export default Hero
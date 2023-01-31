import React from 'react'
import Image from 'next/image'
import img from '../public/carImgs/main.jpg'
import logo from '../public/audiLogo.png'
const Hero = () => {
    return (
        <div className='relative flex flex-col items-center justify-center'>
            {/* Bg img */}
            <div className='h-screen min-h-[800px] w-[400px] flex z-0'>
                <Image
                    className='object-cover'
                    src={img}
                    alt='bg'
                />
            </div>
            {/* Header */}
            <div className='absolute flex flex-col items-center justify-center top-0 border w-full h-72 z-10'>
                <Image className='h-24 w-44' src={logo} alt='logo'/>
                <h1 className="">Audi Enters Formula 1</h1>
            </div>
        </div>
    )
}

export default Hero
import React from 'react'
import Image from 'next/image'
import img from '../public/carImgs/main.jpg'
const Hero = () => {
    return (
        <div>
            {/* Bg img */}
            <div className='h-screen w-[400px] flex z-0'>
                <Image
                    className='object-cover'
                    src={img}
                    alt='bg'
                />
            </div>
            {/* Header */}
            <div>
                
            </div>
        </div>
    )
}

export default Hero
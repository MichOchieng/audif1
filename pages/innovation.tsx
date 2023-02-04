import { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import cardData from '@/components/cardData'
import React from 'react'
import { Tile } from '@/components'
import tileImg from '../public/carImgs/A224479_large.jpg'

const innovation: NextPage = () => {
    return (
        <main className='page-container'>
            {/* Header img */}
            <div className="h-72 relative">
                <Image
                    className='object-cover h-full z-0'
                    src={cardData[0].bg}
                    alt='bg'
                />
            </div>
            {/* header */}
            <div className="p-5 text-center">
                <h1 className="font-formulaWide">Actively Shaping Formula 1&apos;s Transformation</h1>
            </div>
            {/* Block 1 */}
            <div className="flex flex-col md:flex-row w-full p-5 my-5">
                {/* Tile */}
                <Tile img={tileImg}/>
                {/* Text */}
                <p className="font-formulaRegular my-5">
                    In view of the major technological leaps that the series is making towards sustainability in 2026, we can speak of a new Formula 1. Formula 1 is transforming, and Audi wants to actively support this journey. A close link between our Formula 1 project and AUDI AG&apos;s Technical Development department will enable synergies.
                </p>
            </div>
            {/* block 2 */}
            <div className="my-5 p-5">
                {/* Text */}
                <p className="font-formulaRegular">
                    From 2026, the electric power output for the power units, consisting of an electric motor, battery, control electronics, and a combustion engine, will increase sharply compared to today&apos;s Formula 1 drive systems. The electric motor will then be nearly as powerful as the combustion engine, which has an output of about 400 kW (544 hp). The highly efficient 1.6-liter turbo engines run on advanced sustainable fuel, also a prerequisite for Audi&aposs entry into the series.
                </p>
            </div>
            {/* block 3 */}
            <div className="p-10 my-5">
                {/* Mosaic */}
                <div className=''>

                </div>
            </div>
        </main>
    )
}

export default innovation
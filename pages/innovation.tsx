import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { Tile } from '@/components'
import logo from '../public/audiLogo.png'
import headerImg from '../public/carImgs/card0.jpg'
import tileImg from '../public/carImgs/A224479_large.jpg'
import Head from 'next/head'
import mosaicData from '@/components/mosaicData'
import { InView } from 'react-intersection-observer'

export default function Innovation() {
    return (
        <>
            <Head>
                <title>Audi F1 - Innovation</title>
                <meta name="description" content="Sauber to become Audi works F1 team from 2026" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="android-chrome" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
                <link rel="android-chrome" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </Head>
            <main className='page-container'>
                {/* Header img */}
                <div className="h-72 relative md:h-96 w-screen">
                    <Image
                        className='object-cover h-full z-0'
                        src={headerImg}
                        alt='bg'
                    />
                    <InView threshold={0} >
                        {({ inView, ref }) => (
                            <div ref={ref} className={`bg-black/30 absolute top-0 h-full w-full flex items-center justify-center ${inView ? 'opacity-100' : 'opacity-0'} transition-all delay-100 duration-1000`}>
                                <div className={`overflow-hidden relative h-10 w-full flex items-center justify-center`}>
                                    <h1 className={`font-formulaWide absolute ${inView ? 'mt-0' : 'mt-14'} delay-500 duration-1000 md:text-xl`}>Innovation</h1>
                                </div>
                            </div>
                        )}
                    </InView>
                </div>
                {/* header */}
                <div className="p-5 text-center md:my-5">
                    <h1 className="font-formulaWide md:text-xl">Actively Shaping Formula 1&apos;s Transformation</h1>
                </div>
                {/* Block 1 */}
                <div className="flex flex-col items-center md:flex-row w-full p-5 my-3">
                    {/* Tile */}
                    <Tile img={tileImg} />
                    {/* Text */}
                    <InView threshold={0.25} >
                        {({ inView, ref }) => (
                            <div ref={ref} className="mx-auto my-5 md:w-1/2 md:h-96 h-72 overflow-hidden relative">
                                <p className={`font-formulaRegular w-full md:text-lg whitespace-wrap absolute ${inView ? 'right-0 opacity-100' : 'right-[400px] opacity-0'} transition-all duration-1000`}>
                                    In view of the major technological leaps that the series is making towards sustainability in 2026, we can speak of a new Formula 1. Formula 1 is transforming, and Audi wants to actively support this journey. A close link between our Formula 1 project and AUDI AG&apos;s Technical Development department will enable synergies.
                                </p>
                            </div>
                        )}
                    </InView>
                </div>
                {/* block 2 */}
                <div className="my-3 p-5">
                    {/* Text */}
                    <p className="font-formulaRegular">
                        From 2026, the electric power output for the power units, consisting of an electric motor, battery, control electronics, and a combustion engine, will increase sharply compared to today&apos;s Formula 1 drive systems. The electric motor will then be nearly as powerful as the combustion engine, which has an output of about 400 kW (544 hp). The highly efficient 1.6-liter turbo engines run on advanced sustainable fuel, also a prerequisite for Audi&apos;s entry into the series.
                    </p>
                </div>
                {/* block 3 */}
                <div className="p-4 my-3 bg-[#1E1E1E] rounded-md">
                    {/* Mosaic */}
                    <div className='grid grid-flow-row-dense drop-shadow-md'>
                        {
                            mosaicData.map((img, i) => (
                                <div key={i} className='h-72 w-80 flex items-center'>
                                    <Image className='object-cover' src={img.bg} alt={'img'} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-24 h-12'>
                    <Image className='object-contain' src={logo} alt='logo' />
                </div>
            </main>
        </>
    )
}
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import headerImg from '../public/carImgs/card1.jpg'
import logo from '../public/audiLogo.png'
import rearImg from '../public/carImgs/A224465_large.jpg'
import { InView } from 'react-intersection-observer'
import { Tile } from '@/components'
import Link from 'next/link'

export default function Sustainability() {
    return (
        <>
            <Head>
                <title>Audi F1 - Sustainability</title>
                <meta name="description" content="Audi is tackling its most challenging ambition to date: combining sustainability, innovation, and maximum performance in motorsports." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon/android-chrome-512x512.png" />
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
                    <InView threshold={0} triggerOnce>
                        {({ inView, ref }) => (
                            <div ref={ref} className={`bg-black/30 absolute top-0 h-full w-full flex items-center justify-center ${inView ? 'opacity-100' : 'opacity-0'} transition-all delay-100 duration-1000`}>
                                <div className={`overflow-hidden relative h-10 w-full flex items-center justify-center`}>
                                    <h1 className={`font-formulaWide absolute ${inView ? 'mt-0' : 'mt-14'} delay-500 duration-1000 md:text-xl`}>Sustainability</h1>
                                </div>
                            </div>
                        )}
                    </InView>
                    <Link className='absolute m-2 md:m-5 hover:scale-105 smoothed top-0 left-0 h-10 w-24 md:h-16 md:w-32 flex items-center' href={'/'}>
                        <Image className='object-contain' src={logo} alt='logo' />
                    </Link>
                </div>
                {/* header */}
                <div className="p-5 text-center md:my-5">
                    <h1 className="font-formulaWide md:text-xl lg:text-3xl md:my-5">Motorsport is an integral part of Audi&apos;s DNA</h1>
                </div>
                {/* Block 1 */}
                <div className="flex flex-col items-center lg:flex-row-reverse w-full p-5 md:p-0 lg:mb-24 ">
                    {/* Tile */}
                    <div className='flex flex-col items-center justify-center w-full lg:w-1/2 md:h-96 h-72 border-t-8 border-r-8 border-[#D81919] rounded-tr-3xl rounded-bl-3xl text-white overflow-hidden z-10 smoothed lg:ml-5'>
                        <video loop autoPlay playsInline muted className='h-full object-cover' src="https://d2uism5v0u1o2x.cloudfront.net/audif1.mp4"/>
                    </div>
                    {/* Text */}
                    <InView threshold={0.25} triggerOnce>
                        {({ inView, ref }) => (
                            <div ref={ref} className="flex items-center mx-auto w-full lg:w-1/2 md:h-80 h-96 overflow-hidden relative min-h-fit">
                                <p className={`font-formulaRegular w-full p-text md:text-lg md:text-center lg:text-start whitespace-wrap absolute ${inView ? 'right-0 opacity-100' : 'right-[400px] opacity-0'} transition-all duration-1000`}>
                                The key to getting involved is the world&apos;s most popular racing series is the clear plan to become more sustainable and cost-efficient. The new technical rules, which will apply from 2026, focus on greater electrification and advanced sustainable fuel. In addition to the existing cap on costs for teams, a cost cap for power unit manufacturers will be introduced in 2023. In addition, Formula 1 has set itself the ambitious goal of being a carbon-neutral racing series by 2030.
                                </p>
                            </div>
                        )}
                    </InView>
                </div>

                {/* block 2 */}
                <div className="flex flex-col items-center md:flex-row w-full p-5">
                    {/* Tile */}
                    <Tile img={rearImg} />
                    {/* Text */}
                    <InView threshold={0.25} triggerOnce>
                        {({ inView, ref }) => (
                            <div ref={ref} className="flex items-center mx-auto w-full my-5 md:w-1/2 md:h-96 h-80 overflow-hidden relative min-h-fit">
                                <p className={`font-formulaRegular w-full p-text whitespace-wrap absolute ${inView ? 'right-0 opacity-100' : 'right-[400px] opacity-0'} transition-all duration-1000`}>
                                    Globally recognized, highly emotional, and technologically advanced, that&apos;s how Formula 1 has met Audi&apos;s exact requirements. The series holds races in all relevant markets of the brand. As a spectacular platform for the most demanding electrified racing cars in the world, it is of particular interest to car manufacturers. Audi is taking on the challenge of proving its “Vorsprung durch Technik” in this competitive environment.
                                </p>
                            </div>
                        )}
                    </InView>
                </div>
                <div className='w-24 h-12'>
                    <Image className='object-contain' src={logo} alt='logo' />
                </div>
            </main>
        </>
    )
}


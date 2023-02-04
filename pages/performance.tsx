import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import headerImg from '../public/carImgs/card1.jpg'
import logo from '../public/audiLogo.png'
import { InView } from 'react-intersection-observer'
import { Tile } from '@/components'

export default function Performance() {
    return (
        <>
            <Head>
                <title>Audi F1 - Performance</title>
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
                    <InView threshold={0} triggerOnce>
                        {({ inView, ref }) => (
                            <div ref={ref} className={`bg-black/30 absolute top-0 h-full w-full flex items-center justify-center ${inView ? 'opacity-100' : 'opacity-0'} transition-all delay-100 duration-1000`}>
                                <div className={`overflow-hidden relative h-10 w-full flex items-center justify-center`}>
                                    <h1 className={`font-formulaWide absolute ${inView ? 'mt-0' : 'mt-14'} delay-500 duration-1000 md:text-xl`}>Performance</h1>
                                </div>
                            </div>
                        )}
                    </InView>
                </div>
                {/* header */}
                <div className="p-5 text-center md:my-5">
                    <h1 className="font-formulaWide md:text-xl">Motorsport is an integral part of Audi&apos;s DNA</h1>
                </div>
                {/* Block 1 */}
                <div className="flex flex-col items-center md:flex-row w-full p-5">
                    {/* Tile */}
                    <div className='flex flex-col items-center justify-center w-full md:h-96 h-72 border-t-8 border-r-8 border-[#D81919] rounded-tr-3xl rounded-bl-3xl text-white overflow-hidden z-10 smoothed'>
                        <Image
                            className='object-cover h-full z-0'
                            src={headerImg}
                            alt='bg'
                        />
                    </div>

                </div>
                {/* block 2 */}
                <div className="p-5">
                    {/* Text */}
                    <p className="font-formulaRegular text-center">
                        The key to getting involved is the world&apos;s most popular racing series is the clear plan to become more sustainable and cost-efficient. The new technical rules, which will apply from 2026, focus on greater electrification and advanced sustainable fuel. In addition to the existing cap on costs for teams, a cost cap for power unit manufacturers will be introduced in 2023. In addition, Formula 1 has set itself the ambitious goal of being a carbon-neutral racing series by 2030.
                    </p>
                </div>
                {/* block 3 */}
                <div className="flex flex-col items-center md:flex-row w-full p-5">
                    {/* Tile */}
                    <Tile img={headerImg} />
                    {/* Text */}
                    <InView threshold={0.25} triggerOnce>
                        {({ inView, ref }) => (
                            <div ref={ref} className="mx-auto w-full my-5 md:w-1/2 md:h-96 h-60 overflow-hidden relative">
                                <p className={`font-formulaRegular w-full md:text-lg whitespace-wrap absolute ${inView ? 'right-0 opacity-100' : 'right-[400px] opacity-0'} transition-all duration-1000`}>
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


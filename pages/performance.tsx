import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import headerImg from '../public/carImgs/card2.jpg'
import logo from '../public/audiLogo.png'
import trackImg from '../public/carImgs/A226887_large.jpg'
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
                    <h1 className="font-formulaWide md:text-xl">Actively Shaping Formula 1&apos;s Transformation</h1>
                </div>
                {/* Block 1 */}
                <div className="flex flex-col items-center md:flex-row w-full p-5 md:p-0 md:mb-10">
                    {/* Tile */}
                    <Tile img={headerImg} />
                    {/* Text */}
                    <InView threshold={0.25} triggerOnce>
                        {({ inView, ref }) => (
                            <div ref={ref} className="mx-auto w-full my-5 md:w-1/2 md:h-96 h-60 overflow-hidden relative">
                                <p className={`font-formulaRegular w-full md:text-[15px] whitespace-wrap absolute ${inView ? 'right-0 opacity-100' : 'right-[400px] opacity-0'} transition-all duration-1000`}>
                                    The power unit will be built at Audi Sport&apos;s state-of-the-art Competence Center Motorsport in Neuburg an der Donau, not far from AUDI AG&apos;s company headquarters in Ingolstadt. “For the development and manufacture of the Formula 1 power train, we will build on the valuable expertise of our motorsport employees, continue to invest in our motorsports center, and also recruit highly specialized professionals,” says Audi Sport Managing Director Julius Seebach, who organized the entry into Formula 1 as part of Audi&apos;s realignment of motorsport.
                                </p>
                            </div>
                        )}
                    </InView>
                </div>
                {/* Tile */}
                <div className='flex flex-col items-center justify-center w-full md:h-96 h-72 border-t-8 border-r-8 border-[#D81919] rounded-tr-3xl rounded-bl-3xl text-white overflow-hidden z-10 smoothed'>
                    <Image
                        className='object-cover h-full z-0'
                        src={trackImg}
                        alt='bg'
                    />
                </div>
                {/* block 2 */}
                <div className="p-5 my-10">
                    {/* Text */}
                    <p className="font-formulaRegular">
                        In Neuburg there are already test benches for F1 engine testing as well as for electric motor and battery testing. Additional necessary preparations are currently being made in terms of personnel, buildings, and technical infrastructure, with everything essential to be in place by the end of the year. A separate company was recently founded for the power unit project as a wholly owned subsidiary of Audi Sport. Adam Baker will take over the management of the company and thus the Formula 1 project as CEO. The trained engineer has held various senior positions for manufacturers and teams in motorsport. Before joining Audi in 2021, he worked for the FIA for three years.
                    </p>
                </div>
                {/* block 3 */}
                {/* Tile */}
                <div className='flex flex-col items-center justify-center w-full md:h-96 h-72 border-t-8 border-r-8 border-[#D81919] rounded-tr-3xl rounded-bl-3xl text-white overflow-hidden z-10 smoothed'>
                    <Image
                        className='object-cover h-full z-0'
                        src={trackImg}
                        alt='bg'
                    />
                </div>
                <div className='w-24 h-12 mt-10'>
                    <Image className='object-contain' src={logo} alt='logo' />
                </div>
            </main>

        </>
    )
}


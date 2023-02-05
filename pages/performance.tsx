import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import headerImg from '../public/carImgs/card2.jpg'
import logo from '../public/audiLogo.png'
import trackImg from '../public/carImgs/A226887_large.jpg'
import { InView } from 'react-intersection-observer'
import { Tile } from '@/components'
import Link from 'next/link'

export default function Performance() {
    return (
        <>
            <Head>
                <title>Audi F1 - Performance</title>
                <meta name="description" content="The power unit will be developed at the Neuburg an der Donau site. In the future, the Formula 1 program will spearhead the factorys motorsports activities." />
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
                                    <h1 className={`font-formulaWide absolute ${inView ? 'mt-0' : 'mt-14'} delay-500 duration-1000 md:text-xl`}>Performance</h1>
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
                    <h1 className="font-formulaWide md:text-xl lg:text-3xl md:my-5">Actively Shaping Formula 1&apos;s Transformation</h1>
                </div>
                {/* Block 1 */}
                <div className="flex flex-col items-center md:flex-row w-full p-5 md:p-0 md:mb-10">
                    {/* Tile */}
                    <div className='flex flex-col items-center justify-center md:my-5 w-full md:w-1/2 md:h-96 h-72 border-t-8 border-r-8 border-[#D81919] rounded-tr-3xl rounded-bl-3xl text-white overflow-hidden z-10 smoothed md:mr-5'>
                        <video loop autoPlay playsInline muted className='h-full object-cover' src="https://d2uism5v0u1o2x.cloudfront.net/mercPU.mp4" />
                    </div>
                    {/* Text */}
                    <InView threshold={0.25} triggerOnce>
                        {({ inView, ref }) => (
                            <div ref={ref} className="flex items-center mx-auto w-full my-5 md:w-1/2 md:h-96 h-60 overflow-hidden relative">
                                <p className={`font-formulaRegular w-full p-text whitespace-wrap absolute ${inView ? 'right-0 opacity-100' : 'right-[400px] opacity-0'} transition-all duration-1000`}>
                                    The power unit will be built at Audi Sport&apos;s state-of-the-art Competence Center Motorsport in Neuburg an der Donau, not far from AUDI AG&apos;s company headquarters in Ingolstadt. “For the development and manufacture of the Formula 1 power train, we will build on the valuable expertise of our motorsport employees, continue to invest in our motorsports center, and also recruit highly specialized professionals,” says Audi Sport Managing Director Julius Seebach, who organized the entry into Formula 1 as part of Audi&apos;s realignment of motorsport.
                                </p>
                            </div>
                        )}
                    </InView>
                </div>
                {/* block 2 */}
                <div className="flex flex-col items-center md:flex-row w-full p-5 md:p-0 md:mb-10">
                    {/* Text */}
                    <InView threshold={0.25} triggerOnce>
                        {({ inView, ref }) => (
                            <div ref={ref} className="flex items-center mx-auto w-full my-5 md:w-1/2 md:h-96 h-60 overflow-hidden relative">
                                <p className={`font-formulaRegular w-full p-text whitespace-wrap absolute ${inView ? 'left-0 opacity-100' : 'left-[400px] opacity-0'} transition-all duration-1000`}>
                                    In Neuburg there are already test benches for F1 engine testing as well as for electric motor and battery testing. Additional necessary preparations are currently being made in terms of personnel, buildings, and technical infrastructure, with everything essential to be in place by the end of the year. A separate company was recently founded for the power unit project as a wholly owned subsidiary of Audi Sport.
                                </p>
                            </div>
                        )}
                    </InView>
                    <div className='flex flex-col items-center justify-center md:my-5 w-full md:w-1/2 md:h-96 h-72 border-t-8 border-r-8 border-[#D81919] rounded-tr-3xl rounded-bl-3xl text-white overflow-hidden z-10 smoothed md:mr-5'>
                        <video loop autoPlay playsInline muted className='h-full object-cover' src="https://d2uism5v0u1o2x.cloudfront.net/mguclip7.mp4" />
                    </div>
                </div>
                {/* block 3 */}
                <div className="flex items-center w-full p-5 md:p-0">
                    <p className={`font-formulaRegular w-full p-text md:text-center h-full`}>
                        The Competence Center Motorsport at the Audi Neuburg facility is being expanded for the Formula 1 project. In a new building measuring around 3,000 square meters, new test benches for the development of the power unit will be installed in particular. The construction work on the extension began this week. Audi will compete in the top class of motorsport from 2026 with the power unit manufactured in Neuburg.
                    </p>
                </div>
                {/* block 4 */}
                {/* Tile */}
                <div className="p-5 md:-0">
                    <div className='flex flex-col items-center md:my-5 justify-center w-full md:h-96 h-72 border-t-8 border-r-8 border-[#D81919] rounded-tr-3xl rounded-bl-3xl text-white overflow-hidden z-10 smoothed'>
                        <Image
                            className='object-cover h-full z-0'
                            src={trackImg}
                            alt='bg'
                        />
                    </div>
                </div>
                <div className='w-24 h-12 mt-10'>
                    <Image className='object-contain' src={logo} alt='logo' />
                </div>
            </main>

        </>
    )
}


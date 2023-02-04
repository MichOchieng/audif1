import React from 'react'
import Image from 'next/image'
import img from '../public/carImgs/A224487_large.jpg'
import logo from '../public/audiLogo.png'
import { InView } from 'react-intersection-observer'
import { FaDhl, FaAws, FaAirbnb, FaCcVisa, FaDigitalOcean, FaNeos, FaShopify } from 'react-icons/fa'
import Marquee from "react-fast-marquee";

interface FadeProps {
  children: JSX.Element
}

const FadeIn = ({ children }: FadeProps) => (
  <InView threshold={0.15} triggerOnce>
    {({ inView, ref }) => (
      <div
        ref={ref}
        className={`overflow-hidden flex justify-start items-start ${(inView) ? 'opacity-100 ' : 'opacity-0 '} transition-all ease-in-out duration-[2000ms]`}
      >
        {children}
      </div>
    )}
  </InView>
)
const Footer = () => {
  return (
    <div className='h-full w-full z-0 rounded-b-5xl bg-[#161616] relative flex flex-col items-center justify-start '>
      {/* Header */}
      {/* Sub text */}
      <FadeIn>
        <span className="text-white flex flex-col items-start w-full p-5 h-60">
          <h1 className="text-base md:text-2xl font-formulaWide my-2 md:my-4">Audi Enters Formula 1 </h1>
          <h2 className="text-xs md:text-lg font-formulaRegular my-2">Audi enters the premier class of motorsport. From 2026, the premium brand will compete in the FIA Formula 1 World Championship with a specially developed power unit.</h2>
        </span>
      </FadeIn>
      {/* img */}
      <div className="h-60 md:h-80 w-full flex items-center justify-center relative overflow-hidden">
        <Image
          className={`object-cover`}
          src={img}
          alt='bg'
        />
      </div>
      <div className="overflow-hidden h-fit mb-5 text-white flex flex-col items-start w-full p-5">
        <h1 className="text-xs md:text-lg font-formulaRegular my-2">The project will be based at Audi Sport&apos;s facility in Neuburg near Ingolstadt. This is the first time in more than a decade that a Formula 1 power train will be built in Germany.</h1>
        <h2 className="text-xs md:text-lg font-formulaRegular my-2">The key to getting involved is the world&apos;s most popular racing series is the clear plan to become more sustainable and cost-efficient. The new technical rules, which will apply from 2026, focus on greater electrification and advanced sustainable fuel. In addition to the existing cap on costs for teams, a cost cap for power unit manufacturers will be introduced in 2023. In addition, Formula 1 has set itself the ambitious goal of being a carbon-neutral racing series by 2030.</h2>
      </div>
      {/* Sponsors grid */}
      <div className="text-white flex flex-col items-start w-full">
        <FadeIn>
          <h1 className="text-base font-formulaWide md:my-2 p-5">Our Sponsors</h1>
        </FadeIn>
        <Marquee pauseOnHover speed={25} gradient={false} className='h-24 text-4xl md:h-40 md:text-7xl'>
          <FaDhl className='mx-10' />
          <FaAws className='mx-10' />
          <FaAirbnb className='mx-10' />
          <FaCcVisa className='mx-10' />
          <FaDigitalOcean className='mx-10' />
          <FaNeos className='mx-10' />
          <FaShopify className='mx-10' />
        </Marquee>
      </div>
    </div>
  )
}

export default Footer
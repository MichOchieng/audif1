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
  <InView threshold={0.15}>
    {({ inView, ref }) => (
      <div
        ref={ref}
        className={`overflow-hidden flex justify-start items-start ${(inView) ? 'opacity-100 ' : 'opacity-0 '} transition-all ease-in-out duration-[1500ms]`}
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
          <h1 className="text-lg font-formulaWide my-2">Audi Enters Formula 1 </h1>
          <h2 className="text-base font-formulaRegular my-2">Audi enters the premier class of motorsport. From 2026, the premium brand will compete in the FIA Formula 1 World Championship with a specially developed power unit.</h2>
        </span>
      </FadeIn>
      {/* img */}
      <div className="h-fit w-full">
        <Image
          className={`object-cover`}
          src={img}
          alt='bg'
        />
      </div>
      {/* Sponsors grid */}
      <div className="text-white flex flex-col items-start w-full">
        <FadeIn>
          <h1 className="text-lg font-formulaWide my-2 p-5">Our Sponsors</h1>
        </FadeIn>
        <Marquee pauseOnHover speed={25} gradient={false} className=' h-40 text-7xl'>
          <FaDhl className='mx-10' />
          <FaAws className='mx-10' />
          <FaAirbnb className='mx-10' />
          <FaCcVisa className='mx-10' />
          <FaDigitalOcean className='mx-10' />
          <FaNeos className='mx-10' />
          <FaShopify className='mx-10' />
        </Marquee>
      </div>
      {/* <div className="h-24 w-32 flex items-end">
        <Image className='object-cover' src={logo} alt="logo"/>
      </div> */}
    </div>
  )
}

export default Footer
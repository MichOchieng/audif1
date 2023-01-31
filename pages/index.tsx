import Head from 'next/head'
import Image from 'next/image'
import { Card, Hero } from '@/components'
import cardData from '@/components/cardData'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import logo from '../public/audiLogo.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Audi F1 Team</title>
        <meta name="description" content="Sauber to become Audi works F1 team from 2026" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <Parallax pages={3}>
          <ParallaxLayer offset={0} sticky={{ start:0, end:0.2 }} speed={0.5}>
            <Hero />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 1, end: 2.5 }} speed={0.5} >
            <Card h1={cardData[0].h1} h2={cardData[0].h2} bg={cardData[0].bg} />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 1.54, end: 2.5 }} speed={0.5} >
            <Card h1={cardData[1].h1} h2={cardData[1].h2} bg={cardData[1].bg} />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 2.08, end: 2.5 }} speed={0.5} >
            <Card h1={cardData[2].h1} h2={cardData[2].h2} bg={cardData[2].bg} />
            <div className='h-[360px] -mt-5 bg-[#161616] rounded-b-3xl relative flex flex-row items-end justify-center'>
            <Image className='bottom-0 h-24 w-44' src={logo} alt='logo'/>
            </div>
          </ParallaxLayer>
        </Parallax>
      </main>
    </>
  )
}

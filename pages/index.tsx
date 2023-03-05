import Head from 'next/head'
import Image from 'next/image'
import { Card, Footer, Hero } from '@/components'
import cardData from '@/components/cardData'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Home() {
  return (
    <>
      <Head>
        <title>Audi F1 Team</title>
        <meta name="description" content="Audi enters the premier class of motorsport" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/android-chrome-512x512.png" />
        <link rel="android-chrome" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="android-chrome" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <main className=''>
        <Parallax pages={5}>
          <ParallaxLayer offset={0} sticky={{ start: 0, end: 0.2 }} speed={0.5}>
            <Hero />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 1, end: 4 }} speed={0.5} >
            <Card link='/innovation' h1={cardData[0].h1} h2={cardData[0].h2} bg={cardData[0].bg} />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 2.1, end: 4 }} speed={0.5} >
            <Card link='/sustainability' h1={cardData[1].h1} h2={cardData[1].h2} bg={cardData[1].bg} />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 3.2, end: 4 }} speed={0.5} >
            <Card link='/performance' h1={cardData[2].h1} h2={cardData[2].h2} bg={cardData[2].bg} />
          </ParallaxLayer>
          {/* <ParallaxLayer offset={5} speed={0.5} >
            <Footer />
          </ParallaxLayer> */}
        </Parallax>
      </main>
    </>
  )
}

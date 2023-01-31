import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Card } from '@/components'
import cardData from '@/components/cardData'

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
       <Card h1={cardData[0].h1} h2={cardData[0].h2} bg={cardData[0].bg}/>
      </main>
    </>
  )
}

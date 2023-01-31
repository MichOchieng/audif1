import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Button } from '.'

interface CardProps {
  h1: string,
  h2: string,
  bg: StaticImageData
}

const Card = ( props:CardProps ) => {
  return (
    <div className='card relative'>
      <Image
        className='absolute z-0 rounded-tr-2xl rounded-bl-3xl'
        src={props.bg}
        alt='bg'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      />
      <div className="w-full z-10">
        <h1 className="card-h1">{props.h1}</h1>
        <h2 className="card-h2">{props.h2}</h2>
      </div>
      <div className="z-10">
        <Button text='Details'/>
      </div>
    </div>
  )
}

export default Card
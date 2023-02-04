import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface TileProps {
  img: StaticImageData
}

const Tile = (props: TileProps) => {
  return (
    <div className='tile'>
      <Image
        className='object-cover h-full z-0'
        src={props.img}
        alt='bg'
      />
    </div>
  )
}

export default Tile
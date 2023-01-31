import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Button } from '.'
import { InView } from 'react-intersection-observer'

interface CardProps {
    h1: string,
    h2: string,
    bg: StaticImageData
}

interface FadeProps {
    children: JSX.Element
}

const FadeRight = ({children}: FadeProps) => (
    <InView threshold={0.55} triggerOnce>
        {({ inView, ref }) => (
            <div
                ref={ref}
                className={`overflow-hidden ${(inView) ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0'} transition-all ease-in-out duration-[1500ms]`}
            >
                {children}
            </div>
        )}
    </InView>
)

const OpenDown = ({children}: FadeProps) => (
    <InView threshold={0.55} triggerOnce>
        {({ inView, ref }) => (
            <div
                ref={ref}
                className={`overflow-hidden ${(inView) ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'} transition-all ease-in-out duration-1000`}
            >
                {children}
            </div>
        )}
    </InView>
)

const Card = (props: CardProps) => {
    return (
        <div className='card relative'>
            <Image
                className='absolute z-0 rounded-tr-2xl rounded-bl-3xl object-cover top-0 h-full'
                src={props.bg}
                alt='bg'
            />
            <div className="w-full z-10">
                <FadeRight><h1 className="card-h1">{props.h1}</h1></FadeRight>
                <OpenDown><h2 className="card-h2">{props.h2}</h2></OpenDown>
            </div>
            <div className="z-10 pb-3">
                <Button text='Details' />
            </div>
        </div>
    )
}

export default Card
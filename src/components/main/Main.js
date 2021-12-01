import React from 'react'
import ZodiacCard from '../../zodiac/ZodiacCard'
import { zodiac } from '../../data'

export default function Main() {
    return (
        <div>
            {zodiac.map(sign => <ZodiacCard key={sign.name} name={sign.name} date={sign.date} />)}
        </div>
    )
}

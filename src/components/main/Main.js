import React from 'react'
import ZodiacCard from '../../zodiac/ZodiacCard'
import { zodiac } from '../../data'
import './Main.css'
import background from '../../../src/nebula.jpeg'

export default function Main() {
    return (
        <main style={{ backgroundImage: `url(${background })`}}>
            {zodiac.map(sign => <ZodiacCard key={sign.name} name={sign.name} dates={sign.dates} />)}

        </main>
    )
}

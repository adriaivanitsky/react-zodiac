import React from 'react'
import ZodiacCard from '../../zodiac/ZodiacCard'
import { zodiac } from '../../data'
import './Main.css'

export default function Main() {
    return (
        <main>
            {zodiac.map(sign => <ZodiacCard key={sign.name} name={sign.name} date={sign.date} />)}
        </main>
    )
}

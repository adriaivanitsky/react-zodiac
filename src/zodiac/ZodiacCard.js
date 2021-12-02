import React from 'react'

export default function ZodiacCard(props) {
    return (
        <div className="zodiac-card">
            <img src={`${process.env.PUBLIC_URL}/zodiac_images/${props.name}.png`} alt={`${props.name}`} />
            <p className="name">{props.name}</p>
            <p>{props.dates}</p>
        </div>
    )
}

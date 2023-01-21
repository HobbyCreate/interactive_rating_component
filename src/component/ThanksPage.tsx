import React from 'react'
import Thanks from '../assets/images/illustration-thank-you.svg'
import './ThanksPage.css'

interface score {
    score: number
}

function ThanksPage({score}: score) {
    return (
        <div className='thanks-container'>
            <img src={Thanks} alt='icon' />
            <p className='show-score'>You selected {score} out of 5</p>
            <h3>Thank you!</h3>
            <p>Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in</p>
        </div>
    )
}

export default ThanksPage
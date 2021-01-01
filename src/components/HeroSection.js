import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function onClickMail() {
    window.location.href = "mailto:erdoganburak93@gmail.com";
}

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>BURAK ERDOĞAN</h1>
            <p>FULL STACK DEVELOPER</p>
            <div className="hero-btns">
                <Button onClick={onClickMail} className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>CONTACT ME</Button>
            </div>
        </div>
    )
}

export default HeroSection

import React from 'react'
import '../App.css'
import { Button } from "./Button"
import "./HeroSection.css"
import Fade from 'react-reveal/Fade';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <Fade right>
                <h1>Developer Student Club</h1>
            </Fade>
            <Fade left>
                <p>Are you a Developer, Manager, or Designer? Then this is your community</p>
            </Fade>
            <div className='hero-btns'>

                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    link='https://forms.gle/bwLeEuWpiUnYbCXp8'

                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    link='https://youtu.be/DcN_hcHXR_0'
                >
                    About Us <i className='far fa-play-circle' />
                </Button>
            </div>
        </div >
    )
}

export default HeroSection;

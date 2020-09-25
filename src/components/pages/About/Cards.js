import React from 'react'
import './Cards.css'

function Cards() {
    return (
        <div className='about'>
            <div className='left__about'>
                <div className='about__mainheading'>
                    <img className='about__imagenew' src='https://dscvit.com/images/dsc-logo-square.svg' height='50px' />
                    <h1 className='about__heading'>DSC SATI</h1>
                </div>
                <h3 className='about__title'>POWERED BY GOOGLE DEVELOPERS</h3>
                <p className='about__para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='right__about'>
                <img className='about__image' src='https://dscvit.com/images/landing.svg' />
            </div>
        </div>
    )
}

export default Cards

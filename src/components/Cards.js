import React from 'react';
import MediaCard from './CardItem'
import './Cards.css'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

function Cards() {
    return (
        <div className='cards'>
            <Bounce left>
                <h1 className='cards__title'>ENGAGE YOURSELF</h1>
            </Bounce>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <Fade left>
                        <MediaCard
                            src="https://ncmconferences.com/wp-content/uploads/2019/10/ARUK-200318-526-of-760.jpg"
                            title="DEVELOPERS" />
                    </Fade>
                    <Fade bottom>
                        <MediaCard
                            src="https://blog.hubspot.com/hubfs/Management-Skills.jpg"
                            title="DESGINERS"
                        />
                    </Fade>
                    <Fade right>
                        <MediaCard
                            src="https://miro.medium.com/max/3356/1*_j0jMB4y1yc9ZDl_RtvXhw.jpeg"
                            title="MANAGERS"
                        />
                    </Fade>
                </div>
            </div>
        </div >
    );
}

export default Cards;

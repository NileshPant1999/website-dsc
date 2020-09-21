import React from 'react';
import CardItem from './CardItem';
import MediaCard from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1 className='cards__title'>ENGAGE YOURSELF</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <MediaCard
                        src="https://ncmconferences.com/wp-content/uploads/2019/10/ARUK-200318-526-of-760.jpg"
                        title="DEVELOPERS" />
                    <MediaCard
                        src="https://blog.hubspot.com/hubfs/Management-Skills.jpg"
                        title="DESGINERS"
                    />
                    <MediaCard
                        src="https://miro.medium.com/max/3356/1*_j0jMB4y1yc9ZDl_RtvXhw.jpeg"
                        title="MANAGERS"
                    />
                </div>
            </div>
        </div >
    );
}

export default Cards;

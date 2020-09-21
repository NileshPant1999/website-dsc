import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>ENGAGE YOURSELF</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='Join as a Developer and in one of the finest community in your area'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Learn to Desgin what you think from the best Desginers'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Learn to Desgin what you think from the best Desginers'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;

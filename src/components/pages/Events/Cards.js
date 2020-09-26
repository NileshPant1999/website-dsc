import React from 'react'
import './Cards.css'
import { Button } from '../../Button'
import '../../../App.css'


export function Cards(props) {
    return (
        <div className='event__card'>
            <h1 className='event__heading'>{props.title}</h1>
            <img className='event__image' src={props.src} />
            <p className='events__para'>{props.desc}</p>

        </div>
    )
}

export function InfoCards(props) {

    return (
        <div className='infoevent__card'>
            <ul className='infoevent__list'>
                <li><h1 className='infoevent__heading' >Number of attendees- {props.num}</h1></li>
                <li><h1 className='infoevent__heading'>Date of Event - {props.date}</h1></li>
                <li><h1 className='infoevent__heading'>Host Speaker - {props.speaker}</h1></li>
            </ul>
        </div>
    )
}

export function upcomingCards(props) {
    return (
        <div className='upcoming__card'>
            <h1>Hello there</h1>
        </div>
    )
}



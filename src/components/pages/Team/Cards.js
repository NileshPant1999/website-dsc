import React from 'react'
import './Cards.css'
function Cards(props) {
    return (
        <div className='team__members'>
            <h2 className='member__name' >{props.name}</h2>
            <div className='avatar__image'>
                <img className='avatar__image' src={props.src} />
            </div>
            <h3>{props.title}</h3>
            <a href="#" class="fa fa-linkedin"></a>
            <a href='#' class='fa fa-instagram'></a>
            <a href='#' class="fa fa-github"></a>
        </div>
    )
}

export default Cards

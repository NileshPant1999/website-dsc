import React from 'react'
import './Services.css'
import Fade from 'react-reveal/Fade'
import { Cards, InfoCards } from './Cards'

function Services() {
    return (
        <div className='services1'>
            <Fade left >
                <h1 className='heading'>Past Events</h1>
            </Fade>
            <Fade right>
                <div className='services__body'>
                    <Cards src='https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' title='Google Cloud Workshop' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' />
                    <InfoCards title='cloud workshop' num='200' speaker="Nilesh pant" date='12 septemper 2022' />
                </div>

            </Fade>
            <Fade left>
                <div className='services__body'>
                    <Cards src='https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' title='Google Cloud Workshop' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' />
                    <InfoCards title='cloud workshop' num='200' speaker="Nilesh pant" date='12 septemper 2022' />
                </div>
            </Fade>
        </div>
    )
}

export default Services

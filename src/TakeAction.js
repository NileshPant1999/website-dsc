import React from 'react'
import { Button } from '@material-ui/core';
import "./TakeAction.css"


function TakeAction() {
    return (
        <div className='take_actions'>
            <div className='events'>
                <div className='img'>
                    <img className='img1' src='https://ncmconferences.com/wp-content/uploads/2019/10/ARUK-200318-526-of-760.jpg' height='500px' width='500px' />
                    <div class="text-block">
                        <h4 className='title'>DEVELOPERS</h4>
                        <Button href="https://developers.google.com/community/dsc" className='btn' variant="contained">  Learn More  </Button>
                    </div>
                </div>
                <div className='img'>
                    <img className='img1' src='https://miro.medium.com/max/3356/1*_j0jMB4y1yc9ZDl_RtvXhw.jpeg' height='500px' width='500px' />
                    <div class="text-block">
                        <h4 className='title'>MANAGERS</h4>
                        <Button href="https://developers.google.com/community/dsc" className='btn' variant="contained">  Learn More  </Button>
                    </div>
                </div>
                <div className='img'>
                    <img className='img1' src='https://blog.hubspot.com/hubfs/Management-Skills.jpg' height='500px' width='500px' />
                    <div class="text-block">
                        <h4 className='title'>DESGINERS</h4>
                        <Button href="https://developers.google.com/community/dsc" className='btn' variant="contained">  Learn More  </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TakeAction

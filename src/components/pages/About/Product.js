import React from 'react'
import Cards from './Cards'
import './Product.css'
import Fade from 'react-reveal/Fade';

function Product() {
    return (
        <div className='product__main'>
            <Cards />

            <Fade up >
                <div className='nilesh' >
                    <span>&#8595;</span>
                </div>
            </Fade>
            <div className='product__about'>
                <h1>Our Mission</h1>
                <p className='product__para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

        </div>
    )
}

export default Product

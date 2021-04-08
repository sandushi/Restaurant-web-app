import React, {useState, Components } from 'react';

import front1 from '../../images/new1.jpg'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import {Container} from 'react-bootstrap'

const Services = (props) => {
    
        return(
        //     <AliceCarousel autoPlay autoPlayInterval="3000">
        //      <img src={front1} className="sliderimg"/>
        //     <img src={front1} className="sliderimg"/>
        //     <img src={front1} className="sliderimg"/>
        //     <img src={front1} className="sliderimg"/>
        // </AliceCarousel>

        <Container fluid  style={{
            padding:'0'
        }

        }>
            <img src={front1} className="sliderimg"/>
        </Container>
        );
    
}


export default Services;
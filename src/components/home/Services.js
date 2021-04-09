import React, {useState, Components } from 'react';

import front1 from '../../images/new1.jpg'


import {Container} from 'react-bootstrap'

const Services = (props) => {
    
        return(
    

        <Container fluid  
        style={{
            padding:'0'
        }

        }
        >
            <img src={front1}  className="sliderimg"/>
        </Container>
        );
    
}


export default Services;
import React, { useState } from 'react';
import { Card, OverlayTrigger, Row, Col, Container, Button } from 'react-bootstrap'
import img1 from '../../images/Menu/menu_main_meals.jpg'
import img2  from '../../images/Menu/beverages.jpg'
import img3 from '../../images/Menu/desserts.jpg'
import './MenuNavigation.css'

const MenuNavigation = (props) => {



    return (

        <div style={{ marginTop: "2%" }}>
            <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }} style={{ display: 'flex', flexDirection: 'row' }}>
                        <Card.Body>

                            <div className="image">
                                <Card.Img variant="top" className="image__img" src={img1} alt="Bricks" style={{height : '18rem'}}  />
                                <div className="image__overlay">
                                    <div className="image__title">Main</div>
                                    <p className="image__description">Breakfirst, Lunch & Dinner</p>
                                    <p className="image__description">
                                    
                                        <Button variant="success">View more</Button>
                                    </p>
                                </div>

                            </div>
                            {/* <Card.Title >Mains</Card.Title> */}

                        </Card.Body>

                    </Card>
                </Col>

                <Col>

                    <Card style={{ width: '18rem' }} style={{ display: 'flex', flexDirection: 'row' }}>
                        <Card.Body>

                            <div className="image">
                                <Card.Img variant="top" className="image__img" src={img2} alt="Bricks" style={{height : '18rem'}}/>
                                <div className="image__overlay">
                                    <div className="image__title">Beverages</div>
                                   
                                    <p className="image__description">Diiferent beverages from different tastes</p>
                                    <p className="image__description">
                                    
                                        <Button variant="success">View more</Button>
                                    </p>
                                </div>

                            </div>
                            {/* <Card.Title >Mains</Card.Title> */}

                        </Card.Body>

                    </Card>

                </Col>

                <Col>

                    <Card style={{ width: '18rem' , height : '15rem' }} style={{ display: 'flex', flexDirection: 'row' }}>
                        <Card.Body>

                            <div className="image">
                                <Card.Img variant="top" className="image__img" src={img3} alt="Bricks" style={{height : '18rem'}}/>
                                <div className="image__overlay">
                                    <div className="image__title">Desserts</div>
                                   
                                    <p className="image__description">Taste the delicious desserts</p>
                                    <p className="image__description">
                                    
                                        <Button variant="success">View more</Button>
                                    </p>
                                </div>

                            </div>
                            {/* <Card.Title >Mains</Card.Title> */}

                        </Card.Body>

                    </Card>
                </Col>
         </Row>

         </Container>
        </div>

    )

}

export default MenuNavigation;


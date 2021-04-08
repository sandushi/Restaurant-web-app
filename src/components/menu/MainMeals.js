import React from 'react'
import {Button, Card, ListGroupItem, ListGroup} from 'react-bootstrap'
import img2  from '../../images/Menu/beverages.jpg'


const MainMeals = (props) => {
    return (
        <div style={{ marginTop: "2%" }}>
            <Card style={{ width: '18rem' }}>

            
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    <Button size="sm" style={{right : '3%', position: 'absolute'}}>Add to cart</Button>
                    <Button size="sm" style={{left : '3%', position: 'absolute'}}>Add to cart</Button>
                </ListGroup>
               
            </Card>
        </div>
    )
}

export default MainMeals

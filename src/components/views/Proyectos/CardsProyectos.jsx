import React from 'react';
import {Card,Button,Container,Row} from"react-bootstrap"
const CardsProyectos = ({ item }) => {
    return (
        <Container>
            
            <Card style={{ width: '18rem' }}>
                    <Card.Title>{item.title}</Card.Title>
                <Card.Body>
                <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Text>{item.text}</Card.Text>
                    <Button id='boton'><a href={item.link} target='_blank' className='text-black text-decoration-none fw-bold'>Ir a la web</a></Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CardsProyectos;
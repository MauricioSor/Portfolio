import React from 'react';
import {Card,Button,Container,Row} from"react-bootstrap"

const CardsProyectos = ({ item }) => {
    return (
        <Container>
            
            <Card style={{ width: '18rem',height:"20rem" }} className='' >
                    <Card.Title className='text-center my-2'>{item.title}</Card.Title>
                <Card.Body className='text-center'>
                <Card.Img variant="center"  src={item.image} style={{width:"220px",height:"120px"}} />
                    <Card.Text className='mb-3'>{item.text}</Card.Text>
                    <Button id='boton' ><a href={item.link} target='_blank' className='mt-5 text-black text-decoration-none fw-bold'>Ir a la web</a></Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CardsProyectos;
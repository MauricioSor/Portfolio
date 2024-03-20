import React from 'react';
import {Card,Button,Container, Badge} from"react-bootstrap"

const CardsProyectos = ({ item }) => {
    return (
        <Container>
            <Card style={{ width: '18rem',height:"27rem" }} className='m-auto' >
                <Card.Title className='text-center my-2 fs-4'><b>{item.title}</b></Card.Title>
                <Card.Body className='text-center d-flex justify-content-center flex-column'>
                <Card.Img className='mx-auto' variant="center" type="lazy" src={item.image} alt={`Imagen de ${item.image}`} style={{width:"220px",height:"120px"}} />
                    <Card.Text className='mb-3'>
                        {item.text}<br/>
                        <br/>
                        {item.technologies.map((item,index)=>(
                            <Badge className='mx-1'key={index}>{item}</Badge>
                        ))}
                        </Card.Text>
                    <Container className='mt-auto'>
                    <Button id="butonIrALaWeb" >
                        <a href={item.link} target='_blank' className='boton mt-5 text-black text-decoration-none fw-bold'>
                            Ir a la web
                        </a>
                        </Button>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CardsProyectos;
import React from 'react';
import {Card,Button,Container,Row} from"react-bootstrap"
import Imagen1 from "../../../assets/proyectosPortada/rollingfit.png"
import Imagen2 from "../../../assets/proyectosPortada/tucuparking.png"
import Imagen3 from "../../../assets/proyectosPortada/blogrecetas.png"
import Imagen4 from "../../../assets/proyectosPortada/traingym.png"
import Imagen5 from "../../../assets/proyectosPortada/clima.png"
import Imagen6 from "../../../assets/proyectosPortada/noticias.png"
import Imagen7 from "../../../assets/proyectosPortada/listatareas.png"
import Imagen8 from "../../../assets/proyectosPortada/rollingbank.png"
import Imagen9 from "../../../assets/proyectosPortada/panaderiacocu.png"
import Imagen10 from "../../../assets/proyectosPortada/selectorcolores.png"
import Imagen11 from "../../../assets/proyectosPortada/streamify.png"
import Imagen12 from "../../../assets/proyectosPortada/pokedex.png"
import Imagen13 from "../../../assets/proyectosPortada/numerosmagicos.png"
import Imagen14 from "../../../assets/proyectosPortada/cronometro.png"
import Imagen15 from "../../../assets/proyectosPortada/temporizador.png"
import Imagen16 from "../../../assets/proyectosPortada/galeriafuncos.png"
import Imagen17 from "../../../assets/proyectosPortada/rollingvet.png"
const CardsProyectos = ({ item }) => {
    return (
        <Container>
            
            <Card style={{ width: '18rem' }} className='' >
                    <Card.Title className='text-center my-2'>{item.title}</Card.Title>
                <Card.Body className='text-center'>
                <Card.Img variant="center"  src={item.image} style={{width:"220px",height:"120px"}} />
                    <Card.Text>{item.text}</Card.Text>
                    <Button id='boton' ><a href={item.link} target='_blank' className='text-black text-decoration-none fw-bold'>Ir a la web</a></Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CardsProyectos;
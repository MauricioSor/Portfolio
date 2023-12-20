import {Container,Row,Col} from "react-bootstrap"
import CardsProyectos from './CardsProyectos';
import React, { useState } from 'react';

const Proyectos = () => {
    const [proyectos,setProyectos]=useState([
        {
            id:1,
            title:"RollingFit",
            image:"",
            text:"RollingFit es una app creadad asdasdasdasidnasoid",
            link:"https://rollingfitplus.netlify.ap",
        },
        {
            id:3,
            title:"TucuParking",
            image:"",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"https://tucu-parking.netlify.app/",
        },
        {
            id:4,
            title:"Blog de Recetas",
            image:"",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"https://blog-recetas-msor.netlify.app",
        },
        {
            id:5,
            title:"Train Gym",
            image:"",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"https://train-cde.netlify.app",
        },
        {
            id:6,
            title:"Pronostico del clima",
            image:"",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"https://papaya-pavlova-c65a56.netlify.app",
        },
        {
            id:7,
            title:"Buscador de Noticias",
            image:"",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"https://serene-creponne-864349.netlify.app/",
        },
        {
            id:8,
            title:"Lista de tareas",
            image:"",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"https://glittering-bavarois-03a135.netlify.app/",
        },
        {
            id:9,
            title:"RollingBank",
            image:"",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"https://rolling-bank-mauricio-soria.netlify.app/",
        },
        {
            id:10,
            title:"Panaderia cocu",
            image:"",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"https://panaderia-cocu-mauricio-soria.netlify.app",
        },
        {
            id:12,
            title:"Streamify+",
            image:"",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"https://streamify-plus.netlify.app",
        },
        {
            id:13,
            title:"Pokedex blog",
            image:"",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"https://tranquil-sunburst-fb519a.netlify.app",
        },
        {
            id:14,
            title:"Numeros Magicos",
            image:"",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"https://admirable-parfait-3d4843.netlify.app",
        },
        {
            id:15,
            title:"Cronometro",
            image:"",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"https://fluffy-basbousa-2315b6.netlify.app/",
        },
        {
            id:16,
            title:"Temporizador",
            image:"",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"https://brilliant-squirrel-3e4f22.netlify.app",
        },
        {
            id:17,
            title:"Funko pops blog",
            image:"",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"https://galeria-de-funkos-mauricio-soria.netlify.app",
        },
        {
            id:18,
            title:"Pokedex blog",
            image:"",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"https://tranquil-sunburst-fb519a.netlify.app",
        },
        {
            id:19,
            title:"RollingVet",
            image:"",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"https://marvelous-sorbet-006e9b.netlify.app/",
        }
        
    ])
    
    return (
        <>
            <Container className="bg-black my-2 py-3 ">
                <h4 className="texto">Mis proyectos</h4>
                <Row className="d-flex">
                {proyectos.map((item) =>(
                    <Col key={item.id} md={3} className="mb-3">
                    
                    <CardsProyectos item={item} />
                </Col>
                ))}
                </Row>
            </Container>
        </>
    );};

export default Proyectos;
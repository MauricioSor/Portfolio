import {Container,Row,Col} from "react-bootstrap"
import CardsProyectos from './CardsProyectos';
import React, { useState } from 'react';

const Proyectos = () => {
    const [proyectos,setProyectos]=useState([
        {
            id:1,
            title:"RollingFit",
            text:"RollingFit es una app creadad asdasdasdasidnasoid",
            link:"",
        },
        {
            id:3,
            title:"TucuParking",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"",
        },
        {
            id:4,
            title:"TucuParking",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"",
        },
        {
            id:5,
            title:"TucuParking",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"",
        },
        {
            id:6,
            title:"TucuParking",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"",
        },
        {
            id:7,
            title:"TucuParking",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"",
        },
        {
            id:8,
            title:"TucuParking",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"",
        },
        {
            id:9,
            title:"TucuParking",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"",
        },
        {
            id:10,
            title:"TucuParking",
            text:"TucuParking es una app creadad asdasdasdasidnasoid",
            link:"",
        }
        
    ])
    
    return (
        <>
            <Container className="bg-black my-2 py-3 ">
                <h4>Mis proyectos</h4>
                <Row className="d-flex">
                {proyectos.map((item) =>(
                    <Col key={item.id} md={4} className="mb-3">
                    
                    <CardsProyectos item={item} />
                  </Col>
                ))}
                </Row>
            </Container>
        </>
    );};

export default Proyectos;
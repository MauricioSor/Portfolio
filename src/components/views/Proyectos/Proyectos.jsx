import {React,useState} from 'react';
import {Container} from "react-bootstrap"
import CardsProyectos from './CardsProyectos';

const Proyectos = () => {
    const [proyectos,setProyectos]=useState([
        {
            id:1,
            title:"RollingFit",
            text:"RollingFit es una app creadad asdasdasdasidnasoid",
            link:"",
        },
        {
            id:2,
            title:"RollingFit",
            text:"RollingFit es una app creadad asdasdasdasidnasoid",
            link:"",
        }
    ])
    return (
        <>
            <Container className="bg-black my-2 py-3 ">
                <h4>Mis proyectos</h4>
                <Container className="d-flex">
                <CardsProyectos proyectos={proyectos}/>
                </Container>
            </Container>
        </>
    );
};

export default Proyectos;
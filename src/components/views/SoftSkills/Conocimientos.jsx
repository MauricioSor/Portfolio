import React,{useState} from 'react';
import { ProgressBar, Container,Col,Row } from 'react-bootstrap';
import Atributos from './Atributos';
import Skills from './Skills';

const Conocimientos = () => {
    const [lenguajes,setLenguajes]=useState([
        {
            lenguaje:"Javascript",
            valor:70
        },
        {
            lenguaje:"React",
            valor:85
        },
        {
            lenguaje:"Mongo DB",
            valor:38
        },
        {
            lenguaje:"Node",
            valor:50
        },
        {
            lenguaje:"C#",
            valor:70
        },
        {
            lenguaje:"Visual Studio Code",
            valor:90
        },
        {
            lenguaje:"Git",
            valor:80
        },
        {
            lenguaje:"Html",
            valor:80
        },
    ])
    const [sofSkills,setSoftSkills]=useState([
        {
            skill:"Trabajo en equipo",
        },
        {
            skill:"Liderazgo",
        },
        {
            skill:"Comunicacion efectiva",
        },
        {
            skill:"Actitud positiva",
        },
        {
            skill:"Trabajo bajo presión",
        }
    ])
    return (
        <Container>
        <Row className=' bg-black py-2 justify-content-center d-flex'>
        <Col className="" lg={5}md={12} xs={12}>
        <div >
        <h2 className='fs-2 texto text-center my-2'>Conocimientos</h2>
        {
            lenguajes.map((item,index)=>(
                <Atributos item={item} key={index}/>
            ))
        }
        </div>
        </Col>
        <Col className="" lg={5}md={12}>
        <h3 className='fs-2 texto text-center my-2'>SoftSkills</h3>
        <ul className="">
        {
            sofSkills.map((item,index)=>(
                <Skills item={item} key={index}/>
            ))
        }
        </ul>
        </Col>
        </Row>
        </Container>
    );
};

export default Conocimientos;
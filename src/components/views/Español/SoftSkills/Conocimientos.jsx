import React,{useState} from 'react';
import { ProgressBar, Container,Col,Row } from 'react-bootstrap';
import Atributos from './Atributos';
import Skills from './Skills';

const Conocimientos = () => {
    const [lenguajes,setLenguajes]=useState([
        {
            lenguaje:"Html"
        },
        {
            lenguaje:"Css"
        },
        {
            lenguaje:"Javascript"
        },
        {
            lenguaje:"React"
        },
        {
            lenguaje:"React-Native"
        },
        {
            lenguaje:"Custom-Hooks"
        },
        {
            lenguaje:"Redux toolkit"
        },
        {
            lenguaje:"Mongo DB"
        },
        {
            lenguaje:"Node"
        },
        {
            lenguaje:"Visual Studio Code"
        },
        {
            lenguaje:"Github/git"
        },
        {
            lenguaje:"Vercel"
        },
        {
            lenguaje:"Netlify"
        },
        {
            lenguaje:"Git"
        },
        {
            lenguaje:"Mysql"
        },
    ])
    const [sofSkills,setSoftSkills]=useState([
        {
            skill:"Trabajo en equipo",
        },
        {
            skill:"Adaptacion Rapida",
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
        <Container className='FadeInBottom'>
        <Row className=' bg-black py-2 justify-content-center d-flex'>
        <Col className="" lg={5}md={12} xs={12}>
        <div >
        <h2 className='fs-2 texto text-center my-2'>Tecnologias dominantes</h2>
        {
            lenguajes.map((item,index)=>(
                <Atributos item={item} key={index}/>
            ))
        }
        </div>
        </Col>
        <Col className="" lg={5}md={12} xs={12}>
        <div>
        <h2 className='fs-2 texto text-center my-2'>SoftSkills</h2>
        {
            sofSkills.map((item,index)=>(
                <Skills item={item} key={index}/>
            ))
        }
        </div>
        </Col>
        </Row>
        </Container>
    );
};

export default Conocimientos;
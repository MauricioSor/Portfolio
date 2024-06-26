import React,{useState} from 'react';
import { ProgressBar, Container,Col,Row } from 'react-bootstrap';
import Atributos from './Attributes';
import Skills from './Skills';

const Knowledge = () => {
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
            skill:"Team work",
        },
        {
            skill:"Fast adapt",
        },
        {
            skill:"Leadership",
        },
        {
            skill:"Effective comunication",
        },
        {
            skill:"Positive attitude",
        },
        {
            skill:"Work under pressure",
        }
    ])
    return (
        <Container className='FadeInBottom'>
        <Row className=' bg-black py-2 justify-content-center d-flex'>
        <Col className="" lg={5}md={12} xs={12}>
        <div >
        <h2 className='fs-2 texto text-center my-2'><u className='subrayados'>Tech stack</u></h2>
        {
            lenguajes.map((item,index)=>(
                <Atributos item={item} key={index}/>
            ))
        }
        </div>
        </Col>
        <Col className="" lg={5}md={12}>
        <h3 className='fs-2 texto text-center my-2'><u className='subrayados'>SoftSkills</u></h3>
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

export default Knowledge;
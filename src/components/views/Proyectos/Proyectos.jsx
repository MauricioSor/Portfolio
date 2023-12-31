import {Container,Row,Col} from "react-bootstrap"
import CardsProyectos from './CardsProyectos';
import React, { useState } from 'react';
import Imagen1 from "../../../assets/proyectosPortada/rollingfit.png"
import Imagen2 from "../../../assets/proyectosPortada/tucuparking.png"
import Imagen3 from "../../../assets/proyectosPortada/blogRecetas.png"
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
const Proyectos = () => {
    const [proyectos,setProyectos]=useState([
        {
            id:1,
            title:"RollingFit",
            image:Imagen1,
            text:"Proyecto de fin de modulo desarrollado en equipo para Rolling Code School",
            link:"https://rollingfitplus.netlify.app/",
        },
        {
            id:2,
            title:"TucuParking",
            image:Imagen2,
            text:"Como Trabajo final Integrador para la materia Ingenieria de Requerimientos 4to año UTN-FRT",
            link:"https://tucu-parking.netlify.app/",
        },
        {
            id:3,
            title:"Blog de Recetas",
            image:Imagen3,
            text:"TucuParking fue desarrollada como ejercitacion de,utilizando conceptos de backend y frontend",
            link:"https://blog-recetas-msor.netlify.app",
        },
        {
            id:4,
            title:"Train Gym",
            image:Imagen4,
            text:"Proyecto desarrollado para un cliente,recibió soporte hasta mediados del 2023",
            link:"https://train-cde.netlify.app",
        },
        {
            id:5,
            title:"Pronostico del clima",
            image:Imagen5,
            text:"Desarrollado como practica para el consumo de APIs y manejo de respuestas",
            link:"https://papaya-pavlova-c65a56.netlify.app",
        },
        {
            id:6,
            title:"Buscador de Noticias",
            image:Imagen6,
            text:"Desarrollado como practica para el consumo de APIs y manejo de respuestas",
            link:"https://serene-creponne-864349.netlify.app/",
        },
        {
            id:7,
            title:"Lista de tareas",
            image:Imagen7,
            text:"Practica con React, manejo de estados y propiedades",
            link:"https://glittering-bavarois-03a135.netlify.app/",
        },
        {
            id:8,
            title:"RollingBank",
            image:Imagen8,
            text:"Proyecto desarrollado como practica para Rolling Code School",
            link:"https://rolling-bank-mauricio-soria.netlify.app/",
        },
        {
            id:9,
            title:"Panaderia cocu",
            image:Imagen9,
            text:"Proyecto desarrollado como practica para Rolling Code School",
            link:"https://panaderia-cocu-mauricio-soria.netlify.app",
        },
        {
            id:10,
            title:"Paleta de colores",
            image:Imagen10,
            text:"Practica con React, manejo de estados y propiedades",
            link:"https://timely-caramel-3cb573.netlify.app/",
        },
        {
            id:11,
            title:"Streamify+",
            image:Imagen11,
            text:"Proyecto de fin de modulo desarrollado en equipo para Rolling Code School",
            link:"https://streamify-plus.netlify.app",
        },
        {
            id:12,
            title:"Pokedex blog",
            image:Imagen12,
            text:"Proyecto desarrollado como practica para Rolling Code School",
            link:"https://tranquil-sunburst-fb519a.netlify.app",
        },
        {
            id:13,
            title:"Numeros Magicos",
            image:Imagen13,
            text:"Juego desarrollado como practica con javascript y conceptos de maquetado y estilizado",
            link:"https://admirable-parfait-3d4843.netlify.app",
        },
        {
            id:14,
            title:"Cronometro",
            image:Imagen14,
            text:"Desarrollada como practica con javascript y conceptos de maquetado y estilizado",
            link:"https://fluffy-basbousa-2315b6.netlify.app/",
        },
        {
            id:15,
            title:"Temporizador",
            image:Imagen15,
            text:"Desarrollada como practica con javascript y conceptos de maquetado y estilizado",
            link:"https://brilliant-squirrel-3e4f22.netlify.app",
        },
        {
            id:16,
            title:"Funko pops blog",
            image:Imagen16,
            text:"Desarrollada como practica con html y conceptos de maquetado y estilizado",
            link:"https://galeria-de-funkos-mauricio-soria.netlify.app",
        },
        {
            id:17,
            title:"RollingVet",
            image:Imagen17,
            text:"Proyecto de fin de modulo grupal, con desarrollo en frontend,backend y database para Rolling Code Tucuman",
            link:"https://marvelous-sorbet-006e9b.netlify.app/",
        }
        
    ])
    
    return (
        <>
            <Container className="bg-black my-2 py-3">
                <h4 className="texto mb-3">Mis proyectos</h4>
                <Row className="container d-flex justify-content-center">
                {proyectos.map((item) =>(
                    <Col key={item.id}  lg={3} md={5} sm={12} className="mb-3  ">
                    <CardsProyectos item={item} />
                </Col>
                ))}
                </Row>
            </Container>
        </>
    );};

export default Proyectos;
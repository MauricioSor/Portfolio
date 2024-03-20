//#region Imports
import {Container,Row,Col} from "react-bootstrap"
import CardsProyectos from './CardsProyectos';
import React, { useState } from 'react';
import Imagen1 from "../../../assets/images/proyectos/RollingVet/rollingvet.png"
import Imagen2 from "../../../assets/images/proyectos/RollingVet/rollingvet1.png"
import Imagen3 from "../../../assets/images/proyectos/RollingVet/rollingvet2.png"
import Imagen4 from "../../../assets/images/proyectos/RollingVet/rollingvet3.png"
import Imagen5 from "../../../assets/images/proyectos/RollingVet/rollingvet4.png"
import Imagen6 from "../../../assets/images/proyectos/RollingFit/rollingfit.png"
import Imagen7 from "../../../assets/images/proyectos/RollingFit/rollingfit1.png"
import Imagen8 from "../../../assets/images/proyectos/RollingFit/rollingfit2.png"
import Imagen9 from "../../../assets/images/proyectos/RollingFit/rollingfit3.png"
import Imagen10 from "../../../assets/images/proyectos/RollingFit/rollingfit4.png"
import Imagen11 from "../../../assets/images/proyectos/Tucuparking/tucuparking.png"
import Imagen12 from "../../../assets/images/proyectos/Tucuparking/tucuparking1.png"
import Imagen13 from "../../../assets/images/proyectos/Tucuparking/tucuparking2.png"
import Imagen14 from "../../../assets/images/proyectos/Tucuparking/tucuparking3.png"
import Imagen15 from "../../../assets/images/proyectos/Tucuparking/tucuparking4.png"
import Imagen16 from "../../../assets/images/proyectos/BlogRecetas/blogrecetas.png"
import Imagen17 from "../../../assets/images/proyectos/BlogRecetas/blogrecetas1.png"
import Imagen18 from "../../../assets/images/proyectos/BlogRecetas/blogrecetas2.png"
import Imagen19 from "../../../assets/images/proyectos/BlogRecetas/blogrecetas3.png"
import Imagen20 from "../../../assets/images/proyectos/BlogRecetas/blogrecetas4.png"
import Imagen21 from "../../../assets/images/proyectos/TrainGym/traingym.png"
import Imagen22 from "../../../assets/images/proyectos/TrainGym/traingym1.png"
import Imagen23 from "../../../assets/images/proyectos/TrainGym/traingym2.png"
import Imagen24 from "../../../assets/images/proyectos/TrainGym/traingym3.png"
import Imagen25 from "../../../assets/images/proyectos/TrainGym/traingym4.png"
import Imagen26 from "../../../assets/images/proyectos/Clima/clima.png"
import Imagen27 from "../../../assets/images/proyectos/Clima/clima1.png"
//import Imagen28 from "../../../assets/images/proyectos/Clima/clima2.png"
//import Imagen29 from "../../../assets/images/proyectos/Clima/clima3.png"
//import Imagen30 from "../../../assets/images/proyectos/Clima/clima4.png"
import Imagen31 from "../../../assets/images/proyectos/Noticias/noticias.png"
import Imagen32 from "../../../assets/images/proyectos/Noticias/noticias1.png"
//import Imagen33 from "../../../assets/images/proyectos/Noticias/noticias2.png"
//import Imagen34 from "../../../assets/images/proyectos/Noticias/noticias3.png"
//import Imagen35 from "../../../assets/images/proyectos/Noticias/noticias4.png"
import Imagen36 from "../../../assets/images/proyectos/ListaTareas/listatareas.png"
import Imagen37 from "../../../assets/images/proyectos/ListaTareas/listatareas1.png"
//import Imagen38 from "../../../assets/images/proyectos/ListaTareas/tareas2.png"
//import Imagen39 from "../../../assets/images/proyectos/ListaTareas/tareas3.png"
//import Imagen40 from "../../../assets/images/proyectos/ListaTareas/tareas4.png"
import Imagen41 from "../../../assets/images/proyectos/RollingBank/rollingbank.png"
import Imagen42 from "../../../assets/images/proyectos/RollingBank/rollingbank1.png"
import Imagen43 from "../../../assets/images/proyectos/RollingBank/rollingbank2.png"
import Imagen44 from "../../../assets/images/proyectos/RollingBank/rollingbank3.png"
import Imagen45 from "../../../assets/images/proyectos/RollingBank/rollingbank4.png"
import Imagen46 from "../../../assets/images/proyectos/PanaderiaCocu/panaderiacocu.png"
import Imagen47 from "../../../assets/images/proyectos/PanaderiaCocu/panaderiacocu1.png"
import Imagen48 from "../../../assets/images/proyectos/PanaderiaCocu/panaderiacocu2.png"
import Imagen49 from "../../../assets/images/proyectos/PanaderiaCocu/panaderiacocu3.png"
import Imagen50 from "../../../assets/images/proyectos/PanaderiaCocu/panaderiacocu4.png"
import Imagen51 from "../../../assets/images/proyectos/SelectorColores/selectorcolores.png"
import Imagen52 from "../../../assets/images/proyectos/SelectorColores/selectorcolores1.png"
//import Imagen53 from "../../../assets/images/proyectos/SelectorColores/selectorcolores2.png"
//import Imagen54 from "../../../assets/images/proyectos/SelectorColores/colores3.png"
//import Imagen55 from "../../../assets/images/proyectos/SelectorColores/colores4.png"
import Imagen56 from "../../../assets/images/proyectos/Stremify/streamify.png"
import Imagen57 from "../../../assets/images/proyectos/Stremify/streamify1.png"
import Imagen58 from "../../../assets/images/proyectos/Stremify/streamify2.png"
import Imagen59 from "../../../assets/images/proyectos/Stremify/streamify3.png"
import Imagen60 from "../../../assets/images/proyectos/Stremify/streamify4.png"
import Imagen61 from "../../../assets/images/proyectos/PokedexApi/PokedexApi.png"
//import Imagen62 from "../../../assets/images/proyectos/PokedexApi/pokedex1.png"
//import Imagen63 from "../../../assets/images/proyectos/PokedexApi/pokedex2.png"
//import Imagen64 from "../../../assets/images/proyectos/PokedexApi/pokedex3.png"
//import Imagen65 from "../../../assets/images/proyectos/PokedexApi/pokedex4.png"
import Imagen66 from "../../../assets/images/proyectos/PokedexBlog/pokedex.png"
import Imagen67 from "../../../assets/images/proyectos/PokedexBlog/pokedex1.png"
import Imagen68 from "../../../assets/images/proyectos/PokedexBlog/pokedex2.png"
import Imagen69 from "../../../assets/images/proyectos/PokedexBlog/pokedex3.png"
import Imagen70 from "../../../assets/images/proyectos/PokedexBlog/pokedex4.png"
import Imagen71 from "../../../assets/images/proyectos/NumerosMagicos/numerosmagicos.png"
//import Imagen72 from "../../../assets/images/proyectos/NumerosMagicos/nrosmagicos1.png"
//import Imagen73 from "../../../assets/images/proyectos/NumerosMagicos/nrosmagicos2.png"
//import Imagen74 from "../../../assets/images/proyectos/NumerosMagicos/nrosmagicos3.png"
//import Imagen75 from "../../../assets/images/proyectos/NumerosMagicos/nrosmagicos4.png"
import Imagen76 from "../../../assets/images/proyectos/Cronometro/cronometro.png"
import Imagen77 from "../../../assets/images/proyectos/Cronometro/cronometro1.png"
//import Imagen78 from "../../../assets/images/proyectos/Cronometro/cronometro2.png"
//import Imagen79 from "../../../assets/images/proyectos/Cronometro/cronometro3.png"
//import Imagen80 from "../../../assets/images/proyectos/Cronometro/cronometro4.png"
import Imagen81 from "../../../assets/images/proyectos/Temporizador/temporizador.png"
import Imagen82 from "../../../assets/images/proyectos/Temporizador/temporizador1.png"
//import Imagen83 from "../../../assets/images/proyectos/Temporizador/temporizador2.png"
//import Imagen84 from "../../../assets/images/proyectos/Temporizador/temporizador3.png"
//import Imagen85 from "../../../assets/images/proyectos/Temporizador/temporizador4.png"
import Imagen86 from "../../../assets/images/proyectos/GaleriaFuncos/galeriafuncos.png"
import Imagen87 from "../../../assets/images/proyectos/GaleriaFuncos/galeriafuncos1.png"
//import Imagen88 from "../../../assets/images/proyectos/GaleriaFuncos/funcos2.png"
//import Imagen89 from "../../../assets/images/proyectos/GaleriaFuncos/funcos3.png"
//import Imagen90 from "../../../assets/images/proyectos/GaleriaFuncos/funcos4.png"
import Imagen91 from "../../../assets/images/proyectos/MlClon/mlclon.png"
//import Imagen92 from "../../../assets/images/proyectos/MlClon/mlclon1.png"
//import Imagen93 from "../../../assets/images/proyectos/MlClon/mlclon2.png"
//import Imagen94 from "../../../assets/images/proyectos/MlClon/mlclon3.png"
//import Imagen95 from "../../../assets/images/proyectos/MlClon/mlclon4.png"
//#endregion
const Proyectos = () => {
    const [proyectos,setProyectos]=useState([
        {
            id:1,
            title:"RollingVet",
            image:[Imagen1,Imagen2,Imagen3,Imagen4,Imagen5],
            text:"Proyecto de fin de modulo grupal, con desarrollo en frontend,backend y database para Rolling Code Tucuman",
            link:"https://rolling-veterinaria-frontend.vercel.app/",
            technologies:["Javascript","React-bootstrap","Node js","Express js","Jwt","MongoDB"]
        },
        {
            id:2,
            title:"RollingFit",
            image:[Imagen6,Imagen7,Imagen8,Imagen9,Imagen10],
            text:"Proyecto de fin de modulo desarrollado en equipo para Rolling Code School",
            link:"https://rollingfitplus.netlify.app/",
            technologies:["Javascript","Bootstrap","LocalStorage","SesionStorage"]
        },
        {
            id:3,
            title:"TucuParking",
            image:[Imagen11,Imagen12,Imagen13,Imagen14,Imagen15],
            text:"Como Trabajo final Integrador para la materia Ingenieria de Requerimientos 4to año UTN-FRT",
            link:"https://tucu-parking.netlify.app/",
            technologies:["Javascript","React-bootstrap","LocalStorage"]
            
        },
        {
            id:4,
            title:"Blog de Recetas",
            image:[Imagen16,Imagen17,Imagen18,Imagen19,Imagen20],
            text:"TucuParking fue desarrollada como ejercitacion de,utilizando conceptos de backend y frontend",
            link:"https://blog-recetas-msor.netlify.app",
            technologies:["Javascript","React-bootstrap","Node js","Express js"]
            
        },
        {
            id:5,
            title:"Train Gym",
            image:[Imagen21,Imagen22,Imagen23,Imagen24,Imagen25],
            text:"Proyecto desarrollado para un cliente,recibió soporte hasta mediados del 2023",
            link:"https://train-cde.netlify.app",
            technologies:["Javascript","Bootstrap"]
            
        },
        {
            id:6,
            title:"Pronostico del clima",
            image:[Imagen26,Imagen27/* ,Imagen28,Imagen29,Imagen30 */],
            text:"Desarrollado como practica para el consumo de APIs y manejo de respuestas",
            link:"https://papaya-pavlova-c65a56.netlify.app",
            technologies:["Javascript","React-bootstrap"]
            
        },
        {
            id:7,
            title:"Buscador de Noticias",
            image:[Imagen31,Imagen32/* ,Imagen33,Imagen34,Imagen35 */],
            text:"Desarrollado como practica para el consumo de APIs y manejo de respuestas",
            link:"https://serene-creponne-864349.netlify.app/",
            technologies:["Javascript","React-bootstrap"]
            
        },
        {
            id:8,
            title:"Lista de tareas",
            image:[Imagen36,Imagen37/* ,Imagen38,Imagen39,Imagen40 */],
            text:"Practica con React, manejo de estados y propiedades",
            link:"https://glittering-bavarois-03a135.netlify.app/",
            technologies:["Javascript","React-bootstrap"]
            
        },
        {
            id:9,
            title:"RollingBank",
            image:[Imagen41,Imagen42,Imagen43,Imagen44,Imagen45],
            text:"Proyecto desarrollado como practica para Rolling Code School",
            link:"https://rolling-bank-mauricio-soria.netlify.app/",
            technologies:["Javascript","css"]
            
        },
        {
            id:10,
            title:"Panaderia cocu",
            image:[Imagen46,Imagen47,Imagen48,Imagen49,Imagen50],
            text:"Proyecto desarrollado como practica para Rolling Code School",
            link:"https://panaderia-cocu-mauricio-soria.netlify.app",
            technologies:["Javascript","css"]
            
        },
        {
            id:11,
            title:"Paleta de colores",
            image:[Imagen51,Imagen52/* ,Imagen53,Imagen54,Imagen55 */],
            text:"Practica con React, manejo de estados y propiedades",
            link:"https://timely-caramel-3cb573.netlify.app/",
            technologies:["Javascript","Bootstrap"]
            
        },
        {
            id:12,
            title:"Streamify+",
            image:[Imagen56,Imagen57,Imagen58,Imagen59,Imagen60],
            text:"Proyecto de fin de modulo desarrollado en equipo para Rolling Code School",
            link:"https://streamify-plus.netlify.app",
            technologies:["Javascript","css"]
            
        },
        {
            id:13,
            title:"Pokedex API",
            image:[Imagen61/* ,Imagen62,Imagen63,Imagen64,Imagen65 */],
            text:"Proyecto desarrollado como practica",
            link:"https://dazzling-klepon-349058.netlify.app/",
            technologies:["Javascript","css"]
            
        },
        {
            id:14,
            title:"Pokedex blog",
            image:[Imagen66,Imagen67,Imagen68,Imagen69,Imagen70],
            text:"Proyecto desarrollado como practica para Rolling Code School",
            link:"https://tranquil-sunburst-fb519a.netlify.app",
            technologies:["Javascript","React-bootstrap"]
            
        },
        {
            id:15,
            title:"Numeros Magicos",
            image:[Imagen71/* ,Imagen72,Imagen73,Imagen74,Imagen75 */],
            text:"Juego desarrollado como practica con javascript y conceptos de maquetado y estilizado",
            link:"https://admirable-parfait-3d4843.netlify.app",
            technologies:["Javascript","css"]
            
        },
        {
            id:16,
            title:"Cronometro",
            image:[Imagen76,Imagen77/* ,Imagen78,Imagen79,Imagen80 */],
            text:"Desarrollada como practica con javascript y conceptos de maquetado y estilizado",
            link:"https://fluffy-basbousa-2315b6.netlify.app/",
            technologies:["Javascript","css"]
            
        },
        {
            id:17,
            title:"Temporizador",
            image:[Imagen81,Imagen82/* ,Imagen83,Imagen84,Imagen85 */],
            text:"Desarrollada como practica con javascript y conceptos de maquetado y estilizado",
            link:"https://brilliant-squirrel-3e4f22.netlify.app",
            technologies:["Javascript","css"]
            
        },
        {
            id:18,
            title:"Funko pops blog",
            image:[Imagen86,Imagen87/* ,Imagen88,Imagen89,Imagen90 */],
            text:"Desarrollada como practica con html y conceptos de maquetado y estilizado",
            link:"https://galeria-de-funkos-mauricio-soria.netlify.app",
            technologies:["Javascript","css"]
            
        },{
            id:19,
            title:"TucuLibre",
            image:[Imagen91/* ,Imagen92,Imagen93,Imagen94,Imagen95 */],
            text:"Una pagina inspirada en Mercado Libre, la cual fue desarrollada para asentar conocimientos de custom Hooks y redux toolkit",
            link:"https://rad-sunflower-f52518.netlify.app/",
            technologies:["Javascript","React-Bootstrap","Node js","MongoDB"]
        }
    ])

    return (
        <>
            <Container className="FadeInLeft  bg-black container my-2 py-3 ">
                <h2 className="texto mb-3">Mis proyectos</h2>
                <Row className="container m-auto d-flex justify-content-center align-items-center">
                {proyectos.map((item) =>(
                    <Col key={item.id}  lg={3} md={5} sm={12} className="mb-3">
                    <CardsProyectos item={item} />
                </Col>
                ))}
                </Row>
            </Container>
        </>
    );};

export default Proyectos;
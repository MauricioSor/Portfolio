import React from 'react';
import {Container,Image,Row} from "react-bootstrap"
import FotoRetrato from "../../assets/foto.png"
const Biografia = () => {
    return (
        <div className='flex items-center flex-grow p-4 mt-3 my-4 bg-black border-rounded mx-3'>
            <Container id='Foto' className=' mt-5 d-flex justify-content-center'>
            <Image src={FotoRetrato} style={{width:"150px"}} className='' rounded alt="" roundedCircle/>
            </Container>
            <h5 className='display-5 text-center texto'> Acerca de mi</h5>
            <p className='text-center texto'>"Estudiante de Ingeniería en Sistemas de Información en UTN-FRT. Apasionado por el crecimiento personal y el desarrollo en tecnología. Siempre actualizado con las últimas tendencias, me encanta aprender sobre nuevas tecnologías y aplicarlas en el desarrollo de software para ofrecer soluciones eficientes a los problemas del cliente"</p>
        </div>
    );
};

export default Biografia;
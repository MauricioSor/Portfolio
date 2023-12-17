import React from 'react';
import {Container,Image,Row} from "react-bootstrap"
import FotoRetrato from "../../assets/foto.png"
const Biografia = () => {
    return (
        <div className='mb-4'>
            <Container id='Foto' className=' mt-5 d-flex justify-content-center'>
            <Image src={FotoRetrato} style={{width:"50px"}} className='' rounded alt="" />
            </Container>
            <h5 className='display-5 text-center'> Acerca de mi</h5>
            <p className='text-center'>"Soy estudiante de la carrea de Ingenieria en sistemas de Informacion en UTN-FRT. En mis interes estan el crecimiento personal y el desarrollo de mi carrera en el area, me gusta aprender siempre de tecnologias nuevas y estar al tanto de cada nueva actualizacion. Me gusta el desarrollo de Software como soluicion de problemas para el cliente."</p>
        </div>
    );
};

export default Biografia;
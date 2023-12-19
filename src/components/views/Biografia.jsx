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
            <p className='text-center texto'>"Soy estudiante de la carrea de Ingenieria en sistemas de Informacion en UTN-FRT. En mis interes estan el crecimiento personal y el desarrollo de mi carrera en el area, me gusta aprender siempre de tecnologias nuevas y estar al tanto de cada nueva actualizacion. Me gusta el desarrollo de Software como soluicion de problemas para el cliente."</p>
        </div>
    );
};

export default Biografia;
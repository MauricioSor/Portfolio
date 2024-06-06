import React from 'react';
import {Container,Image,Row} from "react-bootstrap"
import Foto from "../../../../assets/images/AcercaDeMi/foto.png"
const Biography = () => {
    return (
        <div id='inicio' className='FadeinTop flex items-center flex-grow p-4 mt-3 my-4 bg-black border rounded mx-3'>
            <Container id='Foto' className=' mt-5 d-flex justify-content-center '>
            <Image src={Foto} style={{width:"150px"}} className='' rounded alt="Foto de Mauricio Soria" roundedCircle/>
            </Container>
            <h5 className='display-5 text-center texto'> About Me</h5>
            <p className='text-center texto'>"I'm a student of Systems information engineering at UTN-FRT. I'm passionate about the personal improvement and the newer technologies. I try to learn day per day, about tech trends and improve my concepts, I like to know newer technologies to apply into software solutions and user experience "</p>
        </div>
    );
};

export default Biography;
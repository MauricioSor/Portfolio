import React from 'react';
import Imagen1 from "../../../assets/tecnologias/visualstudio.png"
import Imagen2 from "../../../assets/tecnologias/visualstudiocode.png"
import Imagen3 from "../../../assets/tecnologias/html-5.png"
import Imagen4 from "../../../assets/tecnologias/css.png"
import Imagen5 from "../../../assets/tecnologias/js.png"
import Imagen6 from "../../../assets/tecnologias/bootstrap.png"
import Imagen7 from "../../../assets/tecnologias/preact.svg"
import Imagen8 from "../../../assets/tecnologias/react-bootstrap.png"
import Imagen9 from "../../../assets/tecnologias/Netlify.png"
import Imagen10 from "../../../assets/tecnologias/nodejs.webp"
import Imagen11 from "../../../assets/tecnologias/express.png"
import Imagen12 from "../../../assets/tecnologias/mongodb.svg"
import Imagen13 from "../../../assets/tecnologias/github.png"
import Imagen14 from "../../../assets/tecnologias/gitlab.png"
import Imagen15 from "../../../assets/tecnologias/trello.png"
import Imagen16 from "../../../assets/tecnologias/sqlServer.png"
import Imagen17 from "../../../assets/tecnologias/csharp.png"
import Imagen18 from "../../../assets/tecnologias/netFramework.png"
import Imagen19 from "../../../assets/tecnologias/mysql.png"
import ContenedorTec from './ContenedorTec';

const Tecnologias = () => {
    return (
        <>
        <div className='d-flex justify-content-center align-items-center slider bg-matrix'>
            <div className="slide-track">
                <ContenedorTec Imagen1={Imagen1}Imagen2={Imagen2}Imagen3={Imagen3}Imagen4={Imagen4}Imagen5={Imagen5}Imagen6={Imagen6}Imagen7={Imagen7}Imagen8={Imagen8}Imagen9={Imagen9}Imagen10={Imagen10}Imagen11={Imagen11}Imagen12={Imagen12}Imagen13={Imagen13}Imagen14={Imagen14}Imagen15={Imagen15}Imagen16={Imagen16}Imagen17={Imagen17}Imagen18={Imagen18}Imagen19={Imagen19}/>
                <ContenedorTec Imagen1={Imagen1}Imagen2={Imagen2}Imagen3={Imagen3}Imagen4={Imagen4}Imagen5={Imagen5}Imagen6={Imagen6}Imagen7={Imagen7}Imagen8={Imagen8}Imagen9={Imagen9}Imagen10={Imagen10}Imagen11={Imagen11}Imagen12={Imagen12}Imagen13={Imagen13}Imagen14={Imagen14}Imagen15={Imagen15}Imagen16={Imagen16}Imagen17={Imagen17}Imagen18={Imagen18}Imagen19={Imagen19}/>
                <ContenedorTec Imagen1={Imagen1}Imagen2={Imagen2}Imagen3={Imagen3}Imagen4={Imagen4}Imagen5={Imagen5}Imagen6={Imagen6}Imagen7={Imagen7}Imagen8={Imagen8}Imagen9={Imagen9}Imagen10={Imagen10}Imagen11={Imagen11}Imagen12={Imagen12}Imagen13={Imagen13}Imagen14={Imagen14}Imagen15={Imagen15}Imagen16={Imagen16}Imagen17={Imagen17}Imagen18={Imagen18}Imagen19={Imagen19}/>
            </div>
        </div>
        </>
    );
};

export default Tecnologias;
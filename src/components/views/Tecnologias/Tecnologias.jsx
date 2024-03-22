import React from 'react';
import Imagen1 from "../../../assets/images/tecnologias/visualstudio.png"
import Imagen2 from "../../../assets/images/tecnologias/visualstudiocode.png"
import Imagen3 from "../../../assets/images/tecnologias/html-5.png"
import Imagen4 from "../../../assets/images/tecnologias/css.png"
import Imagen5 from "../../../assets/images/tecnologias/js.png"
import Imagen6 from "../../../assets/images/tecnologias/bootstrap.png"
import Imagen7 from "../../../assets/images/tecnologias/preact.png"
import Imagen8 from "../../../assets/images/tecnologias/react-bootstrap.png"
import Imagen9 from "../../../assets/images/tecnologias/Netlify.png"
import Imagen10 from "../../../assets/images/tecnologias/nodejs.webp"
import Imagen11 from "../../../assets/images/tecnologias/express.png"
import Imagen12 from "../../../assets/images/tecnologias/mongodb.svg"
import Imagen13 from "../../../assets/images/tecnologias/github.png"
import Imagen14 from "../../../assets/images/tecnologias/gitlab.png"
import Imagen15 from "../../../assets/images/tecnologias/trello.png"
import Imagen16 from "../../../assets/images/tecnologias/sqlServer.png"
import Imagen17 from "../../../assets/images/tecnologias/csharp.png"
import Imagen18 from "../../../assets/images/tecnologias/netFramework.png"
import Imagen19 from "../../../assets/images/tecnologias/mysql.png"
import Imagen20 from "../../../assets/images/tecnologias/figma.png"
import Imagen21 from "../../../assets/images/tecnologias/redux.png"
import ContenedorTec from './ContenedorTec';

const Tecnologias = () => {
    return (
        <>
        <div className='shadow-lg p-3 d-flex justify-content-center align-items-center slider bg-matrix'>
            <div className="slide-track">
                <ContenedorTec Imagen1={Imagen1}Imagen2={Imagen2}Imagen3={Imagen3}Imagen4={Imagen4}Imagen5={Imagen5}Imagen6={Imagen6}Imagen7={Imagen7}Imagen8={Imagen8}Imagen9={Imagen9}Imagen10={Imagen10}Imagen11={Imagen11}Imagen12={Imagen12}Imagen13={Imagen13}Imagen14={Imagen14}Imagen15={Imagen15}Imagen16={Imagen16}Imagen17={Imagen17}Imagen18={Imagen18}Imagen19={Imagen19} Imagen20={Imagen20} Imagen21={Imagen21}/>
                <ContenedorTec Imagen1={Imagen1}Imagen2={Imagen2}Imagen3={Imagen3}Imagen4={Imagen4}Imagen5={Imagen5}Imagen6={Imagen6}Imagen7={Imagen7}Imagen8={Imagen8}Imagen9={Imagen9}Imagen10={Imagen10}Imagen11={Imagen11}Imagen12={Imagen12}Imagen13={Imagen13}Imagen14={Imagen14}Imagen15={Imagen15}Imagen16={Imagen16}Imagen17={Imagen17}Imagen18={Imagen18}Imagen19={Imagen19} Imagen20={Imagen20} Imagen21={Imagen21}/>
                <ContenedorTec Imagen1={Imagen1}Imagen2={Imagen2}Imagen3={Imagen3}Imagen4={Imagen4}Imagen5={Imagen5}Imagen6={Imagen6}Imagen7={Imagen7}Imagen8={Imagen8}Imagen9={Imagen9}Imagen10={Imagen10}Imagen11={Imagen11}Imagen12={Imagen12}Imagen13={Imagen13}Imagen14={Imagen14}Imagen15={Imagen15}Imagen16={Imagen16}Imagen17={Imagen17}Imagen18={Imagen18}Imagen19={Imagen19} Imagen20={Imagen20} Imagen21={Imagen21}/>
            </div>
        </div>
        </>
    );
};

export default Tecnologias;
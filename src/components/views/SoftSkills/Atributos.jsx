import React from 'react';
import { Container,Col } from 'react-bootstrap';

const Atributos = ({item}) => {
    return (
        <div className='d-flex '>
        <Col>
        <p className='mx-2 texto fs-4'>{item.lenguaje}</p>
        </Col>
        <Col>
        <progress id="file" max="100" className='mt-1 border rounded' value={item.valor}>{item.valor}</progress>
        </Col>
        </div>
    );
};

export default Atributos;
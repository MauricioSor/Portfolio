import React from 'react';
import { Container,Col } from 'react-bootstrap';

const Atributos = ({item}) => {
    return (
        <div className='d-flex '>
        <Col>
        <li className='mx-2 texto fs-4'>{item.lenguaje}</li>
        </Col>
        </div>
    );
};

export default Atributos;
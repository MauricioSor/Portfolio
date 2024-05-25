import React from 'react';
import { Container,Col } from 'react-bootstrap';

const Skills = ({ item }) => {
    return (
        <>
            <div className='d-flex '>
                <Col>
                    <li className='mx-2 texto fs-4'>{item.skill}</li>
                </Col>
            </div>
        </>
    );
};
export default Skills;
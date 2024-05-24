import React from 'react';
import { Container } from 'react-bootstrap';

const Skills = ({item}) => {
    return (
        <>
            <li className='texto fs-4 ms-2'>{item.skill}</li>
        </>
    );
};
export default Skills;
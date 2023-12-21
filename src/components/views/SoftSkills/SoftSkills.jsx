import React from 'react';
import { ProgressBar, Container } from 'react-bootstrap';

const SoftSkills = () => {
    return (
        <>
        <Container className='bg-black p-5 d-flex'>
        <p className='mx-2 text-white'>Javascript</p>
        <progress id="file" max="100" className='mt-1 border rounded' value="70">70%</progress>
        </Container>
        <Container>
        
        </Container>
        </>
    );
};

export default SoftSkills;
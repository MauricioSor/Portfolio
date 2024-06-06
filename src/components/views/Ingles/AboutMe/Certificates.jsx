import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';

const Certificados = () => {
    return (
        <Container>
        <Row className='bg-black py-2 justify-content-center d-flex'>
        <Col className="" lg={5}md={12} xs={12}>
        <h3 className='fs-2 texto text-center my-2'><u className='subrayados'>Certificates</u></h3>
        </Col>
        <Col className="align-self-center text-center" lg={5}md={12} xs={12}>
        <a id="botonCertificados" target="_blank" href='https://drive.google.com/file/d/1GW4XF0t4_lJXO6ZX-opYlUviFaEMfmhe/view?usp=sharing' className='btn text-decoration-none'>Certificates of courses and skills<i class="bi bi-cloud-upload-fill"id='boton'/></a>
        </Col>
        </Row>
        </Container>
    );
};

export default Certificados;
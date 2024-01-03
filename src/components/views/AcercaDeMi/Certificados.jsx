import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';

const Certificados = () => {
    return (
        <Container>
        <Row className='bg-black py-2 justify-content-center d-flex'>
        <Col className="" lg={5}md={12} xs={12}>
        <h3 className='fs-2 texto text-center my-2'>Certificados</h3>
        </Col>
        <Col className="align-self-center" lg={5}md={12} xs={12}>
        <a id="boton" target="_blank" href='https://frtutneduar-my.sharepoint.com/personal/mauriciosoria_alu_frt_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmauriciosoria%5Falu%5Ffrt%5Futn%5Fedu%5Far%2FDocuments%2FCertificados%2FCertificados%2D2023%2Epdf&parent=%2Fpersonal%2Fmauriciosoria%5Falu%5Ffrt%5Futn%5Fedu%5Far%2FDocuments%2FCertificados&ga=1' className='btn text-decoration-none'>Certificados de cursos y competencias en linea <i class="bi bi-cloud-upload-fill"id='boton'/></a>
        </Col>
        </Row>
        </Container>
    );
};

export default Certificados;
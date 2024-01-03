import React from 'react';
import { Container,Col } from 'react-bootstrap';

const Certificados = () => {
    return (
        <Container className='d-flex justify-content-center mt-0 mb-2 bg-black py-3'>
        <Col>
        <h3 className='fs-3 texto text-center ms-5'>Certificados</h3>
        </Col>
        <Col>
        <a id="boton" target="_blank" href='https://frtutneduar-my.sharepoint.com/personal/mauriciosoria_alu_frt_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmauriciosoria%5Falu%5Ffrt%5Futn%5Fedu%5Far%2FDocuments%2FCertificados%2FCertificados%2D2023%2Epdf&parent=%2Fpersonal%2Fmauriciosoria%5Falu%5Ffrt%5Futn%5Fedu%5Far%2FDocuments%2FCertificados&ga=1' className='btn text-decoration-none'>Certificados de cursos y competencias en linea <i class="bi bi-cloud-upload-fill"id='boton'/></a>
        </Col>
        </Container>
    );
};

export default Certificados;
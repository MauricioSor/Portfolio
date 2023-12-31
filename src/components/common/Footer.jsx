import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {

    return (
        <Container className='bg-dark py-2' fluid id="footer">
            <Row className="container justify-content-center align-items-center">
                <Col sm={12} md={3} className="mx-5 align-self-start" style={{ maxWidth: 170, width: "100%" }}>
                    <h6 className="text-white text-center text-center texto">¡Escanea el QR con tu smartphone!</h6>
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={window.location.origin}
                        viewBox={`0 0 256 256`}
                    />
                </Col>
                <Col sm={12} md={6}>
                    <p className="text-light text-end" id="textoFooter">&copy; Todos los derechos Reservados- MauricioSor</p>
                    <div className="text-center">
                    <a  title="contador de visitas">
                        <img src="https://counter7.optistats.ovh/private/contadorvisitasgratis.php?c=abzgth1qauhdwepge4e7ct6nqmjessnj" border="0" title="contador de visitas" alt="contador de visitas" />
                    </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
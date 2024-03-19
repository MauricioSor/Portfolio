import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import { Row, Col, Container } from "react-bootstrap";
import github from"../../assets/icons/github.png"
import linkedin from"../../assets/icons/linkedin.png"
import gmail from"../../assets/icons/gmail.png"
import {redes} from "../../types/urls"

const Footer = () => {

    return (
        <Container className='bg-dark py-3' fluid id="footer">
            <Row className="container justify-content-center align-items-center">
                <Col sm={12} md={4} lg={4} className="" style={{ maxWidth: 170, width: "100%" }}>
                    <p className="text-white text-center texto">¡Escanea el QR con tu smartphone!</p>
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={window.location.origin}
                        viewBox={`0 0 256 256`}
                    />
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <p className="text-light text-end" id="textoFooter">&copy; Todos los derechos Reservados- MauricioSor</p>
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <Container className="text-center">
                    <p className="text-light  text-center" id="textoFooter">Mis redes</p>
                    <Container className="d-flex justify-content-center">
                    <a href={(redes.GitHub)} target="blank" className="mx-3 p-2" ><img src={github} alt="" style={{width:"30px",margin:"3px"}} /></a>
                    <a href={redes.linkedin} target="blank" className="mx-3 p-2" ><img src={linkedin} alt="" style={{width:"30px",margin:"3px"}} /></a>
                    <a href={redes.Gmail} target="blank" className="mx-3 p-2"><img src={gmail} alt="" style={{width:"30px",margin:"3px"}} /></a>
                    </Container>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
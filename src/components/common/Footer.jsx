import QRCode from "react-qr-code";
import { Row, Col, Container } from "react-bootstrap";
import github from "../../assets/icons/github.png"
import linkedin from "../../assets/icons/linkedin.png"
import gmail from "../../assets/icons/gmail.png"
import { redes } from "../../types/urls"

const Footer = () => {

    return (
        <>
            <Container className='bg-dark py-3 justify-content-center' fluid id="footer">
                <Row className="justify-content-around align-items-center">
                    <Col lg={4} md={4} sm={12}  className="" style={{ maxWidth: 170, width: "100%" }}>
                        <p className="text-white text-center texto">¡Escanea el QR con tu smartphone!</p>
                        <QRCode
                            size={160}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={window.location.origin}
                            viewBox={`0 0 256 256`}
                        />
                    </Col>
                    <Col  lg={4} md={4}  sm={12}>
                        <p className="text-light text-end" id="textoFooter">&copy; Todos los derechos Reservados- MauricioSor</p>
                    </Col>
                    <Col lg={4} md={4} sm={12} >
                        <Container className="text-center">
                            <p className="text-light  text-center" id="textoFooter">Mis redes sociales</p>
                            <Container className="d-flex justify-content-center">
                                <a href={(redes.GitHub)} target="blank" className="mx-3 redes p-2" ><img src={github} alt="Imagen de github"  style={{ width: "30px", margin: "3px" }} /></a>
                                <a href={redes.linkedin} target="blank" className="mx-3 redes p-2" ><img src={linkedin} alt="Imagen de linkedin"  style={{ width: "30px", margin: "3px" }} /></a>
                                <a href={redes.Gmail} target="blank" className="mx-3 redes p-2"><img src={gmail} alt="Imagen de gmail"  style={{ width: "30px", margin: "3px" }} /></a>
                            </Container>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Footer;
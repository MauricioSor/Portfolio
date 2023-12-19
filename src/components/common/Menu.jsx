import * as React from 'react';
import {Nav,Navbar,Container,Image} from "react-bootstrap"
import Logo from "../../assets/logo1.png"
const Menu = () => {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand  className='d-flex align-items-center justify-content-start'>
                    <Image src={Logo} style={{height:"50px"}} alt=""className='mx-2' roundedCircle/>
                    <p className='ms-2 mt-3'>Mauricio Agustin Soria </p>
                </Navbar.Brand>
                    <Nav className="me-0">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#pricing">Biografia</Nav.Link>
                        <Nav.Link href="#features">Contacto</Nav.Link>
                        <Nav.Link href="#pricing">Tecnologias</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;
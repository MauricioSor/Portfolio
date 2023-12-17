import * as React from 'react';
import {Nav,Navbar,Container} from "react-bootstrap"

const Menu = () => {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
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
import * as React from 'react';
import { Nav, Navbar, Container, Image, Form, NavDropdown,Button } from "react-bootstrap"
import Logo from "../../assets/images/AcercaDeMi/logo1.png"
const Menu = () => {

    return (
        <>
            <Navbar expand="md" className="bg-dark site-wrap" variant='dark' fixed='top'>
                <Container fluid>
                    <Navbar.Brand href="#" className='d-flex text-white'>
                        <Image src={Logo}  style={{ height: "50px" }} alt="Logo Web" className='mx-2' roundedCircle />
                        <p className='ms-2 mt-3 text-white'>Mauricio Agustin Soria </p>
                    </Navbar.Brand>
                    <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav" />
                    
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;
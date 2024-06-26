import * as React from 'react';
import { Nav, Navbar, Container, Image, Form, NavDropdown, Button } from "react-bootstrap"
import Logo from "../../assets/images/AcercaDeMi/logo1.png"
import { useState } from 'react';


const Menu = ({CambioIdioma,idioma}) => {
    const [openMenu, setOpenMenu] = useState(false)
    const changeStateMenu=()=>setOpenMenu(!openMenu)
    return (
        <>
            <Navbar expand="md" expanded={openMenu} onClick={changeStateMenu} className="bg-dark site-wrap" variant='dark' fixed='top'>
                <Container fluid>
                    <Navbar.Brand href="#" className='d-flex text-white'>
                        <Image src={Logo} style={{ height: "50px" }} alt="Logo Web" className='mx-2' roundedCircle />
                        <p className='ms-2 mt-3 text-white'>Mauricio Agustin Soria </p>
                    </Navbar.Brand>
                    <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="navbarScroll" className=' responsive-navbar-nav' >
                        <Nav className="ms-auto" style={{ maxHeight: '100px' }} navbarScroll>
                                <Container className='ms-4  switch'>
                                    <Form.Check
                                        className='p-2 text-white  switch'
                                        type="switch"
                                        id="custom-switch"
                                        label={idioma ? ("EN") : ("ES")}
                                        onChange={() =>{ CambioIdioma();changeStateMenu}}
                                    />
                                </Container>
                            <Nav.Link href="#inicio" onClick={()=>{changeStateMenu}} className='' >{idioma?("Home"):("Inicio")}</Nav.Link>
                            <Nav.Link href="#proyectos" onClick={()=>{changeStateMenu}} className='' >{idioma?("Projects"):("Proyectos")}</Nav.Link>
                            <Nav.Link href="#contacto" onClick={()=>{changeStateMenu}} className='' to >{idioma?("Contact"):("Contacto")}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;
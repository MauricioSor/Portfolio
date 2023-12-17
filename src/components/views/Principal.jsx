import { Container } from "react-bootstrap";
import muestra from "../../assets/foto.png"
import Tecnologias from "./Tecnologias";

const Principal = () => {
    return (
        <Container className="text-center main d-flex align-items-center">
        {/* <AcercaDeMi/> */}
        <Tecnologias/>
        {/* <Contacto/> */}
        </Container>
    );
};

export default Principal;
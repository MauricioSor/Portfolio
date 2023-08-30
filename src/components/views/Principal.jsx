import { Container } from "react-bootstrap";
import muestra from "../../assets/foto.png"
const Principal = () => {
    return (
        <Container className="text-center main d-flex align-items-center">
        <img src={muestra} alt="" className="w-100 " />
        </Container>
    );
};

export default Principal;
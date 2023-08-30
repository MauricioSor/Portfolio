import { Container } from "react-bootstrap";
import muestra from "../../assets/foto.png"
const Principal = () => {
    return (
        <Container className="text-center">
        <img src={muestra} alt="" />
        </Container>
    );
};

export default Principal;
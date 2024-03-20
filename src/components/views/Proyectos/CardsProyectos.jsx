
import { Card, Button, Container, Badge, Carousel } from "react-bootstrap"
import { useState } from "react"
const CardsProyectos = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Container onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Card
                style={{ width: '18rem', height: "27rem" }}
                className='m-auto'>
                <Card.Title className='text-center my-2 fs-4'><b>{item.title}</b></Card.Title>
                <Card.Body className='text-center d-flex justify-content-center flex-column'>
                    <Carousel interval={isHovered ? 1000 : null}>
                        {item.image.map((imagen, index) => (
                            <Carousel.Item key={index}
                            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                <Card.Img
                                    className='mx-auto object-fit-contain'
                                    variant="center"
                                    src={imagen}
                                    alt={`Imagen ${index}`}
                                    style={{ width: "220px", height: "120px" }}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <Card.Text className='mb-3'>
                        {item.text}<br />
                        <br />
                        {item.technologies.map((tech, index) => (
                            <Badge className='mx-1' key={index}>{tech}</Badge>
                        ))}
                    </Card.Text>
                    <Container className='mt-auto'>
                        <Button id="butonIrALaWeb">
                            <a href={item.link} target='_blank' className='boton mt-5 text-black text-decoration-none fw-bold'>
                                Ir a la web
                            </a>
                        </Button>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CardsProyectos;
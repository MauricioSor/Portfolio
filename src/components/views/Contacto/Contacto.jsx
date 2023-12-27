import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { enviarEmail } from '../../../helpers/queries';


const Contacto = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const enviar = async (mensaje) => {
        console.log(mensaje)
        enviarEmail(mensaje)/* .then((resp) => {
            if (resp.status == 200) {
                console.log("enviado")
                reset();
            }
        }) */
    }
    return (
        <div className='bg-black py-3 d-flex justify-content-center flex-column'>
            <h6 className='texto fs-5 text-center'  >¡Pongamonos en contacto!</h6>
            <Container className=''>
                <Form onSubmit={handleSubmit(enviar)}>
                    <Row className="mb-6">
                        <Form.Group as={Col} md="6" >
                            <Form.Label className='texto'>Nombre: </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Marsdsdqwek"
                                {...register("nombre", {
                                    required: "El nombre es un campo necesario",
                                    minLength: {
                                        value: 3,
                                        message: "*Caracteres minimos 3*"
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "*Caracteres maximos 20*"
                                    },
                                    pattern: {
                                        value: /^[A-Z][a-zA-Z0-9\u00f1\u00d1]*(?: [A-Z][a-zA-Z0-9\u00f1\u00d1]*)*(?: [A-Z][a-zA-Z0-9\u00f1\u00d1]*)?$/,
                                        message: `*No puede se permiten caracteres especiales (Pj. @$%á".)*`
                                    }
                                })}
                            />
                            <Form.Text className='text-danger'>{errors.nombre?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group as={Col} md="6" >
                            <Form.Label className='texto'>Mensaje: </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Markdasddsd"
                                {...register("mensaje", {
                                    required: "Es necesario que escriba un mensaje",
                                    minLength:{
                                        value:10,
                                        message:"Caracteres minimos 10"
                                    },
                                    maxLength:{
                                        value:500,
                                        message:"Caracteres maximos 500"
                                    }
                                })}
                            />
                            <Form.Text className='text-danger'>{errors.mensaje?.message}</Form.Text>
                        </Form.Group>
                    </Row>
                    <Button className='mt-2 ' type="submit" id='boton'>Enviar</Button>
                </Form>
            </Container>
        </div>
    );
};

export default Contacto;
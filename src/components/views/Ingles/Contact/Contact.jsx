import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { enviarEmail } from '../../../../helpers/queries';
import Swal from 'sweetalert2';


const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const enviar = async (mensaje) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Confirmar envio de mensaje",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si,enviar!",
            cancelButtonText: "No,cancelar!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                enviarEmail(mensaje).then((resp) => {
                    if (resp.status == 200) {
                        reset();
                        Swal.fire({
                            title: "Correo enviado",
                            icon: "success"
                        })
                    }
                })
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Envio cancelado",
                    icon: "error"
                });
            }
        });
    }
    return (
        
        <div id='contacto' className='bg-black py-3 mb-3 d-flex justify-content-center flex-column border-dark rounded'>
            <h2 className='texto fs-2 text-center'  >¡Contact me!</h2>
            <Container className=''>
                <Form onSubmit={handleSubmit(enviar)}>
                    <Row className="mb-6">
                        <Form.Group as={Col} md="6" >
                            <Form.Label className='texto'>Name: </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your name..."
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
                                        value: /^[a-zA-Z0-9\u00f1\u00d1]*(?: [a-zA-Z0-9\u00f1\u00d1]*)*(?: [a-zA-Z0-9\u00f1\u00d1]*)?$/,
                                        message: `*No puede se permiten caracteres especiales (Pj. @$%á".)*`
                                    }
                                })}
                            />
                            <Form.Text className='text-danger'>{errors.nombre?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group as={Col} md="6" >
                            <Form.Label className='texto'>Message: </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter a message..."
                                
                                {...register("mensaje", {
                                    required: "Es necesario que escriba un mensaje",
                                    minLength: {
                                        value: 10,
                                        message: "Caracteres minimos 10"
                                    },
                                    maxLength: {
                                        value: 500,
                                        message: "Caracteres maximos 500"
                                    }
                                })}
                            />
                            <Form.Text className='text-danger'>{errors.mensaje?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group as={Col} md="6" >
                            <Form.Label className='texto'>Mail: </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your email..."
                                {...register("correo", {
                                    required: "El correo es un campo necesario",
                                    minLength: {
                                        value: 12,
                                        message: "*Caracteres minimos 12*"
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "*Caracteres maximos 30*"
                                    }
                                })}
                            />
                            <Form.Text className='text-danger'>{errors.nombre?.message}</Form.Text>
                        </Form.Group>
                    </Row>
                    <Button id='botonEnviar' className='mt-2 text-black' type="submit">Send</Button>
                </Form>
            </Container>
        </div>
    );
};

export default Contact;
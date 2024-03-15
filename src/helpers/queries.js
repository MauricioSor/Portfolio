
import axios from "axios";

export const enviarEmail = async (mensaje) => {
    try {
        console.log("123");
        const respuesta = await fetch('http://emailsender-snowy.vercel.app/enviar', {
            method: "POST",
            headers:{
            "Content-Type":"application/json",
            },
            body: JSON.stringify(mensaje)
        })
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}
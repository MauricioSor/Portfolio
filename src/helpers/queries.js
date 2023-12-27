
import axios from "axios";
export const enviarEmail = async (mensaje) => {

console.log(mensaje)
    try {
        const req = axios.post('https://emailsender-snowy.vercel.app/enviar', {
            method: "POST",
            Headers:{
            "Content-Type":"application/json",
            },
            body: JSON.stringify(mensaje)
        })
            .then(function (response) {
                return req.status;
            })
    } catch (error) {
        console.log(error);
    }
}
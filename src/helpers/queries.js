
export const enviarEmail = async (mensaje) => {
    try {
        const respuesta = await fetch('https://emailsender-snowy.vercel.app/enviar', {
            method: "POST",
            headers:{
            "Content-Type":"application/json",
            },
            body: JSON.stringify(mensaje)
        })
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}
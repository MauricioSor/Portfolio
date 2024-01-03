import Tecnologias from "./Tecnologias/Tecnologias";
import MatrixAnimation from "./MatrixAnimation";
import Proyectos from "./Proyectos/Proyectos";
import Contacto from "./Contacto/Contacto";
import Biografia from "./AcercaDeMi/Biografia";
import Certificados from "./AcercaDeMi/Certificados";
import Conocimientos from "./SoftSkills/Conocimientos";


const Principal = () => {
    return (
        <>
            <div className="min-h-screen">
            <MatrixAnimation className="absolute inset-0" id="fondo" />
                <div className="flex flex-col">
                    <Biografia />
                    <Conocimientos/>
                    <Certificados/>
                    <Tecnologias />
                    <Proyectos/>
                    <Contacto/>
                </div>
            </div>
        </>
    );
};

export default Principal;
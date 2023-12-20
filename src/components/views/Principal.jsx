import Tecnologias from "./Tecnologias/Tecnologias";
import Biografia from "./Biografia";
import MatrixAnimation from "./MatrixAnimation";
import SoftSkills from "./SoftSkills/SoftSkills"
import Proyectos from "./Proyectos/Proyectos";
import Certificados from "./Certificados";


const Principal = () => {
    return (
        <>
            <div className="min-h-screen">
            <MatrixAnimation className="absolute inset-0" id="fondo" />
                <div className="flex flex-col">
                    <Biografia />
                    <SoftSkills/>
                    <Certificados/>
                    <Tecnologias />
                    <Proyectos/>
                    {/* <Contacto/> */}
                </div>
            </div>
        </>
    );
};

export default Principal;
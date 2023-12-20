import Tecnologias from "./Tecnologias";
import Biografia from "./Biografia";
import MatrixAnimation from "./MatrixAnimation";
import SoftSkills from "./SoftSkills"
import Proyectos from "./Proyectos/Proyectos";

const Principal = () => {
    return (
        <>
            <div className="min-h-screen">
            <MatrixAnimation className="absolute inset-0" id="fondo" />
                <div className="flex flex-col">
                    <Biografia />
                    <SoftSkills/>
                    <Tecnologias />
                    <Proyectos/>
                    {/* <Contacto/> */}
                </div>
            </div>
        </>
    );
};

export default Principal;
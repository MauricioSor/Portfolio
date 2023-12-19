import Tecnologias from "./Tecnologias";
import Biografia from "./Biografia";
import MatrixAnimation from "./MatrixAnimation";

const Principal = () => {
    return (
        <>
            <div className="min-h-screen">
            <MatrixAnimation className="absolute inset-0" id="fondo" />
                <div className="flex flex-col">
                    <Biografia />
                    {/* <SoftSkillss/> */}
                    <Tecnologias />
                    {/* <Proyectos/> */}
                    {/* <Contacto/> */}
                </div>
            </div>
        </>
    );
};

export default Principal;
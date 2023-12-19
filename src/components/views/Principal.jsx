import Tecnologias from "./Tecnologias";
import Biografia from "./Biografia";
import MatrixAnimation from "./MatrixAnimation";

const Principal = () => {
    return (
        <>
        <MatrixAnimation className="absolute inset-0" />
        <div className="flex flex-col">
        <Biografia/>
        {/* <SoftSkillss/> */}
        <Tecnologias/>
        {/* <Proyectos/> */}
        {/* <Contacto/> */}
        </div>
        </>
    );
};

export default Principal;
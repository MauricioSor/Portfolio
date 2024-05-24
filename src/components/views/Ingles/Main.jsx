import React from 'react';
import MatrixAnimation from "../Español/MatrixAnimation"
import Biography from "./AboutMe/Biography"
import Certificates from "./AboutMe/Certificates"
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Knowledge from './SoftSkills/Knowledge';
import Techs from './Techs/Techs';

const Main = () => {
    return (
        <div className="min-h-screen">
            <MatrixAnimation className="absolute inset-0" id="fondo" />
            <div className="flex flex-col">
                <Biography />
                <Knowledge />
                <Certificates />
                <Techs />
                <Projects />
                <Contact />
            </div>
        </div>
    );
};

export default Main;
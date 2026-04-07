import React from "react";
import Hero from "../component/Hero";
import About from "../component/About";
import Skills from "../component/Skills";
import Projects from "../component/Projects";
import Contact from "../component/Contact";

function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact/>
        </div>
    )
}

export default Home
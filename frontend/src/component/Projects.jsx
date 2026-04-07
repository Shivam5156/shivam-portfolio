import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../assets/projects";
import { FaArrowRight } from "react-icons/fa6";

function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            id="projects"
            className="py-20 bg-dark-200"
        >
            <div className="container mx-auto px-6">

                <h2 className="text-3xl font-bold text-center mb-4">
                    My <span className="text-purple">Projects</span>
                </h2>

                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    A collection of my recent work
                </p>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/Shivam5156 "
                        className="inline-flex items-center gap-2 px-6 py-3 border border-purple rounded-lg font-medium text-white 
                        hover:bg-purple/20 hover:shadow-lg hover:shadow-purple-500/10 
                        transition duration-300 group"
                    >
                        <span>View More Projects</span>
                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>

            </div>
        </motion.div>
    );
}

export default Projects;
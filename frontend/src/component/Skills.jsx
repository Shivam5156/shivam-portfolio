import React from "react";
import { motion } from "framer-motion";
import skills from "../assets/skills";

function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id="skills"
            className="py-20 bg-dark-200"
        >
            <div className="container mx-auto px-6">

                <h2 className="text-3xl font-bold text-center mb-4">
                    my <span className="text-purple">Skills</span>
                </h2>

                <p className="text-gray-400 text-center mx-auto max-w-2xl mb-12">
                    Skills I am good at
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

                    {skills && skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-dark-300 border border-white/10 rounded-2xl p-6 
                            hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10 
                            transition duration-300 cursor-pointer"
                        >

                            {/* Icon + Title */}
                            <div className="flex items-center gap-4 mb-4">
                                <skill.icon className="w-10 h-10 text-purple" />
                                <h3 className="text-xl font-semibold text-white">
                                    {skill.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {skill.desc}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {skill.tech && skill.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-dark-400 text-gray-300 rounded-full text-xs hover:bg-purple/20 transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </motion.div>
    );
}

export default Skills;
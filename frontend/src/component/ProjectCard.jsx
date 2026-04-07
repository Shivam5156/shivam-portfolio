import React from "react";

function ProjectCard({ title, desc, image, tech, github, live }) {
    return (
        <div className="bg-dark-300 rounded-2xl overflow-hidden border border-white/10 
        hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10 
        transition duration-300 cursor-pointer">

            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-60 object-cover hover:scale-105 transition duration-500"
            />

            <div className="p-6">

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 text-white">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {tech && tech.map((item, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-dark-400 text-gray-300 rounded-full text-xs hover:bg-purple/20 transition"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                    <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium text-white 
                        hover:bg-purple-700 transition duration-300"
                    >
                        View Demo
                    </a>

                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 border border-purple font-medium rounded-lg 
                        hover:bg-purple/20 transition duration-300"
                    >
                        Code
                    </a>
                </div>

            </div>
        </div>
    );
}

export default ProjectCard;
import React from "react";

function ProjectCard({ title, desc, image, tech, github, live }) {
    return (
        <div className="h-full flex flex-col bg-dark-300 rounded-xl overflow-hidden border border-white/10 
        hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10 
        transition duration-300 group">

            {/* Image (reduced height) */}
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-40 sm:h-44 object-cover group-hover:scale-105 transition duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold mb-1 text-white line-clamp-1">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
                    {desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {tech && tech.map((item, index) => (
                        <span
                            key={index}
                            className="px-2 py-0.5 bg-dark-400 text-gray-300 rounded-full text-[10px] sm:text-xs"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex flex-col sm:flex-row gap-2">

                    <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 text-center px-3 py-1.5 bg-purple rounded-md text-sm font-medium text-white 
                        hover:bg-purple-700 transition duration-300"
                    >
                        View Demo
                    </a>

                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 text-center px-3 py-1.5 border border-purple rounded-md text-sm font-medium 
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
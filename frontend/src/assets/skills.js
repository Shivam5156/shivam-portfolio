import { FaReact, FaNodeJs, FaDatabase, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const skills = [
    {
        title: "Frontend Development",
        desc: "Building responsive and interactive user interfaces with modern frameworks.",
        tech: ["React", "Tailwind CSS", "JavaScript"],
        icon: FaReact,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        hover: "hover:shadow-purple-500/20",
    },
    {
        title: "Backend Development",
        desc: "Creating robust server-side applications and RESTful APIs.",
        tech: ["Node.js", "Express.js", "MongoDB"],
        icon: FaNodeJs,
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/30",
        hover: "hover:shadow-green-500/20",
    },
    {
        title: "Database Management",
        desc: "Designing and optimizing databases for performance and scalability.",
        tech: ["MongoDB"],
        icon: FaDatabase,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        hover: "hover:shadow-blue-500/20",
    },
    {
        title: "Programming & DSA",
        desc: "Strong foundation in Data Structures and Algorithms using Java. Solved problems on LeetCode.",
        tech: ["Java", "DSA", "OOPs", "Problem Solving"],
        icon: FaJava,
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/30",
        hover: "hover:shadow-orange-500/20",
    },
];

export default skills;
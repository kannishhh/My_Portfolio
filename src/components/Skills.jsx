import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiFirebase, SiFlask } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Python", icon: <FaPython className="text-green-400" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-red-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 max-w-7xl mt-20 mx-auto"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 p-1 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2 p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-2 transition transform"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

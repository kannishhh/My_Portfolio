import { motion } from "framer-motion";
import InitialsLogo from "../utils/logo";

const projects = [
  {
    title: "Netflix-GPT",
    description:
      "A movie recommendation app with GPT + TMDB + Plex integration.",
    github: "https://github.com/kannishhh/Neflix-GPT",
  },
  {
    title: "Loan Prediction App",
    description:
      "ML-powered web app for loan repayment prediction with Flask + React.",
    github: "https://github.com/kannishhh/loan-predictor-app",
  },
  {
    title: "My Food App",
    description:
      "A Swiggy-like app with infinite scroll and real API integration.",
    github: "https://github.com/kannishhh/my-food-app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-10 py-20 mt-20 max-w-7xl mx-auto"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text
        p-1 text-transparent"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 flex flex-col items-center h-[350px] w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mt-6">
              <InitialsLogo fullName={project.title} size={100} />
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow text-center">
              <div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-md mt-2">
                  {project.description}
                </p>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <a
                  href={project.github}
                  className="px-4 py-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

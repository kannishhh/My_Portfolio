import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20"
    >
      <motion.div
        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-indigo-500"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src="../../public/profile_photo.png" 
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="max-w-2xl text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold  bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Hey! I’m <span className="font-semibold text-indigo-500">Kanish Kainth</span>,
          a <span className="text-purple-500">Frontend Developer</span> and{" "}
          <span className="text-indigo-500">AI Enthusiast</span>.  
          I love building visually appealing, user-friendly websites and 
          exploring how AI can be integrated into modern applications.  
          Currently learning <span className="font-semibold">React, Python, Flask & DSA</span> 🚀
        </p>

        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a
            href="../../public/Kanish Kainth_Resume.pdf"
            download={"Kanish Kainth_Resume.pdf"}
            className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-indigo-500 hover:bg-indigo-500/20 transition"
          >
            Let’s Connect
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

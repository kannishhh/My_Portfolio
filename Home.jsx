import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <motion.div
        className="text-5xl  md:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Hi, I’m Kanish Kainth 👋
      </motion.div>

      <motion.p className="mt-6 text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
        A passionate <span className="text-indigo-500">Frontend Developer</span>{" "}
        & <span className="text-purple-500">AI Enthusiast</span> 🚀
      </motion.p>

      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3  rounded-full border border-indigo-500 hover:bg-indigo-500/20 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Home;

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        SERVICE_ID, 
        TEMPLATE_ID,
        form.current,
        // "NYMQv_w2PC1IRYQKt"
        PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess("Message sent successfully 🚀");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          setSuccess("Something went wrong ❌");
          setLoading(false);
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 mt-20 max-w-5xl mx-auto flex flex-col items-center justify-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="w-full bg-white/20 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col gap-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <textarea
          rows="5"
          name="message"
          placeholder="Your Message"
          className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 transition text-white font-medium"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {success && (
          <p className="text-center mt-2 text-green-400 font-medium">{success}</p>
        )}
      </motion.form>

      <motion.div
        className="flex gap-6 mt-2 text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
      >
        <a
          href="https://www.linkedin.com/in/kanishkainth/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-indigo-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/kannishhh"
          target="_blank"
          rel="noreferrer"
          className="hover:text-indigo-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:knshkainth200@gmail.com"
          className="hover:text-indigo-400 transition"
        >
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;

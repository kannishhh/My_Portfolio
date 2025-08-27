import { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Home from "./sections/Home";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="bg-gradient-to-br  from-gray-50 via-white to-gray-200 text-black dark:from-gray-900 dark:via-black dark:to-gray-800 dark:text-white  transition-colors duration-500 gap-0">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="-space-y-40">

      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      </div>

    </div>
  );
}

export default App;

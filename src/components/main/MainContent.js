import React from "react";
import HomePage from "./HomePage";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "../Footer";


const MainContent = ({ bgColor, language }) => {
  return (
    <div>
      <section id="home">
        <HomePage bgColor={bgColor}language={language} /> {/* ← HomePage に bgColor を渡す */}
      </section>
      <section id="about">
        <About language={language} />
      </section>
      <section id="projects">
        <Projects language={language} />
      </section>
      <section id="skills">
        <Skills language={language} />
      </section>
      <section id="footer">
        <Footer language={language} />
      </section>
    </div>
  );
};

export default MainContent;

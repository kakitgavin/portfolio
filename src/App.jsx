import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Galaxy from "./components/Galaxy";
import { useState } from "react";

function App() {
  return (
    <main className="max-w-7xl min-w-70 mx-auto">
      <canvas id="threeJsCanvas" className="top-0 -z-1" />
      <NavBar />
      <Hero />
      <About />
      <Tech />
      <Experience />
      <Projects />
    </main>
  );
}

export default App;

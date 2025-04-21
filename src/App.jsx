import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <main className="max-w-7xl min-w-70 mx-auto">
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

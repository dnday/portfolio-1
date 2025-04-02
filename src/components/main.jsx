import { Route, Routes } from 'react-router-dom';  // Import Routes dan Route
import Nav from "./nav";
import Hero from "./hero";
import Skill from "./skill";
import Project from "./project";
import About from "./about";
import Footer from "./footer";

const Main = () => {
  return (
    <div className="font-inter gradient-background">
      <Nav />
      <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;

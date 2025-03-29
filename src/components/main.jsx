import { Route, Routes } from 'react-router-dom';  // Import Routes dan Route
import Nav from "./nav";
import Hero from "./hero";
import Skill from "./skill";
import Project from "./project";
import Footer from "./footer";

const Main = () => {
  return (
    <div className="bg-indigo-700">
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
};

export default Main;

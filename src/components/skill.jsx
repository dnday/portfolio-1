import { useState, useEffect, useRef } from 'react';
import {
  SiCplusplus,
  SiArduino,
  SiGo,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
} from 'react-icons/si';
import { BiLogoGoogleCloud } from 'react-icons/bi';

const skills = [
  { name: 'C++', icon: <SiCplusplus size={40} /> },
  { name: 'Arduino', icon: <SiArduino size={40} /> },
  { name: 'Go', icon: <SiGo size={40} /> },
  { name: 'Python', icon: <SiPython size={40} /> },
  { name: 'HTML', icon: <SiHtml5 size={40} /> },
  { name: 'CSS', icon: <SiCss3 size={40} /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} /> },
  { name: 'React.js', icon: <SiReact size={40} /> },
  { name: 'Google Cloud', icon: <BiLogoGoogleCloud size={40} /> },
];

const Skill = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting && entry.target) {
          setVisibleSkills((prevSkills) => [...prevSkills, skills[index]]);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="min-h-screen text-gray-100 flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold mb-6">My Skills</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillRefs.current[index] = el)}
            className={`text-white p-4 rounded-lg shadow-md transform transition-all duration-500 ease-in-out opacity-0 ${visibleSkills.includes(skill) ? 'opacity-100 scale-105' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex justify-center">{skill.icon}</div>
            <p className="mt-2 text-xl text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;

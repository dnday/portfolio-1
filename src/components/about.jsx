import React, { useEffect, useState } from "react";
import HeroPic from "../assets/self2.jpg"; // Assuming the image is stored here
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

const About = () => {
  const [inView, setInView] = useState(false);

  const resumeExperience = [
    {
      title: "Software Developer Intern",
      company: "XYZ Company",
      years: "2023",
      mainTech: ["JavaScript", "React"],
      technologies: ["Node.js", "MongoDB", "Express"],
    },
    {
      title: "Frontend Developer Intern",
      company: "ABC Company",
      years: "2022",
      mainTech: ["HTML", "CSS", "React"],
      technologies: ["Webpack", "Sass"],
    },
  ];

  const resumeBasicInfo = {
    section_name: { experience: "Experience" },
  };

  const sectionName = resumeBasicInfo.section_name.experience;

  const work = resumeExperience.map((work, i) => {
    const technologies = work.technologies;
    const mainTechnologies = work.mainTech;

    const mainTech = mainTechnologies.map((technology, i) => {
      return (
        <Badge pill className="main-badge mr-2 mb-2" key={i}>
          {technology}
        </Badge>
      );
    });

    const tech = technologies.map((technology, i) => {
      return (
        <Badge pill className="experience-badge mr-2 mb-2" key={i}>
          {technology}
        </Badge>
      );
    });

    return (
      <VerticalTimelineElement
        className={`vertical-timeline-element--work ${inView ? "animate" : ""}`}
        date={work.years}
        iconStyle={{
          background: "#AE944F",
          color: "#fff",
          textAlign: "center",
        }}
        icon={<i className="fab fa-angular experience-icon"></i>}
        key={i}
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>{mainTech}</div>
        <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
          {work.title}
        </h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
          {work.company}
        </h4>
        <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
      </VerticalTimelineElement>
    );
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target); // Stop observing once it's in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    const timelineElements = document.querySelectorAll('.vertical-timeline-element');
    timelineElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);

  return (
    <>
      {/* Title Section */}
      <div className="mt-10">
        <h1 className="font-serif text-7xl font-semibold text-yellowg text-center mb-4 sm:mb-0">
          I'm Marcel.
        </h1>
      </div>

      {/* About Content */}
      <div className="flex justify-center items-center">
        <div className="max-w-7xl flex flex-col mt-5 sm:flex-row items-center p-8">
          {/* Image Container */}
          <div className="w-full sm:w-auto sm:mr-10 mb-5 flex justify-center">
            <div className="overflow-hidden rounded-t-full shadow-lg">
              <img
                src={HeroPic}
                alt="Picture of Developer"
                className="object-cover rounded-t-full w-64 h-64 sm:w-64 sm:h-64 transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
              />
            </div>
          </div>

        
         {/* Text container */}
         <div className="w-full">
            <div className="text-left border-0 rounded-xl background-radient sm:text-left">
                        <p className="text-2xl text-yellowg font-serif">
                            <span className="text-2xl mb-7 sm:text-5xl text-greeny">
                                I'm a first-year Information Engineering student at Universitas
                                Gadjah Mada.
                            </span>
                            <br />
                            I have a passion for web development, cloud computing,
                            IoT, and data science.
                        </p> 
                </div>
            </div>
        </div>
        

        
      </div>

      {/* Experience Section */}
      <div className="flex justify-center items-center mt-10">
        <h2 className="text-yellowg font-serif text-5xl">Experience</h2>
      </div>

      {/* Timeline */}
      <div className="col-md-8 mx-auto mt-5">
        <VerticalTimeline>
          {work}
          <VerticalTimelineElement
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
          />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default About;

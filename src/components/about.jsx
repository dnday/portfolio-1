import React, { useEffect, useState } from "react";
import HeroPic from "../assets/self2.jpg"; // Assuming the image is stored here
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

const About = () => {
  const [inView, setInView] = useState(new Set());

  const resumeExperience = [
    {
      organization: "KOMATIK UGM",
      position: "Member of IoT Gama",
      tasks: ["Learn about IoT (sensors, microcontroller, programming language, LoRa) and its application to solve real-world problems"],
      startDate: "February 2025",
      endDate: "Present",
    },
    {
      organization: "KMTETI",
      position: "Workshop Staff",
      tasks: ["Organize training sessions and boot camps related to technical skills in support of classroom and off-site lectures"],
      startDate: "January 2025",
      endDate: "Present",
    },
    {
      organization: "FindIT! UGM",
      position: "Logistic Division Staff",
      tasks: ["Managing needs of the event including property, korsa/workshirt, and consumption"],
      startDate: "October 2024",
      endDate: "Present",
    },
    {
      organization: "Technocorner UGM",
      position: "Robotic Technical Staff",
      tasks: ["Managing robotic competition in Technocorner especially in Line Follower"],
      startDate: "October 2024",
      endDate: "Present",
    },
    {
      organization: "Misa Kampus UGM",
      position: "Staff of Human Resources and Development",
      tasks: ["Engaged in staff recruitment and development programs"],
      startDate: "September 2024",
      endDate: "Present",
    },
  ];

  const work = resumeExperience.map((work, i) => {
    const tasks = work.tasks.map((task, index) => (
      <li key={index} className="list-disc ml-5">
        {task}
      </li>
    ));

    return (
      <VerticalTimelineElement
        className={`vertical-timeline-element--work ${inView.has(i) ? "animate" : ""}`}
        date={`${work.startDate} - ${work.endDate}`}
        key={i}
        icon={<span className="iconify" data-icon="mdi:dot" data-inline="false"></span>}
      >
        <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
          {work.organization}
        </h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
          {work.position}
        </h4>
        <ul className="mt-3">{tasks}</ul>
      </VerticalTimelineElement>
    );
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView((prevInView) => new Set(prevInView).add(parseInt(entry.target.getAttribute('data-index'), 10)));
            observer.unobserve(entry.target); // Stop observing once it's in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    const timelineElements = document.querySelectorAll('.vertical-timeline-element--work');
    timelineElements.forEach((element, index) => {
      element.setAttribute('data-index', index);
      observer.observe(element);
    });

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
        </VerticalTimeline>
      </div>
    </>
  );
};

export default About;


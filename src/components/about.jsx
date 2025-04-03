import React from "react";
import HeroPic from "../assets/self2.jpg";
import { motion } from "framer-motion";

const About = () => {
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pb-20"
    >
      {/* Title Section */}
      <motion.div 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-10"
      >
        <h1 className="font-serif text-7xl font-semibold text-yellowg text-center mb-4 sm:mb-0">
          I'm Marcel.
        </h1>
      </motion.div>

      {/* About Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex justify-center items-center"
      >
        <div className="max-w-7xl flex flex-col mt-5 sm:flex-row items-center p-8">
          {/* Image Container */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="w-full sm:w-auto sm:mr-10 mb-5 flex justify-center"
          >
            <motion.div 
              className="overflow-hidden rounded-t-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={HeroPic}
                alt="Picture of Developer"
                className="object-cover rounded-t-full w-64 h-64 sm:w-64 sm:h-64"
              />
            </motion.div>
          </motion.div>

          {/* Text container */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="w-full"
          >
            <div className="text-left border-0 rounded-xl background-radient sm:text-left">
              <p className="text-2xl text-yellowg font-serif">
                <span className="text-2xl mb-7 sm:text-5xl text-greeny">
                  I'm a first-year Information Engineering student at Universitas
                  Gadjah Mada.
                </span>
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  I have a passion for web development, cloud computing,
                  IoT, and data science.
                </motion.span>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="container mx-auto px-4 pb-16 mt-10"
      >
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-yellowg font-serif text-5xl text-center mb-16"
        >
          Experience
        </motion.h2>
        
        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Mobile View (Only Timeline Items) */}
          <div className="md:hidden space-y-8">
            {resumeExperience.map((work, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-lg border border-gray-700"
              >
                <h3 className="text-yellowg text-xl font-bold">{work.organization}</h3>
                <div className="text-gray-400 text-sm my-1">{work.startDate} - {work.endDate}</div>
                <h4 className="text-greeny font-medium mb-3">{work.position}</h4>
                <ul className="text-white">
                  {work.tasks.map((task, index) => (
                    <li key={index} className="flex items-start mb-2">
                      <span className="text-yellowg mr-2">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* Desktop View (Timeline with Line) */}
          <div className="hidden md:block">
            {/* Central Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-greeny"
              style={{ zIndex: 1 }}
            ></motion.div>
            
            {/* Timeline Items */}
            {resumeExperience.map((work, i) => (
              <div key={i} className="flex justify-center items-center mb-16 relative">
                {/* Left Content (even items) */}
                {i % 2 === 0 && (
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.3 + (i * 0.2), duration: 0.6 }}
                    className="w-5/12 pr-10 text-right"
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-lg border border-gray-700 inline-block text-left"
                    >
                      <h3 className="text-yellowg text-xl font-bold">{work.organization}</h3>
                      <div className="text-gray-400 text-sm my-1">{work.startDate} - {work.endDate}</div>
                      <h4 className="text-greeny font-medium mb-3">{work.position}</h4>
                      <ul className="text-white">
                        {work.tasks.map((task, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 + (i * 0.2) + (index * 0.1), duration: 0.5 }}
                            className="flex items-start mb-2"
                          >
                            <span className="text-yellowg mr-2">•</span>
                            <span>{task}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                )}
                
                {/* Center Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4 + (i * 0.2), duration: 0.4, type: "spring" }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-yellowg border-4 border-greeny rounded-full z-10"
                  style={{ top: "24px" }}
                ></motion.div>
                
                {/* Right Content (odd items) */}
                {i % 2 === 1 && (
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.3 + (i * 0.2), duration: 0.6 }}
                    className="w-5/12 pl-10"
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-lg border border-gray-700"
                    >
                      <h3 className="text-yellowg text-xl font-bold">{work.organization}</h3>
                      <div className="text-gray-400 text-sm my-1">{work.startDate} - {work.endDate}</div>
                      <h4 className="text-greeny font-medium mb-3">{work.position}</h4>
                      <ul className="text-white">
                        {work.tasks.map((task, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 + (i * 0.2) + (index * 0.1), duration: 0.5 }}
                            className="flex items-start mb-2"
                          >
                            <span className="text-yellowg mr-2">•</span>
                            <span>{task}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                )}
                
                {/* Empty div for alternating layout */}
                {i % 2 === 1 && <div className="w-5/12 pr-10"></div>}
                {i % 2 === 0 && <div className="w-5/12 pl-10"></div>}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
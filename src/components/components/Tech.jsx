import React from 'react';
import { styles } from '../../styles';
import { FaReact, FaJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa';
import { SiDotnet, SiC, SiCsharp, SiFigma, SiPhp } from 'react-icons/si'; // Importing more icons from 'react-icons/si'
import { Tilt } from 'react-tilt'

const Tech = () => {
  const technologies = [
    { name: '.NET', icon: <SiDotnet color="#512BD4" /> }, 
    { name: 'C#', icon: <SiCsharp color="#239120" /> }, 
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact color="#61DBFB" /> }, 
    { name: 'Python', icon: <FaPython color="#3776AB" /> },
    { name: 'C', icon: <SiC color="#A8B9CC" /> },
    { name: 'SQL', icon: <FaDatabase color="#FF9900" /> },
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
    { name: 'PHP', icon: <SiPhp color="#777BB4" /> }, 
    { name: 'Java', icon: <FaJava color="#007396" /> },
  ];
  return (
    <div className="p-8 mt-10 mb-10">
      <p className={styles.sectionSubText}>
        What i have Knowledge
      </p>
      <h2 className={styles.sectionHeadText}>
        Tech & Skills
      </h2>
      <Tilt className="grid grid-cols-2 gap-6 mt-10 mb-10 gap-x-0 sm:grid-cols-3 md:grid-cols-4">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-md">
            <div className="mb-2 text-4xl">{tech.icon}</div>
            <div className="text-lg font-semibold">{tech.name}</div>
          </div>
        ))}
      </Tilt>
    </div>
  );
};

export default Tech;

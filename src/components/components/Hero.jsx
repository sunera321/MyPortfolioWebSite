import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import ComputerCanvas from '../components/canvas/Computers';
import TypingEffect from 'react-typing-effect';
import myphoto from '../../assets/profilebackremove-removebg-preview.png';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebookF, FaInstagram, FaArrowDown, FaHome, FaUser, FaGraduationCap, FaCogs, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const NavButton = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    className="relative flex items-center justify-center w-12 h-12 mb-4 lg:mb-0 group"
    title={label}
  >
    <span className="absolute w-full h-full transition-opacity duration-300 bg-white rounded-full opacity-0 group-hover:opacity-20"></span>
    <Icon className="text-white text-xl group-hover:text-[#859aec] transition-colors duration-300" />
  </a>
);

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <section id='home'>
    <div className="flex flex-col h-screen md:flex-row ml-7">
      {/* Left Sidebar */}
      {isMobile && <div className='mt-16 '>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I am <span className="text-[#859aec]">Sunera</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              <TypingEffect
                text={[
                  'I am a Full Stack Developer',
                  'Front End Developer',
                  'Back End Developer',
                ]}
                speed={50}
                eraseSpeed={50}
                eraseDelay={1000}
                typingDelay={500}
              />
            </p>
          </div>
          
          
          }
      <div className=" text-white w-full md:w-[25%] flex flex-col items-center md:items-start md:pr-0  lg:px-0 md:rounded-r-md shadow-lg">
        <img
          src={myphoto}
          alt="Sunera"
          className="w-[30%] h-[100%] md:w-[90%] md:h-[90%] rounded-full md:rounded-3xl"
        />

        <div className="flex gap-5 mt-5 lg:mt-10">
          <a href="https://www.linkedin.com/in/sunera-sudaraka" target="_blank" rel="noreferrer">
            <FaLinkedin className="w-7 h-7 md:w-9 md:h-9" />
          </a>
          <a href="https://github.com/sunera321" target="_blank" rel="noreferrer">
            <FaGithub className="w-7 h-7 md:w-9 md:h-9" />
          </a>
          <a href="https://twitter.com/Sunera53928182?s=09" target="_blank" rel="noreferrer">
            <FaTwitter className="w-7 h-7 md:w-9 md:h-9" />
          </a>
          <a href="https://www.facebook.com/sunera.sudaraka.1/" target="_blank" rel="noreferrer">
            <FaFacebookF className="w-7 h-7 md:w-9 md:h-9" />
          </a>
          <a href="https://www.instagram.com/sunera_sudaraka/" target="_blank" rel="noreferrer">
            <FaInstagram className="w-7 h-7 md:w-9 md:h-9" />
          </a>
        </div>

        <div className="flex items-center justify-center mt-5 ml-10 md:mt-10">
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="#"
              onClick={() => {
                alert('admin temporarily disabled');
              }}
              className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-all duration-200 bg-gray-900 lg:px-8 lg:py-4 lg:text-lg font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Main Section */}
      {!isMobile && <section className="relative h-[60vh] lg:h-screen w-full lg:w-[70%] lg:ml-7">
        <div className="absolute inset-0 top-[40px] lg:top-[80px] mx-auto pl-0 flex flex-row items-start gap-5">
          <div className="flex flex-col items-center justify-center mt-2 lg:mt-5">
            <div className="w-3 h-3 lg:w-5 lg:h-5 rounded-full bg-[#6e2ff5]" />
            <div className="w-1 h-32 lg:h-[600px] violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I am <span className="text-[#859aec]">Sunera</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              <TypingEffect
                text={[
                  'I am a Full Stack Developer',
                  'Front End Developer',
                  'Back End Developer',
                ]}
                speed={50}
                eraseSpeed={50}
                eraseDelay={1000}
                typingDelay={500}
              />
            </p>
          </div>
        </div>

        {!isMobile && <ComputerCanvas />}

        <div className="absolute flex items-center justify-center w-full bottom-10 lg:bottom-32">
          <a href="#about">
            <div className="w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [-2, 17, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="flex items-center justify-center w-8 h-8 mb-1 rounded-full bg-secondary"
              >
                <FaArrowDown className="text-lg text-white" />
              </motion.div>
            </div>
          </a>
        </div>
      </section>}

      {/* Navigation Section */}
      <div className="fixed bottom-0 left-0 right-0 lg:static lg:w-[5%] flex justify-end lg:justify-start items-center">
        <div className="flex flex-col items-center lg:fixed lg:right-8 lg:top-1/2 lg:transform lg:-translate-y-1/2">
          <NavButton href="#home" icon={FaHome} label="Home" />
          <NavButton href="#about" icon={FaUser} label="About" />
          <NavButton href="#education" icon={FaGraduationCap} label="Education" />
          <NavButton href="#skills" icon={FaCogs} label="Skills" />
          <NavButton href="#projects" icon={FaProjectDiagram} label="Projects" />
          <NavButton href="#contact" icon={FaEnvelope} label="Contact" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;

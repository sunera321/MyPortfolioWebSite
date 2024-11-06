import React, { useState, useEffect } from 'react';
import TypingEffect from 'react-typing-effect';
import { motion } from 'framer-motion';
import myphoto from '../../assets/qq.png';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebookF, FaInstagram, FaArrowDown} from 'react-icons/fa';



const SocialLink = ({ href, icon: Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="p-3 transition-colors duration-300 rounded-full bg-white/10 hover:bg-white/20"
  >
    <Icon className="w-6 h-6 text-white" />
  </motion.a>
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
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return (  
    <section id="home" className="relative min-h-screen bg-[#0a192f]">
      <div className="container relative flex flex-col items-center justify-center min-h-screen px-4 mx-auto md:px-8">
        {/* Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 -top-10 -left-10 bg-purple-500/30 rounded-full filter blur-3xl opacity-30" />
          <div className="absolute w-96 h-96 -bottom-10 -right-10 bg-blue-500/30 rounded-full filter blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 mt-20 flex flex-col-reverse items-center w-full gap-12 md:flex-row md:justify-between">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2"
          >
            <h1 className="text-4xl font-bold text-white md:text-6xl">
              Hi, I am <span className="text-[#859aec]">Sunera</span>
            </h1>
            
            <div className="h-16 mt-4">
              <TypingEffect
                text={[
                  'Full Stack Developer',
                  'Front End Developer',
                  'Back End Developer',
                ]}
                speed={50}
                eraseSpeed={50}
                eraseDelay={1000}
                typingDelay={500}
                className="text-xl text-gray-300 md:text-2xl"
              />
            </div>

            <p className="max-w-md mt-6 text-gray-400">
              Passionate about creating beautiful, responsive, and user-friendly web applications
              with modern technologies and best practices.
            </p>

            <div className="flex gap-4 mt-8">
              <SocialLink href="https://www.linkedin.com/in/sunera-sudaraka" icon={FaLinkedin} />
              <SocialLink href="https://github.com/sunera321" icon={FaGithub} />
              <SocialLink href="https://twitter.com/Sunera53928182" icon={FaTwitter} />
              <SocialLink href="https://www.facebook.com/sunera.sudaraka.1" icon={FaFacebookF} />
              <SocialLink href="https://www.instagram.com/sunera_sudaraka" icon={FaInstagram} />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 mt-8 text-lg font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] hover:opacity-90"
              onClick={() => alert('admin temporarily disabled')}
            >
              Download CV
            </motion.button>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative md:w-1/2"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full animate-pulse" style={{ filter: 'blur(40px)' }} />
              <img
                src={myphoto}
                alt="Sunera"
                className="relative object-cover w-full h-full rounded-full"
              />
            </div>
          </motion.div>
        </div>

     

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a href="#about" className="flex flex-col items-center text-white/60 hover:text-white/80">
            <span className="mb-2 text-sm">Scroll Down</span>
            <FaArrowDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
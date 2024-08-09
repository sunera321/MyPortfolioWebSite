import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../../styles'
import ComputerCanvas from '../components/canvas/Computers'
import { FaLinkedin, FaGithub, FaTwitter, FaFacebookF, FaInstagram, FaArrowDown } from 'react-icons/fa' // Import skill icons
import TypingEffect from 'react-typing-effect' // Import TypingEffect component




const Hero = () => {
  return (
    <div className='flex h-screen'>
      <div className='mt-5 text-white w-[25%] flex flex-col items-center  pr-0 rounded-r-lg shadow-lg'>
        <img
          src='src\assets\profilebackremove.png'
          alt='Sunera'
          className='w-[90%] h-[70%] rounded-3xl'
        />

        <div className='flex gap-5 pl-10 mt-10'>
          <a href='https://www.linkedin.com/in/sunera-fernando-7b0b2b1b4/' target='_blank' rel='noreferrer'>
            <FaLinkedin className='w-9 h-9' />
          </a>
          <a href='https://www.linkedin.com/in/sunera-fernando-7b0b2b1b4/' target='_blank' rel='noreferrer'>
            <FaGithub className='w-9 h-9' />
          </a>
          <a href='https://www.linkedin.com/in/sunera-fernando-7b0b2b1b4/' target='_blank' rel='noreferrer'>
            <FaTwitter className='w-9 h-9' />
          </a>
          <a href='https://www.linkedin.com/in/sunera-fernando-7b0b2b1b4/' target='_blank' rel='noreferrer'>
            <FaFacebookF className='w-9 h-9' />
          </a>
          <a href='https://www.linkedin.com/in/sunera-fernando-7b0b2b1b4/' target='_blank' rel='noreferrer'>
            <FaInstagram className='w-9 h-9' />
          </a>

        </div>
        <div class="h-screen pl-7 flex justify-center items-center">

          <div class="relative inline-flex  group">
            <div
              class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <a href="#contact" title="Get quote now"
              class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button">Hire Me
            </a>
          </div>
        </div>

      </div>

      <section className='relative h-screen mx-auto w-[75%] ml-7'>
        <div
          className='absolute inset-0 top-[80px] max-w-7xl mx-auto p-5 pl-0 flex flex-row items-start gap-5'
        >
          <div className='flex flex-col items-center justify-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#6e2ff5]' />
            <div className='w-1 h-40 sm: h-[600px] violet-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I am <span className='text-[#859aec]'>Sunera</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              <TypingEffect
                text={["I am a Full Stack Developer", "Front End Developer", "Back End Developer"]}
                speed={50}
                eraseSpeed={50}
                eraseDelay={1000}
                typingDelay={500}
              />
            </p>
          
          </div>
        </div>
        <ComputerCanvas />
        <div className='absolute flex items-center justify-center w-full xs:bottom-10 bottom-32'>
          <a href="#about">
            <div className='w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{ y: [-2, 17, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                className="flex items-center justify-center w-12 mb-1 rounded-full h-7 bg-secondary"
              >
                <FaArrowDown className="text-lg text-white" />
              </motion.div>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Hero

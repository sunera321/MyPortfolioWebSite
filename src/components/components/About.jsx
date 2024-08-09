import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { web, backend, creator } from '../../assets/assets';
import { fadeIn, textVariant,staggerContainer  } from '../../Utils/motion';
import {Tilt} from 'react-tilt';

const services = [

  {
    title: "FrontEnd Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Database Development",
    icon: web,
  },
  {
    title: "Cloud Services",
    icon: creator,
  },

];

const About = () => {
  
  return (
    <section id='about'>
       <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      animate="show"
      className='mt-32'
    >
      <motion.div variants={textVariant(0.3)}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn()}
        className="mt-4 text-secondary text-[17px] max-w-[95%] leading-[30px]"
      >
        I am a full-stack web developer with a passion for creating beautiful
        and functional project. I have experience in both front-end and back-end
        development, and I am always looking to learn new technologies and improve my 
        skills. I have done my own personal projects. I'm quietly confident, naturally curious, and ready to take challenges.
        I am a creative problem solver with a keen eye for detail.Currently, I'm following Bachelor of Science Honours in  Infomation Technology and management degree program at University of Moratuwa, Sri Lanka.
      </motion.p>
    </motion.div>

      <Tilt className='justify-center gap-10 mt-20 xs:flex '>
        {services.map((service, index) => (
          
          <div class=" bg-tertiary w-[50%] xs:mb-1 xs:ml-0 ml-16 mb-8  xs:w-[18%]  xs:p-[5%] rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-slate-700 text-center text-[10px] sm:text-[15px]" style={{borderTop: '2px solid gray', borderBottom: '2px solid black' }}>
              <img src={service.icon} alt={service.title} className=''  />
              <p className='font-bold '>{service.title}</p>
            </div>
         
        ))}
      </Tilt>
    </section>
  );
};

export default About;

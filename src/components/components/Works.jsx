import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { textVariant, fadeIn } from '../../Utils/motion'
import chatroom from '../../assets/assets/chatroom.jpeg'
import hard from '../../assets/assets/hard.png'
import Hsenid from '../../assets/assets/Hsenid.png'
import github from '../../assets/assets/github.png'
import internet from '../../assets/assets/internet.png'


const projects = [
  {
    name: "Software License Management System",
    description:
      "Effective license management is ensure compliance and optimize the utilization of software assets. The lack of advanced, abstraction tools for issuing license keys, tracking license key states, managing renewals, and providing real-time updates on license usage create significant challenges in maintaining operational efficiency.",
    tags: [
      {
        name: "React",
      },
      {
        name: ".NET Core",
      },
      {
        name: "Microsoft Azure",
      },
    ],
    image: Hsenid,
    source_code_link: "https://github.com/",
  },
  
  {
    name: "Realtime Chat Room Application",
    description:
      "Talk to strangers, Make friends.Our app revolutionizes the way you connect online. With users from every time zone, there is always someone online ready to chat. Say goodbye to lonely nights and hello to round-the-clock companionship.",
    tags: [
      {
        name: "React",
      },
      {
        name: ".NET Core",
      },
      {
        name: "SignalR",
      },
    ],
    image: chatroom,
    source_code_link: "https://github.com/",
  },
  {
    name: "Agriculture Plant Growth Chamber",
    description:
      "Our team has developed an ingenious solution to transform the way we grow and enjoy leafy greens. Imagine a controlled indoor growing system that nurtures seeds and plants under optimal conditions, tailored for each stage of growth.",
    tags: [
      {
        name: "Ardino",
      },
      {
        name: "Hardware",
      },
 
    ],
    image: hard,
    source_code_link: "https://github.com/",
  },
];

const Works = () => {
  return (
    <section id='projects'>
    <div className='mb-20'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What i have done so far
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>
      <div className='flex w-full'>
        <motion.p
          variants={fadeIn()}
          className='text-secondary text-[17px] '
        >
          I have worked with a variety of technologies and tools, ranging from front-end to back-end development. I have experience
          the following technologies:
        </motion.p>


      </div>
      <div className='flex flex-wrap mt-20 gap-7'>
        {projects.map((project, index) => (
          <motion.div variants={fadeIn("up", "sprin", index * 0.5, 0.75)}>
            <Tilt
              options={{ max: 45, scale: 1.02, speed: 300, }}
              className='bg-tertiary p-5 rounded-2xl sm:w-[340px] w-full'
            >
              <div className='relative w-full h-[230px]'>
                <img src={project.image} alt={project.name} className='object-cover w-full h-full rounded-2xl' />
                <div className='absolute inset-0 flex justify-end m-3 '>
                  <a href={project.source_code_link} target='_blank' rel='noreferrer' className='bg-black rounded-full w-7 h-7'>
                    <img src={internet} alt='internet' className='p-1 w-7 h-7' />
                  </a>
                </div>
                <div className='absolute inset-0 flex justify-end m-3 mr-11 '>
                  <a href={project.source_code_link} target='_blank' rel='noreferrer' className='bg-black rounded-full w-7 h-7'>
                    <img src={github} alt='github' className='w-7 h-7' />
                  </a>
                </div>
              </div>
              <div className='mt-5'>
                <h2 className='text-white font-bold text-[25px]'>
                  {project.name}
                </h2>
                <p className='text-secondary mt-2 text-[14px]'>
                  {project.description}
                </p>
              </div>
              <div className='flex flex-wrap gap-2 mt-4'>
                {project.tags.map((tag) => (
                  <span className={`px-2 py-1 rounded-lg `}>
                    #{tag.name}
                  </span>
                ))}

              </div>

            </Tilt>




          </motion.div>

        ))}
      </div>

    </div>
    </section>
  )
}

export default Works
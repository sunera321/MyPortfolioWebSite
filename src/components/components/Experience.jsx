import React from 'react'
import {   VerticalTimeline,
  VerticalTimelineElement,   } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../../styles'
import { textVariant } from '../../Utils/motion'
import uomlogo from '../../assets/assets/company/uomlogo.png';
import stc from '../../assets/assets/company/stc.png';
import PeoplesBank from '../../assets/assets/company/Peoples-Bank-.jpg';
import morasprit from '../../assets/assets/company/download.jpg';


const experiences = [
  {
    title: "Bachelor Of Science Infomation Technology and management",
    company_name: "University Of Moratuwa, LK",
    icon: uomlogo,
    iconBg: "black",
    date: "2022 July - Present",
    points: [
      "I am Seconde Year IT Undergraduate",
      "Batch - 21 in Faculty of IT",
    ],
    
  },
  {
    title: "St.Thomas' College, Matale",
    company_name: "GCE Advanced Level",
    icon: stc,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Feb 2020",
    points: [
      "ICT - A , Accounting - A , Business Studies - A",
      "Index Number – 3131985",
      "District Rank - 10"
    ],
  },
  {
    title: "People's Bank Intern",
    company_name: "People's Bank,LK",
    icon: PeoplesBank,
    iconBg: "#383E56",
    date: "May 2021 - June 2022",
    points: [
      " Worked as a one year Intern in People's Bank Matale Branch",
      " Learned about how to work collaborate with others",
      " Gained experience in banking and financial services",
    ],
  },
  {
    title: "MoraSpirit",
    company_name: "MoraSpirit Organizatio",
    icon: morasprit,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "MoraSpirit is the official Media partner in the sri lanka university sports",
      "I am a member of the MoraSpirit team Marketing pillar",
      "Monitoring and managing Facebook ,Linkedin and outher social media platforms",

    ],
  },
  
];



const Experience = () => {
  return (
    <div className='mt-16'>
      <p className={styles.sectionSubText}>
        What i have done so far
      </p>
      <h2 className={styles.sectionHeadText}>
      Education & Experience
      </h2>
      <div className='flex flex-col mt-20'>
        <VerticalTimeline className='z-0 '>
      {experiences.map((exp,index) => (
        <VerticalTimelineElement
        
          contentStyle={{ background: '#1d1836', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #232631' }}
          date={exp.date}
          iconStyle={{ background: experiences.iconBg}}
          icon={
            <div className=''>
              <img src={exp.icon} alt={exp.company_name}
                className='object-contain bg-white rounded-full w-35 h-35' 
              />
            </div>
          }
        >
          <div>
            <h3 className='text-white text-[24px] font-bold '>
              {exp.title}
            </h3>
            <p className='text-secondary text-[16px] font-semibold'
              style={{ margin: '0' }}
            >
              {exp.company_name}
            </p>
            <ul className='mt-5 ml-5 space-y-2 list-disc'>
              {exp.points.map((point, index) => (
                <li key={index}
                  className='text-white text-[14px] pl-1'
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
       
        </VerticalTimelineElement>
           ))} 
           </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience
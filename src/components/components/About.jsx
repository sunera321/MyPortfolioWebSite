import { motion } from 'framer-motion';
import { web, backend, creator } from '../../assets/assets';

const services = [
  {
    title: "Frontend Development",
    icon: web,
    description: "Creating responsive and intuitive user interfaces with modern frameworks",
    skills: ["React", "Next", "JavaScript"]
  },
  {
    title: "Backend Development",
    icon: backend,
    description: "Building robust server-side applications and APIs",
    skills: ["Node.js", "ASP .Net Core", "REST APIs"]
  },
  {
    title: "Database Development",
    icon: web,
    description: "Designing and optimizing database structures",
    skills: ["MongoDB", "MySQL", "MSSQL"]
  },
  {
    title: "Cloud Services",
    icon: creator,
    description: "Deploying and managing cloud infrastructure",
    skills: ["AWS", "Azure"]
  }
];

const ServiceCard = ({ title, icon, description, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative p-6 transition-all duration-300 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10">
          <img src={icon} alt={title} className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      
      <p className="mb-4 text-gray-300">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm text-white/80 bg-white/10 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
   
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-3 text-sm font-medium tracking-wider text-[#859aec] uppercase"
          >
            Introduction
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-4xl font-bold text-white md:text-5xl"
          >
            Overview
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg leading-relaxed text-gray-300">
              I am a full-stack web developer with a passion for creating beautiful
              and functional projects. Currently pursuing a Bachelor of Science Honours 
              in Information Technology and Management at University of Moratuwa, Sri Lanka.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="px-4 py-2 text-sm text-white rounded-full bg-white/10">
                🎯 Problem Solver
              </span>
              <span className="px-4 py-2 text-sm text-white rounded-full bg-white/10">
                🔍 Detail Oriented
              </span>
              <span className="px-4 py-2 text-sm text-white rounded-full bg-white/10">
                📚 Continuous Learner
              </span>
              <span className="px-4 py-2 text-sm text-white rounded-full bg-white/10">
                💡 Creative Thinker
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        {/* Additional Stats Section */}
       
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex
          justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} 
          className="w-16 h-16 object-contain"/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>

      </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] 
      max-w-3xl leading-[30px]"
      >
        As a fresher, I am a recent graduate with a 
        strong desire to start my career in software development. 
        I have completed my education in a Bachelor of Technology 
        in Information technology and acquired skills in programming 
        languages, frameworks, and tools used in the industry. 
        I am a quick learner, with excellent problem-solving and 
        critical-thinking abilities. I have worked on several projects 
        independently and as part of a team, gaining hands-on experience 
        in software development. I am eager to contribute my skills and 
        knowledge to a dynamic team and begin my career as a software developer.

        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service,index) => (
            <ServiceCard key={service.title} index = {index} {...service} />
          ))}
           </div>
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")
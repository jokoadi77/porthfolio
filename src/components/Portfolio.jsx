import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

const ProjectCard = ({
  index,
  name,
  description,
  image,
  live,
  github,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
    >
      <div className='relative w-full md:w-3/5'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-auto object-cover md:rounded-3xl'
        />
      </div>

      <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>{name}</h3>
        <p className='mt-4 bg-neutral text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description}</p>
       <div className="flex gap-5">
       <Link to={live} target="_blank" className="rounded-full mt-5 bg-slate-700 w-9 h-9 flex items-center justify-center relative group">
          <BsArrowUpRight className="items-center" /> 
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max bg-black text-white text-sm rounded-md px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Live Demo
          </div>
      </Link>
      <Link target="_blank" to={github} className="rounded-full mt-5 bg-slate-700 w-9 h-9 flex items-center justify-center relative group">
          <BsGithub className="items-center" /> 
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max bg-black text-white text-sm rounded-md px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Github repositoy
          </div>
      </Link>
       </div>
      </div>
      
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Portfolio</h2>
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");

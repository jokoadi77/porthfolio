import { styles } from "../styles";
import { motion, useAnimation } from "framer-motion";
import { textVariant } from "../utils/motion";
import {RiNodejsLine, RiReactjsFill, RiTailwindCssFill} from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'
import { SiMysql, SiTypescript } from "react-icons/si";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";


const iconVarians = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: 'Infinity',
            repeatType: "reverse"
        }
    }
        
    })
const About = () => {
  return (
    <>
    <div className="border-b pb-24">
        <motion.h2 
         initial={{x: 100, opacity: 0}}
         whileInView= {{x: 0, opacity: 1}}
         transition={{duration: 1, delay:0.5}}
        className={`${styles.sectionText} text-center mb-10`}>Skills</motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVarians(1.5)}
        initial= "initial"
        animate= 'animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5  className="text-7xl text-[#ff5733]"/>
            </motion.div>
            <motion.div
            variants={iconVarians(2)}
            initial= "initial"
            animate= 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt  className="text-7xl text-sky-600"/>
            </motion.div>
            <motion.div 
            variants={iconVarians(2.5)}
            initial= "initial"
            animate= 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsFill  className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconVarians(3.5)}
            initial= "initial"
            animate= 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs  className="text-7xl"/>
            </motion.div>
            <motion.div
            variants={iconVarians(3)}
            initial= "initial"
            animate= 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill  className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconVarians(4)}
            initial= "initial"
            animate= 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTypescript  className="text-7xl text-sky-500"/>
            </motion.div>
            <motion.div 
            variants={iconVarians(5)}
            initial= "initial"
            animate= 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiNodejsLine  className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div
            variants={iconVarians(6)}
            initial= "initial"
            animate= 'animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql  className="text-7xl text-[#00758f]"/>
            </motion.div>
        </div>
    </div>
       
    </>
  )
}

export default About

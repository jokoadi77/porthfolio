import { styles } from "../styles";
import { motion, useAnimation } from "framer-motion";
import { textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
     
        <section class="py-24 relative" id="about">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                    <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                    <motion.div variants={textVariant()}>
                        <h2 className={`${styles.sectionText}`}>About Me</h2>
                        </motion.div> 
                        <p class="text-white text-base font-normal leading-relaxed lg:text-start text-center">
                        Highly motivated and detail-focused professional with a background in baking, now pursuing a career in frontend development. Proficient in HTML, CSS, JavaScript, and React, with a strong ability to turn creative concepts into interactive, responsive web experiences. Bringing a unique perspective from 5 years in the baking industry, where precision, creativity, and problem-solving were key to success. Excited to apply these transferable skills to deliver exceptional user-focused solutions in development.
                        </p>
                    </div>
                    <button class="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span class="px-1.5 text-white text-sm font-medium leading-6">Resume</span>
                    </button>
                </div>
                <img class="lg:mx-0 mx-auto h-full rounded-3xl object-cover opacity-79" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/302114257/original/96cdd5b8fc2c343d1edcfd617d8d3d974b86160c/be-your-front-end-developer-in-react-js-next-js-typescript.png" alt="about Us image" />
            </div>
        </div>
    </section>                    
    </>
  )
}

export default About

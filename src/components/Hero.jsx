import {motion} from 'framer-motion';
import {styles} from '../style.js';
import Typewriter from "typewriter-effect";
import { slideIn } from '../utils/motion';
import {github, linkedin, email} from '../assets';

const Hero = () => {

  return (
    <section className={`relative w-full h-screen mx-auto`}>
    <div className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)}>
            <h1 className={`${styles.heroHeadText} text-white`}><Typewriter onInit={(typewriter) => { typewriter.typeString("Hi, I'm <span style='color: #915eff'>Hritik</span>").pauseFor(2000).start(); }}/></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop softwares, user <br className='sm:block hidden'/> interfaces and web applications. <br className='sm:block hidden'/>Working towards making technology accessible</p>
            <div className='flex justify-start items-start flex-row mt-2'>
              <div onClick={() => window.location = 'mailto:bawejahritik@gmail.com'} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img src={email} alt='email' className='object-contain'/>
              </div>
              <div onClick={() => window.open("https://www.linkedin.com/in/hritik-baweja/", "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-10'>
                <img src={linkedin} alt='linkedin' className='object-contain'/>
              </div>
              <div onClick={() => window.open("https://github.com/bawejahritik", "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img src={github} alt='github' className='w-1/2 h-1/2 object-contain'/>
              </div>
            </div>
        </motion.div>
        
      </div>
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity, 
                
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
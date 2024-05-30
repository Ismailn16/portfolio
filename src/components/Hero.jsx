import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { MdMail } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";


const Hero = () => {
    return (
        <div className='flex flex-col xl:flex-row my-auto mx-auto h-auto pb-4'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1, ease: "easeIn" }} className='flex flex-col xl:flex-row items-center justify-between mx-auto'>
                <div className='text-center xl:text-left mx-auto'>
                    <h1 className='text-white text-4xl font-semibold max-w-[500px] my-10'>
                        Hi, my name is Abdul Noor!
                    </h1>
                    <div className='text-4xl flex justify-center xl:justify-start text-center gap-12 my-8 text-[#391ca3]'>
                        <a href='https://www.linkedin.com/in/abdul-noor-5349372a5/' className='rounded-full border-2 p-2 border-[#391ca3] hover:text-black hover:bg-[#391ca3]'><AiFillLinkedin /></a>
                        <a href='https://github.com/Ismailn16' className='rounded-full p-2 border-2 border-[#391ca3] hover:text-black hover:bg-[#391ca3]'>
                            <AiFillGithub />
                        </a>
                        <a href='mailto:example@abduln2003@outlook.com' className='rounded-full border-2 p-2 border-[#391ca3] hover:text-black hover:bg-[#391ca3]'><MdMail /></a>
                    </div>
                    <div className='flex justify-center xl:justify-start items-center mb-4'>
                        <div className='relative inline-flex group'>
                            <div className='absolute transition-all duration-100 opacity-70 -inset-px bg-gradient-to-r from-[#6015a1] via-[#1527c2] to-[#b419bd] 
    rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200'>
                            </div>
                            <a href='./assets/Abdul Noor Resume.pdf' download="Abdul Noor Resume.pdf" title='Download CV' role='button' className='w-[220px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg
    font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700'>
                                Download CV <div className='px-2'><FiDownload className='text-2xl' /></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='relative ml-0 xl:ml-12 mt-4 xl:mt-0 flex justify-center xl:justify-start'>
                    <motion.svg className="w-[250px] sm:w-[300px] xl:w-[450px] h-[250px] sm:h-[300px] xl:h-[450px]"
                        fill="transparent"
                        viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
                        <motion.circle cx="253" cy="253" r="250" stroke="#391ca3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{ strokeDasharray: "24 10 0 0" }} animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360], }} transition={{ duration: 20, repeat: Infinity, repeatType: "repeat" }} />
                    </motion.svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-center text-[#391ca3] pb-4">
                            <motion.p initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{
                                duration: 2.5, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 1
                            }} className="text-2xl xl:text-4xl font-semibold">Student
                            </motion.p>
                        </div>
                        <div className="text-center text-[#391ca3]">
                            <motion.p initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{
                                duration: 2.5, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 1
                            }} className="text-2xl xl:text-4xl font-semibold">Software Developer
                            </motion.p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero
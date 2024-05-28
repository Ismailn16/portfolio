import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { MdMail } from "react-icons/md";
import { motion } from 'framer-motion';

const pathVariants = {
    hidden: {
        pathLength: 0,
        opacity: 0
    },
    visible: {
        pathLength: 2,
        opacity: 1,
        transition: {
            duration: 2,
            ease: "easeInOut",
        }
    }
};

const Hero = () => {
    return (
        <div className='flex-col my-auto mx-auto h-auto pb-4'>
            <div className=''>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="w-64 h-128"
                >
                    <motion.path
                        d="M67 30 H200"
                        fill="transparent"
                        stroke="#391ca3"
                        strokeWidth="3"
                        variants={pathVariants}
                        initial="hidden"
                        animate="visible"
                    />
                </svg>
            </div>
            <div className='text-5xl flex justify-center gap-16 my-7 text-[#391ca3]'>
                <a href='https://www.linkedin.com/in/abdul-noor-5349372a5/'><AiFillLinkedin /></a>
                <a href='https://github.com/Ismailn16'>
                    <AiFillGithub />
                </a>
                <a href='mailto:example@abduln2003@outlook.com'><MdMail /></a>
            </div>
            <div className='flex justify-center items-center'>
                <div className='relative inline-flex mx-auto group my-3'>
                    <div className='absolute transitiona-all duration-100 opacity-70 -inset-px bg-gradient-to-r from-[#6015a1] via-[#1527c2] to-[#b419bd] 
                rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200'>
                    </div>
                    <a href='./assets/Abdul Noor Resume.pdf' download="Abdul Noor Resume.pdf" title='Download CV' role='button' className='w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg
                font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700'>
                        Download CV
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Hero
import React from 'react'
import { motion } from 'framer-motion';

const container = (delay) => ({
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1.5, delay: delay },
    },
});

const Navbar = () => {

    return (
        <div className='z-10 text-white flex justify-between items-center h-24 px-4 max-w-[1240px] mx-auto text-l'>

            <motion.h1 variants={container(1.5)} initial='hidden' animate='visible' className='text-3xl font-bold primary-color ml-4'>Abdul Noor</motion.h1>
            <motion.ul variants={container(1.5)} initial='hidden' animate='visible' className='hidden md:flex'>
                <a href='#About'><li className='p-4 hover:text-[#391ca3]'>About</li></a>
                <a href='#Tech'><li className='p-4 hover:text-[#391ca3]'>Technologies</li></a>
                <a href='#Education'><li className='p-4 hover:text-[#391ca3]'>Education</li></a>
                <a href='#Projects'><li className='p-4 hover:text-[#391ca3]'>Projects</li></a>
                <a href='#Contact'><li className='p-4 hover:text-[#391ca3]'>Contact</li></a>
            </motion.ul>

        </div>

    )
}

export default Navbar
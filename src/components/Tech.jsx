import React from 'react'
import { RiTailwindCssFill } from "react-icons/ri";
import PythonLogo from "../assets/PythonLogo.jsx";
import JavaLogo from "../assets/JavaLogo.jsx";
import HTMLlogo from "../assets/HTMLlogo.jsx";
import CSSlogo from "../assets/CSSlogo.jsx";
import { motion } from 'framer-motion';

// Import SVG files
import GitIcon from "../assets/git-icon-logo-svgrepo-com.svg";
import GitHubIcon from "../assets/github-mark-white.svg";
import JavaScriptIcon from "../assets/javascript-logo-svgrepo-com.svg";
import NodeJSIcon from "../assets/nodejs-1-logo-svgrepo-com.svg";
import PostgreSQLIcon from "../assets/postgresql-logo-svgrepo-com.svg";
import ReactIcon from "../assets/react-svgrepo-com.svg";
import SwiftIcon from "../assets/swift-svgrepo-com.svg";
import NextIcon from '../assets/next2.svg'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'

        }
    }
})
const Tech = () => {
    return (
        <div id='Skills' className='pb-24 md:pb-28 pt-12 md:pt-24'>
            <motion.h1 animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5, delay: 1 }} className='my-10 text-center text-3xl font-semibold'>
                <span className='primary-color'>Skills</span>
            </motion.h1>
            <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5, delay: 1 }} className='flex flex-col items-center justify-center gap-8'>
                {/* First Row - 7 icons */}
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    <motion.div variants={iconVariants(2.5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-700 p-4">
                        <PythonLogo />
                    </motion.div>
                    <motion.div variants={iconVariants(3)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-700 p-4">
                        <JavaLogo />
                    </motion.div>
                                        <motion.div variants={iconVariants(4.2)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-700 p-4">
                        <img src={NextIcon} alt="Swift" className="w-12 h-12" />
                    </motion.div>
                                                            <motion.div variants={iconVariants(4.2)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-700 p-4">
                        <img src={SwiftIcon} alt="Swift" className="w-12 h-12" />
                    </motion.div>
                                                            <motion.div variants={iconVariants(2.8)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-700 p-4">
                        <img src={ReactIcon} alt="React" className="w-12 h-12" />
                    </motion.div>
                                        <motion.div variants={iconVariants(3.8)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-700 p-4">
                        <img src={PostgreSQLIcon} alt="PostgreSQL" className="w-12 h-12" />
                    </motion.div>
                </div>

                {/* Second Row - 7 icons */}
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    <motion.div variants={iconVariants(2)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-700 p-4">
                        <HTMLlogo />
                    </motion.div>
                                        <motion.div variants={iconVariants(6)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-700 p-4">
                        <CSSlogo />
                    </motion.div>
                                        <motion.div variants={iconVariants(4)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-700 p-4'>
                        <RiTailwindCssFill className='text-5xl text-[#2596be]' />
                    </motion.div>
                    <motion.div variants={iconVariants(3.2)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-700 p-4">
                        <img src={JavaScriptIcon} alt="JavaScript" className="w-12 h-12" />
                    </motion.div>
                    <motion.div variants={iconVariants(4.5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-700 p-4">
                        <img src={NodeJSIcon} alt="Node.js" className="w-12 h-12" />
                    </motion.div>
                    <motion.div variants={iconVariants(2.2)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-700 p-4">
                        <img src={GitIcon} alt="Git" className="w-12 h-12" />
                    </motion.div>
                    <motion.div variants={iconVariants(3.5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-700 p-4">
                        <img src={GitHubIcon} alt="GitHub" className="w-12 h-12" />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Tech

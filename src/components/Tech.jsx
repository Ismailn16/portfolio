import React from 'react'
import { RiTailwindCssFill } from "react-icons/ri";
import PythonLogo from "../assets/PythonLogo.jsx";
import JavaLogo from "../assets/JavaLogo.jsx";
import HTMLlogo from "../assets/HTMLlogo.jsx";
import CSSlogo from "../assets/CSSlogo.jsx";
import PHP from "../assets/phpLogo.jsx";
import { motion } from 'framer-motion';

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
        <div className='pb-24'>
            <motion.h1 id='Tech' whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5, delay: 1 }} className='my-20 text-center text-3xl font-semibold'>
                <span className='primary-color'>Technologies</span>
            </motion.h1>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5, delay: 1.2 }} className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={iconVariants(2.5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                    <PythonLogo />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                    <JavaLogo />
                </motion.div>
                <motion.div variants={iconVariants(5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                    <PHP />
                </motion.div>
                <motion.div variants={iconVariants(2)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                    <HTMLlogo />
                </motion.div>
                <motion.div variants={iconVariants(6)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
                    <CSSlogo />
                </motion.div>
                <motion.div variants={iconVariants(4)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiTailwindCssFill className='text-5xl text-[#2596be]' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Tech
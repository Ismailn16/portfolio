import React, { useState, useEffect } from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";

const TypingEffect = ({ text, speed = 100, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting && currentIndex < text.length) {
                setDisplayText(text.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            } else if (isDeleting && currentIndex > 0) {
                setDisplayText(text.slice(0, currentIndex - 1));
                setCurrentIndex(currentIndex - 1);
            } else if (currentIndex === text.length) {
                // Wait before starting to delete
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (currentIndex === 0 && isDeleting) {
                // Wait before starting to type again
                setIsDeleting(false);
                setTimeout(() => {}, 500);
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [currentIndex, isDeleting, text, speed]);

    return (
        <span>
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    );
};


const Hero = () => {
    return (
        <div id='Home' className='flex flex-col xl:flex-row my-auto mx-auto h-auto pb-4 pt-28'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1, ease: "easeIn" }} className='flex flex-col xl:flex-row items-center justify-between mx-auto'>
                <div className='text-center xl:text-left mx-auto'>
                    <h1 className='text-white text-4xl font-semibold max-w-[500px] my-10'>
                        Hi, my name is Abdul Noor!
                    </h1>
                    <div className='text-4xl flex justify-center xl:justify-start text-center gap-12 my-8 text-[#0f7d2f]'>
                        <a href='https://www.linkedin.com/in/abdul-noor-5349372a5/' className='rounded-full border-2 p-2 border-[#0f7d2f] hover:text-black hover:bg-[#0f7d2f]'><AiFillLinkedin /></a>
                        <a href='https://github.com/Ismailn16' className='rounded-full p-2 border-2 border-[#0f7d2f] hover:text-black hover:bg-[#0f7d2f]'>
                            <AiFillGithub />
                        </a>
                        <a href='mailto:example@abduln2003@outlook.com' className='rounded-full border-2 p-2 border-[#0f7d2f] hover:text-black hover:bg-[#0f7d2f]'><MdMail /></a>
                    </div>
                </div>
                <div className='relative ml-0 xl:ml-12 mt-4 xl:mt-0 flex justify-center xl:justify-start'>
                    <motion.svg className="w-[250px] sm:w-[300px] xl:w-[450px] h-[250px] sm:h-[300px] xl:h-[450px]"
                        fill="transparent"
                        viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
                        <motion.circle cx="253" cy="253" r="250" stroke="#0f7d2f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{ strokeDasharray: "24 10 0 0" }} animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360], }} transition={{ duration: 20, repeat: Infinity, repeatType: "repeat" }} />
                    </motion.svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-[#0f7d2f]">
                            <motion.p initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{
                                duration: 2.5, delay: 1
                            }} className="text-2xl xl:text-4xl font-semibold">
                                <TypingEffect text="Software Engineer" speed={100} delay={1500} />
                            </motion.p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero
import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div id='About' className='py-14 text-white h-auto pt-20 md:pt-32'>
            <div className='px-10 max-w-4xl mx-auto'>
                <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1.5, delay: 1 }} className='text-center'>
                    <h3 className='text-3xl font-semibold mb-8'><span className='primary-color'>About Me!</span></h3>
                    <div className='space-y-6 text-base md:text-lg leading-relaxed'>
                        <p className='text-white/90'>
                            Hi, I'm Ismail Noor, a Software Engineering graduate from UWE Bristol with a passion for fintech and building B2C solutions that solve real-world problems. My academic journey culminated in a dissertation exploring the intersection of blockchain technology and modern online banking, which sparked my fascination with innovative finance solutions.
                        </p>
                        <p className='text-white/90'>
                            Currently working in telecommunications sales, I love all things tech and am particularly drawn to applying emerging technologies like machine learning to improve predictive accuracy and decision-making within the financial sector. What drives me is building technology that genuinely helps and aids people, creating meaningful solutions that make complex systems more accessible and user-friendly.
                        </p>
                        <p className='text-white/90'>
                            I'm enthusiastic about connecting with like-minded individuals who share a passion for fintech innovation and technology. Feel free to get in touch via LinkedIn or email!
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
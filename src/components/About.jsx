import React from 'react'
import { motion } from 'framer-motion';
import aboutImg from '../assets/about2.jpg'

const About = () => {
    return (
        <div id='About' className='py-14 text-white h-auto pt-32'>
            <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>

                <div>
                    <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5, delay: 1 }} className='w-[400px] h-full'>
                        <img src={aboutImg}
                            alt=''
                            className='object-cover bg-gray-700 rounded-xl h-[300px] filter grayscale brightness-50'
                        />
                    </motion.div>

                </div>

                <div>
                    <div className='p-2'>
                        <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5, delay: 1 }} className='text-white my-2'>
                            <h3 className='text-3xl font-semibold mb-5'><span className='primary-color'>About Me!</span></h3>
                            <p transition={{ duration: 0.8, delay: 2 }} className='text-justify mx-auto'>
                                Hi, I'm Abdul Noor (also known as Ismail), a Software Engineering graduate from UWE Bristol with a passion for fintech and building B2C solutions that solve real-world problems. My academic journey culminated in a dissertation exploring the intersection of blockchain technology and modern online banking, which sparked my fascination with innovative finance solutions.
Currently working in telecommunications sales, I love all things tech and am particularly drawn to applying emerging technologies like machine learning to improve predictive accuracy and decision-making within the financial sector. What drives me is building technology that genuinely helps and aids people, creating meaningful solutions that make complex systems more accessible and user-friendly.
I'm enthusiastic about connecting with like-minded individuals who share a passion for fintech innovation and technology. Let's collaborate to drive the future of tech together! 🚀
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
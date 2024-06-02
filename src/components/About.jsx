import React from 'react'
import { motion } from 'framer-motion';
import aboutImg from '../assets/about2.jpg'

const About = () => {
    return (
        <div id='About' className='py-14 text-white h-auto'>
            <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>

                <div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.5, delay: 1 }} className='w-[400px] h-full'>
                        <img src={aboutImg}
                            alt=''
                            className='object-cover bg-gray-700 rounded-xl h-[300px] filter grayscale brightness-50'
                        />
                    </motion.div>

                </div>

                <div>
                    <div className='p-2'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1.5, delay: 1.2 }} className='text-white my-2'>
                            <h3 className='text-3xl font-semibold mb-5'><span className='primary-color'>About Me!</span></h3>
                            <p transition={{ duration: 0.8, delay: 2 }} className='text-justify mx-auto'>
                                Hi, I'm Abdul Noor, a final-year Software Engineering for Business student at UWE Bristol. Throughout my journey, I've gained invaluable experience and knowledge through hands-on projects driven by my passion for mathematics and technology. From developing innovative solutions for fellow students to tackling complex mathematical and logical problems, I've honed my skills and deepened my understanding of these fields. Whether it's optimising processes or enhancing user experiences, I thrive on finding creative solutions to real-world challenges. I'm enthusiastic about connecting with like-minded individuals and leveraging our collective expertise to make meaningful contributions to the ever-evolving tech industry. Let's collaborate and drive innovation together!
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
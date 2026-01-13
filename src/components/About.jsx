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
                            Hi, I'm Abdul Noor, also known as Ismail! I'm a Software Engineering graduate from UWE Bristol with a passion for Financial Technology and Web3. My academic journey culminated in a dissertation exploring the intersection of blockchain technology and modern online banking, which sparked my fascination with innovative finance solutions.
                        </p>
                        <p className='text-white/90'>
                            Currently working in telecommunications sales, I love all things tech and am particularly drawn to the intersection of finance and blockchain technology. My interest extends beyond traditional banking applications, exploring how concepts like smart contracts and decentralised storage systems such as IPFS can be applied across different areas of finance.
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
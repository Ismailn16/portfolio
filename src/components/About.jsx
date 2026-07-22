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
                            Hi, I'm Abdul Noor, also known as Ismail! I'm a Software Engineering graduate from UWE Bristol with a passion for Financial Technology and an interest in Web3. My dissertation explored the intersection of blockchain technology and modern online banking, which sparked a broader curiosity in how emerging technologies can reshape finance, from smart contracts to decentralised systems.
                        </p>
                        <p className='text-white/90'>
                            Most recently I built and shipped NotifX, a live App Store app helping traders stay ahead of market-moving economic events. I designed and built the entire backend infrastructure from the ground up, engineering a smart notification system that adapts in real time to user preferences and delivers alerts reliably at exactly the right moment.
                            </p>
                        <p className='text-white/90'>
                            Outside of fintech, I love all things tech and am always exploring new ideas. I'm keen to connect with like-minded people passionate about technology and innovation, feel free to reach out via LinkedIn or email!
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
import React from 'react';
import Email from '../assets/smartmockups_lwkyxx8z.png';
import Accom from '../assets/smartmockups_lwkz2roq.png';
import Twin from '../assets/smartmockups_lwkz4vc3.png';
import Portfolio from '../assets/smartmockups_lwkyptmt.png';
import { motion } from "framer-motion";




const Projects = () => {
    return (
        <div id='Projects' className='py-6 max-w-[1200px] mx-auto'>
            <div className='mx-auto px-4 md:px-8'>
                <div className='mb-4 flex items-center justify-between gap-8'>
                    <div className='flex flex-col gap-4'>
                        <motion.h2 whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.5, delay: 1 }} className='mr-2 text-3xl lg:text-4xl primary-color'>
                            My Projects
                        </motion.h2>
                        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.5, delay: 1.2 }} className='mr-2 pb-4 text-white'>
                            These are my latest projects.
                        </motion.p>
                    </div>
                </div>
                <div>
                    <div className='mb-8 flex-wrap lg:justify-center flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.5, delay: 1.5 }} className='w-full lg:w-1/4 '>
                            <img src={Accom} alt='' className='mb-6 rounded' />
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1.5, delay: 1.5 }} className='w-full max-w-xl'>
                            <h6 className='mb-2 font-semibold text-white'>UWE Accomodation System</h6>
                            <p className='mb-4 text-neutral-400'>Created a university accomodation system that allows users to manage the rooms within UWE accomodation buildings based on their availability, cleaning status, etc.</p>
                            <ul className='rounded pr-2 py-1 text-sm font-medium flex'>
                                <li className='p-4 mr-2 rounded px-2 py-1 text-sm font-medium bg-neutral-900'><span>Java</span></li>
                                <li className='p-4 mr-2 rounded px-2 py-1 text-sm font-medium bg-neutral-900'><span>JavaFX</span></li>
                            </ul>
                        </motion.div>
                    </div>
                    <div className='mb-8 flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto flex-wrap lg:justify-center'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.5, delay: 1.5 }} className='w-full lg:w-1/4 '>
                            <img src={Email} alt='' className='mb-6 rounded' />
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1.5, delay: 1.5 }} className='w-full max-w-xl'>
                            <h6 className='mb-2 font-semibold text-white'>UWE ITS Help Service</h6>
                            <p className='mb-4 text-neutral-400'>Built a Help Service comprised of two webpages, one as a email automation service utilising a SendGrid Mail API and the other as a FAQ/Q&A page. The goal in creating this was to reduce email traffic for UWE ITS and improve students means of self-service</p>
                            <ul className='rounded pr-2 py-1 text-sm font-medium flex'>
                                <li className='p-4 mr-2 rounded px-2 py-1 text-sm font-medium bg-neutral-900'><span>HTML</span></li>
                                <li className='p-4 mr-2 rounded px-2 py-1 text-sm font-medium bg-neutral-900'><span>Tailwind</span></li>
                                <li className='p-4 mr-2 rounded px-2 py-1 text-sm font-medium bg-neutral-900'><span>JS</span></li>
                                <li className='p-4 mr-2 rounded px-2 py-1 text-sm font-medium bg-neutral-900'><span>Python</span></li>
                                <li className='p-4 mr-2 rounded px-2 py-1 text-sm font-medium bg-neutral-900'><span>MySQL</span></li>
                            </ul>
                        </motion.div>
                    </div>
                    <div className='mb-8 flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto flex-wrap lg:justify-center'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.5, delay: 1.5 }} className='w-full lg:w-1/4 '>
                            <img src={Portfolio} alt='' className='mb-6 rounded' />
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1.5, delay: 1.5 }} className='w-full max-w-xl'>
                            <h6 className='mb-2 font-semibold text-white'>Portfolio Website</h6>
                            <p className='mb-4 text-neutral-400'>Created a Portfolio page as a means to interactively display my experience and education to potential employers.</p>
                            <ul className='rounded pr-2 py-1 text-sm font-medium flex'>
                                <li className='p-4 mr-2 rounded px-2 py-1 text-sm font-medium bg-neutral-900'><span>HTML</span></li>
                                <li className='p-4 mr-2 rounded px-2 py-1 text-sm font-medium bg-neutral-900'><span>Tailwind</span></li>
                                <li className='p-4 mr-2 rounded px-2 py-1 text-sm font-medium bg-neutral-900'><span>React.js</span></li>
                            </ul>
                        </motion.div>
                    </div>
                    <div className='mb-8 flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto flex-wrap lg:justify-center'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.5, delay: 1.5 }} className='w-full lg:w-1/4'>
                            <img src={Twin} alt='' className='mb-6 rounded' />
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1.5, delay: 1.5 }} className='w-full max-w-xl '>
                            <h6 className='mb-2 font-semibold text-white'>Twin Cities Web Application</h6>
                            <p className='mb-4 text-neutral-400'>Collaboratively developed a Twin Cities web app providing information on London and Paris. Utilised APIs for weather forecasts, Google Maps for points of interest, and an RSS feed for daily local news updates.</p>
                            <ul className='rounded pr-2 py-1 text-sm font-medium flex'>
                                <li className='p-4 mr-2 rounded px-2 py-1 text-sm font-medium bg-neutral-900'><span>HTML</span></li>
                                <li className='p-4 mr-2 rounded px-2 py-1 text-sm font-medium bg-neutral-900'><span>Tailwind</span></li>
                                <li className='p-4 mr-2 rounded px-2 py-1 text-sm font-medium bg-neutral-900'><span>JS</span></li>
                                <li className='p-4 mr-2 rounded px-2 py-1 text-sm font-medium bg-neutral-900'><span>PHP</span></li>
                                <li className='p-4 mr-2 rounded px-2 py-1 text-sm font-medium bg-neutral-900'><span>SQL</span></li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
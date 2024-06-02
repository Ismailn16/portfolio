import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHotel } from "react-icons/fa6";
import { PiMathOperations } from "react-icons/pi";
import { PiTreeStructure } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaWrench } from "react-icons/fa";
import { motion } from 'framer-motion';


const Education = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="education py-16" id="Education">
            <div id='Education' className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <div className="skill-bx wow zoomIn text-center">
                            <motion.h3 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} transition={{ duration: 1.5, delay: 1 }} className="text-3xl font-semibold mb-4"><span className='primary-color'>Education</span></motion.h3>
                            <motion.p whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} transition={{ duration: 1.5, delay: 1.2 }} className="mb-8 text-white">
                                The following key modules have significantly contributed to my development during my studies at UWE Bristol.
                            </motion.p>
                            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} transition={{ duration: 1.5, delay: 1.5 }}>
                                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                    <div className="item flex flex-col items-center text-center">
                                        <FaWrench className='text-white text-3xl' />
                                        <h5 className="mt-2 text-white">Object-Oriented System Development 1</h5>
                                        <p className='w-1/2 text-sm text-neutral-400'>This module was my first introduction to OOP (Object-Oriented Programming) and using Java, we were tasked with creating a small program simulating an auto body shop.</p>
                                    </div>
                                    <div className="item flex flex-col items-center text-center">
                                        <FaHotel className='text-white text-3xl' />
                                        <h5 className="mt-2 text-white">Object-Oriented System Development 2</h5>
                                        <p className='w-1/2 text-sm text-neutral-400'>This module expanded on first-year OOP, focusing on design patterns and GUIs. We used this knowledge to create a UWE Accommodation System for admins to manage their buildings.</p>
                                    </div>
                                    <div className="item flex flex-col items-center text-center">
                                        <PiTreeStructure className='text-white text-4xl' />
                                        <h5 className="mt-2 text-white w-1/2">Design and Analysis of Data Structures and Algorithms</h5>
                                        <p className='w-1/2 text-sm text-neutral-400'>This module focused on Data Structures and Algorithms, with an emphasis on learning and implementing these concepts using Python.</p>
                                    </div>
                                    <div className="item flex flex-col items-center text-center">
                                        <TiWeatherPartlySunny className='text-white text-3xl' />
                                        <h5 className="mt-2 text-white">Data, Schemas and Applications</h5>
                                        <p className='w-1/2 text-sm text-neutral-400'>This module focused heavily on databases and APIs and their applications. Using the knowledge gained, we were tasked with creating a weather webpage.</p>
                                    </div>
                                    <div className="item flex flex-col items-center text-center">
                                        <IoMdMail className='text-white text-3xl' />
                                        <h5 className="mt-2 text-white">IT Practice: Collaborative Project</h5>
                                        <p className='w-1/2 text-sm text-neutral-400'>This IT project involved consulting with a client to address an issue they were facing, resulting in our development of an email automation system as the solution.</p>
                                    </div>
                                    <div className="item flex flex-col items-center text-center">
                                        <PiMathOperations className='text-white text-4xl' />
                                        <h5 className="mt-2 text-white">Foundations of Computing</h5>
                                        <p className='w-1/2 text-sm text-neutral-400'>This module provided an introduction to discrete mathematics and foundational theories in computer science.</p>
                                    </div>
                                </Carousel>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

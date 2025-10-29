import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { motion } from 'framer-motion';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone:',
        description: '+44 7383 475619'

    },
    {
        icon: <MdMail />,
        title: 'Email:',
        description: 'abduln2003@outlook.com'

    },
]

const Contact = () => {
    return (
        <div id='Contact' className='pt-32'>
            <div className='py-10 mx-auto text-white h-auto flex items-center justify-center'>
                <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>

                    <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5, delay: 1 }}>
                        <form action='https://getform.io/f/raeqddja' method='POST' className='flex flex-col gap-6 px-10 pt-10 pb-8 bg-[#222222] border-2 border-[#0f7d2f] rounded-xl'>
                            <h3 className='text-4xl primary-color'>Contact Me</h3>
                            <p className='text-white'>
                                Let's connect on LinkedIn or send me an email
                            </p>
                            <div className='grid grid-cols-1 gap-6'>
                                <input className='flex h-[48px] rounded-md border border-white/10 focus:border-[#0f7d2f] font-light bg-[#1a1a1a] px-4 py-5 text-base placeholder: text-white/60 outline-none' name='full name' type='fullname' placeholder='Full Name'></input>
                                <input className='flex h-[48px] rounded-md border border-white/10 focus:border-[#0f7d2f] font-light bg-[#1a1a1a] px-4 py-5 text-base placeholder: text-white/60 outline-none' name='emailaddress' type='email' placeholder='Email Address'></input>
                                <textarea name='message'
                                    className='flex h-[150px] rounded-md border border-white/10 focus:border-[#0f7d2f] font-light bg-[#1a1a1a] px-4 py-5 text-base placeholder:text-white/60 outline-none'
                                    placeholder='Your Message'
                                ></textarea>
                            </div>
                            <div className='flex justify-center'>
                                <button className='bg-primary-color rounded-sm p-2'>
                                    Submit
                                </button>
                            </div>

                        </form>
                    </motion.div>

                    <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5, delay: 1 }}>
                        <div className='p-2'>
                            <div className='my-2'>
                                <ul className='flex flex-col gap-10'>
                                    {info.map((item, index) => {
                                        return <li key={index} className='flex items-center gap-6'>
                                            <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#222222] text-[#0f7d2f] border-2 border-[#0f7d2f] rounded-md flex items-center justify-center'>
                                                <div className='text-[28px]'>{item.icon}</div>
                                            </div>
                                            <div>
                                                <p className='text-white'>{item.title}</p>
                                                <h3 className='text-white'>{item.description}</h3>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ y: 100, opacity: 0 }} transition={{ duration: 1.5, delay: 1.5 }} className='flex justify-center py-8'>
                <p className='text-xl text-white font-semibold'>Thanks for visiting!</p>
            </motion.div>
        </div>

    )
}

export default Contact
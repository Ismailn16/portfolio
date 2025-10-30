import { MdMail } from "react-icons/md";
import { motion } from 'framer-motion';

const info = [
    {
        icon: <MdMail />,
        title: 'Email:',
        description: 'abduln2003@outlook.com'

    },
]

const Contact = () => {
    return (
        <div id='Contact' className='pt-12 md:pt-0.5'>
            <div className='py-10 mx-auto text-white h-auto flex items-center justify-center'>
                <div className='flex sm:flex-row flex-col items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>

                    <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5, delay: 1 }}>
                        <form action='https://getform.io/f/ajjrgxwa' method='POST' className='flex flex-col gap-6 px-10 pt-10 pb-8 bg-[#222222] border-2 border-[#0f7d2f] rounded-xl'>
                            <h3 className='text-4xl primary-color'>Contact Me</h3>
                            <p className='text-white'>
                                Please contact me via this form or send me an email
                            </p>
                            <div className='grid grid-cols-1 gap-6'>
                                <input className='flex h-[48px] rounded-md border border-white/10 focus:border-[#0f7d2f] font-light bg-[#1a1a1a] px-4 py-5 text-base placeholder: text-white/60 outline-none' name='emailaddress' type='email' placeholder='Email Address'></input>
                                <textarea name='message'
                                    className='flex h-[150px] rounded-md border border-white/10 focus:border-[#0f7d2f] font-light bg-[#1a1a1a] px-4 py-5 text-base placeholder:text-white/60 outline-none'
                                    placeholder='Your Message'
                                ></textarea>
                            </div>
                            <div className='flex justify-center'>
                                <button className='bg-primary-color hover:bg-[#2db84a] rounded-full px-6 py-2 transition-all duration-300 hover:scale-110'>
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
            <motion.div animate={{y: 0, opacity: 1}} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1, delay: 0.5 }} className='flex flex-col items-center pt-4 pb-8 gap-2'>
                <p className='text-sm text-white/60'>© {new Date().getFullYear()} abdulsn.com. All rights reserved.</p>
                <p className='text-xl text-white font-semibold'>Thanks for visiting!</p>
            </motion.div>
        </div>

    )
}

export default Contact
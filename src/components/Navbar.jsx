import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

const container = (delay) => ({
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1.5, delay: delay },
    },
});

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['Home', 'About', 'Projects', 'Skills', 'Education', 'Contact'];
            const scrollPosition = window.scrollY + 150; // Increased offset for better positioning

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getNavItemClass = (section) => {
        const baseClass = 'font-semibold transition-colors duration-200';
        return activeSection === section 
            ? `${baseClass} text-[#0f7d2f]` 
            : `${baseClass} text-white hover:text-[#0f7d2f]`;
    };

    return (
        <div className='fixed top-0 left-0 right-0 z-50 flex justify-center items-center pt-6 px-4'>
            <motion.nav 
                variants={container(0.3)} 
                initial='hidden' 
                animate='visible' 
                className='bg-neutral-800/90 backdrop-blur-md rounded-full px-8 py-4 shadow-lg border border-neutral-700'
            >
                <ul className='flex items-center space-x-8'>
                    <a href='#Home'>
                        <li className={getNavItemClass('Home')}>
                            Home
                        </li>
                    </a>
                    <a href='#About'>
                        <li className={getNavItemClass('About')}>
                            About
                        </li>
                    </a>
                    <a href='#Skills'>
                        <li className={getNavItemClass('Skills')}>
                            Skills
                        </li>
                    </a>
                    <a href='#Projects'>
                        <li className={getNavItemClass('Projects')}>
                            Experience
                        </li>
                    </a>
                    <a href='#Education'>
                        <li className={getNavItemClass('Education')}>
                            Projects
                        </li>
                    </a>
                    <a href='#Contact'>
                        <li className={getNavItemClass('Contact')}>
                            Contact
                        </li>
                    </a>
                </ul>
            </motion.nav>
        </div>
    )
}

export default Navbar
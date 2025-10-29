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
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Check if we're near the bottom of the page (for Contact section)
            const isNearBottom = scrollPosition + windowHeight >= documentHeight - 100;

            // If near bottom, set Contact as active
            if (isNearBottom) {
                setActiveSection('Contact');
                return;
            }

            // Find the current active section by checking which one is most visible
            let currentSection = 'Home';
            const viewportMiddle = scrollPosition + windowHeight / 2;

            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    
                    // Check if viewport middle is within this section
                    if (viewportMiddle >= offsetTop && viewportMiddle <= offsetTop + offsetHeight) {
                        currentSection = section;
                        break;
                    }
                    // Also check if we've passed this section's top
                    if (scrollPosition + 200 >= offsetTop && scrollPosition + 200 < offsetTop + offsetHeight) {
                        currentSection = section;
                        break;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial active section
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        // Immediately set the active section when clicked
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetPosition = element.offsetTop - 120; // Account for navbar height
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const getNavItemClass = (section) => {
        const baseClass = 'font-semibold transition-colors duration-200';
        return activeSection === section 
            ? `${baseClass} text-[#0f7d2f]` 
            : `${baseClass} text-white hover:text-[#0f7d2f]`;
    };

    return (
        <div className='fixed top-0 left-0 right-0 z-50 flex justify-center items-center pt-3 md:pt-6 px-2 md:px-4'>
            <motion.nav 
                variants={container(0.3)} 
                initial='hidden' 
                animate='visible' 
                className='bg-neutral-800/90 backdrop-blur-md rounded-lg md:rounded-full px-3 py-2 md:px-8 md:py-4 shadow-lg border border-neutral-700'
            >
                <ul className='flex items-center space-x-2 md:space-x-8'>
                    <a href='#Home' onClick={(e) => handleNavClick(e, 'Home')}>
                        <li className={`${getNavItemClass('Home')} text-xs md:text-base`}>
                            Home
                        </li>
                    </a>
                    <a href='#About' onClick={(e) => handleNavClick(e, 'About')}>
                        <li className={`${getNavItemClass('About')} text-xs md:text-base`}>
                            About
                        </li>
                    </a>
                    <a href='#Skills' onClick={(e) => handleNavClick(e, 'Skills')}>
                        <li className={`${getNavItemClass('Skills')} text-xs md:text-base`}>
                            Skills
                        </li>
                    </a>
                    <a href='#Projects' onClick={(e) => handleNavClick(e, 'Projects')}>
                        <li className={`${getNavItemClass('Projects')} text-xs md:text-base`}>
                            Experience
                        </li>
                    </a>
                    <a href='#Education' onClick={(e) => handleNavClick(e, 'Education')}>
                        <li className={`${getNavItemClass('Education')} text-xs md:text-base`}>
                            Projects
                        </li>
                    </a>
                    <a href='#Contact' onClick={(e) => handleNavClick(e, 'Contact')}>
                        <li className={`${getNavItemClass('Contact')} text-xs md:text-base`}>
                            Contact
                        </li>
                    </a>
                </ul>
            </motion.nav>
        </div>
    )
}

export default Navbar
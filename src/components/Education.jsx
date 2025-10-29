import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';


const Education = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
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
        <section className="education py-16 pt-32" id="Education">
            <div id='Education' className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <div className="skill-bx wow zoomIn text-center">
                            <motion.h3 animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5, delay: 1 }} className="text-3xl font-semibold mb-4"><span className='primary-color'>Projects</span></motion.h3>
                            <motion.p animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5, delay: 1 }} className="mb-8 text-white">
                                The following are some of my more recent projects, done in my own time and during university.
                            </motion.p>
                            <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5, delay: 1 }}>
                                <Carousel 
                                    responsive={responsive} 
                                    infinite={true} 
                                    className="owl-carousel owl-theme skill-slider"
                                    customLeftArrow={<div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 cursor-pointer transition-all duration-300"><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></div>}
                                    customRightArrow={<div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 cursor-pointer transition-all duration-300"><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>}
                                    containerClass="carousel-container"
                                    itemClass="carousel-item"
                                >
                                    {/* NotifX */}
                                    <div className="item px-3">
                                        <div className="group bg-neutral-800 border border-neutral-700 rounded-xl p-6 h-92 w-80 mx-auto">
                                            <div className="flex items-center justify-center mb-4">
                                                <div className="text-center">
                                                    <h5 className="text-lg font-semibold text-white">NotifX</h5>
                                                    <p className="text-sm text-neutral-400">Jul '25 – Present</p>
                                                </div>
                                            </div>
                                            <p className='text-sm text-neutral-300 mb-4'>Developing a notifications app for forex traders to prevent losses caused by missed news. Building AWS Lambda functions with Puppeteer for automated forex news scraping and data processing, storing structured daily files in S3 with CloudFront CDN caching. Implementing Redis queue system for real-time notifications</p>
                                            <div className="flex flex-wrap gap-2 justify-center">
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">React Native</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">Express.js</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">AWS Lambda</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">AWS S3</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">AWS DynamoDB</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">Redis</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* t3th3rScan */}
                                    <div className="item px-3">
                                        <div className="group bg-neutral-800 border border-neutral-700 rounded-xl p-6 h-92 w-80 mx-auto">
                                            <div className="flex items-center justify-center mb-4">
                                                <div className="text-center">
                                                    <h5 className="text-lg font-semibold text-white">t3th3rScan</h5>
                                                    <p className="text-sm text-neutral-400">Dec '24 – May '25</p>
                                                </div>
                                            </div>
                                            <p className='text-sm text-neutral-300 mb-4'>Created a mobile app for young adults exploring crypto, abstracting complex blockchain interactions with an intuitive banking-like interface while avoiding volatility through stablecoin adoption. Incorporated thirdweb SDK and Ethers.js for peer-to-peer USDT transfers over Polygon PoS with ≈$0.01 POL gas fees.</p>
                                            <div className="flex flex-wrap gap-2 justify-center">
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">React Native</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">Express.js</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">PostgreSQL</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">thirdweb SDK</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">Ethers.js</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">OpenAI API</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Football Management System */}
                                    <div className="item px-3">
                                        <div className="group bg-neutral-800 border border-neutral-700 rounded-xl p-6 h-92 w-80 mx-auto">
                                            <div className="flex items-center justify-center mb-4">
                                                <div className="text-center">
                                                    <h5 className="text-lg font-semibold text-white">Football Management System</h5>
                                                    <p className="text-sm text-neutral-400">Jul '24 – Aug '24</p>
                                                </div>
                                            </div>
                                            <p className='text-sm text-neutral-300 mb-4'>Produced a football booking management system using Java and JavaFX, integrating Square APIs and Twilio SMS API for automated payment links. Integrated PostgreSQL database to manage bookings and player information. Reduced average payment collection time by 25% through streamlined automation.</p>
                                            <div className="flex flex-wrap gap-2 justify-center">
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">Java</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">JavaFX</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">Square API</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">Twilio API</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">PostgreSQL</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* AI-Powered Pantry Tracker */}
                                    <div className="item px-3">
                                        <div className="group bg-neutral-800 border border-neutral-700 rounded-xl p-6 h-92 w-80 mx-auto">
                                            <div className="flex items-center justify-center mb-4">
                                                <div className="text-center">
                                                    <h5 className="text-lg font-semibold text-white">AI-Powered Pantry Tracker</h5>
                                                    <p className="text-sm text-neutral-400">Aug '24 – Sep '24</p>
                                                </div>
                                            </div>
                                            <p className='text-sm text-neutral-300 mb-4'>AI-powered pantry tracker built using Next.js, Material-UI, Firebase, and OpenAI API that enables users to record items stored in their pantry and generate personalised recipes using their available ingredients. Helps manage pantry inventory and minimise food waste by suggesting meals based on what you already have.</p>
                                            <div className="flex flex-wrap gap-2 justify-center">
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">Next.js</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">MaterialUI</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">Firebase</button>
                                                <button className="px-2 py-1 bg-[#0f7d2f] hover:bg-[#2db84a] text-xs text-white rounded transition-colors duration-200 cursor-pointer">OpenAI API</button>
                                            </div>
                                        </div>
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
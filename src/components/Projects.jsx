import { motion } from "framer-motion";


const Projects = () => {
    return (
        <div id='Projects' className='pb-2 max-w-[1200px] mx-auto pt-12 md:pt-22'>
            <div className='mx-auto px-4 md:px-8'>
                <div className='mb-4 flex items-center justify-between gap-8'>
                    <div className='flex flex-col gap-4'>
                        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1, ease: "easeIn" }} className='mr-2 text-3xl lg:text-4xl primary-color'>
                            My Experience
                        </motion.h2>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1, ease: "easeIn" }} className='mr-2 pb-4 text-white'>
                            Below is my experience which includes education and work!
                        </motion.p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    {/* Software Engineer at Tiffin and Co Caterers */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.2, ease: "easeIn" }} className='w-full'>
                        <div className='group bg-neutral-800 border border-neutral-700 rounded-xl p-6 hover:border-[#0f7d2f] hover:shadow-lg hover:shadow-[#0f7d2f]/20 transition-all duration-300'>
                            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3'>
                                <h3 className='text-xl font-semibold text-white group-hover:text-[#0f7d2f] transition-colors'>Software Engineer</h3>
                                <span className='text-sm text-neutral-400'>Aug '25 – Present</span>
                            </div>
                            <p className='text-[#0f7d2f] font-medium mb-4'>Tiffin and Co Caterers</p>
                            <ul className='space-y-2 text-neutral-300'>
                                <li className='flex items-start'><span className='mr-2 text-[#0f7d2f]'>•</span> Engineered and launched a full-stack catering platform (Next.js, Supabase, Stripe, Resend) that fully replaced a phone order and spreadsheet-based workflow, reducing time spent manually recording and relaying incoming orders by ≈80%</li>
                                <li className='flex items-start'><span className='mr-2 text-[#0f7d2f]'>•</span> Built a companion Swift admin application enabling team members to manage the full order lifecycle from one interface, replacing manual email contact entirely through automated personalised customer emails, saving an average of 7 hours of admin per week</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Software Engineer at SW Tyre Guys */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.4, ease: "easeIn" }} className='w-full'>
                        <div className='group bg-neutral-800 border border-neutral-700 rounded-xl p-6 hover:border-[#0f7d2f] hover:shadow-lg hover:shadow-[#0f7d2f]/20 transition-all duration-300'>
                            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3'>
                                <h3 className='text-xl font-semibold text-white group-hover:text-[#0f7d2f] transition-colors'>Software Engineer</h3>
                                <span className='text-sm text-neutral-400'>Jun '25 – Feb '26</span>
                            </div>
                            <p className='text-[#0f7d2f] font-medium mb-4'>SW Tyre Guys</p>
                            <ul className='space-y-2 text-neutral-300'>
                                <li className='flex items-start'><span className='mr-2 text-[#0f7d2f]'>•</span> Architected and deployed a full-stack mobile tyre business system (SwiftUI, Express.js, Supabase, Stripe, Twilio), introducing automated push notifications to alert drivers of incoming jobs, cutting manual contact for every order and reducing operator intervention to just 1-2 check-in calls per day</li>
                                <li className='flex items-start'><span className='mr-2 text-[#0f7d2f]'>•</span> Replaced a shared Apple Notes stock system prone to corruption and inaccurate counts with a reservation-based inventory system, automatically withholding stock upon order creation and only deducting it upon fulfilment, reducing stock count discrepancies and double-booking by ≈95%</li>
                            </ul>
                        </div>
                    </motion.div>

                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.8, ease: "easeIn" }} className='w-full'>
                        <div className='group bg-neutral-800 border border-neutral-700 rounded-xl p-6 hover:border-[#0f7d2f] hover:shadow-lg hover:shadow-[#0f7d2f]/20 transition-all duration-300'>
                            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3'>
                                <h3 className='text-xl font-semibold text-white group-hover:text-[#0f7d2f] transition-colors'>Bachelor of Science in Software Engineering for Business</h3>
                                <span className='text-sm text-neutral-400'>Sep '22 – Jul '25</span>
                            </div>
                            <p className='text-[#0f7d2f] font-medium mb-4'>University of the West of England, Bristol</p>
                            <ul className='space-y-2 text-neutral-300'>
                                <li className='flex items-start'><span className='mr-2 text-[#0f7d2f]'>•</span> Grade: Upper Second Class Honours (2:1)</li>
                                <li className='flex items-start'><span className='mr-2 text-[#0f7d2f]'>•</span> Key Modules: Object-Oriented Systems Development I & II, Foundations of Computing, Design and Analysis of Data Structures and Algorithms, Software Development Project, Advanced Databases</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Programming Lead at UWE */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.6, ease: "easeIn" }} className='w-full'>
                        <div className='group bg-neutral-800 border border-neutral-700 rounded-xl p-6 hover:border-[#0f7d2f] hover:shadow-lg hover:shadow-[#0f7d2f]/20 transition-all duration-300'>
                            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3'>
                                <h3 className='text-xl font-semibold text-white group-hover:text-[#0f7d2f] transition-colors'>Programming Lead</h3>
                                <span className='text-sm text-neutral-400'>Jan '24 – Apr '24</span>
                            </div>
                            <p className='text-[#0f7d2f] font-medium mb-4'>University of the West of England, Bristol</p>
                            <ul className='space-y-2 text-neutral-300'>
                                <li className='flex items-start'><span className='mr-2 text-[#0f7d2f]'>•</span> Led a development team for a UWE ITS initiative aiming to reduce email traffic and system congestion, achieving a 19% reduction in email ticket creation</li>
                                <li className='flex items-start'><span className='mr-2 text-[#0f7d2f]'>•</span> Designed a support system including a issue reporting webpage with email automation, and a FAQ/Q&A webpage using HTML/Tailwind CSS/JavaScript, Flask, SendGrid API, and a MySQL database</li>
                                <li className='flex items-start'><span className='mr-2 text-[#0f7d2f]'>•</span> Applied Agile methodology, conducting weekly stakeholder reviews and frequently collaborating with UWE ITS leadership to ensure requirements alignment and deliver a solution that exceeded project objectives</li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Projects

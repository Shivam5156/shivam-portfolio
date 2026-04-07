import React from "react";
import { motion } from 'framer-motion'
function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id="about"
            className="py-20 bg-dark-200"
        >

            <div className="container mx-auto px-6">

                <h2 className="text-3xl font-bold text-center mb-4">About
                    <span className="text-purple"> Me</span>

                </h2>

                <p className="text-gray-400 text-center mx-auto mb-16">Get to know more about my background and passion</p>


                <div className="flex flex-col md:flex-row items-center gap-12">

                    <div className="md:w-1/2 rounded-2xl overflow-hidden">
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="w-full h-150 object-cover rounded-2xl"

                            src="/ShivamSingh.jpeg" alt="profile" />
                    </div>



                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="md:w-1/2">

                        <div className="rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold mb-6 ">My Journey</h3>

                            <p className="text-gray-300 mb-4">
                            Hi, I’m Shivam Singh, a passionate Full Stack Developer, currently in the final year of my B.Tech in Computer Science and Information Technology at SIRT College, Bhopal.
                            </p>

                            <p className="text-gray-300 mb-6">
                                I specialize in React, JavaScript, Node.js, and Tailwind CSS. I focus on clean code, performance optimization, and smooth user experience.
                            </p>
                            <p className="text-gray-300 mb-6">I have built 10+ projects and gained over 1 year of hands-on experience through continuous learning and real-world development.</p>

                            {/* STATS SECTION 👇 */}
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-dark-300 p-4 rounded-xl text-center">
                                    <h4 className="text-xl font-bold text-purple">10+</h4>
                                    <p className="text-gray-400 text-sm">Projects</p>
                                </div>

                                <div className="bg-dark-300 p-4 rounded-xl text-center">
                                    <h4 className="text-xl font-bold text-purple">1+</h4>
                                    <p className="text-gray-400 text-sm">Year Learning</p>
                                </div>
                            </div>
                        </div>


                    </motion.div>
                </div>

            </div>


        </motion.div>
    )
}

export default About
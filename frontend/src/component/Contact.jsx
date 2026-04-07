import React from "react";
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!form.name || !form.email || !form.message) {
            toast.error("All fields are required ");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(form.email)) {
            toast.error("Invalid Email ");
            return;
        }

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, form);
            if (res) {
                toast.success(res.data.message);
                setForm({ name: "", email: "", message: "" });
            }


        } catch (err) {
            toast.err("Error sending message ");
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            id="contact"
            className="py-20 bg-dark-200"
        >

            <div className="container mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-4">
                    Get In <span className="text-purple">Touch</span>
                </h2>

                <p className="text-gray-400 text-center mx-auto mb-16 max-w-xl">
                    Have a project in mind or want to collaborate? Let’s talk.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Contact Form */}
                    <div className="bg-dark-300 p-6 rounded-2xl border border-white/10 shadow-lg">

                        <form
                            className="space-y-6"
                            onSubmit={handleSubmit}
                        >

                            <div>
                                <label className="block text-gray-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full bg-dark-400 border border-dark-400 rounded-xl py-3 px-4 outline-none 
                                    focus:border-purple focus:ring-1 focus:ring-purple transition"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full bg-dark-400 border border-dark-400 rounded-xl py-3 px-4 outline-none 
                                    focus:border-purple focus:ring-1 focus:ring-purple transition"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Your Message</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full bg-dark-400 border border-dark-400 rounded-xl py-3 px-4 outline-none 
                                    focus:border-purple focus:ring-1 focus:ring-purple transition resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-purple rounded-lg font-medium text-white 
                                hover:bg-purple-700 transition duration-300 cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">

                        {/* Location */}
                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-purple text-2xl mt-1" />
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Location</h3>
                                <p className="text-gray-300">Bhopal, Madhya Pradesh, India</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <FaEnvelope className="text-purple text-2xl mt-1" />
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Email</h3>
                                <a
                                    href="mailto:singhs36533@gmail.com"
                                    className="text-gray-300 hover:text-purple underline underline-offset-4"
                                >
                                    singhs36533@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <FaPhone className="text-purple text-2xl mt-1" />
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                                <p className="text-gray-300">+91 8120965156</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-4">
                            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>

                            <div className="flex space-x-4">

                                <a href="https://github.com/Shivam5156"
                                    className="w-12 h-12 rounded-full bg-dark-100 flex items-center justify-center 
                                    text-purple hover:bg-purple hover:text-white transition duration-300"
                                >
                                    <FaGithub />
                                </a>

                                <a href="https://www.linkedin.com/in/shivam-singh-775252371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    className="w-12 h-12 rounded-full bg-dark-100 flex items-center justify-center 
                                    text-purple hover:bg-purple hover:text-white transition duration-300"
                                >
                                    <FaLinkedin />
                                </a>

                                <a href="https://leetcode.com/u/shivam5156/"
                                    className="w-12 h-12 rounded-full bg-dark-100 flex items-center justify-center 
                                    text-purple hover:bg-purple hover:text-white transition duration-300"
                                >
                                    <img src="/leetcode.png" alt="" className="w-6" />
                                </a>

                                <a href="https://www.instagram.com/mr__shivam__.__?igsh=Ymdncm14NWx4Zm9x"
                                    className="w-12 h-12 rounded-full bg-dark-100 flex items-center justify-center 
                                    text-purple hover:bg-purple hover:text-white transition duration-300"
                                >
                                    <FaInstagram />
                                </a>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default Contact;
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("maqnwgpj");

    if (state.succeeded) {
        return (
            <section id="contact" className="py-24 bg-black relative">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full filter blur-[100px] opacity-20" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-12 backdrop-blur-md max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
                        <p className="text-gray-400 text-lg">Thank you for reaching out. We'll get back to you shortly.</p>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-24 bg-black relative">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full filter blur-[100px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
                        <p className="text-gray-400 text-lg mb-12">
                            Ready to transform your digital presence? Get in touch with us to discuss your next project.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                                    <a href="mailto:dmamedia@gmail.com" className="text-gray-400 hover:text-white transition-colors">dmamedia@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Call Us</h3>
                                    <a href="tel:+917019482220" className="text-gray-400 hover:text-white transition-colors">+91 7019482220</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                                    <p className="text-gray-400">Bengaluru, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="john@example.com"
                                    required
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="Project Inquiry"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                    required
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {state.submitting ? 'Sending...' : 'Send Message'}
                                {!state.submitting && <Send className="w-4 h-4" />}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Heart, Users } from 'lucide-react';

const values = [
    {
        icon: Target,
        title: "Results-Driven",
        description: "Every strategy is built around measurable outcomes and real business growth."
    },
    {
        icon: Zap,
        title: "Innovation First",
        description: "We stay ahead of trends to give your brand a competitive edge."
    },
    {
        icon: Heart,
        title: "Passion for Excellence",
        description: "We treat every project with dedication and creative enthusiasm."
    },
    {
        icon: Users,
        title: "Collaborative Approach",
        description: "Your vision drives our work. We succeed when you succeed."
    }
];

const About = () => {
    return (
        <section id="about" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full filter blur-[120px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            About DMA Media
                        </h2>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            We are a full-service digital marketing agency based in Bengaluru, India.
                            Our team of creative strategists, designers, and growth hackers work together
                            to transform brands into digital powerhouses.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Founded with a vision to bridge the gap between creative excellence and
                            data-driven marketing, we've helped businesses of all sizes achieve
                            remarkable growth in the digital landscape.
                        </p>
                        <div className="flex gap-8">
                            <div>
                                <h3 className="text-4xl font-bold text-white mb-1">50+</h3>
                                <p className="text-gray-500">Happy Clients</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-white mb-1">100+</h3>
                                <p className="text-gray-500">Projects Completed</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-white mb-1">5+</h3>
                                <p className="text-gray-500">Years Experience</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-6xl md:text-7xl font-bold text-white mb-4">DMA</h3>
                                <p className="text-2xl text-gray-400">Digital Marketing Amplified</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full border border-white/10" />
                        <div className="absolute -top-6 -left-6 w-20 h-20 bg-white/5 rounded-full border border-white/10" />
                    </motion.div>
                </div>

                {/* Values */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Values</h3>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        The principles that guide everything we do.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition-colors">
                                <value.icon className="w-7 h-7 text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                            <p className="text-gray-400 text-sm">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

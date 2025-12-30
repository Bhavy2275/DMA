import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, BarChart3, Users, Target, PenTool, Palette } from 'lucide-react';

const services = [
    {
        icon: Lightbulb,
        title: "Brand Strategy",
        description: "Crafting compelling narratives that resonate with your audience and define your market position."
    },
    {
        icon: BarChart3,
        title: "SEO & Analytics",
        description: "Data-driven optimization to maximize your visibility and understand user behavior."
    },
    {
        icon: Users,
        title: "Social Media Marketing",
        description: "Building authentic connections and growing your community across all major platforms."
    },
    {
        icon: Target,
        title: "Performance Marketing",
        description: "Precision-targeted campaigns designed to deliver measurable ROI and conversions."
    },
    {
        icon: PenTool,
        title: "Content Creation",
        description: "Engaging storytelling through video, copy, and visuals that capture attention."
    },
    {
        icon: Palette,
        title: "Creative Design",
        description: "Stunning visual identities and user experiences that leave a lasting impression."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full filter blur-[120px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Comprehensive digital solutions tailored to elevate your brand and drive sustainable growth.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                                <service.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

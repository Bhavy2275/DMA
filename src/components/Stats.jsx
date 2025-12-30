import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: "500+", label: "Successful Campaigns" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "250M+", label: "Impressions Generated" },
    { value: "3x", label: "Average ROI Increase" }
];

const Stats = () => {
    return (
        <section className="py-20 bg-black relative">
            <div className="absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-1/2 -translate-y-1/2" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center relative bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 glow-text">{stat.value}</h3>
                            <p className="text-gray-400 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

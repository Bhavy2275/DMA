import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Brand Revitalization",
        category: "Brand Strategy",
        description: "Complete digital transformation for a leading lifestyle brand, resulting in 3x engagement growth.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        result: "300% Engagement Increase"
    },
    {
        title: "E-Commerce Launch",
        category: "Performance Marketing",
        description: "Multi-channel campaign for a new e-commerce platform, driving massive first-month sales.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        result: "₹50L+ Revenue in Month 1"
    },
    {
        title: "Social Media Campaign",
        category: "Social Media",
        description: "Viral social media strategy that built a community of 100K+ engaged followers.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
        result: "100K+ Followers Gained"
    },
    {
        title: "SEO Domination",
        category: "SEO & Analytics",
        description: "Comprehensive SEO overhaul that secured top 3 rankings for competitive keywords.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
        result: "Top 3 Google Rankings"
    },
    {
        title: "Content Production",
        category: "Content Creation",
        description: "End-to-end video production and content strategy for a tech startup's product launch.",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&h=400&fit=crop",
        result: "5M+ Video Views"
    },
    {
        title: "Visual Identity",
        category: "Creative Design",
        description: "Complete brand identity redesign including logo, guidelines, and digital assets.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
        result: "Award-Winning Design"
    }
];

const Work = () => {
    return (
        <section id="work" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full filter blur-[120px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Our Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Showcasing campaigns and projects that delivered exceptional results for our clients.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    {project.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-green-400 text-sm font-medium">
                                        {project.result}
                                    </span>
                                    <ArrowUpRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;

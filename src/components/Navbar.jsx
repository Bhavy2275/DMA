import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 left-0 bg-black/50 backdrop-blur-lg border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold tracking-tighter text-white">DMA Media</h1>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">Services</a>
                            <a href="#work" className="text-gray-300 hover:text-white transition-colors duration-300">Work</a>
                            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
                            <a href="#contact" className="px-6 py-2 bg-white text-black rounded-full font-medium hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                                Get in touch
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-md">Services</a>
                            <a href="#work" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-md">Work</a>
                            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-md">About</a>
                            <a href="#contact" className="block px-3 py-2 mt-4 text-center bg-white text-black rounded-lg font-medium">Get in touch</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

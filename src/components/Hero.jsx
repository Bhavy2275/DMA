import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SplineScene } from './ui/spline';
import { Spotlight } from './ui/spotlight';
import { Card } from './ui/card';

const Hero = () => {
    return (
        <section className="relative min-h-screen pt-20 overflow-hidden bg-black flex items-center justify-center">

            {/* Background Elements */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20 z-0"
                fill="white"
            />

            {/* 3D Scene - Positioned behind text */}
            <div className="absolute inset-0 z-0 opacity-80 pointer-events-none lg:pointer-events-auto">
                <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                />
            </div>

            {/* Main Content */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Digital Marketing
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                            Amplified
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                        We transform brands into digital powerhouses through cutting-edge strategies, immersive experiences, and data-driven campaigns.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 group z-30 relative">
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-md z-30 relative">
                            View Our Work
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShaderAnimation } from './ui/shader-animation';

const Intro = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide intro after 3.5 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800); // Wait for exit animation
        }, 3500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center font-sans"
                >
                    <div className="absolute inset-0 z-0">
                        <ShaderAnimation />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <motion.h1
                            initial={{ scale: 0.8, opacity: 0, letterSpacing: "10px" }}
                            animate={{ scale: 1, opacity: 1, letterSpacing: "2px" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                        >
                            DMA MEDIA
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="text-gray-400 mt-4 text-xl tracking-widest uppercase"
                        >
                            Digital Marketing Amplified
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Intro;

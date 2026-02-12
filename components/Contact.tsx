'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <footer className="relative z-20 bg-[#0D0D0D] pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter"
                >
                    Let’s build intelligent <br /> systems together.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-lg text-gray-400"
                >
                    <a href="mailto:moitraaryak@gmail.com" className="hover:text-blue-300 transition-all border-b border-transparent hover:border-blue-300 pb-1 hover:scale-105">
                        moitraaryak@gmail.com
                    </a>
                    <div className="flex gap-8">
                        <a href="https://www.linkedin.com/in/aryak-moitra1/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300">LinkedIn</a>
                        <a href="https://github.com/aryaktc" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300">GitHub</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}

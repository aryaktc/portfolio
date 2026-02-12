'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Overlay() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0, -50]);

    const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [50, 0, -50]);

    const opacity3 = useTransform(scrollYProgress, [0.5, 0.7, 0.9], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.7, 0.9], [50, 0, -50]);

    return (
        <div ref={ref} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10 flex flex-col justify-between">
            {/* Section 1 */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 z-20">
                <motion.div style={{ opacity: opacity1, y: y1 }}>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tighter cursor-default selection:bg-blue-500/30">
                        ARYAK MOITRA
                    </h1>
                    <p className="text-lg md:text-2xl text-blue-200/80 mt-4 tracking-wide font-light">
                        AI-First Software Engineer
                    </p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-xs md:text-base text-gray-500 mt-8 max-w-lg mx-auto"
                    >
                        Building scalable systems at the intersection of React, automation & Generative AI.
                    </motion.p>
                </motion.div>
            </div>

            {/* Section 2 */}
            <div className="fixed top-1/2 left-[5%] md:left-[10%] -translate-y-1/2 max-w-2xl px-4 w-full md:w-auto">
                <motion.div style={{ opacity: opacity2, y: y2 }}>
                    <h2 className="text-3xl md:text-6xl font-bold text-white leading-none tracking-tight">
                        I architect <br /> intelligent workflows.
                    </h2>
                    <p className="text-base md:text-xl text-gray-400 mt-6 border-l-2 border-blue-500 pl-4">
                        From AI Resume Evaluators to Podcast Generation Agents, <br />
                        I design systems that think.
                    </p>
                </motion.div>
            </div>

            {/* Section 3 */}
            <div className="fixed top-1/2 right-[5%] md:right-[10%] -translate-y-1/2 max-w-2xl text-right px-4 w-full md:w-auto">
                <motion.div style={{ opacity: opacity3, y: y3 }}>
                    <h2 className="text-3xl md:text-6xl font-bold text-white leading-none tracking-tight">
                        Engineering with precision. <br />
                        Designing with intent.
                    </h2>
                    <div className="flex justify-end gap-2 md:gap-4 mt-6 text-xs md:text-sm text-gray-500 font-mono uppercase flex-wrap">
                        <span>Clean Code</span> • <span>Scalable Arch</span> • <span>Performance First</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutMe() {
    const skills = [
        "React.js", "Next.js", "Python", "Generative AI",
        "Prompt Engineering", "REST APIs", "SQL", "DSA"
    ];

    return (
        <section className="relative z-20 bg-[#0D0D0D] py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Left: Placeholder Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-square max-w-md mx-auto md:mx-0 rounded-full overflow-hidden bg-neutral-900 border border-white/10 flex items-center justify-center group"
                >
                    <Image
                        src="/profile.jpeg"
                        alt="Aryak Moitra"
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        sizes="(max-width: 768px) 100vw, 500px"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10" />
                </motion.div>

                {/* Right: Content */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-8"
                    >
                        About Me
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6 text-xl text-gray-400 leading-relaxed font-light"
                    >
                        <p>
                            I’m a <span className="text-white font-medium">Computer Science student at VIT Chennai</span> focused on AI systems and scalable web engineering.
                        </p>
                        <p>
                            I enjoy solving algorithmic problems, building automation workflows, and exploring applied <span className="text-white font-medium">Generative AI</span>.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-3 mt-10"
                    >
                        {skills.map((skill, i) => (
                            <span
                                key={skill}
                                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:border-blue-500/30 hover:text-blue-200 transition-colors cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

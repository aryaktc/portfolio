'use client';

import { motion } from 'framer-motion';

export default function Leadership() {
    const items = [
        { role: "ACM Management Lead", desc: "Led technical workshops for 200+ participants" },
        { role: "TechnoVIT Volunteer", desc: "Optimized peak event registration workflows" }
    ];

    return (
        <section className="relative z-20 bg-[#0D0D0D] py-16 px-6 md:px-12 border-y border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-12 md:gap-24">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center text-center md:text-left md:items-start group cursor-default"
                    >
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{item.role}</h3>
                        <p className="text-gray-500 text-sm uppercase tracking-wide group-hover:text-gray-400 transition-colors">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

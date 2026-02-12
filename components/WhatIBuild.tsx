'use client';

import { motion } from 'framer-motion';

export default function WhatIBuild() {
    const features = [
        {
            title: "AI Automation Systems",
            items: ["n8n integrations", "Make.com workflows", "Prompt engineering pipelines"]
        },
        {
            title: "Scalable React Applications",
            items: ["Secure authentication", "RESTful architecture", "Responsive UI"]
        },
        {
            title: "ML-Driven Products",
            items: ["Model validation", "Real-time prediction systems", "Production-ready UI layers"]
        }
    ];

    return (
        <section className="relative z-20 bg-[#0D0D0D] py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight"
                >
                    What I Build
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider group-hover:text-blue-200 transition-colors">{feature.title}</h3>
                                <ul className="space-y-3">
                                    {feature.items.map((item, j) => (
                                        <li key={j} className="text-gray-400 flex items-center gap-2 group-hover:text-gray-300 transition-colors">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

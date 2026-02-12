'use client';

import { motion } from 'framer-motion';

export default function Projects() {
    const projects = [
        {
            title: "Nxt Watch",
            desc: "Architected a scalable React-based video streaming application with secure JWT authentication, search optimization, and modular state management.",
            tags: ["React", "JWT", "State Mgmt"],
            link: "https://aryaknxtwatch.ccbp.tech/"
        },
        {
            title: "AI Resume Evaluator",
            desc: "Designed an AI-powered resume analysis pipeline using prompt engineering and automated feedback loops via Make.com.",
            tags: ["AI Agent", "Make.com", "Prompt Eng"],
            link: "#" // No link provided for this agent, placeholder or generic
        },
        {
            title: "AI Podcast Generator",
            desc: "Integrated frontend with n8n webhooks to orchestrate topic-based AI audio generation with asynchronous feedback states.",
            tags: ["n8n", "Webhooks", "GenAI"],
            link: "#" // No link provided for this agent, placeholder or generic
        },
        {
            title: "GoCart",
            desc: "E-commerce platform focusing on performance and responsive design patterns.",
            tags: ["E-commerce", "Responsive"],
            link: "https://gocart-sooty.vercel.app/"
        },
        {
            title: "LinkKeep",
            desc: "Modern bookmark manager with streamlined UI and local storage integration.",
            tags: ["Utility", "UX"],
            link: "https://linkkeep-bookmark.vercel.app/"
        }
    ];

    return (
        <section className="relative z-20 bg-[#0D0D0D] py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-20 tracking-tighter">Selected Work</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={i}
                            className="group relative block h-[28rem] rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />

                            {/* Abstract Gradient Placeholder for Image */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-700 opacity-50`} />

                            <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase font-mono tracking-wider text-blue-300/80 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

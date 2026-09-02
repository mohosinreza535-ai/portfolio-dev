
"use client";

import { motion } from "framer-motion";

import {
    FiCode,
    FiLayers,
    FiLayout,
    FiDatabase,
    FiZap,
    FiTool,
    FiArrowUpRight,
} from "react-icons/fi";

const services = [
    {
        title: "Web Development",
        icon: FiCode,
    },
    {
        title: "Full Stack Development",
        icon: FiLayers,
    },
    {
        title: "UI / UX Development",
        icon: FiLayout,
    },
    {
        title: "API Development",
        icon: FiDatabase,
    },
    {
        title: "Performance Optimization",
        icon: FiZap,
    },
    {
        title: "Website Maintenance",
        icon: FiTool,
    },
];

export default function ServiceMarquee() {
    return (
        <section className="relative overflow-hidden bg-white py-10">

            {/* Top Border */}

            <div className="absolute left-0 right-0 top-0 h-px bg-slate-200" />

            {/* Blue Glow */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

            {/* =====================================================
          MARQUEE
      ====================================================== */}

            <div className="relative flex overflow-hidden">

                <motion.div
                    className="flex w-max shrink-0 items-center"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            duration: 28,
                            repeat: Infinity,
                            ease: "linear",
                        },
                    }}
                >

                    {/* First Set */}

                    <div className="flex items-center">

                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={`first-${index}`}
                                    className="flex items-center"
                                >

                                    {/* Service Item */}

                                    <div className="group flex items-center gap-5 px-8 sm:px-12">

                                        {/* Icon */}

                                        <motion.div
                                            whileHover={{
                                                rotate: -8,
                                                scale: 1.08,
                                            }}
                                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-xl text-blue-700 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                                        >
                                            <Icon />
                                        </motion.div>

                                        {/* Text */}

                                        <span className="whitespace-nowrap text-2xl font-bold tracking-[-0.02em] text-slate-800 transition-colors duration-300 group-hover:text-blue-700 sm:text-3xl">
                                            {service.title}
                                        </span>

                                    </div>

                                    {/* Separator */}

                                    <div className="flex items-center gap-3">

                                        <span className="h-2 w-2 rounded-full bg-blue-600" />

                                        <FiArrowUpRight className="text-lg text-blue-300" />

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                    {/* Second Set */}

                    <div className="flex items-center">

                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={`second-${index}`}
                                    className="flex items-center"
                                >

                                    <div className="group flex items-center gap-5 px-8 sm:px-12">

                                        <motion.div
                                            whileHover={{
                                                rotate: -8,
                                                scale: 1.08,
                                            }}
                                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-xl text-blue-700 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                                        >
                                            <Icon />
                                        </motion.div>

                                        <span className="whitespace-nowrap text-2xl font-bold tracking-[-0.02em] text-slate-800 transition-colors duration-300 group-hover:text-blue-700 sm:text-3xl">
                                            {service.title}
                                        </span>

                                    </div>

                                    <div className="flex items-center gap-3">

                                        <span className="h-2 w-2 rounded-full bg-blue-600" />

                                        <FiArrowUpRight className="text-lg text-blue-300" />

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </motion.div>

            </div>

            {/* =====================================================
          FADE EDGES
      ====================================================== */}

            <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-24 bg-gradient-to-r from-white to-transparent sm:w-40" />

            <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-24 bg-gradient-to-l from-white to-transparent sm:w-40" />

            {/* Bottom Border */}

            <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200" />

        </section>
    );
}

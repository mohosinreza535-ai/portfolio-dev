
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
    FiCode,
    FiLayers,
    FiLayout,
    FiDatabase,
    FiZap,
    FiTool,
    FiArrowUpRight,
    FiCheck,
} from "react-icons/fi";

const services = [
    {
        number: "01",
        icon: FiCode,
        title: "Web Development",
        description:
            "I build modern, responsive and high-performance websites with clean architecture, smooth interactions and scalable code.",
        tags: ["Next.js", "React", "JavaScript"],
    },
    {
        number: "02",
        icon: FiLayers,
        title: "Full Stack Development",
        description:
            "Complete web applications with powerful frontend interfaces, robust backend systems and reliable database architecture.",
        tags: ["Node.js", "Express.js", "MongoDB"],
    },
    {
        number: "03",
        icon: FiLayout,
        title: "UI / UX Development",
        description:
            "Clean, modern and user-focused interfaces designed to create engaging experiences across desktop, tablet and mobile.",
        tags: ["Tailwind CSS", "Responsive", "UI Design"],
    },
    {
        number: "04",
        icon: FiDatabase,
        title: "API Development",
        description:
            "Secure and scalable REST APIs for modern applications, authentication, data management and third-party integrations.",
        tags: ["REST API", "Node.js", "Database"],
    },
    {
        number: "05",
        icon: FiZap,
        title: "Performance Optimization",
        description:
            "Improve website speed, loading time, Core Web Vitals, SEO and overall performance for a better user experience.",
        tags: ["SEO", "Speed", "Optimization"],
    },
    {
        number: "06",
        icon: FiTool,
        title: "Website Maintenance",
        description:
            "Ongoing technical support including bug fixing, security updates, performance improvements and website maintenance.",
        tags: ["Support", "Updates", "Bug Fix"],
    },
];

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardAnimation = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function Services() {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-white py-28 sm:py-32 lg:py-40"
        >
            {/* =====================================================
          BACKGROUND
      ====================================================== */}

            {/* Blue Glow Left */}
            <div className="absolute -left-52 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />

            {/* Blue Glow Right */}
            <div className="absolute -right-52 bottom-20 h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[150px]" />

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(#1d4ed8 1px, transparent 1px), linear-gradient(90deg, #1d4ed8 1px, transparent 1px)",
                    backgroundSize: "70px 70px",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* =====================================================
            HEADER
        ====================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto mb-20 max-w-4xl text-center"
                >

                    {/* Small Label */}

                    <div className="mb-6 flex items-center justify-center gap-4">

                        <span className="h-px w-12 bg-blue-600" />

                        <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
                            What I Do
                        </span>

                        <span className="h-px w-12 bg-blue-600" />

                    </div>

                    {/* Heading */}

                    <h2 className="text-5xl font-bold leading-[1.05] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">

                        Digital Solutions

                        <br />

                        <span className="text-blue-700">
                            Built With Purpose.
                        </span>

                    </h2>

                    {/* Description */}

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                        I combine design, development and modern technologies
                        to create digital products that are fast, scalable,
                        beautiful and built to solve real problems.
                    </p>

                </motion.div>

                {/* =====================================================
            SERVICES GRID
        ====================================================== */}

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.08,
                    }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >

                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.number}
                                variants={cardAnimation}
                                whileHover={{
                                    y: -12,
                                }}
                                transition={{
                                    duration: 0.35,
                                }}
                                className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-500 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(30,64,175,0.13)] lg:p-9"
                            >

                                {/* Top Hover Line */}

                                <div className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 bg-blue-600 transition-transform duration-500 group-hover:scale-x-100" />

                                {/* Large Background Number */}

                                <span className="pointer-events-none absolute -right-4 -top-7 text-[130px] font-black leading-none tracking-[-0.08em] text-slate-50 transition-all duration-500 group-hover:text-blue-50">
                                    {service.number}
                                </span>

                                {/* =================================================
                    ICON
                ================================================== */}

                                <div className="relative flex items-center justify-between">

                                    <motion.div
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: -6,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 15,
                                        }}
                                        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-2xl text-blue-700 transition-all duration-500 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20"
                                    >
                                        <Icon />
                                    </motion.div>

                                    <span className="text-sm font-bold tracking-[0.2em] text-slate-300 transition-colors duration-300 group-hover:text-blue-200">
                                        {service.number}
                                    </span>

                                </div>

                                {/* =================================================
                    CONTENT
                ================================================== */}

                                <div className="relative mt-9">

                                    <h3 className="text-2xl font-bold tracking-[-0.025em] text-slate-950 transition-colors duration-300 group-hover:text-blue-700">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 min-h-[100px] text-base leading-7 text-slate-500">
                                        {service.description}
                                    </p>

                                </div>

                                {/* =================================================
                    TAGS
                ================================================== */}

                                <div className="relative mt-7 flex flex-wrap gap-2.5">

                                    {service.tags.map((tag, index) => (
                                        <motion.span
                                            key={tag}
                                            initial={{
                                                opacity: 0,
                                                y: 10,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.06,
                                            }}
                                            className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-500 transition-all duration-300 group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-700"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}

                                </div>

                                {/* =================================================
                    BOTTOM
                ================================================== */}

                                <div className="relative mt-9 flex items-center justify-between border-t border-slate-100 pt-6">

                                    <span className="text-sm font-semibold text-slate-400 transition-colors duration-300 group-hover:text-blue-600">
                                        Explore Service
                                    </span>

                                    <motion.div
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: 45,
                                        }}
                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-500 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                                    >
                                        <FiArrowUpRight />
                                    </motion.div>

                                </div>

                            </motion.div>
                        );
                    })}

                </motion.div>

                {/* =====================================================
            FEATURE STRIP
        ====================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.15,
                    }}
                    className="mt-10 rounded-[28px] border border-blue-100 bg-blue-50/50 px-7 py-7 sm:px-9"
                >

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                        <div>

                            <p className="text-sm font-bold text-blue-950">
                                Why work with me?
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                                Quality code. Modern design. Reliable development.
                            </p>

                        </div>

                        <div className="flex flex-wrap gap-x-7 gap-y-3">

                            {[
                                "Clean Code",
                                "Responsive Design",
                                "Modern Technology",
                                "Fast Performance",
                            ].map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-2"
                                >
                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[11px] text-white">
                                        <FiCheck />
                                    </span>

                                    <span className="text-sm font-semibold text-slate-600">
                                        {feature}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>

                </motion.div>

                {/* =====================================================
            CTA
        ====================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.97,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative mt-10 overflow-hidden rounded-[32px] bg-blue-950 px-7 py-12 sm:px-10 lg:px-14 lg:py-14"
                >

                    {/* Animated Glow */}

                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.15, 0.3, 0.15],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -right-20 -top-40 h-[400px] w-[400px] rounded-full bg-blue-500 blur-[110px]"
                    />

                    <div className="relative flex flex-col gap-9 lg:flex-row lg:items-center lg:justify-between">

                        <div>

                            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
                                Have a project in mind?
                            </p>

                            <h3 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                                Let's build something
                                <br className="hidden sm:block" />
                                <span className="text-blue-300">
                                    {" "}great together.
                                </span>
                            </h3>

                            <p className="mt-5 max-w-xl text-base leading-7 text-blue-200">
                                Have an idea, project or business that needs a
                                modern digital presence? Let's talk about it.
                            </p>

                        </div>

                        <Link
                            href="/contact"
                            className="group flex w-fit shrink-0 items-center gap-4 rounded-2xl bg-white px-7 py-4 text-sm font-bold text-blue-950 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
                        >
                            Start a Project

                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-blue-700 transition-transform duration-300 group-hover:translate-x-1">
                                <FiArrowUpRight />
                            </span>

                        </Link>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}
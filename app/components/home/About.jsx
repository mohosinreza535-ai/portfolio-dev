
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeRight = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-white py-24 lg:py-32"
        >
            {/* Background Glow */}
            <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-700/10 blur-[120px]" />

            {/* Grid Background */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(#1d4ed8 1px, transparent 1px), linear-gradient(90deg, #1d4ed8 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative mx-auto max-w-7xl px-6 lg:px-8"
            >
                {/* ================= HEADER ================= */}

                <motion.div
                    variants={fadeUp}
                    className="mb-16 text-center"
                >
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-blue-600" />

                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                            About Me
                        </span>

                        <span className="h-px w-10 bg-blue-600" />
                    </div>

                    <h2 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
                        Turning Ideas Into{" "}
                        <span className="text-blue-700">
                            Digital Reality
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500">
                        A passionate developer focused on building modern,
                        scalable and meaningful digital experiences.
                    </p>
                </motion.div>

                {/* ================= MAIN ================= */}

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* LEFT - Developer Card */}

                    <motion.div
                        variants={fadeLeft}
                        className="relative flex justify-center"
                    >
                        {/* Outer Ring */}
                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute h-[390px] w-[390px] rounded-full border border-dashed border-blue-200"
                        />

                        {/* Inner Ring */}
                        <div className="absolute h-[320px] w-[320px] rounded-full border border-blue-100" />

                        {/* Card */}

                        <motion.div
                            whileHover={{
                                y: -8,
                                rotateY: 4,
                            }}
                            transition={{
                                duration: 0.4,
                            }}
                            className="relative z-10 w-full max-w-[380px] rounded-[30px] border border-blue-100 bg-white p-4 shadow-[0_30px_80px_rgba(30,64,175,0.12)]"
                        >
                            {/* Card Header */}

                            <div className="flex items-center justify-between px-4 py-3">
                                <div className="flex gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-blue-200" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                                </div>

                                <span className="text-[10px] text-slate-400">
                                    about-me.js
                                </span>
                            </div>

                            {/* Dark Area */}

                            <div className="relative overflow-hidden rounded-[24px] bg-blue-950 p-7">

                                {/* Glow */}

                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.15, 0.3, 0.15],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                    }}
                                    className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500 blur-3xl"
                                />

                                <div className="relative">

                                    {/* Avatar */}

                                    <motion.div
                                        animate={{
                                            y: [0, -6, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                        }}
                                        className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-700 text-2xl font-bold text-white shadow-xl shadow-blue-950/40"
                                    >
                                        MR
                                    </motion.div>

                                    <p className="mt-7 text-xs uppercase tracking-[0.2em] text-blue-300">
                                        Full Stack Developer
                                    </p>

                                    <h3 className="mt-2 text-3xl font-bold text-white">
                                        Mohosin Reza
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-blue-200">
                                        I build websites and web applications
                                        that are fast, responsive and user-friendly.
                                    </p>

                                    {/* Stats */}

                                    <div className="mt-7 grid grid-cols-3 gap-3">

                                        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                                            <p className="text-lg font-bold text-white">
                                                10+
                                            </p>

                                            <p className="mt-1 text-[9px] text-blue-300">
                                                Projects
                                            </p>
                                        </div>

                                        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                                            <p className="text-lg font-bold text-white">
                                                5+
                                            </p>

                                            <p className="mt-1 text-[9px] text-blue-300">
                                                Technologies
                                            </p>
                                        </div>

                                        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                                            <p className="text-lg font-bold text-white">
                                                100%
                                            </p>

                                            <p className="mt-1 text-[9px] text-blue-300">
                                                Passion
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Badge */}

                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                            className="absolute -bottom-5 left-0 z-20 rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-xl"
                        >
                            <div className="flex items-center gap-3">

                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                    ✓
                                </div>

                                <div>
                                    <p className="text-[9px] uppercase tracking-wider text-slate-400">
                                        Focused On
                                    </p>

                                    <p className="text-sm font-bold text-blue-950">
                                        Clean & Modern UI
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT - Content */}

                    <motion.div
                        variants={fadeRight}
                    >
                        {/* Label */}

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-blue-600" />

                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                                Who I Am
                            </span>
                        </div>

                        {/* Heading */}

                        <h3 className="text-3xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl">
                            I don't just write code.
                            <br />

                            <span className="text-blue-700">
                                I solve problems.
                            </span>
                        </h3>

                        {/* Paragraphs */}

                        <div className="mt-7 space-y-5 text-base leading-8 text-slate-500">

                            <p>
                                I'm <strong className="text-slate-900">
                                    Mohosin Reza
                                </strong>, a Full Stack Developer passionate
                                about creating modern web applications.
                            </p>

                            <p>
                                My main focus is building clean interfaces,
                                scalable backend systems and smooth user
                                experiences using modern JavaScript
                                technologies.
                            </p>

                            <p>
                                I enjoy turning complex problems into simple,
                                beautiful and functional digital products.
                            </p>

                        </div>

                        {/* Skills */}

                        <div className="mt-8 flex flex-wrap gap-3">

                            {[
                                "Next.js",
                                "React",
                                "Node.js",
                                "Express.js",
                                "MongoDB",
                                "Tailwind CSS",
                            ].map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: index * 0.08,
                                        duration: 0.4,
                                    }}
                                    whileHover={{
                                        y: -3,
                                    }}
                                    className="rounded-xl border border-blue-100 bg-blue-50/50 px-4 py-2 text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-600 hover:text-white"
                                >
                                    {skill}
                                </motion.span>
                            ))}

                        </div>

                        {/* CTA */}

                        <div className="mt-9 flex flex-wrap items-center gap-5">

                            <Link
                                href="/about"
                                className="group flex items-center gap-3 rounded-xl bg-blue-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/10 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800"
                            >
                                More About Me

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                            <Link
                                href="/contact"
                                className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700"
                            >
                                Let's Work Together
                            </Link>

                        </div>

                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
}

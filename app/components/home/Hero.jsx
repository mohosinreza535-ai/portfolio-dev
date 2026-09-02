
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const techs = ["Next.js", "React", "Node.js", "MongoDB"];

export default function Home() {
    return (
        <main className="overflow-hidden bg-white">

            <section className="relative min-h-screen pt-32 lg:pt-40">

                {/* ================= BACKGROUND ================= */}

                {/* Moving blue glow */}
                <motion.div
                    animate={{
                        x: [0, 80, -30, 0],
                        y: [0, -50, 40, 0],
                        scale: [1, 1.15, 0.95, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[45%] top-10 h-[500px] w-[500px] rounded-full bg-blue-500/[0.07] blur-[130px]"
                />

                <motion.div
                    animate={{
                        x: [0, -60, 40, 0],
                        y: [0, 40, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -right-40 top-[30%] h-[450px] w-[450px] rounded-full bg-blue-700/[0.06] blur-[120px]"
                />

                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)",
                        backgroundSize: "55px 55px",
                    }}
                />

                {/* Floating particles */}
                <motion.span
                    animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute left-[12%] top-[30%] h-2 w-2 rounded-full bg-blue-500"
                />

                <motion.span
                    animate={{ y: [0, 25, 0], opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="absolute right-[18%] top-[25%] h-1.5 w-1.5 rounded-full bg-blue-700"
                />

                <motion.span
                    animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute bottom-[25%] left-[45%] h-1.5 w-1.5 rounded-full bg-blue-400"
                />

                {/* ================= CONTENT ================= */}

                <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">

                    {/* ================= LEFT ================= */}

                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                    >

                        {/* Label */}
                        <motion.div
                            variants={fadeUp}
                            className="mb-7 flex items-center gap-3"
                        >
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: 40 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="h-px bg-blue-600"
                            />

                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                                Full Stack Developer
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={fadeUp}
                            className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[78px]"
                        >
                            I Build Digital

                            <br />

                            <span className="text-blue-700">
                                Experiences
                            </span>

                            <br />

                            That Matter.
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            className="mt-8 max-w-xl text-lg leading-8 text-slate-500"
                        >
                            I'm{" "}
                            <span className="font-semibold text-slate-900">
                                Mohosin Reza
                            </span>
                            , a Full Stack Developer creating modern,
                            scalable and high-performance web applications.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-9 flex flex-wrap gap-4"
                        >

                            <Link
                                href="/projects"
                                className="group relative overflow-hidden rounded-xl bg-blue-950 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-950/20"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    View My Work

                                    <motion.span
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                        }}
                                    >
                                        →
                                    </motion.span>
                                </span>

                                <span className="absolute inset-0 -translate-x-full bg-blue-700 transition-transform duration-500 group-hover:translate-x-0" />
                            </Link>

                            <Link
                                href="/contact"
                                className="rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700 hover:shadow-lg"
                            >
                                Let's Talk
                            </Link>

                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-14 flex items-center gap-10"
                        >

                            <div>
                                <p className="text-2xl font-bold text-blue-950">
                                    10+
                                </p>
                                <p className="mt-1 text-xs text-slate-400">
                                    Projects
                                </p>
                            </div>

                            <div className="h-10 w-px bg-slate-200" />

                            <div>
                                <p className="text-2xl font-bold text-blue-950">
                                    MERN
                                </p>
                                <p className="mt-1 text-xs text-slate-400">
                                    Stack
                                </p>
                            </div>

                            <div className="h-10 w-px bg-slate-200" />

                            <div>
                                <p className="text-2xl font-bold text-blue-950">
                                    100%
                                </p>
                                <p className="mt-1 text-xs text-slate-400">
                                    Passion
                                </p>
                            </div>

                        </motion.div>

                    </motion.div>

                    {/* ================= RIGHT ================= */}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, x: 60 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative flex justify-center lg:justify-end"
                    >

                        {/* Rotating outer ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute h-[450px] w-[450px] rounded-full border border-dashed border-blue-200"
                        />

                        {/* Counter rotating ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 18,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute h-[370px] w-[370px] rounded-full border border-blue-100"
                        />

                        {/* Glowing center */}
                        <motion.div
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.4, 0.7, 0.4],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                            className="absolute h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"
                        />

                        {/* Main Card */}
                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                                rotate: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative z-10 w-[350px] rounded-[32px] border border-blue-100 bg-white p-3 shadow-[0_35px_100px_rgba(30,64,175,0.15)] sm:w-[390px]"
                        >

                            {/* Browser */}
                            <div className="flex items-center justify-between px-5 py-4">

                                <div className="flex gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-blue-200" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                                </div>

                                <span className="text-[10px] text-slate-400">
                                    mohosinreza.dev
                                </span>

                            </div>

                            {/* Developer Card */}
                            <div className="rounded-[24px] bg-blue-950 p-8">

                                <div className="flex items-center justify-between">

                                    <motion.div
                                        whileHover={{ scale: 1.08, rotate: 5 }}
                                        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-xl font-bold text-white"
                                    >
                                        MR
                                    </motion.div>

                                    <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5">
                                        <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                                        <span className="text-[10px] text-blue-200">
                                            Available
                                        </span>
                                    </div>

                                </div>

                                <p className="mt-8 text-xs uppercase tracking-widest text-blue-300">
                                    Hello, I'm
                                </p>

                                <h2 className="mt-2 text-3xl font-bold text-white">
                                    Mohosin Reza
                                </h2>

                                <p className="mt-2 text-sm text-blue-200">
                                    Full Stack Developer
                                </p>

                                {/* Code */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 font-mono text-[10px] leading-7"
                                >
                                    <p className="text-blue-400">
                                        {"// developer"}
                                    </p>

                                    <p>
                                        <span className="text-blue-300">
                                            const
                                        </span>{" "}
                                        developer = {"{"}
                                    </p>

                                    <p className="pl-5 text-slate-300">
                                        name:{" "}
                                        <span className="text-blue-300">
                                            "Mohosin Reza"
                                        </span>
                                    </p>

                                    <p className="pl-5 text-slate-300">
                                        stack:{" "}
                                        <span className="text-blue-300">
                                            "MERN"
                                        </span>
                                    </p>

                                    <p className="pl-5 text-slate-300">
                                        focus:{" "}
                                        <span className="text-blue-300">
                                            "Web"
                                        </span>
                                    </p>

                                    <p className="text-slate-300">
                                        {"};"}
                                    </p>
                                </motion.div>

                                {/* Tech */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {techs.map((tech, index) => (
                                        <motion.span
                                            key={tech}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.1 + index * 0.1 }}
                                            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-medium text-blue-100"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>

                            </div>
                        </motion.div>

                        {/* Floating badge */}
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -bottom-7 -left-4 z-20 rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-xl shadow-blue-950/10"
                        >
                            <p className="text-[10px] uppercase tracking-wider text-slate-400">
                                Currently
                            </p>

                            <p className="mt-1 text-sm font-bold text-blue-950">
                                Building the Web
                            </p>
                        </motion.div>

                    </motion.div>

                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
                >
                    <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-blue-400">
                        Scroll
                    </span>

                    <div className="h-8 w-px bg-blue-300" />
                </motion.div>

            </section>
        </main>
    );
}


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    FiArrowLeft,
    FiArrowRight,
    FiExternalLink,
    FiGithub,
    FiCode,
    FiLayers,
    FiArrowUpRight,
} from "react-icons/fi";

const projects = [
    {
        id: "01",
        title: "E-Commerce Platform",
        category: "Full Stack Web Application",
        description:
            "A modern full-stack e-commerce platform with product management, authentication, shopping cart, checkout and powerful backend APIs.",
        image: "/projects/project-1.jpg",
        technologies: [
            "Next.js",
            "React",
            "Node.js",
            "MongoDB",
        ],
        live: "#",
        github: "#",
    },

    {
        id: "02",
        title: "Business Management System",
        category: "Web Application",
        description:
            "A professional business management platform designed to manage customers, products, orders and business operations from one place.",
        image: "/projects/project-2.jpg",
        technologies: [
            "Next.js",
            "Tailwind CSS",
            "Express.js",
            "MongoDB",
        ],
        live: "#",
        github: "#",
    },

    {
        id: "03",
        title: "Portfolio Website",
        category: "Personal Portfolio",
        description:
            "A premium developer portfolio focused on modern UI, smooth animations, responsive layouts and a strong professional identity.",
        image: "/projects/project-3.jpg",
        technologies: [
            "Next.js",
            "Framer Motion",
            "Tailwind CSS",
            "React",
        ],
        live: "#",
        github: "#",
    },

    {
        id: "04",
        title: "REST API System",
        category: "Backend Development",
        description:
            "A scalable REST API with CRUD operations, database integration, validation and structured backend architecture.",
        image: "/projects/project-4.jpg",
        technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
        ],
        live: "#",
        github: "#",
    },
];

const slideVariants = {
    enter: {
        opacity: 0,
        x: 80,
    },

    center: {
        opacity: 1,
        x: 0,
    },

    exit: {
        opacity: 0,
        x: -80,
    },
};

export default function ProjectsSlider() {
    const [current, setCurrent] = useState(0);

    const project = projects[current];

    // Next Project
    const nextProject = () => {
        setCurrent((prev) =>
            prev === projects.length - 1 ? 0 : prev + 1
        );
    };

    // Previous Project
    const previousProject = () => {
        setCurrent((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-white py-28 sm:py-32 lg:py-40"
        >
            {/* =====================================================
          BACKGROUND
      ====================================================== */}

            <div className="pointer-events-none absolute -left-60 top-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />

            <div className="pointer-events-none absolute -right-60 bottom-20 h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[150px]" />

            {/* Grid Background */}

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
                    className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
                >

                    {/* Heading */}

                    <div className="max-w-3xl">

                        <div className="mb-6 flex items-center gap-4">

                            <span className="h-px w-12 bg-blue-600" />

                            <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
                                Selected Work
                            </span>

                        </div>

                        <h2 className="text-5xl font-bold leading-[1.05] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
                            Projects That
                            <br />
                            <span className="text-blue-700">
                                Speak For Me.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                            A selection of projects where design, development
                            and technology come together to create meaningful
                            digital experiences.
                        </p>

                    </div>

                    {/* =================================================
              NAVIGATION BUTTONS
          ================================================== */}

                    <div className="flex items-center gap-3">

                        <button
                            type="button"
                            onClick={previousProject}
                            aria-label="Previous project"
                            className="group flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20"
                        >
                            <FiArrowLeft className="text-xl transition-transform duration-300 group-hover:-translate-x-1" />
                        </button>

                        <button
                            type="button"
                            onClick={nextProject}
                            aria-label="Next project"
                            className="group flex h-14 w-14 items-center justify-center rounded-full bg-blue-950 text-white shadow-lg shadow-blue-950/10 transition-all duration-300 hover:bg-blue-700"
                        >
                            <FiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                    </div>

                </motion.div>

                {/* =====================================================
            SLIDER
        ====================================================== */}

                <div className="relative overflow-hidden rounded-[35px] border border-slate-200 bg-white shadow-[0_25px_90px_rgba(15,23,42,0.08)]">

                    <AnimatePresence mode="wait">

                        <motion.div
                            key={project.id}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                duration: 0.55,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="grid lg:grid-cols-[1.15fr_0.85fr]"
                        >

                            {/* =================================================
                  PROJECT IMAGE
              ================================================== */}

                            <div className="relative min-h-[350px] overflow-hidden bg-slate-100 sm:min-h-[450px] lg:min-h-[570px]">

                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 h-full w-full object-cover"
                                    initial={{
                                        scale: 1.08,
                                    }}
                                    animate={{
                                        scale: 1,
                                    }}
                                    transition={{
                                        duration: 0.9,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                />

                                {/* Image Overlay */}

                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/80 via-blue-950/20 to-transparent" />

                                {/* Project Badge */}

                                <div className="absolute left-7 top-7 flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-md sm:left-9 sm:top-9">

                                    <span className="h-2 w-2 rounded-full bg-blue-300" />

                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                                        Project {project.id}
                                    </span>

                                </div>

                                {/* Image Bottom Content */}

                                <div className="absolute bottom-7 left-7 sm:bottom-9 sm:left-9">

                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
                                        {project.category}
                                    </p>

                                    <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                                        {project.title}
                                    </h3>

                                </div>

                            </div>

                            {/* =================================================
                  PROJECT INFORMATION
              ================================================== */}

                            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 xl:p-14">

                                <div>

                                    {/* Featured */}

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                            <FiLayers className="text-lg" />
                                        </div>

                                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                                            Featured Project
                                        </span>

                                    </div>

                                    {/* Title */}

                                    <h3 className="mt-8 text-4xl font-bold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
                                        {project.title}
                                    </h3>

                                    {/* Description */}

                                    <p className="mt-6 text-base leading-8 text-slate-500 sm:text-lg">
                                        {project.description}
                                    </p>

                                    {/* =================================================
                      TECHNOLOGIES
                  ================================================== */}

                                    <div className="mt-9">

                                        <div className="mb-4 flex items-center gap-2">

                                            <FiCode className="text-blue-600" />

                                            <span className="text-sm font-bold text-slate-800">
                                                Technologies
                                            </span>

                                        </div>

                                        <div className="flex flex-wrap gap-2.5">

                                            {project.technologies.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                                                >
                                                    {technology}
                                                </span>
                                            ))}

                                        </div>

                                    </div>

                                </div>

                                {/* =================================================
                    FOOTER
                ================================================== */}

                                <div className="mt-12">

                                    <div className="mb-7 h-px bg-slate-100" />

                                    {/* Buttons */}

                                    <div className="flex flex-wrap items-center gap-3">

                                        {/* Live Demo */}

                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-3 rounded-xl bg-blue-950 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
                                        >
                                            Live Demo

                                            <FiExternalLink className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </a>

                                        {/* GitHub */}

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700"
                                        >
                                            <FiGithub />

                                            GitHub

                                            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </a>

                                    </div>

                                    {/* =================================================
                      PROGRESS
                  ================================================== */}

                                    <div className="mt-9 flex items-center justify-between">

                                        <div className="flex items-center gap-2">

                                            {projects.map((item, index) => (
                                                <button
                                                    type="button"
                                                    key={item.id}
                                                    onClick={() => setCurrent(index)}
                                                    aria-label={`Go to project ${index + 1}`}
                                                    className="group"
                                                >
                                                    <span
                                                        className={`block h-1 rounded-full transition-all duration-500 ${index === current
                                                            ? "w-12 bg-blue-600"
                                                            : "w-5 bg-slate-200 group-hover:bg-blue-300"
                                                            }`}
                                                    />
                                                </button>
                                            ))}

                                        </div>

                                        <span className="text-sm font-bold text-slate-400">

                                            <span className="text-blue-700">
                                                {String(current + 1).padStart(2, "0")}
                                            </span>

                                            {" / "}

                                            {String(projects.length).padStart(2, "0")}

                                        </span>

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                    </AnimatePresence>

                </div>

                {/* =====================================================
            BOTTOM
        ====================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
                >

                    <p className="text-sm text-slate-400">
                        More projects are currently in development.
                    </p>

                    <a
                        href="#"
                        className="group flex items-center gap-2 text-sm font-bold text-blue-700"
                    >
                        View All Projects

                        <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>

                </motion.div>

            </div>
        </section>
    );
}

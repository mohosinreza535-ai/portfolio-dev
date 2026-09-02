
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
    FiGithub,
    FiLinkedin,
    FiFacebook,
    FiInstagram,
    FiArrowUpRight,
    FiMail,
    FiMapPin,
    FiArrowUp,
} from "react-icons/fi";

const navLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "#about",
    },
    {
        name: "Services",
        href: "#services",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Testimonials",
        href: "#testimonials",
    },
    {
        name: "Contact",
        href: "#contact",
    },
];

const socialLinks = [
    {
        icon: FiGithub,
        href: "#",
        label: "GitHub",
    },
    {
        icon: FiLinkedin,
        href: "#",
        label: "LinkedIn",
    },
    {
        icon: FiFacebook,
        href: "#",
        label: "Facebook",
    },
    {
        icon: FiInstagram,
        href: "#",
        label: "Instagram",
    },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative overflow-hidden bg-blue-950 text-white">

            {/* =====================================================
          BACKGROUND
      ====================================================== */}

            <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[130px]" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[130px]" />

            {/* Grid */}

            <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                    backgroundSize: "70px 70px",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* =====================================================
            CTA
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
                    }}
                    className="border-b border-white/10 py-20 sm:py-24"
                >

                    <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

                        <div className="max-w-3xl">

                            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
                                Let's Work Together
                            </p>

                            <h2 className="text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                                Have an idea?
                                <br />
                                <span className="text-blue-300">
                                    Let's build it.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-7 text-blue-200 sm:text-lg">
                                I'm always open to discussing new projects,
                                creative ideas or opportunities to be part of
                                your vision.
                            </p>

                        </div>

                        {/* CTA Button */}

                        <Link
                            href="/contact"
                            className="group flex w-fit items-center gap-4 rounded-2xl bg-white px-7 py-4 text-sm font-bold text-blue-950 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
                        >
                            Start a Conversation

                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                <FiArrowUpRight />
                            </span>

                        </Link>

                    </div>

                </motion.div>

                {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

                <div className="grid gap-14 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

                    {/* =================================================
              BRAND
          ================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
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
                    >

                        {/* Logo */}

                        <Link
                            href="/"
                            className="group inline-flex items-center gap-4"
                        >

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-lg font-black text-blue-950 shadow-xl transition-transform duration-300 group-hover:scale-105">
                                MR
                            </div>

                            <div>

                                <h3 className="text-xl font-bold tracking-tight">
                                    Mohosin <span className="text-blue-300">Reza</span>
                                </h3>

                                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-300">
                                    Full Stack Developer
                                </p>

                            </div>

                        </Link>

                        <p className="mt-7 max-w-md text-sm leading-7 text-blue-200">
                            I create modern, scalable and high-performance
                            digital experiences using modern web technologies.
                        </p>

                        {/* Social */}

                        <div className="mt-7 flex items-center gap-3">

                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
                                    >
                                        <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
                                    </a>
                                );
                            })}

                        </div>

                    </motion.div>

                    {/* =================================================
              NAVIGATION
          ================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
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
                            delay: 0.1,
                        }}
                    >

                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                            Navigation
                        </h4>

                        <div className="mt-6 space-y-4">

                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="group flex w-fit items-center gap-2 text-sm text-blue-200 transition-colors duration-300 hover:text-white"
                                >
                                    <span className="h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-4" />

                                    {link.name}
                                </Link>
                            ))}

                        </div>

                    </motion.div>

                    {/* =================================================
              CONTACT
          ================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
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
                            delay: 0.2,
                        }}
                    >

                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                            Get In Touch
                        </h4>

                        <div className="mt-6 space-y-5">

                            {/* Email */}

                            <a
                                href="mailto:hello@mohosinreza.com"
                                className="group flex items-start gap-4"
                            >

                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-blue-300 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                    <FiMail />
                                </span>

                                <div>
                                    <p className="text-xs text-blue-300">
                                        Email
                                    </p>

                                    <p className="mt-1 text-sm text-blue-100 transition-colors group-hover:text-white">
                                        hello@mohosinreza.com
                                    </p>
                                </div>

                            </a>

                            {/* Location */}

                            <div className="flex items-start gap-4">

                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-blue-300">
                                    <FiMapPin />
                                </span>

                                <div>
                                    <p className="text-xs text-blue-300">
                                        Location
                                    </p>

                                    <p className="mt-1 text-sm text-blue-100">
                                        Dhaka, Bangladesh
                                    </p>
                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

                {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

                <div className="flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-xs text-blue-300">
                        © {new Date().getFullYear()} Mohosin Reza. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">

                        <Link
                            href="#"
                            className="text-xs text-blue-300 transition-colors hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            className="text-xs text-blue-300 transition-colors hover:text-white"
                        >
                            Terms
                        </Link>

                        {/* Back To Top */}

                        <button
                            type="button"
                            onClick={scrollToTop}
                            aria-label="Back to top"
                            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-200 transition-all duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
                        >
                            <FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
                        </button>

                    </div>

                </div>

            </div>

        </footer>
    );
}
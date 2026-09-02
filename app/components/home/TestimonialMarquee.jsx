
"use client";

import { motion } from "framer-motion";
import {
    FiStar,
    FiArrowUpRight,
    FiMessageSquare,
} from "react-icons/fi";

const testimonialsTop = [
    {
        name: "Arif Hasan",
        role: "Founder, TechNova",
        initials: "AH",
        text: "Mohosin delivered an excellent website with a clean design and smooth user experience. The final result exceeded our expectations.",
    },
    {
        name: "Samiul Karim",
        role: "Business Owner",
        initials: "SK",
        text: "Working with Mohosin was a great experience. He understood our requirements quickly and turned the idea into a professional website.",
    },
    {
        name: "Nusrat Jahan",
        role: "Product Manager",
        initials: "NJ",
        text: "Very professional and detail-oriented developer. The website is fast, responsive and looks amazing on every device.",
    },
    {
        name: "Tanvir Ahmed",
        role: "Startup Founder",
        initials: "TA",
        text: "From frontend to backend, everything was handled properly. Communication was smooth and the development quality was impressive.",
    },
];

const testimonialsBottom = [
    {
        name: "Rafiul Islam",
        role: "Entrepreneur",
        initials: "RI",
        text: "Mohosin transformed our outdated website into a modern digital experience. I really liked his attention to detail.",
    },
    {
        name: "Fahim Rahman",
        role: "Creative Director",
        initials: "FR",
        text: "Clean code, modern UI and excellent performance. Mohosin is definitely someone I would work with again.",
    },
    {
        name: "Mahin Chowdhury",
        role: "Business Consultant",
        initials: "MC",
        text: "The whole process was simple and professional. He understood what we needed and delivered exactly that.",
    },
    {
        name: "Sadia Ahmed",
        role: "Marketing Lead",
        initials: "SA",
        text: "The website feels premium, loads quickly and works perfectly on mobile. Really happy with the final result.",
    },
];

function TestimonialCard({ item }) {
    return (
        <motion.div
            whileHover={{
                y: -8,
            }}
            className="group relative mx-3 w-[350px] shrink-0 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-all duration-500 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(30,64,175,0.12)] sm:w-[390px]"
        >
            {/* Hover Line */}

            <div className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-blue-600 transition-transform duration-500 group-hover:scale-x-100" />

            {/* Quote Icon */}

            <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FiMessageSquare />
            </div>

            {/* Stars */}

            <div className="flex gap-1 text-blue-600">
                {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar
                        key={star}
                        className="fill-current text-sm"
                    />
                ))}
            </div>

            {/* Testimonial */}

            <p className="mt-6 min-h-[108px] text-[15px] leading-7 text-slate-600">
                “{item.text}”
            </p>

            {/* Divider */}

            <div className="my-6 h-px bg-slate-100" />

            {/* User */}

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                    {/* Avatar */}

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-sm font-bold text-white shadow-lg shadow-blue-950/10">
                        {item.initials}
                    </div>

                    {/* Info */}

                    <div>
                        <h4 className="text-sm font-bold text-slate-950">
                            {item.name}
                        </h4>

                        <p className="mt-1 text-xs font-medium text-slate-400">
                            {item.role}
                        </p>
                    </div>

                </div>

                {/* Arrow */}

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                    <FiArrowUpRight className="text-sm" />
                </div>

            </div>
        </motion.div>
    );
}

export default function TestimonialMarquee() {
    return (
        <section
            id="testimonials"
            className="relative overflow-hidden bg-slate-50 py-28 sm:py-32"
        >
            {/* =====================================================
          BACKGROUND
      ====================================================== */}

            <div className="pointer-events-none absolute left-1/2 top-20 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(#1d4ed8 1px, transparent 1px), linear-gradient(90deg, #1d4ed8 1px, transparent 1px)",
                    backgroundSize: "70px 70px",
                }}
            />

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
                className="relative mx-auto mb-16 max-w-4xl px-6 text-center"
            >

                <div className="mb-6 flex items-center justify-center gap-4">

                    <span className="h-px w-12 bg-blue-600" />

                    <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
                        Testimonials
                    </span>

                    <span className="h-px w-12 bg-blue-600" />

                </div>

                <h2 className="text-5xl font-bold leading-[1.05] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
                    Trusted By
                    <br />
                    <span className="text-blue-700">
                        Great People.
                    </span>
                </h2>

                <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                    A few words from people and businesses I have
                    worked with throughout my development journey.
                </p>

            </motion.div>

            {/* =====================================================
          TOP MARQUEE
      ====================================================== */}

            <div className="relative mb-6 overflow-hidden">

                <motion.div
                    className="flex w-max"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >

                    {/* First Set */}

                    <div className="flex">

                        {testimonialsTop.map((item, index) => (
                            <TestimonialCard
                                key={`top-one-${index}`}
                                item={item}
                            />
                        ))}

                    </div>

                    {/* Duplicate Set */}

                    <div className="flex">

                        {testimonialsTop.map((item, index) => (
                            <TestimonialCard
                                key={`top-two-${index}`}
                                item={item}
                            />
                        ))}

                    </div>

                </motion.div>

            </div>

            {/* =====================================================
          BOTTOM MARQUEE
      ====================================================== */}

            <div className="relative overflow-hidden">

                <motion.div
                    className="flex w-max"
                    animate={{
                        x: ["-50%", "0%"],
                    }}
                    transition={{
                        duration: 38,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >

                    {/* First Set */}

                    <div className="flex">

                        {testimonialsBottom.map((item, index) => (
                            <TestimonialCard
                                key={`bottom-one-${index}`}
                                item={item}
                            />
                        ))}

                    </div>

                    {/* Duplicate Set */}

                    <div className="flex">

                        {testimonialsBottom.map((item, index) => (
                            <TestimonialCard
                                key={`bottom-two-${index}`}
                                item={item}
                            />
                        ))}

                    </div>

                </motion.div>

            </div>

            {/* =====================================================
          EDGE FADE
      ====================================================== */}

            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-slate-50 to-transparent sm:w-40" />

            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-slate-50 to-transparent sm:w-40" />

            {/* =====================================================
          BOTTOM TRUST BADGE
      ====================================================== */}

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
                    duration: 0.7,
                    delay: 0.2,
                }}
                className="relative mx-auto mt-16 flex w-fit items-center gap-3 rounded-full border border-blue-100 bg-white px-5 py-3 shadow-sm"
            >

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                    <FiStar className="fill-current text-sm" />
                </div>

                <span className="text-sm font-semibold text-slate-600">
                    Building experiences people love
                </span>

            </motion.div>

        </section>
    );
}

import Link from "next/link";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
];

export default function Navbar() {
    return (
        <header className="fixed left-0 right-0 top-0 z-50">
            <div className="mx-auto max-w-7xl px-5 pt-5 lg:px-8">
                <nav className="flex h-[74px] items-center justify-between rounded-2xl border border-slate-200/80 bg-white/90 px-5 shadow-[0_8px_35px_rgba(15,23,42,0.07)] backdrop-blur-xl lg:px-7">

                    {/* ================= BRAND ================= */}
                    <Link href="/" className="group flex items-center gap-3">

                        {/* Logo */}
                        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-blue-950 text-white shadow-lg shadow-blue-950/15 transition-all duration-300 group-hover:-translate-y-0.5">

                            <span className="text-[17px] font-bold tracking-tight">
                                MR
                            </span>

                            {/* Orange Dot */}
                            <span className="absolute -right-1.5 -top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-orange-500" />
                        </div>

                        {/* Name */}
                        <div className="leading-none">
                            <h1 className="text-[18px] font-bold tracking-[-0.035em] text-slate-950">
                                Mohosin <span className="text-blue-700">Reza</span>
                            </h1>

                            <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                                Full Stack Developer
                            </p>
                        </div>

                    </Link>

                    {/* ================= NAV ================= */}
                    <div className="hidden items-center rounded-xl border border-slate-100 bg-slate-50/70 px-2 py-1.5 md:flex">

                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="group relative rounded-lg px-4 py-2.5 text-[13px] font-medium text-slate-500 transition-all duration-300 hover:bg-white hover:text-blue-950 hover:shadow-sm"
                            >
                                {item.name}

                                <span className="absolute bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-5" />
                            </Link>
                        ))}

                    </div>

                    {/* ================= RIGHT ================= */}
                    <div className="flex items-center gap-3">

                        {/* Available */}
                        <div className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-2 lg:flex">

                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                            </span>

                            <span className="text-[11px] font-semibold text-emerald-700">
                                Available
                            </span>

                        </div>

                        {/* Contact */}
                        <Link
                            href="/contact"
                            className="group flex items-center gap-2 rounded-xl bg-blue-950 px-4.5 py-3 text-[13px] font-semibold text-white shadow-lg shadow-blue-950/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-900 hover:shadow-xl"
                        >
                            <span>Let's Talk</span>

                            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-500 text-[13px] transition-transform duration-300 group-hover:translate-x-0.5">
                                ↗
                            </span>
                        </Link>

                    </div>

                </nav>
            </div>
        </header>
    );
}
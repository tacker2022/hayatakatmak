"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hurdadan-mucevhere", label: "Hurdadan Mücevhere" },
    { href: "/e-atik-madenciligi", label: "E-Atık Madenciliği" },
    { href: "/surec", label: "Süreç" },
    { href: "/iletisim", label: "İletişim" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-white font-bold text-lg">H</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-primary font-display">
                        Hayata Katmak
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="default" size="sm" asChild>
                        <Link href="/iletisim">Teklif Al</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b shadow-lg p-4 flex flex-col gap-4 animate-fade-in">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-base font-medium py-2 border-b border-muted last:border-0 hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button className="w-full mt-2" asChild>
                        <Link href="/iletisim" onClick={() => setIsOpen(false)}>
                            Teklif Al
                        </Link>
                    </Button>
                </div>
            )}
        </nav>
    );
}

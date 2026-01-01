"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TickerProps {
    text: string;
    className?: string;
    velocity?: number; // Speed factor
}

export function SustainabilityTicker({ text, className, velocity = 50 }: TickerProps) {
    return (
        <div className={cn("w-full overflow-hidden bg-primary text-primary-foreground py-4 relative", className)}>
            <div className="flex whitespace-nowrap overflow-hidden select-none">
                <div className="animate-marquee flex min-w-full items-center">
                    {/* Repeat content enough times to fill width and ensure smooth loop */}
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i} className="mx-8 text-lg md:text-xl font-medium tracking-wide flex items-center">
                            {text}
                            <span className="mx-8 h-1.5 w-1.5 rounded-full bg-primary-foreground/50" />
                        </span>
                    ))}
                </div>
                <div className="animate-marquee2 absolute top-4 flex min-w-full items-center">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i} className="mx-8 text-lg md:text-xl font-medium tracking-wide flex items-center">
                            {text}
                            <span className="mx-8 h-1.5 w-1.5 rounded-full bg-primary-foreground/50" />
                        </span>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                .animate-marquee2 {
                    animation: marquee2 20s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                @keyframes marquee2 {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(0%); }
                }
            `}</style>
        </div>
    );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true); // Start muted to comply with autoplay policies
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize audio
        audioRef.current = new Audio("https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112778.mp3");
        audioRef.current.loop = true;
        audioRef.current.volume = 0.4;

        // Attempt transparent autoplay if possible (usually blocked)
        // audioRef.current.play().catch(() => { /* Autoplay prevented */ });

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
                setIsMuted(false); // Unmute on explicit interaction
            }).catch(error => console.error("Audio play failed:", error));
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
            <Button
                variant="outline"
                size="icon"
                onClick={togglePlay}
                className={cn(
                    "h-12 w-12 rounded-full shadow-lg transition-all duration-500 hover:scale-110",
                    isPlaying
                        ? "bg-primary text-primary-foreground border-primary shadow-primary/25 animate-pulse-slow ring-4 ring-primary/10"
                        : "bg-background/80 backdrop-blur-sm border-border text-muted-foreground hover:text-foreground"
                )}
                aria-label={isPlaying ? "Müziği Durdur" : "Dinlendirici Modu Aç"}
            >
                {isPlaying ? (
                    <div className="relative">
                        <Volume2 size={20} />
                        <span className="absolute -top-1 -right-1 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                    </div>
                ) : (
                    <Music size={20} />
                )}
            </Button>

            {/* Tooltip hint for first time view */}
            {!isPlaying && (
                <div className="absolute bottom-full right-0 mb-3 w-max px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-medium shadow-xl opacity-0 animate-bounce-in [animation-delay:2s]">
                    Dinlendirici Mod 🎵
                    <div className="absolute bottom-[-4px] right-4 w-2 h-2 bg-foreground rotate-45"></div>
                </div>
            )}
        </div>
    );
}

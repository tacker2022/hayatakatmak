"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";

export function BeforeAfterSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse/Touch handlers
    const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;

        // Calculate position percentage
        let position = ((clientX - containerRect.left) / containerRect.width) * 100;

        // Clamp between 0 and 100
        position = Math.min(100, Math.max(0, position));

        setSliderPosition(position);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    // Global event listeners for drag functionality
    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleMove);
            window.addEventListener('touchend', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <section className="py-24 bg-secondary/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold font-display tracking-tight mb-4">Dönüşümün Gücü</h2>
                    <p className="text-muted-foreground text-lg">
                        Eski ile yeni arasındaki farkı görmek için kaydırın. Profesyonel dokunuşlarımızla eşyaların nasıl hayata döndüğünü keşfedin.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none border-4 border-white"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    {/* "After" Image (Background) */}
                    <div className="absolute inset-0 w-full h-full">
                        <div className="absolute top-4 right-4 bg-white/90 text-secondary px-3 py-1 rounded-full text-sm font-bold z-10 shadow-sm">
                            YENİLENMİŞ
                        </div>
                        <img
                            src="/restoration-after.png"
                            alt="Yenilenmiş Mobilya"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* "Before" Image (Foreground - Clipped) */}
                    <div
                        className="absolute inset-0 w-full h-full overflow-hidden border-r-4 border-white"
                        style={{ width: `${sliderPosition}%` }}
                    >
                        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-sm">
                            ESKİ HALİ
                        </div>
                        <img
                            src="/restoration-before.png"
                            alt="Eski Mobilya"
                            className="absolute inset-0 w-full h-full object-cover max-w-none"
                            style={{
                                width: containerRef.current ? containerRef.current.offsetWidth : '100%'
                            }}
                        />
                        {/* Overlay to darken 'before' image slightly for dramatic effect */}
                        <div className="absolute inset-0 bg-sepia/30 mix-blend-overlay pointer-events-none"></div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-transparent cursor-ew-resize z-20 flex items-center justify-center group"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center -ml-[22px] transition-transform group-hover:scale-110 active:scale-95 text-secondary">
                            <ArrowLeftRight size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

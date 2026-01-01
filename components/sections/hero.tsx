"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-background pt-1 pb-20 lg:pt-4 lg:pb-28">
            {/* Background Decor - Subtle Organic Shape */}
            <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-gradient-to-bl from-primary/5 to-transparent blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-0 -z-10 h-2/3 w-1/3 bg-gradient-to-tr from-secondary/10 to-transparent blur-3xl opacity-40" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Content */}
                    <div className="lg:col-span-5 space-y-4 animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            Sürdürülebilir Dönüşüm Başladı
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-display leading-tight">
                            Hayata Katmak: <br />
                            <span className="text-primary">Atıktan Değere Yolculuk</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Kullanılmayan eşyaları ve elektronik atıkları çöpe değil, ekonomiye kazandırıyoruz.
                            İsrafı önleyen, değere dönüştüren kurumsal çözüm ortağınız.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/90 px-8 text-base font-semibold shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/40 hover:ring-2 hover:ring-primary/20 hover:ring-offset-2" asChild>
                                <Link href="/iletisim">
                                    <span className="relative z-10 flex items-center">
                                        Teklif Al (Kurumsal)
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                    <div className="absolute inset-0 -z-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover:animate-shimmer" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full border-primary/20 bg-white/50 px-8 text-base font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:text-primary hover:shadow-md hover:border-primary/30" asChild>
                                <Link href="/iletisim?type=bireysel">
                                    Eşya Teslim Et / Bağışla
                                </Link>
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground font-medium">
                            <div className="flex items-center gap-2">
                                <Recycle className="h-4 w-4 text-secondary" />
                                <span>%100 Dönüşüm Odaklı</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                                <span>Sosyal Etki</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual / Illustration Area */}
                    <div className="lg:col-span-7 relative flex justify-center lg:justify-end animate-fade-in [animation-delay:200ms] w-full">
                        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/10 transition-shadow duration-500 bg-white p-2">
                            <Image
                                src="/hero-infographic.jpg"
                                alt="Hayata Katmak Dönüşüm Yolculuğu"
                                width={1200}
                                height={800}
                                className="w-full h-auto object-contain rounded-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { useState } from "react";
import { Calculator, Smartphone, Laptop, Tv, Battery } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ImpactCalculator() {
    // State for inputs
    const [counts, setCounts] = useState({
        phone: 0,
        laptop: 0,
        monitor: 0,
        misc: 0
    });

    // State for result
    const [result, setResult] = useState<{
        gold: number;   // mg
        copper: number; // g
        co2: number;    // kg
    } | null>(null);

    // Coefficients (Approximate values for demo)
    // Phone: ~0.034g Gold, ~15g Copper, ~60kg CO2 saved if recycled vs mining
    const FACTS = {
        phone: { gold: 34, copper: 15, co2: 60 },
        laptop: { gold: 200, copper: 300, co2: 120 },
        monitor: { gold: 50, copper: 500, co2: 80 },
        misc: { gold: 10, copper: 50, co2: 20 }
    };

    const handleCalculate = () => {
        const gold =
            (counts.phone * FACTS.phone.gold) +
            (counts.laptop * FACTS.laptop.gold) +
            (counts.monitor * FACTS.monitor.gold) +
            (counts.misc * FACTS.misc.gold);

        const copper =
            (counts.phone * FACTS.phone.copper) +
            (counts.laptop * FACTS.laptop.copper) +
            (counts.monitor * FACTS.monitor.copper) +
            (counts.misc * FACTS.misc.copper);

        const co2 =
            (counts.phone * FACTS.phone.co2) +
            (counts.laptop * FACTS.laptop.co2) +
            (counts.monitor * FACTS.monitor.co2) +
            (counts.misc * FACTS.misc.co2);

        setResult({ gold, copper, co2 });
    };

    const updateCount = (key: keyof typeof counts, delta: number) => {
        setCounts(prev => ({
            ...prev,
            [key]: Math.max(0, prev[key] + delta)
        }));
    };

    return (
        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Interactive Form */}
                    <div className="bg-white rounded-3xl p-8 border shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-accent text-white rounded-xl shadow-lg shadow-accent/20">
                                <Calculator size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold font-display">Etki Hesaplayıcı</h2>
                                <p className="text-sm text-muted-foreground">E-Atıklarınızın potansiyelini keşfedin.</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { id: 'phone', label: 'Cep Telefonu', icon: Smartphone },
                                { id: 'laptop', label: 'Laptop / Tablet', icon: Laptop },
                                { id: 'monitor', label: 'Monitör / TV', icon: Tv },
                                { id: 'misc', label: 'Diğer Küçük Aletler', icon: Battery },
                            ].map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all">
                                    <div className="flex items-center gap-3">
                                        <div className="text-muted-foreground"><item.icon size={20} /></div>
                                        <span className="font-medium">{item.label}</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white rounded-lg p-1 border shadow-sm">
                                        <button
                                            onClick={() => updateCount(item.id as keyof typeof counts, -1)}
                                            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted transition-colors font-bold text-muted-foreground"
                                        >-</button>
                                        <span className="w-6 text-center font-bold text-foreground">{counts[item.id as keyof typeof counts]}</span>
                                        <button
                                            onClick={() => updateCount(item.id as keyof typeof counts, 1)}
                                            className="w-8 h-8 flex items-center justify-center rounded-md bg-accent/10 text-accent hover:bg-accent/20 transition-colors font-bold"
                                        >+</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button size="lg" className="w-full mt-8 text-lg py-6 shadow-xl shadow-accent/20 hover:scale-[1.02] transition-transform bg-accent text-white hover:bg-accent/90" onClick={handleCalculate}>
                            Etkiyi Hesapla
                        </Button>
                    </div>

                    {/* Right: Results Display */}
                    <div className="bg-[#0b1215] text-white rounded-3xl p-8 lg:p-12 shadow-2xl relative min-h-[500px] flex flex-col justify-center">
                        {/* Background Effects */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00A676 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>

                        {!result ? (
                            <div className="text-center relative z-10 opacity-60">
                                <Calculator size={64} className="mx-auto mb-6 text-gray-600" />
                                <h3 className="text-2xl font-bold mb-2">Henüz hesaplama yapılmadı</h3>
                                <p className="text-gray-400">Soldaki panelden atık miktarını girin ve "Hesapla" butonuna basın.</p>
                            </div>
                        ) : (
                            <div className="relative z-10 animate-fade-in">
                                <h3 className="text-gray-400 font-medium mb-8 text-center uppercase tracking-widest text-sm">Tahmini Geri Kazanım</h3>

                                <div className="space-y-10">
                                    <div className="text-center">
                                        <div className="text-5xl lg:text-7xl font-bold font-mono text-yellow-400 mb-2 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">
                                            {result.gold} <span className="text-2xl lg:text-3xl text-yellow-400/50">mg</span>
                                        </div>
                                        <p className="text-white font-medium">Saf Altın</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                                        <div className="text-center">
                                            <div className="text-3xl lg:text-4xl font-bold font-mono text-orange-400 mb-1">
                                                {result.copper} <span className="text-lg text-orange-400/50">g</span>
                                            </div>
                                            <p className="text-sm text-gray-400">Bakır</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl lg:text-4xl font-bold font-mono text-green-400 mb-1">
                                                {result.co2} <span className="text-lg text-green-400/50">kg</span>
                                            </div>
                                            <p className="text-sm text-gray-400">CO₂ Tasarrufu</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-4 text-xs text-center text-gray-500 mt-8">
                                        *Bu değerler ortalama endüstri verilerine dayanmaktadır. Gerçek geri kazanım oranları cihaz modeline ve yaşına göre değişebilir.
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

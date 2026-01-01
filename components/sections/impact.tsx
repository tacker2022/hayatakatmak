import { Leaf, PackageCheck, TrendingUp, Users } from "lucide-react";

const stats = [
    {
        label: "Dönüştürülen Ürün",
        value: "1,250+",
        icon: PackageCheck,
    },
    {
        label: "Kurtarılan Malzeme (kg)",
        value: "5,400",
        icon: TrendingUp,
    },
    {
        label: "CO₂ Tasarrufu (Tahmini)",
        value: "32 Ton",
        icon: Leaf,
    },
    {
        label: "Partner Nokta",
        value: "14",
        icon: Users,
    },
];

export function ImpactSection() {
    return (
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pattern-dots" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="mx-auto h-12 w-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                                <stat.icon size={24} />
                            </div>
                            <div className="space-y-1">
                                <div className="text-3xl md:text-4xl font-bold tracking-tight text-white font-display">
                                    {stat.value}
                                </div>
                                <div className="text-primary-foreground/80 font-medium text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

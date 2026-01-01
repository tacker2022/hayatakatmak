import { Truck, Gem, RefreshCw } from "lucide-react";

const steps = [
    {
        icon: Truck,
        title: "Topla",
        description: "Kurumsal ve bireysel kaynaklardan atıl eşyaları ve e-atıkları topluyoruz.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: RefreshCw,
        title: "Yenile & Ayrıştır",
        description: "Atölyemizde onarıyor, temizliyor veya ileri dönüşüm teknikleriyle yeniliyoruz.",
        color: "bg-green-100 text-green-600",
    },
    {
        icon: Gem,
        title: "Sat & Değer Kat",
        description: "Yenilenen ürünleri ekonomik fiyatlarla yeni sahipleriyle buluşturuyoruz.",
        color: "bg-amber-100 text-amber-600",
    },
];

export function BusinessModelSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight font-display text-foreground">
                        Basit ve Etkili İş Modeli
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Karmaşık süreçleri üç basit (ve sihirli) adımda yönetiyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="group relative bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                            <div className={`mx-auto w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                <step.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground font-display">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { Building2, School, Hotel, Briefcase } from "lucide-react";

const partners = [
    { name: "Hilton İstanbul", type: "Otel Grubu", icon: Hotel },
    { name: "Büyükşehir Belediyesi", type: "Kamu Kurumu", icon: Building2 },
    { name: "Teknik Üniversite", type: "Eğitim Kurumu", icon: School },
    { name: "TechStart Hub", type: "Ofis & Kuluçka", icon: Briefcase },
    { name: "Atlas Lojistik", type: "Kurumsal", icon: Building2 },
    { name: "Marine Plaza", type: "Otel & AVM", icon: Hotel },
];

export function TrustSection() {
    return (
        <section className="py-20 border-t border-border/50">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-2xl font-bold font-display text-foreground mb-8 text-center">
                    Güvenle Çalıştığımız Kurumlar
                </h2>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
                    {partners.map((partner, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 group hover:opacity-100 transition-opacity cursor-default">
                            <div className="h-16 w-16 rounded-xl bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                <partner.icon size={32} />
                            </div>
                            <span className="font-semibold text-sm text-foreground">{partner.name}</span>
                            <span className="text-xs text-muted-foreground">{partner.type}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-muted/50 rounded-2xl inline-block">
                    <p className="text-sm text-muted-foreground">
                        <strong className="text-primary">+50</strong> kurumsal referans ve <strong className="text-primary">1000+</strong> mutlu bireysel müşteri.
                    </p>
                </div>
            </div>
        </section>
    );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Flag, Gem, Rocket } from "lucide-react";

export default function YolHaritasiPage() {
    const steps = [
        {
            year: "Aşama 1 (Yıl 1)",
            title: "Kuruluş ve Nakit Akışı",
            desc: "Mobilya yenileme atölyesi (Proje 1) devreye girer. E-ticaret ve kurumsal anlaşmalarla ilk nakit akışı sağlanır. Marka bilinirliği oluşturulur.",
            icon: Flag,
            status: "Tamamlandı / Devam Ediyor"
        },
        {
            year: "Aşama 2 (Yıl 2-3)",
            title: "Büyüme ve Kurumsallaşma",
            desc: "Toplama ağı genişletilir. E-Atık (Proje 2) için gerekli lisans başvuruları ve ÇED süreçleri başlatılır. Ar-Ge laboratuvarı kurulur.",
            icon: Rocket,
            status: "Planlanıyor"
        },
        {
            year: "Aşama 3 (Yıl 4+)",
            title: "Tam Kapasite Entegre Tesis",
            desc: "E-Atık ayrıştırma ve değerli metal geri kazanım tesisi faaliyete geçer. 'Kentsel Madencilik' vizyonu tam kapasiteyle işler.",
            icon: Gem,
            status: "Vizyon"
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-4">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold font-display mb-4">Gelecek Vizyonu</h1>
                    <p className="text-xl text-muted-foreground">
                        Adım adım, sürdürülebilir bir imparatorluk inşa ediyoruz.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

                    {steps.map((step, i) => (
                        <div key={i} className={`flex flex-col md:flex-row gap-8 mb-16 relative ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Icon Marker */}
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary z-10 box-content"></div>

                            <div className={`pl-20 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                <div className="bg-card p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${step.status.includes('Tamamlandı') ? 'bg-green-100 text-green-700' : 'bg-blue-50 text-blue-600'}`}>
                                        {step.status}
                                    </div>
                                    <h3 className="text-xl font-bold font-display mb-2">{step.year}: {step.title}</h3>
                                    <p className="text-muted-foreground">{step.desc}</p>
                                </div>
                            </div>
                            <div className="hidden md:block md:w-1/2" />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/iletisim?type=yatirimci">Yatırımcı İlişkileri</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

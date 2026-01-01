import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Recycle, RefreshCcw, ShoppingBag, Truck } from "lucide-react";

export default function ProcessPage() {
    const steps = [
        {
            id: 1,
            title: "1. Toplama ve Tedarik",
            desc: "Kurumsal firmalar, oteller, okullar ve bireysel bağışçılardan atıl durumdaki eşyaları ve e-atıkları topluyoruz. Taşıma ve lojistik tamamen bize ait.",
            icon: Truck,
            details: ["Ücretsiz Ekspertiz", "Güvenli Nakliye", "Yerinde Söküm Hizmeti"]
        },
        {
            id: 2,
            title: "2. Yenileme ve Ayrıştırma",
            desc: "Atölyemize gelen ürünler sınıflandırılır. Mobilyalar onarılıp yenilenirken, e-atıklar güvenli şekilde parçalarına ayrılır.",
            icon: Recycle,
            details: ["Profesyonel Onarım", "İleri Dönüşüm (Upcycling)", "Hammadde Ayrıştırma"]
        },
        {
            id: 3,
            title: "3. Satış ve Ekonomiye Kazandırma",
            desc: "Yenilenen ürünler uygun fiyatlarla yeni sahiplerine ulaştırılır. Elde edilen gelir operasyonu sürdürür ve büyümeyi finanse eder.",
            icon: ShoppingBag,
            details: ["Vergi Dahil Faturalı Satış", "Uygun Fiyat Politikası", "Garanti Desteği"]
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-4">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold font-display mb-4">Dönüşüm Yolculuğu</h1>
                    <p className="text-xl text-muted-foreground">
                        Eski bir eşya, doğru ellerde yeni bir hikayeye dönüşür. İşte bizim sürecimiz.
                    </p>
                </div>

                <div className="space-y-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2 -z-10" />

                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-8 relative pb-12 last:pb-0">
                            {/* Left Side */}
                            <div className="flex-1 md:text-right flex flex-col md:items-end justify-start pt-2">
                                {i % 2 === 0 ? (
                                    // Even: Icon on Left (Align End/Right)
                                    <div className="hidden md:flex h-32 w-32 bg-primary/10 rounded-full items-center justify-center text-primary shadow-sm">
                                        <step.icon size={48} />
                                    </div>
                                ) : (
                                    // Odd: Card on Left
                                    <div className="bg-muted p-8 rounded-3xl border w-full text-left shadow-sm hover:shadow-md transition-shadow relative z-10">
                                        {/* Mobile Only Icon for Flow */}
                                        <div className="md:hidden mb-4 inline-flex p-3 rounded-full bg-primary/10 text-primary">
                                            <step.icon size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 font-display">{step.title}</h3>
                                        <p className="text-muted-foreground mb-6">{step.desc}</p>
                                        <ul className="space-y-2">
                                            {step.details.map((d, k) => (
                                                <li key={k} className="flex items-center gap-2 text-sm font-medium">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" /> {d}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Center Marker */}
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-primary text-primary font-bold shadow-sm">
                                    {step.id}
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="flex-1 md:text-left flex flex-col md:items-start justify-start pt-2">
                                {i % 2 === 0 ? (
                                    // Even: Card on Right
                                    <div className="bg-muted p-8 rounded-3xl border w-full text-left shadow-sm hover:shadow-md transition-shadow relative z-10">
                                        <div className="md:hidden mb-4 inline-flex p-3 rounded-full bg-primary/10 text-primary">
                                            <step.icon size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 font-display">{step.title}</h3>
                                        <p className="text-muted-foreground mb-6">{step.desc}</p>
                                        <ul className="space-y-2">
                                            {step.details.map((d, k) => (
                                                <li key={k} className="flex items-center gap-2 text-sm font-medium">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" /> {d}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    // Odd: Icon on Right (Align Start/Left)
                                    <div className="hidden md:flex h-32 w-32 bg-secondary/10 rounded-full items-center justify-center text-secondary shadow-sm">
                                        <step.icon size={48} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Button size="lg" className="rounded-full" asChild>
                        <Link href="/iletisim">Sürece Dahil Olun <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

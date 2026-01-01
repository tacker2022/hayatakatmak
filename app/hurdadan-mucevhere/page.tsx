import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Hammer, Sparkles, CheckCircle2 } from "lucide-react";
import { BeforeAfterSlider } from "@/components/sections/before-after-slider";

export default function HurdadanMucevherePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <section className="bg-secondary/10 pt-4 pb-20 lg:pt-8 lg:pb-28 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-secondary shadow-lg shadow-secondary/10 border border-secondary/20 mb-6 transition-transform hover:scale-105">
                            <Hammer size={16} className="text-secondary fill-secondary/20" />
                            <span className="font-semibold tracking-wide">Atölye ve Dönüşüm Merkezi</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-display mb-6">
                            Hurdadan Mücevhere: <br />
                            <span className="text-secondary">Eşya Yenileme Sanatı</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            Eski, yıpranmış veya modası geçmiş mobilyaları ve eşyaları atmayın.
                            Profesyonel atölyemizde onlara yeni bir ruh, yeni bir fonksiyon ve yepyeni bir değer kazandırıyoruz.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-secondary to-secondary/90 px-8 text-base font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-secondary/40 hover:ring-2 hover:ring-secondary/20 hover:ring-offset-2" asChild>
                                <Link href="/iletisim">
                                    <span className="relative z-10 flex items-center">
                                        Yenileme Teklifi Al
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                    <div className="absolute inset-0 -z-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover:animate-shimmer" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full border-secondary/20 bg-white/50 px-8 text-base font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:text-secondary hover:shadow-md hover:border-secondary/30" asChild>
                                <Link href="#gallery">
                                    Örnekleri İncele
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Background blobs */}
                <div className="absolute top-0 right-0 -z-10 h-full w-1/3 bg-secondary/5 blur-3xl opacity-50" />
            </section>

            {/* Process Details */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10" />
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                            <Sparkles size={14} />
                            Adım Adım Dönüşüm
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">Nasıl Çalışıyoruz?</h2>
                        <p className="text-muted-foreground text-lg">
                            Şeffaf, özenli ve profesyonel bir süreçle eşyalarınıza hak ettiği değeri veriyoruz.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                        <div className="space-y-8 relative">
                            {/* Vertical line specifically for mobile/desktop layout alignment if needed, usually css styling on container */}
                            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-secondary/50 to-transparent -z-10 hidden md:block" />

                            {[
                                { title: "Keşif ve Teslim Alma", desc: "Eşyanızı yerinde inceliyor, potansiyelini belirliyor ve atölyemize naklediyoruz." },
                                { title: "Bakım ve Onarım", desc: "İskelet sağlamlaştırma, zımparalama ve kırık parça değişimlerini yapıyoruz." },
                                { title: "Tasarım ve Yenileme", desc: "Modern kumaşlar, boyalar ve cila teknikleri ile estetik bir dönüşüm sağlıyoruz." },
                                { title: "Kalite Kontrol ve Teslim", desc: "Son kontrolleri yapılan 'mücevher' niteliğindeki eşyanızı size teslim ediyoruz." }
                            ].map((step, i) => (
                                <div key={i} className="group flex gap-6 relative">
                                    <div className="flex-shrink-0 relative">
                                        <div className="w-16 h-16 rounded-2xl bg-white border border-secondary/20 shadow-sm flex items-center justify-center text-xl font-bold text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 z-10 relative">
                                            {i + 1}
                                        </div>
                                    </div>
                                    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-secondary/10 shadow-sm hover:shadow-md transition-all duration-300 flex-1 hover:bg-white hover:border-secondary/20">
                                        <h3 className="font-bold text-xl mb-2 text-foreground/90 group-hover:text-secondary transition-colors">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="relative h-full min-h-[500px] w-full rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-secondary/10">
                            {/* Placeholder for Workshop Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/10 z-0" />
                            <div className="absolute inset-0 border-[1px] border-white/40 rounded-[2.5rem] z-20 pointer-events-none" />

                            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center bg-white/40 backdrop-blur-md">
                                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-6 animate-pulse">
                                    <Hammer size={40} className="text-secondary" />
                                </div>
                                <h3 className="text-2xl font-bold font-display text-foreground mb-2">Atölye Canlı İzle</h3>
                                <p className="text-muted-foreground mb-8 max-w-xs mx-auto">
                                    Yenileme sürecini yakında buradan canlı olarak veya hızlandırılmış video şeklinde izleyebileceksiniz.
                                </p>
                                <div className="flex items-center gap-3 px-4 py-2 bg-white/60 rounded-full border border-white/50 shadow-sm">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                    <span className="text-sm font-medium text-green-700">Canlı Kamera (Yakında)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BeforeAfterSlider />

            {/* Gallery Section */}
            <section id="gallery" className="py-24 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                            <CheckCircle2 size={14} />
                            Başarı Hikayeleri
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-4">Önce / Sonra Dönüşümler</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Atölyemizden çıkan bazı şaheserler. Her parça, ustalarımızın elinde yeniden hayat buldu.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Vintage Berjer Yenileme",
                                desc: "1960'lardan kalma yıpranmış berjer, modern kadife kumaş ve ceviz cila ile salonun yıldızı oldu.",
                                before: "/berjer-old.png",
                                after: "/berjer-new.png"
                            },
                            {
                                title: "Masif Konsol Restorasyonu",
                                desc: "Boya katmanları altında kaybolmuş ahşap dokusu ortaya çıkarıldı, pirinç kulplarla tamamlandı.",
                                before: "/console-old.png",
                                after: "/console-new.png"
                            },
                            {
                                title: "Retro Sandalye Dönüşümü",
                                desc: "Kırık iskeleti onarıldı, süngeri yenilendi ve geometrik desenli kumaşla modernize edildi.",
                                before: "/chair-old.png",
                                after: "/chair-new.png"
                            }
                        ].map((item, i) => (
                            <div key={i} className="group bg-background rounded-3xl overflow-hidden shadow-xl shadow-secondary/5 border border-secondary/10 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 hover:-translate-y-2">
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    {/* Split View Effect using Clip Path */}
                                    <div className="absolute inset-0 w-full h-full">
                                        <img src={item.after} alt="Sonra" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute top-4 right-4 bg-white/90 text-secondary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">YENİ</div>
                                    </div>

                                    {/* Diagonal Split for Before Image */}
                                    <div className="absolute inset-0 w-full h-full" style={{ clipPath: 'polygon(0 0, 45% 0, 0 100%)' }}>
                                        <img src={item.before} alt="Önce" className="w-full h-full object-cover" />
                                        <div className="absolute top-4 left-4 bg-black/80 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">ESKİ</div>
                                    </div>

                                    {/* Diagonal Line Design */}
                                    <div className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-tr from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="p-8">
                                    <h3 className="font-bold text-xl mb-3 font-display group-hover:text-secondary transition-colors">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <Button size="lg" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-secondary to-secondary/90 px-10 py-6 text-lg font-semibold text-secondary-foreground shadow-xl shadow-secondary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-secondary/50 hover:ring-2 hover:ring-secondary/20 hover:ring-offset-2" asChild>
                            <Link href="/iletisim">
                                <span className="relative z-10 flex items-center gap-2">
                                    Sizin Eşyanız da Dönüşsün
                                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 transition-opacity duration-500 group-hover:animate-shimmer" />
                            </Link>
                        </Button>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Ücretsiz keşif ve fiyat teklifi için bize ulaşın.
                        </p>
                    </div>
                </div>
            </section>
        </div >
    );
}

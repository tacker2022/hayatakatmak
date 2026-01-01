import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Cpu, Microscope, Pickaxe, ShieldCheck } from "lucide-react";

export default function EAtikMadenciligiPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <section className="bg-[#0b1215] pt-4 pb-20 lg:pt-8 lg:pb-32 relative overflow-hidden text-white">
                {/* Abstract Circuit Pattern */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00A676 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>
                {/* Gradient Glows */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-accent/10 via-accent/5 to-transparent blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-1/4 w-1/3 h-1/2 bg-blue-500/10 blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-[#0b1215] font-bold border border-accent shadow-[0_0_20px_-5px_var(--accent)] mb-8 backdrop-blur-md transition-all hover:shadow-[0_0_30px_-5px_var(--accent)] hover:scale-105">
                            <Cpu size={18} className="animate-pulse" />
                            <span className="text-sm tracking-wider uppercase">Geleceğin Madenciliği</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display mb-8 leading-[1.1]">
                            E-Atık Madenciliği: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-green-400 to-emerald-300 animate-gradient-x">Şehrin Gizli Hazinesi</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
                            Altın, gümüş, bakır ve paladyum yerin altında değil, artık çekmecelerimizde.
                            <span className="text-gray-200"> Teknolojik atıkları çevresel bir felaketten ekonomik bir kaynağa dönüştürüyoruz.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <Button size="lg" className="group relative overflow-hidden rounded-full bg-accent px-10 py-7 text-lg font-semibold text-white shadow-[0_0_40px_-10px_rgba(0,166,118,0.5)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_-15px_rgba(0,166,118,0.7)]" asChild>
                                <Link href="/iletisim?type=partner">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Partnerlik Görüşmesi
                                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                    <div className="absolute inset-0 -z-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover:animate-shimmer" />
                                </Link>
                            </Button>

                            <Button variant="outline" size="lg" className="rounded-full border-white/10 bg-white/5 px-10 py-7 text-lg font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-accent" asChild>
                                <Link href="#vision">
                                    Vizyon ve Süreç
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Stats */}
            <section id="vision" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-display mb-6">Neden Kentsel Madencilik?</h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Bir ton cep telefonu, bir ton altın cevherinden <strong>100 kat daha fazla</strong> altın içerir.
                                Geleneksel madenciliğin çevreye verdiği zararı ortadan kaldırırken, stratejik metalleri ekonomiye geri kazandırıyoruz.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { icon: Pickaxe, title: "Verimli Kaynak", desc: "Daha az enerji ile daha çok hammadde." },
                                    { icon: ShieldCheck, title: "Çevre Dostu", desc: "Toksik atıkların doğaya karışmasını önler." },
                                    { icon: Microscope, title: "AR-GE Odaklı", desc: "Ayrıştırma teknolojileri üzerine çalışıyoruz." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 bg-white p-4 rounded-xl border shadow-sm">
                                        <div className="bg-accent/10 p-3 rounded-lg text-accent">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Cards Visual */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl opacity-50"></div>
                            <div className="relative bg-black rounded-3xl p-8 text-white border border-gray-800 shadow-2xl">
                                <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                                    <span>Metal Geri Kazanım Oranları</span>
                                    <Cpu className="text-accent animate-pulse" />
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { label: "Bakır (Cu)", percent: "98%", color: "bg-orange-500" },
                                        { label: "Altın (Au)", percent: "Vein Tespit", color: "bg-yellow-500" },
                                        { label: "Alüminyum (Al)", percent: "95%", color: "bg-blue-400" }
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span>{stat.label}</span>
                                                <span className="font-mono text-accent">{stat.percent}</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <div className={`h-full ${stat.color} w-[${stat.percent.replace('%', '')}%]`} style={{ width: stat.percent === "Vein Tespit" ? "40%" : stat.percent }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-4 border-t border-dashed border-gray-800 text-xs text-gray-500">
                                    *Tesis tam kapasiteye ulaştığında hedeflenen oranlardır.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roadmap Integration */}
            <section className="py-20 border-t">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold font-display mb-8">Yol Haritası</h2>
                    <div className="max-w-3xl mx-auto bg-primary/5 rounded-3xl p-8 border border-primary/10">
                        <p className="text-lg text-foreground mb-6">
                            Şu anda <span className="font-bold text-accent">Faz 1</span> (Toplama ve Ön Ayrıştırma) aşamasındayız.
                            E-Atık işleme tesisi kurulumu ve lisanslama süreçleri 2027 vizyonumuzdadır.
                        </p>
                        <Button asChild>
                            <Link href="/yol-haritasi">Detaylı Yol Haritasını İncele</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

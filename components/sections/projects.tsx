import Link from "next/link";
import { ArrowRight, Hammer, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
    {
        id: "hurdadan-mucevhere",
        title: "Hurdadan Mücevhere",
        subtitle: "Mobilya & Eşya Yenileme",
        description: "Eski, yıpranmış veya atıl durumdaki ofis mobilyalarını ve eşyaları atölyemizde sanatsal bir dokunuşla yeniliyor, değer katarak tekrar kullanıma sunuyoruz.",
        icon: Hammer,
        href: "/hurdadan-mucevhere",
        color: "bg-secondary/10 text-secondary border-secondary/20",
        btnVariant: "default", // primary green
    },
    {
        id: "e-atik-madenciligi",
        title: "E-Atık Madenciliği",
        subtitle: "Gelecek Vizyonu",
        description: "Şehirlerimizin yeni madenleri olan elektronik atıkları topluyor, ayrıştırıyor ve değerli metallerin geri kazanımı için lisanslı süreçlere hazırlıyoruz.",
        icon: Cpu,
        href: "/e-atik-madenciligi",
        color: "bg-accent/10 text-accent border-accent/20",
        btnVariant: "outline", // outline
    },
];

export function ProjectsSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold font-display text-foreground">
                            Projelerimiz
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl">
                            İki ana kolda değer yaratıyoruz: Bugünün atığı, yarının hazinesi.
                        </p>
                    </div>
                    <Button variant="ghost" className="hidden md:inline-flex" asChild>
                        <Link href="/surec">
                            Tüm Süreci Gör <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative bg-background rounded-3xl p-8 border hover:border-border transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col h-full overflow-hidden">
                            <div className={cn("inline-flex h-12 w-12 items-center justify-center rounded-xl border mb-6", project.color)}>
                                <project.icon size={24} />
                            </div>

                            <div className="space-y-4 flex-1">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl font-bold font-display text-foreground">
                                        {project.title}
                                    </h3>
                                    {project.id === "e-atik-madenciligi" && (
                                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-wider uppercase border border-blue-100">
                                            AR-GE
                                        </span>
                                    )}
                                </div>
                                <h4 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                                    {project.subtitle}
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="pt-8">
                                <Button className="w-full sm:w-auto rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                                    <Link href={project.href}>
                                        Detayları İncele
                                    </Link>
                                </Button>
                            </div>

                            {/* Decorative gradient blob */}
                            <div className="absolute -right-20 -bottom-20 h-64 w-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl group-hover:from-primary/10 transition-colors duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

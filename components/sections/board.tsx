import { User } from "lucide-react";
import Image from "next/image";

const boardMembers = [
    { name: "Abdullah Çalargün", image: "/abdullah-calargun.jpg" },
    { name: "Bilal Türkmen" },
    { name: "Cemil İmdat" },
    { name: "Çağdaş Şahin" },
    { name: "Kemal Çalargün" },
    { name: "Serhan Durak" },
    { name: "Süleyman Tok" },
    { name: "Talha Çalargün", image: "/talha-calargun-v2.jpg" },
    { name: "Yasin Kaya" },
    { name: "Yusuf Duran" }
];

export function BoardSection() {
    return (
        <section className="py-24 bg-background border-t border-border/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold font-display tracking-tight mb-4">Liderlik ve Yönetim</h2>
                    <p className="text-muted-foreground text-lg">
                        Vizyonumuza yön veren, sürdürülebilir gelecek için çalışan yönetim kurulu üyelerimiz.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                    {boardMembers.map((member, i) => (
                        <div key={i} className="group relative bg-muted/30 rounded-2xl p-6 text-center border border-border hover:border-primary/20 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                            <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-white border shadow-sm flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300 overflow-hidden relative">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <User size={24} />
                                )}
                            </div>
                            <h3 className="font-bold text-foreground font-display text-sm md:text-base mb-1">{member.name}</h3>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Yönetim Kurulu</p>

                            {/* Decorative Corner */}
                            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

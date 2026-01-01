import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-muted text-muted-foreground border-t border-white/20">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/icon.png"
                                alt="Hayata Katmak Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8 object-contain"
                            />
                            <span className="text-xl font-bold tracking-tight text-primary font-display">
                                Hayata Katmak
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed">
                            &ldquo;Birinin çöpü, başkasının hazinesidir.&rdquo;
                            <br />
                            Kullanılmayan eşyaları ve elektronik atıkları sürdürülebilir bir iş modeline dönüştürüyoruz.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-4">Hızlı Bağlantılar</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link></li>
                            <li><Link href="/hurdadan-mucevhere" className="hover:text-primary transition-colors">Hurdadan Mücevhere</Link></li>
                            <li><Link href="/e-atik-madenciligi" className="hover:text-primary transition-colors">E-Atık Madenciliği</Link></li>
                            <li><Link href="/surec" className="hover:text-primary transition-colors">Süreç</Link></li>
                            <li><Link href="/finansal-cerceve" className="hover:text-primary transition-colors">Finansal Çerçeve</Link></li>
                            <li><Link href="/iletisim" className="hover:text-primary transition-colors">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-4">İletişim</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                                <span>İstanbul, Türkiye <br />(Atölye ve Yönetim)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="shrink-0 text-primary" />
                                <span>+90 (533) 614 21 51</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="shrink-0 text-primary" />
                                <span>info@hayatakatmak.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-foreground font-semibold mb-4">Yasal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/yasal/kvkk" className="hover:text-primary transition-colors">KVKK Aydınlatma Metni</Link></li>
                            <li><Link href="/yasal/cerez-politikasi" className="hover:text-primary transition-colors">Çerez Politikası</Link></li>
                            <li><Link href="/yasal/gizlilik" className="hover:text-primary transition-colors">Gizlilik Sözleşmesi</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-black/5 mt-12 pt-8 text-center text-xs text-muted-foreground/80">
                    <p>© {new Date().getFullYear()} Hayata Katmak. Tüm hakları saklıdır. İnsan ve doğa için tasarlanmıştır.</p>
                </div>
            </div>
        </footer>
    );
}

"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Building2, User, HeartHandshake, UploadCloud, MapPin, Mail, Phone } from "lucide-react";

export default function IletisimPage() {
    const [activeTab, setActiveTab] = useState<'corporate' | 'individual' | 'partner'>('corporate');

    return (
        <div className="min-h-screen bg-background pt-4">
            <div className="container mx-auto px-4 md:px-6 py-12">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold font-display mb-4">İletişime Geçin</h1>
                            <p className="text-muted-foreground">
                                Projesi, eşyası veya fikri olan herkesi heyecanla bekliyoruz.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary"><MapPin /></div>
                                <div>
                                    <h3 className="font-bold">Adres</h3>
                                    <p className="text-muted-foreground text-sm">Maslak Mah. Sanayi Cad. No:19<br />Sarıyer, İstanbul, TR</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary"><Phone /></div>
                                <div>
                                    <h3 className="font-bold">Telefon</h3>
                                    <p className="text-muted-foreground text-sm">+90 (533) 614 21 51</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary"><Mail /></div>
                                <div>
                                    <h3 className="font-bold">E-Posta</h3>
                                    <p className="text-muted-foreground text-sm">info@hayatakatmak.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-64 bg-muted rounded-2xl border flex items-center justify-center text-muted-foreground">
                            [Harita Alanı]
                        </div>
                    </div>

                    {/* Forms Area */}
                    <div className="lg:col-span-2 bg-card border rounded-3xl p-6 md:p-8 shadow-sm">
                        {/* Custom Tabs */}
                        <div className="flex flex-wrap gap-2 mb-8 border-b pb-4">
                            <button
                                onClick={() => setActiveTab('corporate')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'corporate' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted text-muted-foreground'}`}
                            >
                                <Building2 size={16} /> Kurumsal Tasfiye
                            </button>
                            <button
                                onClick={() => setActiveTab('individual')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'individual' ? 'bg-secondary text-secondary-foreground' : 'hover:bg-muted text-muted-foreground'}`}
                            >
                                <User size={16} /> Bireysel Teslim/Bağış
                            </button>
                            <button
                                onClick={() => setActiveTab('partner')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'partner' ? 'bg-foreground text-background' : 'hover:bg-muted text-muted-foreground'}`}
                            >
                                <HeartHandshake size={16} /> Partnerlik/Yatırım
                            </button>
                        </div>

                        <form className="space-y-6 animate-fade-in">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Ad Soyad / Yetkili</label>
                                    <input type="text" className="w-full h-11 px-4 rounded-lg border bg-background focus:ring-2 ring-primary/20 outline-none transition-all" placeholder="Tam adınız" />
                                </div>
                                {(activeTab === 'corporate' || activeTab === 'partner') && (
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Firma Adı</label>
                                        <input type="text" className="w-full h-11 px-4 rounded-lg border bg-background focus:ring-2 ring-primary/20 outline-none transition-all" placeholder="Şirket unvanı" />
                                    </div>
                                )}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Telefon</label>
                                    <input type="tel" className="w-full h-11 px-4 rounded-lg border bg-background focus:ring-2 ring-primary/20 outline-none transition-all" placeholder="0555 555 55 55" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">E-Posta</label>
                                    <input type="email" className="w-full h-11 px-4 rounded-lg border bg-background focus:ring-2 ring-primary/20 outline-none transition-all" placeholder="ornek@mail.com" />
                                </div>
                            </div>

                            {activeTab !== 'partner' && (
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Konum / Adres</label>
                                    <textarea className="w-full p-4 rounded-lg border bg-background focus:ring-2 ring-primary/20 outline-none transition-all min-h-[80px]" placeholder="Eşyaların bulunduğu adres..." />
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-sm font-medium">
                                    {activeTab === 'corporate' ? "Proje Detayları (Hacim, Ürün Tipi)" :
                                        activeTab === 'individual' ? "Eşya Detayları (Durum, Adet)" :
                                            "Mesajınız / İşbirliği Öneriniz"}
                                </label>
                                <textarea className="w-full p-4 rounded-lg border bg-background focus:ring-2 ring-primary/20 outline-none transition-all min-h-[120px]" placeholder="Lütfen detayları belirtiniz..." />
                            </div>

                            {activeTab !== 'partner' && (
                                <div className="border border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/30 transition-colors">
                                    <UploadCloud className="mb-2 text-muted-foreground" size={32} />
                                    <span className="text-sm font-medium text-foreground">Fotoğraf Yükle (Varsa)</span>
                                    <span className="text-xs text-muted-foreground mt-1">Maks 5MB (JPG, PNG)</span>
                                </div>
                            )}

                            <Button size="lg" className="w-full md:w-auto px-8" type="button" onClick={(e) => e.preventDefault()}>
                                Gönder
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

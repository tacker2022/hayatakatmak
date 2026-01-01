import { AlertCircle, Coins, Wallet } from "lucide-react";

export default function FinansalCercevePage() {
    return (
        <div className="min-h-screen bg-background pt-4">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold font-display mb-4">Finansal Çerçeve</h1>
                    <p className="text-xl text-muted-foreground">
                        Şeffaf, gerçekçi ve ölçeklenebilir bir mali yapı.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    {/* Capex */}
                    <div className="bg-card p-8 rounded-3xl border shadow-sm">
                        <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                            <Wallet size={24} />
                        </div>
                        <h2 className="text-2xl font-bold font-display mb-2">Başlangıç Yatırımı</h2>
                        <div className="text-3xl font-bold text-foreground mb-4">
                            61.000 ₺ - 164.000 ₺
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Atölye kurulumu, ekipman alımı, kuruluş giderleri ve ilk pazarlama bütçesini kapsar.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> Kira ve Depozito</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> El Aletleri ve Ekipman</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> Kurumsal Kimlik & Web</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> Şirket Kuruluşu</li>
                        </ul>
                    </div>

                    {/* Opex */}
                    <div className="bg-card p-8 rounded-3xl border shadow-sm">
                        <div className="h-12 w-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                            <Coins size={24} />
                        </div>
                        <h2 className="text-2xl font-bold font-display mb-2">Aylık Operasyonel Gider</h2>
                        <div className="text-3xl font-bold text-foreground mb-4">
                            52.000 ₺ - 101.000 ₺
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Kira, personel maaşları, sarf malzemeleri, lojistik ve reklam giderlerini kapsar.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-secondary" /> Kira Gideri</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-secondary" /> Personel (Usta + Yardımcı)</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-secondary" /> Nakliye ve Yakıt</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-secondary" /> Elektrik/Su/İnternet</li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto bg-amber-50 border border-amber-200 p-6 rounded-2xl flex gap-4 items-start">
                    <AlertCircle className="text-amber-600 shrink-0 mt-1" />
                    <div className="text-sm text-amber-900">
                        <strong className="block mb-1">Önemli Bilgilendirme</strong>
                        Yukarıdaki rakamlar piyasa koşullarına, lokasyona ve işletme büyüklüğüne göre değişiklik gösterebilir.
                        Detaylı finansal projeksiyon ve fizibilite raporu için lütfen iletişime geçiniz.
                    </div>
                </div>
            </div>
        </div>
    );
}

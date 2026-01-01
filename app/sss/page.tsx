export default function SSSPage() {
    const faqs = [
        {
            q: "Eşyalarımı nasıl teslim edebilirim?",
            a: "Web sitemizdeki 'İletişim' formunu doldurarak veya WhatsApp hattımızdan bize fotoğraf göndererek başlayabilirsiniz. Ekibimiz ön inceleme sonrası adresinizden teslim alır."
        },
        {
            q: "Kurumsal tasfiye süreci nasıl işler?",
            a: "Otel, ofis veya okul tasfiyelerinde yerinde keşif yapıyoruz. Kullanılabilir ürünleri değerinde satın alıyor veya yenilemek üzere teslim alıyoruz. Lojistik operasyonu tarafımızca yönetilir."
        },
        {
            q: "Yenilenen ürünler garantili mi?",
            a: "Evet, atölyemizde yenilenen tüm mobilya ve eşyalar, işçilik ve malzeme hatalarına karşı 1 yıl atölye garantisi kapsamındadır."
        },
        {
            q: "E-Atık süreci ne zaman devreye giriyor?",
            a: "Şu anda e-atıkları 'toplama ve biriktirme' aşamasındayız. Ayrıştırma tesisi lisanslama sürecimiz Yol Haritası (Faz 2) kapsamında ilerlemektedir. Şu an lisanslı çözüm ortaklarımızla çalışıyoruz."
        },
        {
            q: "Hangi bölgelere hizmet veriyorsunuz?",
            a: "Atölyemiz İstanbul merkezlidir. Kurumsal projeler için tüm Türkiye geneline, bireysel alım-satım ve yenileme hizmetleri için İstanbul içine hizmet veriyoruz."
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-4">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold font-display mb-4">Sıkça Sorulan Sorular</h1>
                    <p className="text-xl text-muted-foreground">
                        Aklınıza takılan soruların cevapları burada.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group bg-card border rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-foreground font-medium transition duration-300 group-hover:bg-muted/50">
                                <h3 className="text-lg font-bold">{faq.q}</h3>
                                <div className="white-space-no-wrap transform transition group-open:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </summary>
                            <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
                                <p>{faq.a}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
}

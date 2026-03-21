export type Lang = "en" | "tr" | "de" | "es";

export const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.features": { en: "Features", tr: "Özellikler", de: "Funktionen", es: "Características" },
  "nav.community": { en: "Community", tr: "Topluluk", de: "Community", es: "Comunidad" },
  "nav.roadmap": { en: "Roadmap", tr: "Yol Haritası", de: "Roadmap", es: "Hoja de Ruta" },
  "nav.howItWorks": { en: "How It Works", tr: "Nasıl Çalışır", de: "So funktioniert's", es: "Cómo Funciona" },
  "nav.pricing": { en: "Pricing", tr: "Fiyatlar", de: "Preise", es: "Precios" },
  "nav.testimonials": { en: "Testimonials", tr: "Yorumlar", de: "Bewertungen", es: "Testimonios" },
  "nav.startFree": { en: "Start free", tr: "Ücretsiz başla", de: "Kostenlos starten", es: "Empezar gratis" },
  "nav.launchApp": { en: "Launch App", tr: "Uygulamayı Başlat", de: "App starten", es: "Abrir App" },

  // Hero
  "hero.label": { en: "AI MUSIC PRODUCTION", tr: "YAPAY ZEKA MÜZİK ÜRETİMİ", de: "KI-MUSIKPRODUKTION", es: "PRODUCCIÓN MUSICAL IA" },
  "hero.title1": { en: "Your studio", tr: "Stüdyo", de: "Dein Studio-", es: "Tu mentor de" },
  "hero.title2": { en: "mentor.", tr: "mentorun.", de: "mentor.", es: "estudio." },
  "hero.desc": {
    en: "Ask anything. Get sourced, accurate answers. Built for every DAW, every genre, every level.",
    tr: "Her şeyi sor. Kaynaklı, doğru cevaplar al. Her DAW, her tür, her seviye için.",
    de: "Frag alles. Erhalte fundierte, präzise Antworten. Für jede DAW, jedes Genre, jedes Level.",
    es: "Pregunta lo que sea. Obtén respuestas precisas. Para cada DAW, cada género, cada nivel."
  },
  "hero.chatPlaceholder": { en: "Ask anything about music production...", tr: "Müzik prodüksiyonu hakkında bir şey sorun...", de: "Frag etwas über Musikproduktion...", es: "Pregunta sobre producción musical..." },
  "hero.askProdly": { en: "Ask Prodly →", tr: "Prodly'ye Sor →", de: "Frag Prodly →", es: "Pregunta a Prodly →" },
  "hero.freeUses": { en: "3 free questions — no signup", tr: "3 ücretsiz soru — kayıt gerekmez", de: "3 kostenlose Fragen — ohne Anmeldung", es: "3 preguntas gratis — sin registro" },
  "hero.freeDesc": { en: "Ask Prodly before creating account", tr: "Hesap oluşturmadan Prodly'ye sorun", de: "Frag Prodly vor der Registrierung", es: "Pregunta a Prodly antes de registrarte" },
  "hero.usedAll": { en: "You've used all 3 free questions.", tr: "3 ücretsiz sorunuzu kullandınız.", de: "Du hast alle 3 kostenlosen Fragen verbraucht.", es: "Has usado las 3 preguntas gratuitas." },
  "hero.signupCta": { en: "Sign up free for 5/day →", tr: "Günde 5 soru için ücretsiz kaydol →", de: "Kostenlos anmelden für 5/Tag →", es: "Regístrate gratis para 5/día →" },
  "hero.upgradeCta": { en: "Upgrade to Premium for 20/day →", tr: "Günde 20 için Premium'a yükselt →", de: "Auf Premium upgraden für 20/Tag →", es: "Actualiza a Premium por 20/día →" },
  "hero.exploreGenre": { en: "Explore by genre:", tr: "Türe göre keşfet:", de: "Nach Genre entdecken:", es: "Explorar por género:" },
  "hero.badge": { en: "AI-Powered Music Mentor", tr: "Yapay Zeka Müzik Mentoru", de: "KI-gestützter Musikmentor", es: "Mentor Musical con IA" },
  "hero.cta": { en: "Start Creating", tr: "Yaratmaya Başla", de: "Jetzt starten", es: "Empezar a Crear" },
  "hero.demo": { en: "Watch Demo", tr: "Demoyu İzle", de: "Demo ansehen", es: "Ver Demo" },

  // Demo Widget
  "demo.label": { en: "INTERACTIVE DEMO", tr: "İNTERAKTİF DEMO", de: "INTERAKTIVE DEMO", es: "DEMO INTERACTIVA" },
  "demo.title": { en: "Try it yourself", tr: "Kendin dene", de: "Probier es selbst", es: "Pruébalo tú mismo" },
  "demo.placeholder": { en: "Ask anything... e.g. Why does my kick sound muddy?", tr: "Herhangi bir şey sorun... ör. Kick'im neden bulanık?", de: "Frag etwas... z.B. Warum klingt mein Kick matschig?", es: "Pregunta algo... ej. ¿Por qué mi kick suena turbio?" },
  "demo.signupCta": { en: "Want deeper answers? Sign up free →", tr: "Daha detaylı cevaplar mı? Ücretsiz kaydol →", de: "Tiefere Antworten? Kostenlos anmelden →", es: "¿Respuestas más profundas? Regístrate gratis →" },

  // Social Proof
  "social.producers": { en: "Active Producers", tr: "Aktif Prodüktör", de: "Aktive Produzenten", es: "Productores Activos" },
  "social.tracks": { en: "Tracks Created", tr: "Oluşturulan Parça", de: "Erstellte Tracks", es: "Pistas Creadas" },
  "social.uptime": { en: "Uptime SLA", tr: "Çalışma Süresi", de: "Verfügbarkeit", es: "Disponibilidad" },
  "social.latency": { en: "Avg Latency", tr: "Ort. Gecikme", de: "Ø Latenz", es: "Latencia Prom." },

  // Features
  "features.label": { en: "Features", tr: "Özellikler", de: "Funktionen", es: "Características" },
  "features.title": { en: "Everything you need to produce", tr: "Üretmek için her şey", de: "Alles was du brauchst", es: "Todo lo que necesitas" },
  "feat.ai.title": { en: "AI Composition", tr: "AI Kompozisyon", de: "KI-Komposition", es: "Composición IA" },
  "feat.ai.desc": {
    en: "Generate melodies, harmonies, and arrangements with neural networks trained on millions of tracks.",
    tr: "Milyonlarca parça üzerinde eğitilmiş sinir ağlarıyla melodi, armoni ve düzenlemeler oluşturun.",
    de: "Generiere Melodien, Harmonien und Arrangements mit neuronalen Netzen.",
    es: "Genera melodías, armonías y arreglos con redes neuronales."
  },
  "feat.mix.title": { en: "Smart Mixing", tr: "Akıllı Miksleme", de: "Smart Mixing", es: "Mezcla Inteligente" },
  "feat.mix.desc": {
    en: "Auto-balance frequencies, stereo width, and dynamics. Studio-quality results in seconds.",
    tr: "Frekansları, stereo genişliği ve dinamikleri otomatik dengeleyin.",
    de: "Automatische Balance von Frequenzen, Stereobreite und Dynamik.",
    es: "Equilibra frecuencias, amplitud estéreo y dinámica automáticamente."
  },
  "feat.collab.title": { en: "Live Collaboration", tr: "Canlı İşbirliği", de: "Live-Zusammenarbeit", es: "Colaboración en Vivo" },
  "feat.collab.desc": {
    en: "Work with producers worldwide in real-time. Shared timelines, stems, and instant feedback.",
    tr: "Dünya genelinde prodüktörlerle gerçek zamanlı çalışın.",
    de: "Arbeite in Echtzeit mit Produzenten weltweit zusammen.",
    es: "Trabaja en tiempo real con productores de todo el mundo."
  },
  "feat.vocal.title": { en: "Vocal Processing", tr: "Vokal İşleme", de: "Vokalbearbeitung", es: "Procesamiento Vocal" },
  "feat.vocal.desc": {
    en: "Pitch correction, harmonization, and de-essing with one click. Crystal-clear vocals every time.",
    tr: "Tek tıkla pitch düzeltme, harmonizasyon ve de-essing.",
    de: "Pitch-Korrektur, Harmonisierung und De-Essing mit einem Klick.",
    es: "Corrección de tono, armonización y de-essing con un clic."
  },
  "feat.master.title": { en: "AI Mastering", tr: "AI Mastering", de: "KI-Mastering", es: "Masterización IA" },
  "feat.master.desc": {
    en: "Broadcast-ready masters with LUFS targeting, multiband compression, and genre-aware EQ.",
    tr: "LUFS hedefleme, çok bantlı sıkıştırma ve türe duyarlı EQ ile yayına hazır master.",
    de: "Sendefähige Masters mit LUFS-Ziel, Multiband-Kompression und Genre-EQ.",
    es: "Masters listos con LUFS, compresión multibanda y EQ por género."
  },
  "feat.sample.title": { en: "Sample Library", tr: "Örnek Kütüphanesi", de: "Sample-Bibliothek", es: "Biblioteca de Samples" },
  "feat.sample.desc": {
    en: "Over 2 million royalty-free samples, loops, and one-shots across every genre.",
    tr: "Her türden 2 milyondan fazla telif hakkı ücretsiz sample, loop ve one-shot.",
    de: "Über 2 Millionen lizenzfreie Samples, Loops und One-Shots.",
    es: "Más de 2 millones de samples, loops y one-shots libres de regalías."
  },

  // Genre Showcase
  "genre.label": { en: "Genres", tr: "Türler", de: "Genres", es: "Géneros" },
  "genre.title": { en: "Built for Every Sound", tr: "Her Ses İçin Tasarlandı", de: "Für jeden Sound gebaut", es: "Para Cada Sonido" },

  // How it Works
  "how.label": { en: "How It Works", tr: "Nasıl Çalışır", de: "So funktioniert's", es: "Cómo Funciona" },
  "how.title": { en: "Three Steps to Your Track", tr: "Parçanıza Üç Adım", de: "Drei Schritte zu deinem Track", es: "Tres Pasos a Tu Pista" },
  "how.step1.title": { en: "Describe Your Vision", tr: "Vizyonunu Anlat", de: "Beschreibe deine Vision", es: "Describe tu Visión" },
  "how.step1.desc": { en: "Tell the AI what mood, genre, and energy you want.", tr: "AI'ya istediğin ruh halini, türü ve enerjiyi anlat.", de: "Sage der KI, welche Stimmung und welches Genre du willst.", es: "Dile a la IA qué estado de ánimo y género quieres." },
  "how.step2.title": { en: "AI Generates & Guides", tr: "AI Üretir & Yönlendirir", de: "KI generiert & führt", es: "La IA Genera y Guía" },
  "how.step2.desc": { en: "Get stems, arrangements, and pro-level mixing advice.", tr: "Stemler, düzenlemeler ve profesyonel miks tavsiyeleri alın.", de: "Erhalte Stems, Arrangements und Profi-Mixing-Tipps.", es: "Obtén stems, arreglos y consejos de mezcla profesional." },
  "how.step3.title": { en: "Export & Release", tr: "Dışa Aktar & Yayınla", de: "Exportieren & Veröffentlichen", es: "Exporta y Publica" },
  "how.step3.desc": { en: "Download in WAV/MP3, or publish directly to streaming platforms.", tr: "WAV/MP3 indirin veya streaming platformlarına doğrudan yayınlayın.", de: "Lade als WAV/MP3 herunter oder veröffentliche direkt.", es: "Descarga en WAV/MP3 o publica en plataformas de streaming." },

  // Testimonials
  "test.label": { en: "Testimonials", tr: "Yorumlar", de: "Bewertungen", es: "Testimonios" },
  "test.title": { en: "Loved by Producers", tr: "Prodüktörler Tarafından Seviliyor", de: "Von Produzenten geliebt", es: "Amado por Productores" },

  // Pricing
  "price.label": { en: "Pricing", tr: "Fiyatlar", de: "Preise", es: "Precios" },
  "price.title": { en: "Simple, Transparent Pricing", tr: "Basit, Şeffaf Fiyatlandırma", de: "Einfache, transparente Preise", es: "Precios Simples y Transparentes" },
  "price.free": { en: "Free", tr: "Ücretsiz", de: "Kostenlos", es: "Gratis" },
  "price.pro": { en: "Pro", tr: "Pro", de: "Pro", es: "Pro" },
  "price.studio": { en: "Studio", tr: "Stüdyo", de: "Studio", es: "Estudio" },
  "price.mo": { en: "/mo", tr: "/ay", de: "/Mo", es: "/mes" },
  "price.cta.free": { en: "Get Started", tr: "Başla", de: "Starten", es: "Empezar" },
  "price.cta.pro": { en: "Go Pro", tr: "Pro'ya Geç", de: "Pro werden", es: "Hazte Pro" },
  "price.cta.studio": { en: "Contact Sales", tr: "Satışa Ulaşın", de: "Vertrieb kontaktieren", es: "Contactar Ventas" },
  "price.popular": { en: "Most Popular", tr: "En Popüler", de: "Beliebteste", es: "Más Popular" },

  // Final CTA
  "cta.title1": { en: "Ready to", tr: "Yaratmaya", de: "Bereit zu", es: "¿Listo para" },
  "cta.title2": { en: "create", tr: "hazır", de: "kreieren", es: "crear" },
  "cta.title3": { en: "?", tr: " mısın?", de: "?", es: "?" },
  "cta.desc": {
    en: "Join thousands of producers already building their next hit with Prodly.",
    tr: "Prodly ile bir sonraki hitini üreten binlerce prodüktöre katılın.",
    de: "Schließe dich tausenden Produzenten an, die mit Prodly ihren nächsten Hit bauen.",
    es: "Únete a miles de productores que ya están creando su próximo éxito con Prodly."
  },
  "cta.button": { en: "Get Early Access", tr: "Erken Erişim Al", de: "Frühzugang sichern", es: "Acceso Anticipado" },

  // Footer
  "footer.product": { en: "Product", tr: "Ürün", de: "Produkt", es: "Producto" },
  "footer.company": { en: "Company", tr: "Şirket", de: "Unternehmen", es: "Empresa" },
  "footer.about": { en: "About", tr: "Hakkımızda", de: "Über uns", es: "Acerca de" },
  "footer.blog": { en: "Blog", tr: "Blog", de: "Blog", es: "Blog" },
  "footer.careers": { en: "Careers", tr: "Kariyer", de: "Karriere", es: "Empleo" },
  "footer.rights": { en: "All rights reserved.", tr: "Tüm hakları saklıdır.", de: "Alle Rechte vorbehalten.", es: "Todos los derechos reservados." },
};

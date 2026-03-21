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
  "social.join": { en: "Join 500+ producers already using Prodly", tr: "Prodly kullanan 500+ prodüktöre katılın", de: "Schließe dich 500+ Produzenten an", es: "Únete a 500+ productores usando Prodly" },

  // Features
  "features.label": { en: "Features", tr: "Özellikler", de: "Funktionen", es: "Características" },
  "features.title": { en: "Everything you need to produce", tr: "Üretmek için her şey", de: "Alles was du brauchst", es: "Todo lo que necesitas" },
  "feat.ask.title": { en: "Ask anything, get sourced answers", tr: "Her şeyi sor, kaynaklı cevap al", de: "Frag alles, erhalte belegte Antworten", es: "Pregunta lo que sea, obtén respuestas verificadas" },
  "feat.ask.desc": {
    en: "Every answer includes a verified source — articles, manuals, and tutorials you can trust.",
    tr: "Her cevap doğrulanmış kaynak içerir — güvenebileceğiniz makaleler, kılavuzlar ve öğreticiler.",
    de: "Jede Antwort enthält eine verifizierte Quelle — Artikel, Handbücher und Tutorials.",
    es: "Cada respuesta incluye una fuente verificada — artículos, manuales y tutoriales."
  },
  "feat.daw.title": { en: "DAW-specific guidance", tr: "DAW'a özel rehberlik", de: "DAW-spezifische Anleitung", es: "Guía específica por DAW" },
  "feat.daw.desc": {
    en: "Get step-by-step instructions tailored to your DAW — Ableton, FL Studio, Logic Pro, and more.",
    tr: "DAW'ınıza özel adım adım talimatlar alın — Ableton, FL Studio, Logic Pro ve daha fazlası.",
    de: "Schritt-für-Schritt-Anleitungen für deine DAW — Ableton, FL Studio, Logic Pro und mehr.",
    es: "Instrucciones paso a paso para tu DAW — Ableton, FL Studio, Logic Pro y más."
  },
  "feat.archive.title": { en: "Your personal archive", tr: "Kişisel arşivin", de: "Dein persönliches Archiv", es: "Tu archivo personal" },
  "feat.archive.desc": {
    en: "Every answer saved automatically. Search, revisit, and build your own production knowledge base.",
    tr: "Her cevap otomatik kaydedilir. Arayın, tekrar ziyaret edin ve kendi bilgi tabanınızı oluşturun.",
    de: "Jede Antwort wird automatisch gespeichert. Suche, besuche erneut und baue deine Wissensbasis auf.",
    es: "Cada respuesta se guarda automáticamente. Busca, revisita y construye tu base de conocimiento."
  },

  // Genre Showcase
  "genre.label": { en: "Genres", tr: "Türler", de: "Genres", es: "Géneros" },
  "genre.title": { en: "Built for Every Sound", tr: "Her Ses İçin Tasarlandı", de: "Für jeden Sound gebaut", es: "Para Cada Sonido" },

  // How it Works
  "how.label": { en: "How It Works", tr: "Nasıl Çalışır", de: "So funktioniert's", es: "Cómo Funciona" },
  "how.title": { en: "Three Steps to Your Answer", tr: "Cevabınıza Üç Adım", de: "Drei Schritte zu deiner Antwort", es: "Tres Pasos a Tu Respuesta" },
  "how.step1.title": { en: "Choose your setup", tr: "Kurulumunu seç", de: "Wähle dein Setup", es: "Elige tu configuración" },
  "how.step1.desc": { en: "Pick your DAW and genre so answers are tailored to your workflow.", tr: "DAW ve türünü seç, cevaplar iş akışına göre uyarlansın.", de: "Wähle DAW und Genre für maßgeschneiderte Antworten.", es: "Elige tu DAW y género para respuestas personalizadas." },
  "how.step2.title": { en: "Ask your question", tr: "Sorunuzu sorun", de: "Stelle deine Frage", es: "Haz tu pregunta" },
  "how.step2.desc": { en: "Type anything — mixing, sound design, arrangement, mastering.", tr: "Her şeyi yazın — miksleme, ses tasarımı, düzenleme, mastering.", de: "Schreibe alles — Mixing, Sound Design, Arrangement, Mastering.", es: "Escribe lo que sea — mezcla, diseño sonoro, arreglos, mastering." },
  "how.step3.title": { en: "Get sourced answers", tr: "Kaynaklı cevaplar alın", de: "Erhalte belegte Antworten", es: "Obtén respuestas con fuentes" },
  "how.step3.desc": { en: "Every response includes verified sources you can trust and revisit.", tr: "Her cevap güvenebileceğiniz doğrulanmış kaynaklar içerir.", de: "Jede Antwort enthält verifizierte Quellen zum Nachschlagen.", es: "Cada respuesta incluye fuentes verificadas que puedes consultar." },

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

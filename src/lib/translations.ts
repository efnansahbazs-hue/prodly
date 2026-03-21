export type Lang = "en" | "tr" | "de" | "es";

export const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.features": { en: "Features", tr: "Özellikler", de: "Funktionen", es: "Características" },
  "nav.community": { en: "Community", tr: "Topluluk", de: "Community", es: "Comunidad" },
  "nav.roadmap": { en: "Roadmap", tr: "Yol Haritası", de: "Roadmap", es: "Hoja de Ruta" },
  "nav.startFree": { en: "Start free", tr: "Ücretsiz başla", de: "Kostenlos starten", es: "Empezar gratis" },

  // Hero
  "hero.label": { en: "AI MUSIC PRODUCTION", tr: "YAPAY ZEKA MÜZİK PRODÜKSİYONU", de: "KI-MUSIKPRODUKTION", es: "PRODUCCIÓN MUSICAL IA" },
  "hero.title": {
    en: "Music production mentor.",
    tr: "Müzik prodüksiyon mentoru.",
    de: "Musik-Produktions-Mentor.",
    es: "Mentor de producción musical.",
  },
  "hero.desc": {
    en: "Ask anything. Get sourced, accurate answers. Built for every DAW, every genre, every level.",
    tr: "Her şeyi sor. Kaynaklı, doğru cevaplar al. Her DAW, her tür, her seviye için.",
    de: "Frag alles. Erhalte fundierte, präzise Antworten. Für jede DAW, jedes Genre, jedes Level.",
    es: "Pregunta lo que sea. Obtén respuestas precisas. Para cada DAW, cada género, cada nivel.",
  },
  "hero.chatPlaceholder": { en: "Ask anything about music production...", tr: "Müzik prodüksiyonu hakkında bir şey sorun...", de: "Frag etwas über Musikproduktion...", es: "Pregunta sobre producción musical..." },
  "hero.askProdly": { en: "Ask Prodly →", tr: "Prodly'ye Sor →", de: "Frag Prodly →", es: "Pregunta a Prodly →" },
  "hero.freeUses": { en: "3 free questions", tr: "3 ücretsiz soru", de: "3 kostenlose Fragen", es: "3 preguntas gratis" },
  "hero.freeDesc": { en: "Try Prodly right now", tr: "Prodly'yi hemen deneyin", de: "Probiere Prodly jetzt aus", es: "Prueba Prodly ahora mismo" },
  "hero.usedAll": { en: "You've used all 3 free questions.", tr: "3 ücretsiz sorunuzu kullandınız.", de: "Du hast alle 3 kostenlosen Fragen verbraucht.", es: "Has usado las 3 preguntas gratuitas." },
  "hero.signupCta": { en: "Sign up free for 5/day →", tr: "Günde 5 soru için ücretsiz kaydol →", de: "Kostenlos anmelden für 5/Tag →", es: "Regístrate gratis para 5/día →" },
  "hero.upgradeCta": { en: "Upgrade to Premium for 20/day →", tr: "Günde 20 soru için Premium'a yükselt →", de: "Auf Premium upgraden für 20/Tag →", es: "Actualiza a Premium por 20/día →" },
  "hero.exploreGenre": { en: "Explore by genre:", tr: "Türe göre keşfet:", de: "Nach Genre entdecken:", es: "Explorar por género:" },

  // Demo Widget
  "demo.label": { en: "INTERACTIVE DEMO", tr: "İNTERAKTİF DEMO", de: "INTERAKTIVE DEMO", es: "DEMO INTERACTIVA" },
  "demo.title": { en: "Try it yourself", tr: "Kendin dene", de: "Probier es selbst", es: "Pruébalo tú mismo" },
  "demo.placeholder": { en: "Ask anything... e.g. Why does my kick sound muddy?", tr: "Bir şey sorun... ör. Kick'im neden bulanık duyuluyor?", de: "Frag etwas... z.B. Warum klingt mein Kick matschig?", es: "Pregunta algo... ej. ¿Por qué mi kick suena turbio?" },
  "demo.signupCta": { en: "Want deeper answers? Sign up free →", tr: "Daha detaylı cevaplar mı istiyorsun? Ücretsiz kaydol →", de: "Tiefere Antworten? Kostenlos anmelden →", es: "¿Respuestas más profundas? Regístrate gratis →" },

  // Social Proof
  "social.join": { en: "Join 500+ producers already using Prodly", tr: "Prodly kullanan 500+ prodüktöre katılın", de: "Schließe dich 500+ Produzenten an", es: "Únete a 500+ productores usando Prodly" },

  // Features
  "features.label": { en: "Features", tr: "Özellikler", de: "Funktionen", es: "Características" },
  "features.title": { en: "Everything you need to learn", tr: "Öğrenmek için ihtiyacın olan her şey", de: "Alles was du zum Lernen brauchst", es: "Todo lo que necesitas para aprender" },
  "feat.ask.title": { en: "Ask anything, get sourced answers", tr: "Her şeyi sor, kaynaklı cevap al", de: "Frag alles, erhalte belegte Antworten", es: "Pregunta lo que sea, obtén respuestas verificadas" },
  "feat.ask.desc": {
    en: "Every answer includes a verified source — articles, manuals, and tutorials you can trust.",
    tr: "Her cevap doğrulanmış kaynak içerir — güvenebileceğiniz makaleler, kılavuzlar ve eğitimler.",
    de: "Jede Antwort enthält eine verifizierte Quelle — Artikel, Handbücher und Tutorials.",
    es: "Cada respuesta incluye una fuente verificada — artículos, manuales y tutoriales.",
  },
  "feat.daw.title": { en: "DAW-specific guidance", tr: "DAW'a özel rehberlik", de: "DAW-spezifische Anleitung", es: "Guía específica por DAW" },
  "feat.daw.desc": {
    en: "Get step-by-step instructions tailored to your DAW — Ableton, FL Studio, Logic Pro, and more.",
    tr: "DAW'ınıza özel adım adım talimatlar alın — Ableton, FL Studio, Logic Pro ve daha fazlası.",
    de: "Schritt-für-Schritt-Anleitungen für deine DAW — Ableton, FL Studio, Logic Pro und mehr.",
    es: "Instrucciones paso a paso para tu DAW — Ableton, FL Studio, Logic Pro y más.",
  },
  "feat.archive.title": { en: "Your personal archive", tr: "Kişisel arşivin", de: "Dein persönliches Archiv", es: "Tu archivo personal" },
  "feat.archive.desc": {
    en: "Every answer saved automatically. Search, revisit, and build your own production knowledge base.",
    tr: "Her cevap otomatik kaydedilir. Arayın, tekrar ziyaret edin ve kendi prodüksiyon bilgi tabanınızı oluşturun.",
    de: "Jede Antwort wird automatisch gespeichert. Suche, besuche erneut und baue deine Wissensbasis auf.",
    es: "Cada respuesta se guarda automáticamente. Busca, revisita y construye tu base de conocimiento.",
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
  "how.step2.desc": { en: "Type anything — mixing, sound design, arrangement, mastering.", tr: "Her şeyi yazın — mix, ses tasarımı, düzenleme, mastering.", de: "Schreibe alles — Mixing, Sound Design, Arrangement, Mastering.", es: "Escribe lo que sea — mezcla, diseño sonoro, arreglos, mastering." },
  "how.step3.title": { en: "Get sourced answers", tr: "Kaynaklı cevaplar alın", de: "Erhalte belegte Antworten", es: "Obtén respuestas con fuentes" },
  "how.step3.desc": { en: "Every response includes verified sources you can trust and revisit.", tr: "Her cevap güvenebileceğiniz doğrulanmış kaynaklar içerir.", de: "Jede Antwort enthält verifizierte Quellen zum Nachschlagen.", es: "Cada respuesta incluye fuentes verificadas que puedes consultar." },

  // Testimonials
  "test.label": { en: "Testimonials", tr: "Yorumlar", de: "Bewertungen", es: "Testimonios" },
  "test.title": { en: "Loved by Producers", tr: "Prodüktörler Tarafından Seviliyor", de: "Von Produzenten geliebt", es: "Amado por Productores" },

  // Pricing
  "price.label": { en: "Pricing", tr: "Fiyatlar", de: "Preise", es: "Precios" },
  "price.title": { en: "Simple, Transparent Pricing", tr: "Basit, Şeffaf Fiyatlandırma", de: "Einfache, transparente Preise", es: "Precios Simples y Transparentes" },
  "price.free": { en: "Free", tr: "Ücretsiz", de: "Kostenlos", es: "Gratis" },
  "price.studio": { en: "Studio", tr: "Stüdyo", de: "Studio", es: "Estudio" },
  "price.mo": { en: "/mo", tr: "/ay", de: "/Mo", es: "/mes" },
  "price.monthly": { en: "Monthly", tr: "Aylık", de: "Monatlich", es: "Mensual" },
  "price.annual": { en: "Annual", tr: "Yıllık", de: "Jährlich", es: "Anual" },
  "price.noCard": { en: "No credit card required", tr: "Kredi kartı gerekmez", de: "Keine Kreditkarte nötig", es: "Sin tarjeta de crédito" },
  "price.includesFree": { en: "Everything in Free, plus:", tr: "Ücretsiz'deki her şey, artı:", de: "Alles aus Kostenlos, plus:", es: "Todo en Gratis, más:" },
  "price.includesPremium": { en: "Everything in Premium, plus:", tr: "Premium'daki her şey, artı:", de: "Alles aus Premium, plus:", es: "Todo en Premium, más:" },
  "price.cta.free": { en: "Get Started", tr: "Başla", de: "Starten", es: "Empezar" },
  "price.cta.pro": { en: "Go Premium", tr: "Premium'a Geç", de: "Premium werden", es: "Hazte Premium" },
  "price.cta.studio": { en: "Go Studio", tr: "Stüdyo'ya Geç", de: "Studio werden", es: "Hazte Studio" },
  "price.popular": { en: "Most Popular", tr: "En Popüler", de: "Beliebteste", es: "Más Popular" },

  // Invite system
  "invite.label": { en: "REFERRAL PROGRAM", tr: "DAVET PROGRAMI", de: "EMPFEHLUNGSPROGRAMM", es: "PROGRAMA DE REFERIDOS" },
  "invite.title": { en: "Invite a producer. Both of you win.", tr: "Bir prodüktör davet et. İkiniz de kazanın.", de: "Lade einen Produzenten ein. Beide gewinnen.", es: "Invita a un productor. Ambos ganan." },
  "invite.desc": { en: "+5 bonus AI questions/day for 30 days — for both of you.", tr: "30 gün boyunca günde +5 bonus AI sorusu — ikiniz için de.", de: "+5 Bonus-KI-Fragen/Tag für 30 Tage — für euch beide.", es: "+5 preguntas IA bonus/día por 30 días — para ambos." },
  "invite.step1": { en: "Share your link", tr: "Linkini paylaş", de: "Teile deinen Link", es: "Comparte tu enlace" },
  "invite.step1Desc": { en: "Get your unique referral link from your dashboard.", tr: "Kontrol panelinizden benzersiz davet linkinizi alın.", de: "Hole deinen einzigartigen Empfehlungslink.", es: "Obtén tu enlace único desde tu panel." },
  "invite.step2": { en: "Friend signs up", tr: "Arkadaşın kaydolur", de: "Freund meldet sich an", es: "Tu amigo se registra" },
  "invite.step2Desc": { en: "They create a free account using your link.", tr: "Linkinizi kullanarak ücretsiz hesap oluştururlar.", de: "Sie erstellen ein kostenloses Konto über deinen Link.", es: "Crean una cuenta gratis con tu enlace." },
  "invite.step3": { en: "Both get +5/day", tr: "İkiniz de +5/gün kazanır", de: "Beide erhalten +5/Tag", es: "Ambos obtienen +5/día" },
  "invite.step3Desc": { en: "+5 AI questions per day for 30 days each.", tr: "30 gün boyunca günde +5 AI sorusu.", de: "+5 KI-Fragen pro Tag für jeweils 30 Tage.", es: "+5 preguntas IA al día por 30 días cada uno." },
  "invite.max": { en: "Max 10 active referrals per user. Unique link per account.", tr: "Kullanıcı başına maks. 10 aktif davet. Hesap başına benzersiz link.", de: "Max. 10 aktive Empfehlungen pro Nutzer. Einzigartiger Link pro Konto.", es: "Máx. 10 referidos activos por usuario. Enlace único por cuenta." },

  // Final CTA
  "cta.title1": { en: "Ready to", tr: "Öğrenmeye", de: "Bereit zu", es: "¿Listo para" },
  "cta.title2": { en: "learn", tr: "hazır", de: "lernen", es: "aprender" },
  "cta.title3": { en: "?", tr: " mısın?", de: "?", es: "?" },
  "cta.desc": {
    en: "Join thousands of producers already solving production challenges with Prodly.",
    tr: "Prodly ile prodüksiyon sorunlarını çözen binlerce prodüktöre katılın.",
    de: "Schließe dich tausenden Produzenten an, die mit Prodly Produktionsprobleme lösen.",
    es: "Únete a miles de productores que ya resuelven desafíos de producción con Prodly.",
  },
  "cta.button": { en: "Get Early Access", tr: "Erken Erişim Al", de: "Frühzugang sichern", es: "Acceso Anticipado" },

  // Footer
  "footer.product": { en: "Product", tr: "Ürün", de: "Produkt", es: "Producto" },
  "footer.company": { en: "Company", tr: "Şirket", de: "Unternehmen", es: "Empresa" },
  "footer.about": { en: "About", tr: "Hakkımızda", de: "Über uns", es: "Acerca de" },
  "footer.blog": { en: "Blog", tr: "Blog", de: "Blog", es: "Blog" },
  "footer.careers": { en: "Careers", tr: "Kariyer", de: "Karriere", es: "Empleo" },
  "footer.rights": { en: "All rights reserved.", tr: "Tüm hakları saklıdır.", de: "Alle Rechte vorbehalten.", es: "Todos los derechos reservados." },
  "footer.tagline": {
    en: "Prodly — AI Music Production Assistant. Built for producers, by producers.",
    tr: "Prodly — Yapay Zeka Müzik Prodüksiyon Asistanı. Prodüktörler tarafından, prodüktörler için.",
    de: "Prodly — KI-Musikproduktions-Assistent. Von Produzenten, für Produzenten.",
    es: "Prodly — Asistente de Producción Musical IA. Hecho por productores, para productores.",
  },

  // Upgrade system
  "upgrade.dailyLimit": { en: "Today's questions are up. Come back tomorrow — or unlock more.", tr: "Bugünkü sorularınız bitti. Yarın tekrar gelin — ya da daha fazlasını açın.", de: "Heutige Fragen aufgebraucht. Komm morgen wieder — oder schalte mehr frei.", es: "Las preguntas de hoy se agotaron. Vuelve mañana — o desbloquea más." },
  "upgrade.seePremium": { en: "See Premium →", tr: "Premium'u Gör →", de: "Premium ansehen →", es: "Ver Premium →" },
  "upgrade.title": { en: "Unlock Prodly Premium", tr: "Prodly Premium'u Aç", de: "Prodly Premium freischalten", es: "Desbloquea Prodly Premium" },
  "upgrade.subtitle": { en: "20 questions per day. Deeper answers. Full archive.", tr: "Günde 20 soru. Daha derin cevaplar. Tam arşiv.", de: "20 Fragen pro Tag. Tiefere Antworten. Volles Archiv.", es: "20 preguntas al día. Respuestas más profundas. Archivo completo." },
  "upgrade.benefit1": { en: "20 sourced answers per day", tr: "Günde 20 kaynaklı cevap", de: "20 belegte Antworten pro Tag", es: "20 respuestas con fuentes al día" },
  "upgrade.benefit2": { en: "Personal knowledge archive", tr: "Kişisel bilgi arşivi", de: "Persönliches Wissensarchiv", es: "Archivo de conocimiento personal" },
  "upgrade.benefit3": { en: "Genre-specific deep guidance", tr: "Türe özel detaylı rehberlik", de: "Genre-spezifische Tiefenberatung", es: "Guía profunda por género" },
  "upgrade.benefit4": { en: "Priority response speed", tr: "Öncelikli yanıt hızı", de: "Prioritäts-Antwortgeschwindigkeit", es: "Velocidad de respuesta prioritaria" },
  "upgrade.cta": { en: "Upgrade to Premium", tr: "Premium'a Yükselt", de: "Auf Premium upgraden", es: "Actualizar a Premium" },
  "upgrade.later": { en: "Maybe later", tr: "Belki sonra", de: "Vielleicht später", es: "Quizás después" },

  // Promo codes
  "promo.placeholder": { en: "Have a promo code?", tr: "Promosyon kodunuz var mı?", de: "Haben Sie einen Promo-Code?", es: "¿Tienes un código promo?" },
  "promo.apply": { en: "Apply", tr: "Uygula", de: "Einlösen", es: "Aplicar" },
  "promo.applied": { en: "Code applied!", tr: "Kod uygulandı!", de: "Code eingelöst!", es: "¡Código aplicado!" },
  "promo.invalid": { en: "This code is not valid or has expired", tr: "Bu kod geçerli değil veya süresi dolmuş", de: "Dieser Code ist ungültig oder abgelaufen", es: "Este código no es válido o ha expirado" },

  // Admin
  "admin.promoLabel": { en: "ADMIN", tr: "YÖNETİM", de: "ADMIN", es: "ADMIN" },
  "admin.promoTitle": { en: "Promo Code Management", tr: "Promosyon Kodu Yönetimi", de: "Promo-Code Verwaltung", es: "Gestión de Códigos Promo" },
  "admin.createCode": { en: "Create Code", tr: "Kod Oluştur", de: "Code erstellen", es: "Crear Código" },
  "admin.cancel": { en: "Cancel", tr: "İptal", de: "Abbrechen", es: "Cancelar" },
};

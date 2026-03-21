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

  // Toolkit
  "tk.label": { en: "YOUR TOOLKIT", tr: "ARAÇ SETİN", de: "DEIN TOOLKIT", es: "TU TOOLKIT" },
  "tk.title": { en: "Everything a producer needs — in one place.", tr: "Bir prodüktörün ihtiyacı olan her şey — tek yerde.", de: "Alles was ein Produzent braucht — an einem Ort.", es: "Todo lo que un productor necesita — en un solo lugar." },
  "tk.cta": { en: "Start free — access 8 tools with no credit card →", tr: "Ücretsiz başla — kredi kartı olmadan 8 araca eriş →", de: "Kostenlos starten — 8 Tools ohne Kreditkarte →", es: "Empieza gratis — accede a 8 herramientas sin tarjeta →" },

  "tk.conceptDict": { en: "Concept Dictionary", tr: "Kavram Sözlüğü", de: "Konzept-Wörterbuch", es: "Diccionario de Conceptos" },
  "tk.conceptDictDesc": { en: "Look up any production term with clear, sourced explanations.", tr: "Her prodüksiyon terimini kaynaklı açıklamalarla ara.", de: "Jeden Produktionsbegriff mit Quellen nachschlagen.", es: "Busca cualquier término de producción con explicaciones verificadas." },
  "tk.starterKit": { en: "Starter Kit", tr: "Başlangıç Kiti", de: "Starter-Kit", es: "Kit de Inicio" },
  "tk.starterKitDesc": { en: "Curated learning paths for your genre and skill level.", tr: "Tür ve seviyene göre küratörlü öğrenme yolları.", de: "Kuratierte Lernpfade für dein Genre und Level.", es: "Rutas de aprendizaje curadas para tu género y nivel." },
  "tk.videoFinder": { en: "Video Finder", tr: "Video Bulucu", de: "Video-Finder", es: "Buscador de Videos" },
  "tk.videoFinderDesc": { en: "Find the best tutorial videos for any technique.", tr: "Her teknik için en iyi eğitim videolarını bul.", de: "Finde die besten Tutorial-Videos für jede Technik.", es: "Encuentra los mejores videos tutoriales para cualquier técnica." },
  "tk.quiz": { en: "Quiz", tr: "Quiz", de: "Quiz", es: "Quiz" },
  "tk.quizDesc": { en: "Test your knowledge and track your progress.", tr: "Bilgini test et ve ilerleme kaydet.", de: "Teste dein Wissen und verfolge deinen Fortschritt.", es: "Pon a prueba tu conocimiento y sigue tu progreso." },

  "tk.problemSolver": { en: "Problem Solver", tr: "Problem Çözücü", de: "Problem-Löser", es: "Solucionador" },
  "tk.problemSolverDesc": { en: "Describe your issue, get step-by-step fix.", tr: "Sorununu tanımla, adım adım çözüm al.", de: "Beschreibe dein Problem, erhalte eine Schritt-für-Schritt-Lösung.", es: "Describe tu problema, obtén solución paso a paso." },
  "tk.mixChecklist": { en: "Mix Checklist", tr: "Mix Kontrol Listesi", de: "Mix-Checkliste", es: "Lista de Mezcla" },
  "tk.mixChecklistDesc": { en: "Pre-master checklist tailored to your genre.", tr: "Türüne göre pre-master kontrol listesi.", de: "Pre-Master-Checkliste für dein Genre.", es: "Lista pre-master adaptada a tu género." },
  "tk.mistakes": { en: "Common Mistakes", tr: "Sık Yapılan Hatalar", de: "Häufige Fehler", es: "Errores Comunes" },
  "tk.mistakesDesc": { en: "Learn what to avoid in your production workflow.", tr: "Prodüksiyon sürecinde nelerden kaçınman gerektiğini öğren.", de: "Lerne, was du in deinem Workflow vermeiden solltest.", es: "Aprende qué evitar en tu flujo de producción." },
  "tk.dawAnalyzer": { en: "DAW Screen Analyzer", tr: "DAW Ekran Analizcisi", de: "DAW Screen Analyzer", es: "Analizador de Pantalla DAW" },
  "tk.dawAnalyzerDesc": { en: "Upload a screenshot, get AI feedback on your session.", tr: "Ekran görüntüsü yükle, oturumun hakkında AI geri bildirimi al.", de: "Lade einen Screenshot hoch, erhalte KI-Feedback.", es: "Sube una captura, obtén feedback de IA sobre tu sesión." },

  "tk.genreDna": { en: "Genre DNA", tr: "Genre DNA", de: "Genre DNA", es: "ADN del Género" },
  "tk.genreDnaDesc": { en: "BPM, key, structure, and sound design maps per genre.", tr: "Türe göre BPM, key, yapı ve ses tasarımı haritaları.", de: "BPM, Key, Struktur und Sound-Design-Maps pro Genre.", es: "BPM, tonalidad, estructura y mapas de diseño sonoro por género." },
  "tk.bpmKey": { en: "BPM + Key Calculator", tr: "BPM + Key Hesaplayıcı", de: "BPM + Key Rechner", es: "Calculadora BPM + Key" },
  "tk.bpmKeyDesc": { en: "Find compatible keys and BPM ranges instantly.", tr: "Uyumlu key ve BPM aralıklarını anında bul.", de: "Finde kompatible Keys und BPM-Bereiche sofort.", es: "Encuentra tonalidades y rangos BPM compatibles al instante." },
  "tk.frequency": { en: "Frequency Guide", tr: "Frekans Rehberi", de: "Frequenz-Guide", es: "Guía de Frecuencias" },
  "tk.frequencyDesc": { en: "Interactive EQ frequency chart for every instrument.", tr: "Her enstrüman için interaktif EQ frekans tablosu.", de: "Interaktives EQ-Frequenzdiagramm für jedes Instrument.", es: "Gráfico interactivo de frecuencias EQ para cada instrumento." },
  "tk.sidechainCalc": { en: "Sidechain Calculator", tr: "Sidechain Hesaplayıcı", de: "Sidechain-Rechner", es: "Calculadora Sidechain" },
  "tk.sidechainCalcDesc": { en: "Calculate attack/release times for your BPM.", tr: "BPM'ine göre attack/release sürelerini hesapla.", de: "Berechne Attack/Release-Zeiten für dein BPM.", es: "Calcula tiempos de attack/release para tu BPM." },
  "tk.pluginDb": { en: "Plugin Database", tr: "Plugin Veritabanı", de: "Plugin-Datenbank", es: "Base de Datos de Plugins" },
  "tk.pluginDbDesc": { en: "Search, compare, and find alternatives for any plugin.", tr: "Her plugin için ara, karşılaştır ve alternatif bul.", de: "Suche, vergleiche und finde Alternativen für jedes Plugin.", es: "Busca, compara y encuentra alternativas para cualquier plugin." },

  "tk.randomProject": { en: "Random Project", tr: "Rastgele Proje", de: "Zufallsprojekt", es: "Proyecto Aleatorio" },
  "tk.randomProjectDesc": { en: "Get a random genre + constraint challenge to spark creativity.", tr: "Yaratıcılığı tetiklemek için rastgele tür + kısıtlama.", de: "Zufälliges Genre + Einschränkung für kreative Impulse.", es: "Obtén un género aleatorio + desafío para inspirarte." },
  "tk.blueprint": { en: "Track Blueprint", tr: "Parça Taslağı", de: "Track-Blueprint", es: "Plano de Pista" },
  "tk.blueprintDesc": { en: "AI-generated arrangement structure for your genre.", tr: "Türüne göre AI tarafından oluşturulan düzenleme yapısı.", de: "KI-generierte Arrangement-Struktur für dein Genre.", es: "Estructura de arreglo generada por IA para tu género." },
  "tk.chordStarter": { en: "Chord Starter", tr: "Akor Başlatıcı", de: "Akkord-Starter", es: "Iniciador de Acordes" },
  "tk.chordStarterDesc": { en: "Get chord progressions that fit your key and mood.", tr: "Key ve moduna uygun akor ilerlemeleri al.", de: "Akkordfolgen passend zu Key und Stimmung.", es: "Obtén progresiones de acordes que se adapten a tu tonalidad." },
  "tk.grooveBuilder": { en: "Groove Builder", tr: "Groove Oluşturucu", de: "Groove-Builder", es: "Constructor de Groove" },
  "tk.grooveBuilderDesc": { en: "Generate drum patterns and rhythmic variations.", tr: "Davul pattern'leri ve ritmik varyasyonlar oluştur.", de: "Drum-Patterns und rhythmische Variationen generieren.", es: "Genera patrones de batería y variaciones rítmicas." },
  "tk.sampleDev": { en: "Sample Developer", tr: "Sample Geliştirici", de: "Sample-Entwickler", es: "Desarrollador de Samples" },
  "tk.sampleDevDesc": { en: "Sound design recipes for creating your own samples.", tr: "Kendi sample'larını yaratmak için ses tasarımı reçeteleri.", de: "Sound-Design-Rezepte zum Erstellen eigener Samples.", es: "Recetas de diseño sonoro para crear tus propios samples." },

  // Blank Page section
  "bp.label": { en: "FROM ZERO TO FIRST BEAT", tr: "SIFIRDAN İLK BEAT'E", de: "VON NULL ZUM ERSTEN BEAT", es: "DE CERO AL PRIMER BEAT" },
  "bp.title": { en: "From blank page to first beat.", tr: "Boş sayfadan ilk beat'e.", de: "Von der leeren Seite zum ersten Beat.", es: "De la página en blanco al primer beat." },
  "bp.desc": { en: "Pick a direction, get a blueprint, start creating — all guided by Prodly.", tr: "Bir yön seç, taslak al, üretmeye başla — hepsi Prodly rehberliğinde.", de: "Wähle eine Richtung, erhalte einen Bauplan, fang an — geleitet von Prodly.", es: "Elige una dirección, obtén un plano, empieza a crear — guiado por Prodly." },
  "bp.stage1Title": { en: "What do you want to create today?", tr: "Bugün ne oluşturmak istiyorsun?", de: "Was willst du heute erstellen?", es: "¿Qué quieres crear hoy?" },
  "bp.choice1": { en: "Start a track", tr: "Parça başlat", de: "Track starten", es: "Empezar una pista" },
  "bp.choice2": { en: "Remix an idea", tr: "Fikri remixle", de: "Idee remixen", es: "Remixar una idea" },
  "bp.choice3": { en: "Just explore", tr: "Keşfet", de: "Einfach erkunden", es: "Solo explorar" },
  "bp.stage2Title": { en: "Your project DNA", tr: "Projenin DNA'sı", de: "Dein Projekt-DNA", es: "El ADN de tu proyecto" },
  "bp.generateBlueprint": { en: "Generate Blueprint →", tr: "Taslak Oluştur →", de: "Blueprint generieren →", es: "Generar Plano →" },
  "bp.chordTitle": { en: "Chord Starter", tr: "Akor Başlatıcı", de: "Akkord-Starter", es: "Iniciador de Acordes" },
  "bp.grooveTitle": { en: "Groove Builder", tr: "Groove Oluşturucu", de: "Groove-Builder", es: "Constructor de Groove" },

  // Problem Solver
  "ps.label": { en: "THE PROBLEM SOLVER", tr: "PROBLEM ÇÖZÜCÜ", de: "DER PROBLEM-LÖSER", es: "EL SOLUCIONADOR" },
  "ps.title": { en: "Describe the problem. Get the fix.", tr: "Sorunu tanımla. Çözümü al.", de: "Beschreibe das Problem. Erhalte die Lösung.", es: "Describe el problema. Obtén la solución." },
  "ps.desc": { en: "Pick a category, describe what's wrong, and get a step-by-step diagnosis.", tr: "Kategori seç, sorunu anlat, adım adım teşhis al.", de: "Wähle eine Kategorie, beschreibe das Problem, erhalte eine Diagnose.", es: "Elige una categoría, describe el problema, obtén un diagnóstico." },
  "ps.catMix": { en: "Mixing Issues", tr: "Mix Sorunları", de: "Mixing-Probleme", es: "Problemas de Mezcla" },
  "ps.catSound": { en: "Sound Design", tr: "Ses Tasarımı", de: "Sound Design", es: "Diseño Sonoro" },
  "ps.catLoud": { en: "Loudness & Mastering", tr: "Loudness & Mastering", de: "Lautheit & Mastering", es: "Loudness y Mastering" },
  "ps.catArr": { en: "Arrangement", tr: "Düzenleme", de: "Arrangement", es: "Arreglo" },
  "ps.catPerf": { en: "Performance & CPU", tr: "Performans & CPU", de: "Performance & CPU", es: "Rendimiento y CPU" },

  // Daily Technique
  "dt.label": { en: "TODAY'S TECHNIQUE", tr: "GÜNÜN TEKNİĞİ", de: "HEUTIGE TECHNIK", es: "TÉCNICA DEL DÍA" },

  // Streak
  "streak.label": { en: "YOUR STREAK", tr: "SERİN", de: "DEIN STREAK", es: "TU RACHA" },
  "streak.days": { en: "days in a row", tr: "gün üst üste", de: "Tage in Folge", es: "días seguidos" },
  "streak.freeze": { en: "freeze left", tr: "dondurma hakkı", de: "Freeze übrig", es: "congelación" },
  "streak.milestones": { en: "Milestones", tr: "Kilometre Taşları", de: "Meilensteine", es: "Hitos" },

  // Profile
  "profile.back": { en: "Back", tr: "Geri", de: "Zurück", es: "Volver" },
  "profile.questions": { en: "Questions", tr: "Sorular", de: "Fragen", es: "Preguntas" },
  "profile.streak": { en: "Streak", tr: "Seri", de: "Streak", es: "Racha" },
  "profile.techniques": { en: "Techniques", tr: "Teknikler", de: "Techniken", es: "Técnicas" },
  "profile.badges": { en: "Badges", tr: "Rozetler", de: "Abzeichen", es: "Insignias" },
  "profile.badgesTitle": { en: "Your Badges", tr: "Rozetlerin", de: "Deine Abzeichen", es: "Tus Insignias" },
  "profile.tab.archive": { en: "Archive", tr: "Arşiv", de: "Archiv", es: "Archivo" },
  "profile.tab.notes": { en: "Notes", tr: "Notlar", de: "Notizen", es: "Notas" },
  "profile.tab.invite": { en: "Invite", tr: "Davet", de: "Einladen", es: "Invitar" },
  "profile.tab.settings": { en: "Settings", tr: "Ayarlar", de: "Einstellungen", es: "Ajustes" },
  "profile.inviteTitle": { en: "Invite a producer friend", tr: "Bir prodüktör arkadaşını davet et", de: "Lade einen Produzenten-Freund ein", es: "Invita a un productor amigo" },
  "profile.inviteDesc": { en: "+5 bonus questions/day for 30 days — both of you.", tr: "30 gün boyunca günde +5 bonus soru — ikiniz için.", de: "+5 Bonus-Fragen/Tag für 30 Tage — für euch beide.", es: "+5 preguntas bonus/día por 30 días — para ambos." },
  "profile.copy": { en: "Copy", tr: "Kopyala", de: "Kopieren", es: "Copiar" },
  "profile.email": { en: "Email", tr: "E-posta", de: "E-Mail", es: "Correo" },
  "profile.password": { en: "Password", tr: "Şifre", de: "Passwort", es: "Contraseña" },
  "profile.save": { en: "Save Changes", tr: "Değişiklikleri Kaydet", de: "Änderungen speichern", es: "Guardar Cambios" },

  // Community
  "comm.tabFeed": { en: "Feed", tr: "Akış", de: "Feed", es: "Feed" },
  "comm.tabLibrary": { en: "Library", tr: "Kütüphane", de: "Bibliothek", es: "Biblioteca" },
  "comm.tabChallenges": { en: "Challenges", tr: "Meydan Okumalar", de: "Challenges", es: "Desafíos" },
  "comm.tabStudio": { en: "Studio Lounge", tr: "Stüdyo Lounge", de: "Studio Lounge", es: "Studio Lounge" },
  "comm.tabTrending": { en: "Trending", tr: "Trendler", de: "Trends", es: "Tendencias" },

  "comm.morning": { en: "Good morning", tr: "Günaydın", de: "Guten Morgen", es: "Buenos días" },
  "comm.afternoon": { en: "Good afternoon", tr: "İyi öğlenler", de: "Guten Nachmittag", es: "Buenas tardes" },
  "comm.evening": { en: "Good evening", tr: "İyi akşamlar", de: "Guten Abend", es: "Buenas noches" },
  "comm.dashDesc": { en: "What are you working on today?", tr: "Bugün ne üzerinde çalışıyorsun?", de: "Woran arbeitest du heute?", es: "¿En qué trabajas hoy?" },
  "comm.askQuestion": { en: "Ask a Question", tr: "Soru Sor", de: "Frage stellen", es: "Hacer Pregunta" },
  "comm.shareTechnique": { en: "Share Technique", tr: "Teknik Paylaş", de: "Technik teilen", es: "Compartir Técnica" },
  "comm.startDiscussion": { en: "Start Discussion", tr: "Tartışma Başlat", de: "Diskussion starten", es: "Iniciar Discusión" },
  "comm.joinChallenge": { en: "Join Challenge", tr: "Meydan Okumaya Katıl", de: "Challenge beitreten", es: "Unirse al Desafío" },

  "comm.postNote": { en: "Posting requires Premium or Studio plan.", tr: "Gönderi paylaşmak için Premium veya Studio planı gerekli.", de: "Zum Posten ist ein Premium- oder Studio-Plan erforderlich.", es: "Publicar requiere plan Premium o Studio." },
  "comm.typeTechnique": { en: "Technique", tr: "Teknik", de: "Technik", es: "Técnica" },
  "comm.typeProject": { en: "Project", tr: "Proje", de: "Projekt", es: "Proyecto" },
  "comm.typeQuestion": { en: "Question", tr: "Soru", de: "Frage", es: "Pregunta" },
  "comm.typeTip": { en: "Tip", tr: "İpucu", de: "Tipp", es: "Consejo" },
  "comm.typeChallenge": { en: "Challenge", tr: "Meydan Okuma", de: "Challenge", es: "Desafío" },

  "comm.libAll": { en: "All", tr: "Tümü", de: "Alle", es: "Todos" },
  "comm.libMixing": { en: "Mixing", tr: "Mixing", de: "Mixing", es: "Mezcla" },
  "comm.libSoundDesign": { en: "Sound Design", tr: "Ses Tasarımı", de: "Sound Design", es: "Diseño Sonoro" },
  "comm.libArrangement": { en: "Arrangement", tr: "Düzenleme", de: "Arrangement", es: "Arreglo" },
  "comm.libMastering": { en: "Mastering", tr: "Mastering", de: "Mastering", es: "Mastering" },
  "comm.libGenre": { en: "Genre Guides", tr: "Tür Rehberleri", de: "Genre-Guides", es: "Guías de Género" },
  "comm.libSearch": { en: "Search the library...", tr: "Kütüphanede ara...", de: "Bibliothek durchsuchen...", es: "Buscar en la biblioteca..." },

  "comm.chWeekly": { en: "Weekly", tr: "Haftalık", de: "Wöchentlich", es: "Semanal" },
  "comm.chStudio": { en: "Studio Exclusive", tr: "Stüdyo Özel", de: "Studio Exklusiv", es: "Exclusivo Studio" },
  "comm.chGrandPrix": { en: "Grand Prix", tr: "Grand Prix", de: "Grand Prix", es: "Grand Prix" },
  "comm.chFlash": { en: "Flash", tr: "Flash", de: "Flash", es: "Flash" },
  "comm.chParticipants": { en: "joined", tr: "katıldı", de: "teilgenommen", es: "participaron" },
  "comm.chJoin": { en: "Join Challenge →", tr: "Meydan Okumaya Katıl →", de: "Challenge beitreten →", es: "Unirse al Desafío →" },
  "comm.chWinnerTitle": { en: "Last Week's Winner", tr: "Geçen Haftanın Kazananı", de: "Gewinner der letzten Woche", es: "Ganador de la Semana Pasada" },
  "comm.chWinnerDesc": { en: "Weekly Challenge Winner — 3-Sample Challenge", tr: "Haftalık Meydan Okuma Kazananı — 3-Sample Challenge", de: "Wöchentlicher Challenge-Gewinner — 3-Sample Challenge", es: "Ganador del Desafío Semanal — 3-Sample Challenge" },

  "comm.slTitle": { en: "Studio Lounge", tr: "Stüdyo Lounge", de: "Studio Lounge", es: "Studio Lounge" },
  "comm.slSubtitle": { en: "Exclusive space for Studio members", tr: "Studio üyelerine özel alan", de: "Exklusiver Bereich für Studio-Mitglieder", es: "Espacio exclusivo para miembros Studio" },
  "comm.slLocked": { en: "Studio Members Only", tr: "Sadece Studio Üyeleri", de: "Nur für Studio-Mitglieder", es: "Solo Miembros Studio" },
  "comm.slLockedDesc": { en: "Upgrade to Studio to access WIP reviews, mentorship, and exclusive discussions.", tr: "WIP incelemeleri, mentorluk ve özel tartışmalara erişmek için Studio'ya yükseltin.", de: "Upgrade auf Studio für WIP-Reviews, Mentoring und exklusive Diskussionen.", es: "Actualiza a Studio para acceder a revisiones WIP, mentoría y discusiones exclusivas." },
  "comm.slUpgrade": { en: "Upgrade to Studio →", tr: "Studio'ya Yükselt →", de: "Auf Studio upgraden →", es: "Actualizar a Studio →" },
  "comm.slWip": { en: "WIP Wall", tr: "WIP Duvarı", de: "WIP-Wand", es: "Muro WIP" },
  "comm.slWipDesc": { en: "Share works in progress and get detailed feedback.", tr: "Devam eden çalışmalarınızı paylaşın ve detaylı geri bildirim alın.", de: "Teile laufende Arbeiten und erhalte detailliertes Feedback.", es: "Comparte trabajos en progreso y recibe feedback detallado." },
  "comm.slDeepDive": { en: "Deep Dive", tr: "Derinlemesine", de: "Deep Dive", es: "Análisis Profundo" },
  "comm.slDeepDiveDesc": { en: "Extended technical discussions on production topics.", tr: "Prodüksiyon konularında uzun teknik tartışmalar.", de: "Ausführliche technische Diskussionen zu Produktionsthemen.", es: "Discusiones técnicas extendidas sobre producción." },
  "comm.slMentor": { en: "Mentor Board", tr: "Mentor Panosu", de: "Mentor-Board", es: "Panel de Mentores" },
  "comm.slMentorDesc": { en: "Connect with experienced producers for guidance.", tr: "Rehberlik için deneyimli prodüktörlerle bağlantı kurun.", de: "Verbinde dich mit erfahrenen Produzenten.", es: "Conéctate con productores experimentados." },
  "comm.slRoundtable": { en: "Roundtable", tr: "Yuvarlak Masa", de: "Roundtable", es: "Mesa Redonda" },
  "comm.slRoundtableDesc": { en: "Live group discussions on trending topics.", tr: "Trend konularda canlı grup tartışmaları.", de: "Live-Gruppendiskussionen zu Trendthemen.", es: "Discusiones grupales en vivo sobre temas tendencia." },
  "comm.slOnline": { en: "online", tr: "çevrimiçi", de: "online", es: "en línea" },

  "comm.trendPosts": { en: "posts", tr: "gönderi", de: "Beiträge", es: "publicaciones" },
};

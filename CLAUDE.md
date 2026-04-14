# PRODLY - AI Music Production Assistant

## Proje
Platform: prodly.app
Repo: github.com/efnansahbazs-hue/ethereal-theme-maker (private)
Lokal: C:\Users\nznsh\ethereal-theme-maker
Admin: efnansahbazs@gmail.com

## Stack
React + TypeScript + Tailwind CSS + Vite
Supabase (PostgreSQL + Auth + Edge Functions)
Vercel (deploy - main push'ta otomatik)
AI: Anthropic Claude API (ANTHROPIC_API_KEY)
Model routing: claude-haiku-4-5-20251001 (basit) / claude-sonnet-4-6 (karmaşık)
OpenAI KULLANILMIYOR.
Three.js CDN (window.THREE - npm'den KURMA!)

## Renk Sistemi (DEGISTIRME)
Accent:     #00C8FF  (PLASMA mavi)
Secondary:  #7B61FF
Background: #050505
Card:       #0d0d0d
Elevated:   #111111
Border:     #1a1a1a
Text:       #F0F0F0
Muted:      #888888

## YASAK RENKLER
violet, purple, #7C3AED ve tum varyantlari - SILINDI

## Workflow Kurallari
- Her oturumda /clear ile basla
- Edge Function'larda Deno.serve() kullan (serve() degil)
- Three.js CDN'den - index.html'de script tag ile
- npm run build -> hata yoksa git push
- Build kiriksa ASLA push etme
- 150 satirdan uzun component'lari bol
- UI ile logic'i ayir (hooks ayri, component ayri)

## Planlar
Free:    $0     | 5  soru/gun | claude-haiku-4-5-20251001              | 400 token
Premium: $15/ay | 20 soru/gun | haiku + %10 claude-sonnet-4-6         | 800 token
Studio:  $29/ay | 35 soru/gun | haiku + %25 claude-sonnet-4-6         | 1500 token

## AI Persona
Sen Prodly'sin. Studio arkadasi, ogretmen degil.
Jargon kullanirsin ama aciklarsın. Yargilamazsin.
"Harika soru" demezsin. Bazen "klasik hata bu" dersin.
Cevaplarin kisa ve aksiyona yonelik.
Gece 3'te studyodaysa sen de oradasin.

## Supabase Tablolari
- profiles       -> kullanici profili (plan, exp, daw, referral_code)
- user_usage     -> gunluk soru sayaci
- archive        -> tum Q&A gecmisi
- cached_answers -> AI cache
- exp_log        -> EXP kazanim kaydi
- referrals      -> davet sistemi
- promo_codes    -> indirim kodlari
- projects       -> kullanici projeleri

## Sprint Sirasi
Sprint 0: Renk sistemi (#7C3AED -> #00C8FF) - TAMAMLANDI
Sprint 1: Supabase Auth (login/logout/register)
Sprint 2: Supabase tablolari
Sprint 3: Anthropic Claude entegrasyonu + maliyet optimizasyonu
Sprint 4: Admin paneli
Sprint 5: Stripe odeme
Sprint 6: Animasyon (Three.js)
Sprint 7: Test + deploy

---

## GUVENLIK KURALLARI (ZORUNLU)

### Genel
- Tum kullanici inputlari guvensiz kabul et, her zaman validate et
- Hicbir zaman stack trace veya hata detayini kullaniciya gosterme
- Console.log'a token, sifre, API key yazma
- String interpolation ile SQL yazma - her zaman parametreli sorgu kullan
- Dosya yukleme varsa tur ve boyut kontrolu yap

### Supabase Guvenlik
- Her tabloda RLS (Row Level Security) ZORUNLU
- Service role key sadece backend/Edge Function'da kullanilir, frontend'e YAZMA
- auth.uid() ile her zaman kullanici kendi verisine erissin
- SELECT, INSERT, UPDATE, DELETE icin ayri policy yaz
- Admin islemleri icin ayri service role kontrolu yap

### JWT & Auth
- Token suresi: 15 dakika (kisa tut)
- Refresh token mekanizmasi kullan
- Logout'ta token blacklist + state temizle + "/" redirect
- JWT payload'a sifre veya hassas veri koyma
- Session yoksa protected route'lari /auth/login'e redirect et

### Frontend Guvenlik
- Kullanici girdisini DOM'a direkt yazma (XSS)
- dangerouslySetInnerHTML kullanma
- Harici URL'lere istek atmadan once whitelist kontrolu yap
- API key'leri VITE_ prefix olmadan frontend'e gecirme
- localStorage'a hassas veri yazma

### API Guvenlik
- Her endpoint'te rate limiting uygula (100 istek/dakika)
- Kullanici plan limitini her AI cagrisindan once kontrol et
- Hata mesajlari genel olsun, detay vermesin
- CORS ayarlarini sadece prodly.app'e izin verecek sekilde ayarla

---

## KOD KALITESI KURALLARI (ZORUNLU)

### Component Kurallari
- Max 150 satir - asarsa bol
- Her component tek is yapar
- Props interface'i her zaman tanimla (TypeScript)
- Default export kullan
- Dosya adi = component adi (PascalCase)

### Hook Kurallari
- Business logic hook'larda, UI component'larda degil
- Her hook tek sorumluluk tasir
- useEffect dependency array'i bos birakma
- Cleanup function yaz (memory leak onle)

### Supabase Sorgu Kurallari
- SELECT * yazma, sadece lazim olan kolonlari sec
- Her sorguda LIMIT kullan
- N+1 sorgu yapma, join veya batch kullan
- Multi-tablo islemlerde transaction kullan
- Soft delete: deleted_at kolonu, WHERE deleted_at IS NULL

### Hata Yonetimi
- Bos catch blogu birakma
- Her async islemde try/catch yaz
- Kullaniciya anlasilir hata mesaji goster
- Kritik hatalar icin fallback UI goster
- Network hatalarinda retry mekanizmasi ekle (exponential backoff)

### Performans
- Bagimsiz API cagrilarini paralel yap (Promise.all)
- Liste endpoint'lerinde her zaman sayfalama (pagination) kullan
- Sik sorgulanan kolonlari indexle
- Gereksiz re-render'i onle (useMemo, useCallback)
- Buyuk component'lari lazy load et (React.lazy)

### TypeScript
- any kullanma, dogru tip tanimla
- Interface yerine type kullanabilirsin ama tutarli ol
- Null check yap, optional chaining kullan (?.)
- Enum yerine const object tercih et

### Veritabani Guvenlik
- Para icin DECIMAL kullan (FLOAT degil)
- Timestamp'lerde timezone bilgisi sakla (timestamptz)
- Foreign key constraint her zaman ekle
- Unique constraint gerekli yerlerde kullan
- Migration'lar geri alinabilir olmali

---

## BACKWARD COMPATIBILITY

- API degisikliklerinde versiyonla (v1, v2)
- Veritabani migration'larini sifira kesinti olmadan yap
- Cache key'lerini versiyonla
- Dependency'leri pinle, guvenlik acigi varsa guncelle

---

## RELIABILITY

- Tum disariya cikis noktalarinda timeout ekle
- Retry + exponential backoff + jitter kullan
- Idempotent islemler yaz (ayni islem 2 kez calisirsa sorun cikmasin)
- Health check endpoint'i ekle (/api/health)
- Dead letter queue: basarisiz islemleri kaybet

---

## MONITORING & LOGGING

Loglama zorunlu olan olaylar:
- Kullanici giris/cikis
- AI sorgu yapildi (kullanici, plan, token sayisi)
- Odeme islemi
- Admin eylemi
- Hata (stack trace SADECE log'a, kullaniciya degil)

Log'a YAZILMAYACAKLAR:
- Sifreler
- API key'ler
- JWT token'lar
- Kredi karti bilgileri
- Kisisel veriler (email, isim)

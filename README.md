# AlgoOps - Algoritmalar ve Sistem Tasarımı Öğrenme Platformu

AlgoOps, karmaşık veri yapılarını, algoritmaları ve sistem tasarımı kavramlarını herkes için anlaşılır hale getirmeyi amaçlayan, modern ve etkileşimli bir öğrenme platformudur. 

Bu projenin temel amacı, teknik mülakatlara hazırlanan yazılımcılar veya bilgisayar bilimleri temellerini öğrenmek isteyenler için konuları hem **akademik/profesyonel** derinlikte hem de **basitleştirilmiş (ELI5)** bir dille sunmaktır.

## 🌟 Özellikler

- **🔄 Çift Uzmanlık Alanı**: 
  - **DSA (Data Structures & Algorithms)**: Temel algoritma ve veri yapıları.
  - **System Design & DB**: Veritabanı mimarileri ve sistem tasarımı prensipleri.
  
- **👶 ELI5 (Explain Like I'm 5) Modu**: 
  - Tek bir tıkla karmaşık teknik açıklamaları, 5 yaşındaki bir çocuğun anlayabileceği basit metaforlara dönüştürün.
  
- **🌍 Çoklu Dil Desteği**: 
  - Tamamen Türkçe ve İngilizce içerik desteği. Dilediğiniz dilde öğrenin.

- **🎨 Modern ve Şık Arayüz**: 
  - Göz yormayan karanlık mod uyumlu tasarım.
  - Akıcı geçişler ve mikro animasyonlar.

- **💻 Kod Örnekleri ve Görselleştirme**: 
  - Konu anlatımlarını destekleyen renklendirilmiş kod blokları.

## 🛠️ Kullanılan Teknolojiler

Bu proje, en güncel web teknolojileri kullanılarak geliştirilmiştir:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Dil**: [TypeScript](https://www.typescriptlang.org/)
- **UI Kütüphanesi**: [React 19](https://react.dev/) & [Radix UI](https://www.radix-ui.com/)
- **Stil**: [TailwindCSS v4](https://tailwindcss.com/)
- **Animasyon**: [Framer Motion](https://www.framer.com/motion/)
- **İkonlar**: [Lucide React](https://lucide.dev/)
- **Kod Görünümü**: Shiki / React Syntax Highlighter

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. **Repoyu klonlayın:**
   ```bash
   git clone https://github.com/jxpyter/algo-ops.git
   cd algo-ops
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   # veya
   yarn install
   # veya
   pnpm install
   # veya
   bun install
   ```

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

4. **Uygulamayı görüntüleyin:**
   Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

## 📂 Proje Yapısı

- `app/`: Next.js App Router sayfaları ve layout dosyaları.
  - `algorithms/`: Algoritma konu sayfaları.
  - `data-structures/`: Veri yapıları konu sayfaları.
  - `patterns/`: Tasarım kalıpları.
  - `topics/`: Genel konu listelemeleri.
- `components/`: Tekrar kullanılabilir UI bileşenleri (Button, Card, Input vb.).
- `context/`: Uygulama geneli durum yönetimi (Dil seçimi, Anlatım modu).
- `lib/`: Yardımcı fonksiyonlar ve statik içerik verileri (`content.ts`).
- `public/`: Statik görseller ve dosyalar.

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Bir hata bulursanız veya yeni bir özellik eklemek isterseniz, lütfen bir "issue" açın veya "pull request" gönderin.

1. Bu projeyi forklayın.
2. Yeni bir özellik dalı (branch) oluşturun (`git checkout -b feature/yeni-ozellik`).
3. Değişikliklerinizi commit yapın (`git commit -m 'Yeni özellik eklendi'`).
4. Dalınızı pushlayın (`git push origin feature/yeni-ozellik`).
5. Bir Pull Request oluşturun.

---

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.

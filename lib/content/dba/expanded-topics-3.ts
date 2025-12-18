import { ContentItem } from "../types";

export const dbaExpandedContentPart3: ContentItem[] = [
  // --- 7. CLOUD & DEVOPS ---
  {
    id: "dba-cloud-rds",
    title: { en: "Cloud Databases (Managed)", tr: "Bulut Veritabanları (Yönetilen)" },
    category: "System Design",
    domain: "DBA",
    summary: { en: "RDS vs Self-Hosted.", tr: "RDS vs Kendi Sunucun." },
    descriptionStandard: {
      en: "Choosing between Managed Services (AWS RDS, Google Cloud SQL) versus Self-Hosted on EC2/VMs. Trade-off: Control vs Convenience.",
      tr: "Yönetilen Servisler (AWS RDS, Cloud SQL) ile Kendi Sunucunda Barındırma (EC2) arasındaki seçim. Takas: Kontrol vs Kolaylık."
    },
    descriptionELI5: {
      en: "Taxi vs Owning a Car. Taxi (Managed) is easy, you don't fix the engine, but you can't paint it pink. Owning (Self-Hosted) gives you full control, but you have to change the oil yourself.",
      tr: "Taksi vs Araba Sahibi Olmak. Taksi (Yönetilen) kolaydır, motoru tamir etmezsin ama arabayı pembeye boyayamazsın. Sahibi olmak (Self-Hosted) tam kontrol verir ama yağını sen değiştirirsin."
    },
    contentMarkdown: {
      en: `### 1. Managed Services (PaaS)
Services like AWS RDS, Google Cloud SQL, Azure SQL, MongoDB Atlas.
- **The Deal**: You pay ~30-50% more money. They handle the "boring stuff".
- **What you get**:
  - **Automated Backups**: Point-in-time recovery (e.g., "Restore to 14:03 PM yesterday").
  - **Patching**: OS and DB updates applied automatically.
  - **High Availability**: Multi-AZ deployments (if one data center burns, they switch to another automatically).
  - **Scaling**: Click a button to get 2x CPU.

### 2. Self-Hosted (IaaS)
Running Postgres/MySQL on a raw EC2 instance or DigitalOcean Droplet.
- **The Deal**: You save money. You are the boss.
- **The Risks**:
  - IF disk fills up, YOU must wake up at 3 AM.
  - IF a hacker finds an OS vulnerability, YOU are responsible.
  - IF you forget to backup, data is GONE.

### 3. Serverless Databases (Aurora Serverless, Neon)
- **Concept**: Scales to 0 when not used. Scales to infinity during traffic spikes.
- **Use Case**: Dev environments, unpredictable workloads (Flash Sales).
- **Cost**: Pay per second. Can be cheaper or WAY more expensive depending on usage patterns.`,
      tr: `### 1. Yönetilen Servisler (PaaS)
AWS RDS, Google Cloud SQL, Azure SQL, MongoDB Atlas gibi servisler.
- **Anlaşma**: %30-50 daha fazla para ödersiniz. Onlar "sıkıcı işleri" halleder.
- **Ne alırsınız**:
  - **Otomatik Yedekleme**: Zamanda belirli bir noktaya dönüş (örn: "Dün 14:03'e geri dön").
  - **Yamalar**: İşletim sistemi ve DB güncellemeleri otomatik yapılır.
  - **Yüksek Erişilebilirlik (HA)**: Multi-AZ kurulum (bir veri merkezi yanarsa, diğerine otomatik geçerler).
  - **Ölçekleme**: Tek tıkla 2 kat CPU alırsınız.

### 2. Kendi Sunucun (Self-Hosted / IaaS)
Ham bir EC2 veya DigitalOcean Droplet üzerinde Postgres/MySQL çalıştırmak.
- **Anlaşma**: Para biriktirirsiniz. Patron sizsiniz.
- **Riskler**:
  - Disk dolarsa, gece 3'te siz uyanmak zorundasınız.
  - İşletim sisteminde açık varsa, sorumlusu sizsiniz.
  - Yedek almayı unutursanız, veri GİDER.

### 3. Sunucusuz (Serverless) Veritabanları (Aurora Serverless, Neon)
- **Konsept**: Kullanılmadığında 0'a iner (uyur). Trafik patlamasında sonsuza kadar ölçeklenir.
- **Kullanım**: Geliştirme ortamları, tahmin edilemez yükler (Flash indirimler).
- **Maliyet**: Saniye başı ödeme. Kullanım desenine göre çok ucuz veya ÇOK daha pahalı olabilir.`
    },
    codeSnippet: `# AWS CLI to create RDS
aws rds create-db-instance --db-instance-identifier mydb --engine postgres

# Typical "Free Tier" limit:
# 750 Hours (1 Month) of db.t3.micro`,
    complexity: { time: "Setup Time", space: "Cost" },
    questions: [], realWorldUses: [], pros: [], cons: []
  },
  {
    id: "dba-messaging-cdc",
    title: { en: "Messaging, Outbox & CDC", tr: "Mesajlaşma, Outbox & CDC" },
    category: "System Design",
    domain: "DBA",
    summary: { en: "Reliable Event Publishing.", tr: "Güvenilir Olay Yayınlama." },
    descriptionStandard: {
      en: "Using Message Queues (Kafka, RabbitMQ) for async processing. Change Data Capture (CDC) and the 'Outbox Pattern' ensure database updates and events happen atomically.",
      tr: "Asenkron işlemler için Mesaj Kuyrukları (Kafka, RabbitMQ) kullanmak. Change Data Capture (CDC) ve 'Outbox Deseni', veritabanı güncellemesi ile olay bildiriminin atomik olmasını sağlar."
    },
    descriptionELI5: {
      en: "The Dual Write Problem. If you save the Order but fail to send the Email, the user is confused. Outbox Pattern is writing 'Send Email' on a post-it note inside the Order folder. The mailman picks it up later.",
      tr: "Çifte Yazma Sorunu. Siparişi kaydedip E-postayı gönderemezsen sorun çıkar. Outbox Deseni, Sipariş dosyasına 'E-posta Gönder' notunu iliştirmektir. Postacı sonra gelip o notu alır ve işler."
    },
    contentMarkdown: {
      en: `### The Dual Write Problem
\`await db.saveOrder(order);\ await kafka.send(event);\`
- **Failure 1**: DB fails. Kafka doesn't run. OK.
- **Failure 2**: DB succeeds. Kafka fails. **CRITICAL**.
  - We have an order, but Shipping Service was never notified. The user paid but gets nothing.

### Solution 1: 2PC (Two Phase Commit)
- **Mechanism**: Distributed transaction manager locks both DB and Kafka.
- **Verdict**: Slow, brittle, rarely supported by modern queues. Avoid.

### Solution 2: Transactional Outbox (Recommended)
1.  **Transaction Start** (BEGIN).
2.  **Insert Order**: \`INSERT INTO orders ...\`
3.  **Insert Outbox**: \`INSERT INTO outbox (payload) VALUES ('OrderCreated')\`
4.  **Transaction Commit** (COMMIT).
- *Result*: Either both happen, or neither. Atomicity guaranteed by SQL DB.

### Solution 3: CDC (Change Data Capture)
- Tools like **Debezium** connect to the Database's **Write Ahead Log (WAL)**.
- They watch strictly for committed changes and stream them to Kafka.
- It turns your Database into an Event Source.`,
      tr: `### Çifte Yazma (Dual Write) Sorunu
\`await db.saveOrder(order);\ await kafka.send(event);\`
- **Hata 1**: DB patlar. Kafka çalışmaz. Sorun yok.
- **Hata 2**: DB başarılı olur. Kafka patlar. **KRİTİK**.
  - Sipariş var ama Kargo Servisine haber gitmedi. Kullanıcı ödedi ama ürün gelmiyor.

### Çözüm 1: 2PC (Two Phase Commit)
- **Mekanizma**: Dağıtık işlem yöneticisi hem DB'yi hem Kafka'yı kilitler.
- **Karar**: Yavaş, kırılgan, modern kuyruklar pek desteklemez. Kaçının.

### Çözüm 2: Transactional Outbox (Önerilen)
1.  **İşlem Başlat** (BEGIN).
2.  **Sipariş Ekle**: \`INSERT INTO orders ...\`
3.  **Outbox Ekle**: \`INSERT INTO outbox (payload) VALUES ('OrderCreated')\`
4.  **İşlem Onayla** (COMMIT).
- *Sonuç*: Ya ikisi de olur, ya hiçbiri. Atomiklik SQL DB tarafından garanti edilir.

### Çözüm 3: CDC (Change Data Capture)
- **Debezium** gibi araçlar Veritabanının **Write Ahead Log (WAL)** dosyasına bağlanır.
- Sadece commitlenmiş değişiklikleri izler ve Kafka'ya akıtır.
- Veritabanınızı bir Olay Kaynağına dönüştürür.`
    },
    codeSnippet: `BEGIN;
INSERT INTO orders (id, item) VALUES (1, 'Phone');
-- The event is data!
INSERT INTO outbox (topic, payload) VALUES ('order_created', '{ "id": 1 }');
COMMIT;

// A separate "Poller" process:
// SELECT * FROM outbox WHERE processed = false;`,
    complexity: { time: "Async Delay", space: "Queue Storage" },
    questions: [], realWorldUses: [], pros: [], cons: []
  },
  {
    id: "dba-ci-cd-db",
    title: { en: "CI/CD & Zero Downtime Migrations", tr: "CI/CD & Kesintisiz Göçler" },
    category: "System Design",
    domain: "DBA",
    summary: { en: "Deploying DB changes safely.", tr: "DB değişikliklerini güvenle yayınlamak." },
    descriptionStandard: {
      en: "How to deploy database changes without stopping the app. The 'Expand and Contract' pattern for schema migrations. Automating DB changes in CI pipelines.",
      tr: "Uygulamayı durdurmadan veritabanı değişikliği nasıl yapılır? Şema göçleri için 'Genişlet ve Daralt' (Expand and Contract) deseni. DB değişikliklerini CI hatlarında otomatize etmek."
    },
    descriptionELI5: {
      en: "Changing a tire while the car is moving. You attach a 5th wheel, start using it, and only then remove the old wheel.",
      tr: "Araba giderken lastik değiştirmek. Önce 5. tekerleği takarsın, kullanmaya başlarsın, her şey yolundaysa eski tekerleği çıkarırsın."
    },
    contentMarkdown: {
      en: `### The Rule: Backwards Compatibility
Your application code v2 must work with DB Schema v1. Why?
- Because deployment is not instant. For a few minutes, v1 and v2 pods run together.

### The "Rename Column" Pattern (Expand & Contract)
You want to rename \`users.address\` to \`users.billing_address\`.
1.  **Step 1 (Migration 1)**: Add \`billing_address\` column (nullable).
    - *State*: DB has both. App v1 writes to old.
2.  **Step 2 (Code Deploy)**: Deploy App v1.1 that writes to BOTH columns.
    - *State*: DB syncing.
3.  **Step 3 (Data script)**: Copy old data to new column (\`UPDATE users SET billing_address = address WHERE ...\`).
4.  **Step 4 (Code Deploy)**: Deploy App v2 that reads/writes ONLY new column.
5.  **Step 5 (Migration 2)**: Drop \`address\` column.
    - *State*: Clean.
*Takes 3-5 deployments. Slow but ZERO downtime.*

### CI/CD Checks
- **Migration Linting**: Tool checks "Are you adding a NOT NULL column without a default value?". (Fails build).
- **Lock Check**: Will this migration lock the table for 1 hour?`,
      tr: `### Kural: Geriye Dönük Uyumluluk
Uygulama kodu v2, DB Şeması v1 ile çalışabilmelidir. Neden?
- Çünkü dağıtım (deployment) anlık değildir. Birkaç dakika boyunca v1 ve v2 podları aynı anda çalışır.

### "Kolon İsmi Değiştirme" Deseni (Genişlet & Daralt)
\`users.address\` kolonunu \`users.billing_address\` yapmak istiyorsunuz.
1.  **Adım 1 (Migration 1)**: \`billing_address\` kolonu ekle (boş olabilir).
2.  **Adım 2 (Kod Dağıtımı)**: HEM eskiye HEM yeniye yazan App v1.1'i dağıt.
3.  **Adım 3 (Veri Scripti)**: Eski veriyi yeniye kopyala.
4.  **Adım 4 (Kod Dağıtımı)**: SADECE yeniyi okuyan/yazan App v2'yi dağıt.
5.  **Adım 5 (Migration 2)**: Eski \`address\` kolonunu sil.
*Bu işlem 3-5 dağıtım sürer. Yavaştır ama SIFIR kesinti olur.*

### CI/CD Kontrolleri
- **Migration Linting**: "Varsayılan değeri olmayan NOT NULL kolon mu ekliyorsun?" kontrolü (Build patlatır).
- **Kilit Kontrolü**: "Bu işlem tabloyu 1 saat kilitler mi?"`
    },
    codeSnippet: `ALTER TABLE users ADD COLUMN address_v2 TEXT;
-- Code v1.1:
-- user.address_v2 = user.address_v1; (Dual Write)

-- Data Backfill:
UPDATE users SET address_v2 = address_v1 WHERE address_v2 IS NULL;

ALTER TABLE users DROP COLUMN address_v1;`,
    complexity: { time: "High Effort", space: "Temp Columns" },
    questions: [], realWorldUses: [], pros: [], cons: []
  },
  {
    id: "dba-perf-vs-scale",
    title: { en: "Performance vs Scalability", tr: "Performans vs Ölçeklenebilirlik" },
    category: "System Design",
    domain: "DBA",
    summary: { en: "Speed vs Capacity.", tr: "Hız vs Kapasite." },
    descriptionStandard: {
      en: "They are different. Performance is 'How fast for one user?'. Scalability is 'Can we handle 10,000 users without crashing?'. A system can be performant but not scalable, or scalable but slow.",
      tr: "Farklı kavramlardır. Performans 'Biri için ne kadar hızlı?', Ölçeklenebilirlik '10.000 kişi gelirse sistem çöker mi?'. Sistem hızlı olabilir ama ölçeklenemeyebilir, veya yavaş olabilir ama ölçeklenebilir."
    },
    descriptionELI5: {
      en: "Ferrari vs Train. Ferrari is performant (FAST). Train is scalable (Carries 1000 people). If you need to move 1000 people, the slow Train beats 500 Ferraris. A traffic jam is a scalability issue.",
      tr: "Ferrari vs Tren. Ferrari performanslıdır (HIZLI). Tren ölçeklenebilir (1000 kişi taşır). 1000 kişiyi taşıman gerekirse, yavaş Tren, 500 Ferrari'den daha iyidir. Trafik sıkışıklığı bir ölçeklenebilirlik sorunudur."
    },
    contentMarkdown: {
      en: `### Performance (Speed)
- **Definition**: Time to process a single unit of work.
- **Metric**: **Latency** (Milliseconds).
- **Ways to Improve**:
  - Better Algorithms (O(N) instead of O(N^2)).
  - Indexing (B-Tree).
  - Caching (Redis).
  - Faster Hardware (SSD vs HDD).

### Scalability (Growth)
- **Definition**: Ability to handle increased load by adding resources.
- **Metric**: **Throughput** (RPS - Requests Per Second).
- **Ways to Improve**:
  - **Horizontal Scaling**: Add more weak servers. (Stateless Web Servers).
  - **Sharding**: Split DB into pieces.
  - **Asynchronous Processing**: Queue tasks heavily.

### The Conflict
- Adding a Load Balancer *improves* Scalability (handles more users) but *hurts* Performance (adds +5ms hop).
- Normalizing DB *improves* Write Performance but *hurts* Read Scalability (complex joins).`,
      tr: `### Performans (Hız)
- **Tanım**: Tek bir iş birimini tamamlama süresi.
- **Ölçüt**: **Gecikme** (Milisaniye).
- **İyileştirme Yolları**:
  - Daha İyi Algoritmalar (O(N^2) yerine O(N)).
  - İndeksleme (B-Tree).
  - Önbellek (Redis).
  - Hızlı Donanım (SSD vs HDD).

### Ölçeklenebilirlik (Büyüme)
- **Tanım**: Kaynak ekleyerek artan yükü kaldırma yeteneği.
- **Ölçüt**: **Veri Akışı** (RPS - Saniyedeki İstek).
- **İyileştirme Yolları**:
  - **Yatay Ölçekleme**: Daha fazla (zayıf) sunucu ekle.
  - **Sharding**: Veritabanını parçalara böl.
  - **Asenkron İşlem**: İşleri kuyruğa at.

### Çatışma
- Yük Dengeleyici (Load Balancer) eklemek Ölçeklenebilirliği *artırır* ama Performansı *düşürür* (ekstra +5ms yol).
- DB Normalizasyonu Yazma Performansını *artırır* ama Okuma Ölçeklenebilirliğini *düşürür* (karmaşık joinler).`
    },
    codeSnippet: `// Performance Tuning:
// Using a Hash Map for O(1) lookup
const user = usersMap.get(id);

// Scalability Tuning:
// Using RabbitMQ to buffer 10,000 requests/sec
await queue.sendToQueue('video_processing', data);
// Workers process them one by one.`,
    complexity: { time: "Latency", space: "Throughput" },
    questions: [], realWorldUses: [], pros: [], cons: []
  },
  {
    id: "dba-cdn",
    title: { en: "CDN & Edge Computing", tr: "CDN & Uç Nokta Bilişimi" },
    category: "System Design",
    domain: "DBA",
    summary: { en: "Serving content fast globally.", tr: "İçeriği küresel olarak hızlı sunmak." },
    descriptionStandard: {
      en: "Content Delivery Network. A network of servers distributed globally to cache static content near the user. Modern CDNs also run code (Edge Functions).",
      tr: "İçerik Dağıtım Ağı. Statik içeriği kullanıcıya yakın önbelleklemek için küresel olarak dağıtılmış sunucular ağı. Modern CDN'ler kod da çalıştırır (Edge Functions)."
    },
    descriptionELI5: {
      en: "Pizza Delivery chains. If the pizza has to come from Italy every time you order, it will be cold and take 10 hours. Domino's opens a branch in your neighborhood so you get pizza fast. The recipe comes from Italy (Origin), but the pizza is baked near you (Edge).",
      tr: "Pizza zincirleri. Pizza sipariş ettiğinde her seferinde İtalya'dan gelse, soğuk olur ve 10 saat sürer. Domino's mahallede şube açar ki pizza sıcak ve hızlı gelsin. Tarif İtalya'dan (Origin) gelir ama pizza sana yakın pişirilir (Edge)."
    },
    contentMarkdown: {
      en: `### How it works
1.  **Origin Server**: Your AWS/DigitalOcean server. Contains the truth.
2.  **Edge Server**: Cloudflare/Akamai server in Istanbul, London, NY.
3.  **Flow**:
    - User asks for \`logo.png\`.
    - DNS resolves to Istanbul Edge.
    - If Istanbul has it -> Return (5ms).
    - If not -> Fetch from Origin (200ms) -> Save to Istanbul -> Return.

### Modern CDN: Edge Functions
- Running logic on the Edge (Lambda@Edge, Vercel Middleware).
- *Example*: \`if (user.country === 'TR') redirect('/tr')\`.
- Happens instantly near the user, sparing your main server.

### Cache Hitting/Missing
- **Hit Ratio**: % of requests served by CDN. (Goal > 90%).
- **Purging**: When you update \`logo.png\`, you must tell CDN to "forget" the old one.`,
      tr: `### Nasıl Çalışır?
1.  **Origin (Kaynak) Sunucu**: Sizin AWS sunucunuz. Ana veriyi tutar.
2.  **Edge (Uç) Sunucu**: İstanbul, Londra, NY'daki Cloudflare sunucusu.
3.  **Akış**:
    - Kullanıcı \`logo.png\` ister.
    - DNS İstanbul sunucusuna yönlendirir.
    - İstanbul'da varsa -> Döner (5ms).
    - Yoksa -> Kaynaktan çeker (200ms) -> İstanbul'a kaydeder -> Döner.

### Modern CDN: Edge Functions
- Uç noktada kod çalıştırmak (Middleware).
- *Örnek*: \`if (ülke === 'TR') yönlendir('/tr')\`.
- Kullanıcının dibinde anında gerçekleşir, ana sunucuyu meşgul etmez.

### Cache Hit/Miss
- **Hit Oranı**: CDN tarafından karşılanan istek yüzdesi. (Hedef > %90).
- **Purging (Temizleme)**: \`logo.png\` güncellenirse, CDN'e eskiyi "unutması" söylenmelidir.`
    },
    codeSnippet: `// Vercel Edge Middleware Example
export function middleware(request: Request) {
  const country = request.geo?.country || 'US';
  
  if (country === 'BLOCKED_COUNTRY') {
    return new Response('Blocked', { status: 403 });
  }
}`,
    complexity: { time: "Light Speed", space: "Global" },
    questions: [], realWorldUses: [], pros: [], cons: []
  }
];

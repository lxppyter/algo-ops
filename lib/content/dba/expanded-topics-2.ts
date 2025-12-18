import { ContentItem } from "../types";

export const dbaExpandedContentPart2: ContentItem[] = [
  // --- 5. CODE & PATTERNS ---
  {
    id: "dba-solid-orm",
    title: { en: "SOLID & ORM Best Practices", tr: "SOLID & ORM İyi Uygulamalar" },
    category: "Database Concept",
    domain: "DBA",
    summary: { en: "SRP in DB, N+1 Problem.", tr: "DB'de SRP, N+1 Problemi." },
    descriptionStandard: {
      en: "Applying software principles to databases. Understanding ORM trade-offs (Lazy loading vs Eager loading) and the 'N+1 Query Problem' which kills performance.",
      tr: "Yazılım prensiplerini veritabanına uygulamak. ORM takaslarını (Lazy vs Eager loading) ve performansı öldüren 'N+1 Sorgu Problemi'ni anlamak."
    },
    descriptionELI5: {
      en: "Ordering pizza for 10 friends. N+1 is calling the pizzeria 10 times, once for each slice. Efficient way (Eager Loading) is calling once and ordering 10 pizzas.",
      tr: "10 arkadaşa pizza söylemek. N+1, pizzacıyı 10 kere arayıp her seferinde 1 dilim istemektir. Doğrusu (Eager Loading) tek seferde arayıp 10 pizza söylemektir."
    },
    contentMarkdown: {
      en: `### 1. The N+1 Query Problem
This is the #1 silent killer of application performance.
- **Scenario**: You display a list of 50 users and want to show their "Last Order".
- **Bad Implementation (Lazy Loading)**:
  1. \`SELECT * FROM users\` (1 query).
  2. Loop through 50 users. For each user: \`SELECT * FROM orders WHERE user_id = ?\` (50 queries).
  3. Total: 51 Queries.
- **Good Implementation (Eager Loading)**:
  1. \`SELECT * FROM users\` (1 query).
  2. Collect all User IDs: \`[1, 2, 3..50]\`.
  3. \`SELECT * FROM orders WHERE user_id IN (1, 2...50)\` (1 query).
  4. Total: 2 Queries. Speedup: 25x.

### 2. ORM Trade-offs (Hibernate, Entity Framework, Prisma)
- **Advantages**:
  - **Productivity**: No boilerplate JDBC/SQL code.
  - **Type Safety**: Compiler catches errors.
  - **Database Agnostic**: Switch from MySQL to Postgres (theoretically).
- **Disadvantages**:
  - **Complex Queries**: Generating a report with 5 JOINs and subqueries is hard in ORM.
  - **Performance Hiding**: Developers forget that \`user.orders\` triggers a network call.

### 3. Repository Pattern
Do not write SQL inside your Controller or UI.
- **Why?**: Separation of Concerns.
- **Pattern**: Create an Interface \`IUserRepository\`. Implement it with \`SqlUserRepository\`.
- **Testing**: In Unit Tests, use \`MockUserRepository\` (InMemory) instead of a real database.`,
      tr: `### 1. N+1 Sorgu Problemi (N+1 Query Problem)
Uygulama performansının 1 numaralı sessiz katilidir.
- **Senaryo**: 50 kullanıcıyı listeliyorsunuz ve her birinin "Son Siparişini" göstermek istiyorsunuz.
- **Kötü Uygulama (Lazy Loading)**:
  1. \`SELECT * FROM users\` (1 sorgu).
  2. 50 kullanıcı için döngüye gir. Her biri için: \`SELECT * FROM orders WHERE user_id = ?\` (50 sorgu).
  3. Toplam: 51 Sorgu.
- **İyi Uygulama (Eager Loading)**:
  1. \`SELECT * FROM users\` (1 sorgu).
  2. Tüm Kullanıcı ID'lerini topla: \`[1, 2, 3..50]\`.
  3. \`SELECT * FROM orders WHERE user_id IN (1, 2...50)\` (1 sorgu).
  4. Toplam: 2 Sorgu. Hızlanma: 25x.

### 2. ORM Takasları (Hibernate, Entity Framework, Prisma)
- **Avantajlar**:
  - **Üretkenlik**: Gereksiz JDBC/SQL kodu yazmazsınız.
  - **Tip Güvenliği**: Derleyici hataları yakalar.
  - **Veritabanı Bağımsızlığı**: Teoride MySQL'den Postgres'e geçiş kolaydır.
- **Dezavantajlar**:
  - **Karmaşık Sorgular**: 5 JOIN ve alt sorgu içeren bir raporu ORM ile yazmak zordur.
  - **Performansı Gizleme**: Geliştiriciler \`user.orders\` kodunun bir ağ çağrısı yaptığını unutur.

### 3. Repository Deseni
Controller veya UI katmanında asla SQL yazmayın.
- **Neden?**: İlgi Alanlarının Ayrımı (Separation of Concerns).
- **Desen**: \`IUserRepository\` arayüzü oluşturun. Bunu \`SqlUserRepository\` ile implemente edin.
- **Test**: Unit Testlerde gerçek veritabanı yerine \`MockUserRepository\` (Bellek İçi) kullanın.`
    },
    codeSnippet: `// BAD: N+1
const posts = await db.posts.findMany();
for (const post of posts) {
  const author = await db.users.findUnique({ id: post.authorId }); // AWAIT in LOOP!
  console.log(author.name);
}

// GOOD: Eager Loading (Prisma Example)
const posts = await db.posts.findMany({
  include: { author: true } // JOIN underneath
});`,
    complexity: { time: "O(N) Queries", space: "Abstraction" },
    questions: [], realWorldUses: [], pros: [], cons: []
  },
  {
    id: "dba-ddd",
    title: { en: "DDD & Bounded Contexts", tr: "DDD & Sınırlanmış Bağlamlar" },
    category: "System Design",
    domain: "DBA",
    summary: { en: "Aligning DB with Domains.", tr: "DB'yi Domain ile hizalama." },
    descriptionStandard: {
      en: "Domain-Driven Design. Deciding whether to share a database or split it based on 'Bounded Contexts'. Understanding that 'User' in Sales context is different from 'User' in Support context.",
      tr: "Domain-Driven Design (Alan Yönelimli Tasarım). 'Sınırlanmış Bağlamlara' (Bounded Context) göre veritabanını ayırma veya paylaşma kararı. Satış'taki 'Kullanıcı' ile Destek'teki 'Kullanıcı'nın farklı olduğunu anlamak."
    },
    descriptionELI5: {
      en: "In the Kitchen context, 'Tomato' is an ingredient. In the Garden context, 'Tomato' is a plant. They are the same object but treated differently. You don't store plant fertilizer info in the chef's recipe book.",
      tr: "Mutfak bağlamında 'Domates' bir malzemedir. Bahçe bağlamında 'Domates' bir bitkidir. Aynı nesne olsalar da farklı muamele görürler. Bahçıvanın gübre notlarını şefin yemek kitabına yazmazsın."
    },
    contentMarkdown: {
      en: `### The Problem with "One Big Model"
In a Monolith, we tend to have a \`User\` class with 50 fields.
- 10 fields for Auth (password, salt...)
- 10 fields for Shipping (address, zip...)
- 10 fields for Marketing (newsletter_optin...)
This creates high coupling. If Marketing needs to change a field, they might break the Shipping code.

### Bounded Context (Sınırlanmış Bağlam)
DDD says: Don't share models.
- **Sales Context**: Has a \`Customer\` entity with { CreditLimit }.
- **Shipping Context**: Has a \`Recipient\` entity with { Address }.
- **Auth Context**: Has a \`User\` entity with { Password }.
These are stored in separate tables (or databases in microservices) and linked by \`ID\`.

### Context Mapping
How do they talk?
- **Shared Kernel**: Risky. Sharing a library/JAR.
- **Customer/Supplier**: One team provides an API for the other.
- **Anti-Corruption Layer (ACL)**: A wrapper that translates the external model to your internal model so you don't get polluted.`,
      tr: `### "Tek Büyük Model" Sorunu
Monolitik yapılarda, 50 alanı olan bir \`User\` (Kullanıcı) sınıfımız olma eğilimi vardır.
- 10 alan Kimlik Doğrulama için (şifre, tuz...)
- 10 alan Kargo için (adres, posta kodu...)
- 10 alan Pazarlama için (bülten izni...)
Bu, yüksek bağımlılık (coupling) yaratır. Pazarlama ekibi bir alanı değiştirirse, Kargo kodunu bozabilirler.

### Bounded Context (Sınırlanmış Bağlam)
DDD der ki: Modelleri paylaşmayın.
- **Satış Bağlamı**: { KrediLimiti } olan bir \`Müşteri\` varlığı kullanır.
- **Kargo Bağlamı**: { Adres } olan bir \`Alıcı\` varlığı kullanır.
- **Kimlik Bağlamı**: { Şifre } olan bir \`Kullanıcı\` varlığı kullanır.
Bunlar ayrı tablolarda (veya mikroservislerde ayrı veritabanlarında) saklanır ve \`ID\` ile bağlanır.

### Bağlam Eşleme (Context Mapping)
Nasıl konuşurlar?
- **Shared Kernel**: Riskli. Ortak kütüphane/JAR paylaşımı.
- **Müşteri/Tedarikçi**: Bir ekip diğeri için API sağlar.
- **Anti-Corruption Layer (ACL)**: Dışarıdan gelen modeli kendi iç modelinize çeviren bir katmandır, böylece kodunuz kirlenmez.`
    },
    codeSnippet: `// Sales Context (Customer)
{ id: 1, name: "Ali", creditLimit: 5000 }

// Shipping Context (Recipient)
{ id: 1, name: "Ali", address: "Istanbul", deliveryInstructions: "Leave at door" }

// Different tables/DBs, linked by ID.`,
    complexity: { time: "Design Time", space: "Decoupled Data" },
    questions: [], realWorldUses: [], pros: [], cons: []
  },
  {
    id: "dba-event-sourcing",
    title: { en: "Event Sourcing", tr: "Event Sourcing (Olay Kaynağı)" },
    category: "System Design",
    domain: "DBA",
    summary: { en: "Store events, not state.", tr: "Durumu değil, olayları kaydet." },
    descriptionStandard: {
      en: "Instead of storing the current state of data (e.g., Balance=100), store the sequence of events that led to it (Deposited 50, Withdrew 20...). State is derived by replaying events.",
      tr: "Verinin son durumunu (Bakiye=100) saklamak yerine, o duruma getiren olaylar zincirini (50 Yatırıldı, 20 Çekildi...) saklamak. Son durum olayların tekrar oynatılmasıyla hesaplanır."
    },
    descriptionELI5: {
      en: "Accounting Ledger. You don't erase the page and write the new total. You add a new line for every transaction. You can always calculate the total by adding up the lines.",
      tr: "Muhasebe Defteri. Sayfayı silip yeni toplamı yazmazsın. Her işlem için yeni bir satır eklersin. Satırları toplayarak her zaman güncel bakiyeyi bulabilirsin."
    },
    contentMarkdown: {
      en: `### The core idea
Traditionally (CRUD): \`UPDATE users SET address = 'New York'\`. The old address is lost forever unless you have logs.
Event Sourcing: \`INSERT INTO events (type, payload) VALUES ('AddressMoved', 'New York')\`.

### Components
1.  **Event Store**: An append-only database. (e.g., EventStoreDB, Kafka, PostgreSQL Table).
2.  **Snapshotting**: Replaying 1 million events is slow. Every 1000 events, save a "Snapshot" of the state (Balance=5000) to speed up loading.
3.  **Projections**: Code that listens to the Event Store and builds simple "Read Tables" (SQL) for fast querying. This is essentially CQRS.

### Benefits
- **Audit Logging**: Free "who did what and when" log.
- **Time Travel**: "Show me what the system state was last Tuesday at 2 PM".
- **Debugging**: Copy Production events to Staging and replay them to reproduce a bug exactly.`,
      tr: `### Temel Fikir
Geleneksel (CRUD): \`UPDATE users SET address = 'New York'\`. Eski adres, loglarınız yoksa sonsuza dek kaybolur.
Event Sourcing: \`INSERT INTO events (type, payload) VALUES ('AddressMoved', 'New York')\`.

### Bileşenler
1.  **Event Store**: Sadece ekleme yapılan (append-only) veritabanı.
2.  **Snapshotting (Anlık Görüntü)**: 1 milyon olayı baştan oynatmak yavaştır. Her 1000 olayda bir durumun özetini (Bakiye=5000) kaydedin.
3.  **Projections (Projeksiyonlar)**: Olay deposunu dinleyen ve hızlı sorgulama için basit "Okuma Tabloları" (SQL) oluşturan kod. Bu aslında CQRS'tir.

### Faydalar
- **Denetim İzi (Audit)**: "Kim ne zaman ne yaptı?" sorusunun bedava cevabı.
- **Zamanda Yolculuk**: "Geçen Salı saat 14:00'te sistemin durumu neydi?" sorusunu cevaplayabilirsiniz.
- **Hata Ayıklama**: Prodüksiyon olaylarını Test ortamına kopyalayıp tekrar oynatarak hatayı birebir tekrarlayabilirsiniz.`
    },
    codeSnippet: `// Instead of: UPDATE accounts SET balance = 100 WHERE id = 1;

// We store:
{ type: "AccountCreated", balance: 0 }
{ type: "Deposited", amount: 150 }
{ type: "Withdrawn", amount: 50 }

// Current Balance = 0 + 150 - 50 = 100`,
    complexity: { time: "Replay Time", space: "Infinite Log" },
    questions: [], realWorldUses: [], pros: [], cons: []
  },

  // --- 6. ADVANCED INFRASTRUCTURE ---
  {
    id: "dba-failover",
    title: { en: "Failover Strategies", tr: "Failover (Hata Toleransı) Stratejileri" },
    category: "System Design",
    domain: "DBA",
    summary: { en: "Active-Active vs Active-Passive.", tr: "Aktif-Aktif vs Aktif-Pasif." },
    descriptionStandard: {
      en: "Methods to keep the system running when a server dies. Active-Passive (Standby waits), Active-Active (Both serve traffic).",
      tr: "Bir sunucu öldüğünde sistemi ayakta tutma yöntemleri. Aktif-Pasif (Yedek bekler), Aktif-Aktif (İkisi de çalışır)."
    },
    descriptionELI5: {
      en: "Spare tire. Active-Passive is keeping a spare tire in the trunk. Active-Active is a truck with 18 wheels; if one pops, the others carry the load seamlessly.",
      tr: "Yedek lastik. Aktif-Pasif, bagajda yedek lastik tutmaktır. Aktif-Aktif, 18 tekerlekli tırdır; biri patlarsa diğerleri yükü taşımaya devam eder."
    },
    contentMarkdown: {
      en: `### 1. Active-Passive (Master-Slave)
- **Mechanism**: All writes go to Master. Master replicates data to Slave asynchronously.
- **Failover**: If Master dies, an automated script (like Pacemaker/Patroni) promotes Slave to be the new Master.
- **Downtime**: 10-60 seconds (Detection + Promotion time).
- **Cost**: Cheap. Slave needs less CPU since it only reads.

### 2. Active-Active (Master-Master)
- **Mechanism**: You have 2+ Masters. You can write to ANY of them. They sync with each other bi-directionally.
- **Complexity**: Conflict Resolution! If User A writes "X" to Node 1, and User B writes "Y" to Node 2 at the same time, what is the final value?
- **Use Case**: Critical global apps (Google Spanner, DynamoDB Global Tables).
- **Cost**: Very expensive. High engineering complexity.

### 3. Split Brain (The Nightmare)
What if the network between Node 1 and Node 2 fails, but both are still online?
- Node 1 thinks "Node 2 is dead, I am Master".
- Node 2 thinks "Node 1 is dead, I am Master".
- Result: **Data Corruption**.
- Solution: **Quorum** (Odd number of nodes, e.g., 3). You need 2 votes to be Master.`,
      tr: `### 1. Aktif-Pasif (Master-Slave)
- **Mekanizma**: Tüm yazmalar Master'a gider. Master, veriyi asenkron olarak Slave'e kopyalar.
- **Failover**: Master ölürse, bir script (Patroni vb.) Slave'i yeni Master yapar.
- **Kesinti**: 10-60 saniye (Algılama + Yükseltme süresi).
- **Maliyet**: Ucuzdur. Slave daha az kaynak tüketebilir.

### 2. Aktif-Aktif (Master-Master)
- **Mekanizma**: 2+ Master vardır. İkisine de yazabilirsiniz. İki yönlü senkronizasyon yaparlar.
- **Karmaşıklık**: Çakışma Çözümü! Kullanıcı A Node 1'e "X" yazar, Kullanıcı B Node 2'ye "Y" yazarsa sonuç ne olur?
- **Kullanım**: Kritik küresel uygulamalar.
- **Maliyet**: Çok pahalı ve zordur.

### 3. Split Brain (Kabus)
Node 1 ve Node 2 arasındaki ağ koparsa ama ikisi de çalışıyorsa ne olur?
- Node 1: "Node 2 öldü, Patron benim."
- Node 2: "Node 1 öldü, Patron benim."
- Sonuç: **Veri Bozulması**.
- Çözüm: **Quorum** (Tek sayı kuralı, örn: 3 sunucu). Lider olmak için 2 oy gerekir.`
    },
    codeSnippet: `// Load Balancer Config (Nginx)
upstream db_cluster {
    server db1.example.com; # Active
    server db2.example.com backup; # Passive
}`,
    complexity: { time: "Switchover Time", space: "Redundant Hardware" },
    questions: [], realWorldUses: [], pros: [], cons: []
  },
  {
    id: "dba-hashing",
    title: { en: "Hashing & Encryption", tr: "Hashing & Şifreleme" },
    category: "System Design",
    domain: "DBA",
    summary: { en: "Hashed Passwords vs Encrypted Data.", tr: "Hashlenmiş Şifreler vs Şifrelenmiş Veri." },
    descriptionStandard: {
      en: "Security essentials for DBAs. Difference between Hashing (One-way) and Encryption (Two-way). Managing keys and protecting PII (Personally Identifiable Information).",
      tr: "DBA'lar için güvenlik temelleri. Hashing (Tek yönlü) ve Şifreleme (Çift yönlü) farkı. Anahtar yönetimi ve PII (Kişisel Veri) koruması."
    },
    descriptionELI5: {
      en: "Hashing is turning a potato into mashed potatoes. It's impossible to turn it back into a potato. Encryption is putting the potato in a locked box. If you have the key, you can open it and get the potato back.",
      tr: "Hashing, patatesi püre yapmaktır. Tekrar bütün patatese dönüştüremezsin. Şifreleme (Encryption) ise patatesi kilitli kutuya koymaktır. Anahtarın varsa kutuyu açıp patatesi alabilirsin."
    },
    contentMarkdown: {
      en: `### 1. Hashing (Passwords)
- **Function**: One-way. Input -> Garbage String. Always distinct.
- **Algorithms**:
    - **MD5/SHA1**: BROKEN. Do not use. Too fast (Billions/sec).
    - **SHA-256**: Good for digital signatures, bad for passwords (too fast).
    - **Bcrypt / Argon2 / PBKDF2**: Designed to be SLOW. "Work Factor" makes it take 100ms to hash. This stops Brute Force attacks.
- **Salt**: Random data added to password before hashing to defeat Rainbow Tables.

### 2. Encryption (Data at Rest)
- **Function**: Two-way. Input + Key -> Ciphertext. Ciphertext + Key -> Input.
- **Use Case**: Storing Credit Card Numbers, Addresses.
- **TDE (Transparent Data Encryption)**: The Database engine encrypts data on disk (HDD) so if someone steals the physical hard drive, they can't read it.

### 3. Encryption (Data in Transit)
- **TLS/SSL**: Encrypts the wire between App and DB. Prevents "Man in the Middle" attacks.`,
      tr: `### 1. Hashing (Şifreler İçin)
- **Fonksiyon**: Tek yönlüdür. Girdi -> Karmaşık Dizi.
- **Algoritmalar**:
    - **MD5/SHA1**: KIRILDI. Kullanmayın. Çok hızlıdır.
    - **SHA-256**: Dijital imza için iyidir, şifre için kötüdür (çok hızlıdır).
    - **Bcrypt / Argon2**: YAVAŞ olması için tasarlanmıştır. "İş Faktörü" ayarlanarak bir işlem 100ms sürer. Kaba kuvveti engeller.
- **Salt**: Hashlemeden önce eklenen rastgele veri. Hazır tabloları bozar.

### 2. Encryption (Duran Veri - At Rest)
- **Fonksiyon**: Çift yönlüdür. Anahtar ile geri çevrilebilir.
- **Kullanım**: Kredi Kartı, Adres saklama.
- **TDE**: Veritabanı motoru diske yazarken veriyi şifreler. Biri fiziksel diski çalsa bile okuyamaz.

### 3. Encryption (Hareket Halindeki Veri - In Transit)
- **TLS/SSL**: Uygulama ile DB arasındaki kabloyu şifreler. Araya girme (Man in the Middle) saldırılarını önler.`
    },
    codeSnippet: `// Python (Bcrypt)
import bcrypt
salt = bcrypt.gensalt()
hashed = bcrypt.hashpw(b"mypassword", salt)
# Check
if bcrypt.checkpw(b"mypassword", hashed):
    print("Login success")`,
    complexity: { time: "CPU Heavy", space: "Security" },
    questions: [], realWorldUses: [], pros: [], cons: []
  },
  {
    id: "dba-tcp-udp",
    title: { en: "TCP vs UDP", tr: "TCP vs UDP" },
    category: "System Design",
    domain: "DBA",
    summary: { en: "Reliability vs Speed.", tr: "Güvenilirlik vs Hız." },
    descriptionStandard: {
      en: "Transmission Control Protocol (Reliable, Ordered, Heavy) vs User Datagram Protocol (Unreliable, Unordered, Fast). DBs use TCP. streaming uses UDP.",
      tr: "TCP (Güvenilir, Sıralı, Ağır) vs UDP (Güvenilmez, Sırasız, Hızlı). Veritabanları TCP kullanır. Yayın (Streaming) UDP kullanır."
    },
    descriptionELI5: {
      en: "TCP is a registered letter: You get a receipt when it arrives. UDP is shouting across a room: You hope they heard you, but you don't wait for confirmation.",
      tr: "TCP iadeli taahhütlü mektuptur: Teslim alındı belgesi gelir. UDP odanın karşısından bağırmaktır: Duyduklarını umarsın ama onay beklemezsin."
    },
    contentMarkdown: {
      en: `### TCP (Connection Oriented)
- Handshake (Syn, Syn-Ack, Ack).
- Retransmits lost packets.
- **Use Case**: Databases, Web (HTTP), Email.

### UDP (Datagram)
- Fire and forget. No handshake.
- **Use Case**: DNS, Video Streaming, Gaming.

### Why DB uses TCP?
- Missing a packet in a video = Glitch.
- Missing a packet in SQL = Corrupted Data.`,
      tr: `### TCP (Bağlantı Odaklı)
- El sıkışma (Handshake) vardır.
- Kayıp paketleri tekrar yollar.
- **Kullanım**: Veritabanları, Web (HTTP), E-posta.

### UDP (Datagram)
- Ateşle ve unut. Onay beklemez.
- **Kullanım**: DNS, Video Yayını, Oyunlar.

### DB neden TCP kullanır?
- Videoda paket kaybı = Görüntü bozulması (önemsiz).
- SQL'de paket kaybı = Veri bozulması (felaket).`
    },
    codeSnippet: `// Node.js TCP
const net = require('net'); // TCP
const dgram = require('dgram'); // UDP`,
    complexity: { time: "Handshake", space: "Stream" },
    questions: [], realWorldUses: [], pros: [], cons: []
  }
];

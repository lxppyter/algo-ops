import { dbaExpandedContent } from "./expanded-topics";
import { dbaExpandedContentPart2 } from "./expanded-topics-2";
import { dbaExpandedContentPart3 } from "./expanded-topics-3";
import { ContentItem } from "../types";

export const dbaContent: ContentItem[] = [
  ...dbaExpandedContent,
  ...dbaExpandedContentPart2,
  ...dbaExpandedContentPart3,
  {
    id: "dba-architecture",
    title: { en: "DB Architecture (Memory & Disk)", tr: "VT Mimarisi (Bellek & Disk)" },
    category: "Database Concept",
    domain: "DBA",
    summary: { 
        en: "Buffer Pool, WAL, and Disk interaction.",
        tr: "Buffer Pool, WAL ve Disk etkileşimi."
    },
    descriptionStandard: {
        en: "Understanding how a database manages data between fast RAM (Buffer Pool) and slow Disk. Crucial for understanding performance.",
        tr: "Veritabanının hızlı RAM (Buffer Pool) ve yavaş Disk arasındaki veri trafiğini nasıl yönettiğini anlamak. Performansın temelidir."
    },
    descriptionELI5: {
        en: "A chef (CPU) needs ingredients. The fridge (Disk) is slow, so they keep frequently used items on the kitchen counter (Buffer Pool). If the power goes out, the counter is cleared, but the fridge keeps the food safe.",
        tr: "Bir aşçı (CPU) yemek yapacak. Buzdolabı (Disk) uzakta, bu yüzden en çok kullandığı malzemeleri hemen elinin altındaki tezgaha (Buffer Pool) koyar. Elektrik giderse tezgahtakiler çöp olur ama buzdolabındakiler güvendedir."
    },
    contentMarkdown: {
        en: `### The Pyramid of Speed
- **CPU Registers**: < 1 ns (The Chef's brain).
- **RAM (Buffer Pool)**: ~100 ns (The Kitchen Counter).
- **Disk (SSD/HDD)**: ~1-10 ms (The Fridge/Supermarket).
*Goal:* Keep as much data as possible in RAM.

### Core Components
1.  **Shared Buffers (Postgres) / Buffer Pool (InnoDB)**:
    - This is where the magic happens. All active data lives here.
    - When you SELECT row, checking RAM is instant. Checking Disk is 1000x slower.
    - **Dirty Page**: A page in RAM modified but not yet written to disk.
2.  **WAL (Write-Ahead Log)**:
    - *The Problem*: If power fails, Dirty Pages in RAM are lost.
    - *The Solution*: Before modifying RAM, write the change to a "Log File" on disk sequentially. Sequential write is fast!
    - *Crash Recovery*: On reboot, DB reads WAL and re-applies changes to restore the lost memory.
3.  **Checkpointer**:
    - A background process that efficiently syncs Dirty Pages to the main data files, so the WAL doesn't grow forever.`,
        tr: `### Hız Piramidi
- **CPU Register**: < 1 ns (Aşçının beyni).
- **RAM (Buffer Pool)**: ~100 ns (Mutfak tezgahı).
- **Disk (SSD/HDD)**: ~1-10 ms (Buzdolabı/Market).
*Amaç:* Veriyi mümkün olduğunca RAM'de tutmaktır.

### Temel Bileşenler
1.  **Shared Buffers (Postgres) / Buffer Pool (InnoDB)**:
    - Sihrin gerçekleştiği yer. Tüm aktif veriler burada yaşar.
    - SELECT attığınızda, RAM'den okumak anlıktır. Diskten okumak 1000 kat yavaştır.
    - **Dirty Page (Kirli Sayfa)**: RAM'de değiştirilmiş ama henüz diske yazılmamış veri.
2.  **WAL (Write-Ahead Log)**:
    - *Sorun*: Elektrik kesilirse, RAM'deki Kirli Sayfalar kaybolur.
    - *Çözüm*: RAM'i değiştirmeden önce, değişikliği diske sırayla (Sequential) yazılan bir "Log Dosyasına" kaydet. Sıralı yazma çok hızlıdır!
    - *Kurtarma*: Yeniden başlatıldığında, DB bu WAL dosyasını okur ve kayıp hafızayı geri yükler.
3.  **Checkpointer**:
    - Arka planda çalışan ve Kirli Sayfaları diske verimli bir şekilde yazan süreçtir.`
    },
    realWorldUses: [],
    pros: [],
    cons: [],
    complexity: { time: "RAM / Disk IO", space: "Buffers" },
    codeSnippet: `-- MySQL (InnoDB) Buffer Pool Status
SHOW ENGINE INNODB STATUS;

-- PostgreSQL Shared Buffers Config
-- postgresql.conf
shared_buffers = 4GB  -- Typically 25% of total RAM
effective_cache_size = 12GB`,
    questions: [],
  },
  {
    id: "dba-acid",
    title: { en: "ACID Properties", tr: "ACID Prensipleri" },
    category: "Database Concept",
    domain: "DBA",
    summary: { 
        en: "Atomicity, Consistency, Isolation, Durability.",
        tr: "Atomicity, Consistency, Isolation, Durability."
    },
    descriptionStandard: {
        en: "Set of properties of database transactions intended to guarantee data validity despite errors, power failures, and other mishaps.",
        tr: "Veritabanı işlemlerinin (transaction) hatalara ve güç kesintilerine rağmen geçerli kalmasını garanti eden dört temel özellik: Atomicity, Consistency, Isolation, Durability."
    },
    descriptionELI5: {
        en: "Bank transactions rules: All or nothing, Valid Data only, Wait your turn, Saved forever.",
        tr: "Banka havalesi kuralları: Ya hepsi olur ya hiçbiri, Sadece geçerli paralar, Sıranı bekle, Deftere kalıcı yaz."
    },
    contentMarkdown: {
        en: `### The 4 Pillars of Trust
1.  **Atomicity (All or Nothing)**:
    - A Transaction is a single unit. It may contain 50 updates.
    - If update #49 fails, updates #1-#48 are rolled back.
    - *Tech*: Undo Logs.
2.  **Consistency (Rules)**:
    - The data must always satisfy schema rules (Constraints, Foreign Keys).
    - If you try to insert text into an Integer column, the WHOLE transaction fails.
3.  **Isolation (Privacy)**:
    - While I am transferring money, nobody else should see my "half-finished" balance.
    - *Tech*: Locking & MVCC.
4.  **Durability (Permanence)**:
    - Once the DB says "Success", the data is safe even if you pull the plug immediately.
    - *Tech*: WAL (Write-Ahead Log) on Disk.`,
        tr: `### 4 Güven Sütunu
1.  **Atomicity (Bütünlük)**:
    - Transaction tek bir birimdir. 50 güncelleme içerebilir.
    - Eğer #49 başarısız olursa, #1-#48 geri alınır (Rollback).
    - *Teknoloji*: Undo Logs.
2.  **Consistency (Tutarlılık)**:
    - Veri her zaman şema kurallarına (Constraint, Foreign Key) uymalıdır.
    - Integer kolona yazı yazmaya çalışırsanız, TÜM işlem iptal olur.
3.  **Isolation (Yalıtım)**:
    - Ben para transferi yaparken, kimse benim "yarı bitmiş" bakiyemi görmemelidir.
    - *Teknoloji*: Locking & MVCC.
4.  **Durability (Dayanıklılık)**:
    - DB "Başarılı" dediği an, fişi çekseniz bile veri güvendedir.
    - *Teknoloji*: Diskteki WAL dosyası.`
    },
    realWorldUses: [],
    pros: [],
    cons: [],
    complexity: { time: "Transactional", space: "WAL Logs" },
    codeSnippet: `BEGIN TRANSACTION;
UPDATE Accounts SET balance = balance - 100 WHERE id = 1;

-- If power fails here, nothing happens.
-- If code throws error, we ROLLBACK.

UPDATE Accounts SET balance = balance + 100 WHERE id = 2;
COMMIT; -- Only now is it permanent!`,
    questions: [],
  },
  {
    id: "dba-indexing",
    title: { en: "Indexing Strategies", tr: "İndeksleme Stratejileri" },
    category: "Database Concept",
    domain: "DBA",
    summary: {
        en: "B-Tree, Hash, GIN and Query tuning.",
        tr: "B-Tree, Hash, GIN ve Sorgu iyileştirme."
    },
    descriptionStandard: {
        en: "Indexes optimize lookup speed. Choosing the right index type (B-Tree for ranges, Hash for equality, GIN for full-text/JSON) is the core of query tuning.",
        tr: "İndeksler arama hızını artırır. Doğru indeks tipini seçmek (Sıralama için B-Tree, Eşitlik için Hash, Metin/JSON için GIN) performansın anahtarıdır."
    },
    descriptionELI5: {
        en: "Textbook index vs Phonebook vs Library Catalog. Instead of reading every page (Full Scan) to find 'Harry Potter', you go to the Index card and find the exact shelf (Index Scan).",
        tr: "Kitap indeksi, Telefon rehberi ve Kütüphane kataloğu. 'Harry Potter'ı bulmak için tüm kütüphanedeki kitaplara tek tek bakmak (Full Scan) yerine, bilgisayardan yerini öğrenip direkt rafa gidersiniz (Index Scan)."
    },
    contentMarkdown: {
        en: `### Anatomy of an Index
It is a **Sorted Reference**. It copies the indexed columns + pointer to the actual row, and sorts them in a Tree structure.

### Types of Indexes
1.  **B-Tree (Balanced Tree)**:
    - The specific default. Good for almost everything.
    - Supports: \`=\`, \`<\`, \`>\`, \`BETWEEN\`, \`ORDER BY\`, \`LIKE 'abc%'\`.
2.  **Hash Index**:
    - Only supports \`=\`.
    - Faster than B-Tree for exact lookups, but less versatile.
3.  **GIN (Inverted Index)**:
    - "Google style" search.
    - Used for Full-Text Search ("Find 'Cat' in this book") or JSON keys.
4.  **Composite Index**:
    - Indexing multiple columns: \`(Lastname, Firstname)\`.
    - **Order Matters!** If you search only by \`Firstname\`, this index is USELESS. (Left-Prefix Rule).

### The Trace-off
- **Reads**: Super fast.
- **Writes**: Slower. Every INSERT/UPDATE must also rearrange the Index Tree.
- **Space**: Indexes take up disk space (RAM too).`,
        tr: `### İndeksin Anatomisi
**Sıralı bir Referanstır**. İndekslenen kolonları + gerçek satırın adresini kopyalar ve bunları bir Ağaç yapısında sıralar.

### İndeks Çeşitleri
1.  **B-Tree (Dengeli Ağaç)**:
    - Varsayılan ve en yaygını.
    - Destekler: \`=\`, \`<\`, \`>\`, \`BETWEEN\`, \`ORDER BY\`.
2.  **Hash Index**:
    - Sadece \`=\` (eşitlik) destekler.
    - B-Tree'den biraz daha hızlıdır ama esnek değildir.
3.  **GIN (Ters Çevrilmiş İndeks)**:
    - "Google tarzı" arama.
    - Metin Arama (Full-Text) veya JSON içindeki anahtarlar için kullanılır.
4.  **Composite (Bileşik) İndeks**:
    - Birden çok kolonu indekslemek: \`(Soyad, Ad)\`.
    - **Sıra Önemlidir!** Sadece \`Ad\` ile ararsanız bu indeks ÇALIŞMAZ. (Soldan Başlama Kuralı).

### Bedel (Trade-off)
- **Okuma**: Çok hızlanır.
- **Yazma**: Yavaşlar. Her INSERT/UPDATE işleminde İndeks Ağacı da güncellenmelidir.
- **Alan**: İndeksler diskte ve RAM'de yer kaplar.`
    },
    realWorldUses: [],
    pros: [],
    cons: [],
    complexity: { time: "Read Optimized", space: "Disk Overhead" },
    codeSnippet: `-- The "Left-Prefix" Trap
CREATE INDEX idx_name ON users (lastname, firstname);

-- FAST (Uses Index)
SELECT * FROM users WHERE lastname = 'Doe';
SELECT * FROM users WHERE lastname = 'Doe' AND firstname = 'John';

-- SLOW (Full Scan - Index Useless)
SELECT * FROM users WHERE firstname = 'John';`,
    questions: [],
  },
  {
    id: "dba-backup",
    title: { en: "Backup strategies (PITR)", tr: "Yedekleme Stratejileri (PITR)" },
    category: "System Design",
    domain: "DBA",
    summary: {
        en: "Full, Incremental, PITR Strategy.",
        tr: "Tam, Artımlı yedekleme ve Zamanda Nokta Kurtarma."
    },
    descriptionStandard: {
        en: "A DBA's most important job. Strategies include Full backups, Incremental changes, and Point-in-Time Recovery (PITR) using WAL archives to restore to a specific second.",
        tr: "Bir DBA'nın en önemli görevi. Stratejiler Tam yedek, Artımlı yedek ve WAL arşivlerini kullanarak saniye bazlı geri dönüş sağlayan PITR'ı kapsar."
    },
    descriptionELI5: {
        en: "Save Game. Full backup is a new save file. Incremental is just saving what changed since the last save. PITR is a time machine.",
        tr: "Oyunu Kaydetmek. Full backup 'Yeni Kayıt'tır. Incremental, sadece son kayıttan beri değişenleri kaydeder. PITR ise zaman makinesidir, hatadan 1 saniye öncesine dönebilirsin."
    },
    contentMarkdown: {
        en: `### The Strategy (3-2-1 Rule)
3 copies of data, 2 different media, 1 off-site.

### Types
1.  **Full Backup:** Copy entire DB. Slow, big.
2.  **Incremental/Differential:** Copy only changes since last backup. Fast.
3.  **PITR (Point-in-Time Recovery):** The Holy Grail.
    *   Combines a Full Backup + Replaying WAL files.
    *   Allows restoring to "Yesterday at 14:03:55".

### RPO vs RTO
*   **RPO (Recovery Point Objective):** How much data can we lose? (e.g., "Max 5 minutes").
*   **RTO (Recovery Time Objective):** How long can we be down? (e.g., "Max 1 hour").

### 🧠 Scenario: "The Intern's Mistake"
*   **Situation:** An intern ran \`DROP TABLE Users;\` at 10:00 AM on Production.
*   **Challenge:** Disaster Recovery. We have a backup from 00:00 AM using WAL archiving.
*   **Solution:**
    1.  Restore 00:00 AM Full Backup.
    2.  Replay WAL files from 00:00 to 09:59.
    3.  **Stop!** Do not replay 10:00.
    4.  Open DB. Users are back, table exists.`,
        tr: `### Strateji (3-2-1 Kuralı)
Verinin 3 kopyası, 2 farklı medya, 1 tanesi ofis dışında (off-site).

### Çeşitler
1.  **Full Backup:** Her şeyi yedekle. Yavaş, çok yer kaplar.
2.  **Incremental:** Sadece değişenleri yedekle. Hızlı.
3.  **PITR (Zamanda Belirli Ana Dönüş):** En kritik yetenek.
    *   Full Backup + WAL dosyalarının birleşimidir.
    *   "Dün saat 14:03:55" anına geri dönmeyi sağlar.

### RPO vs RTO
*   **RPO (Ne kadar veri kaybedebiliriz?):** "En fazla 5 dakikalık veri kaybı kabul edilebilir."
*   **RTO (Ne kadar kapalı kalabiliriz?):** "Sistem en geç 1 saatte ayağa kalkmalı."

### 🧠 Senaryo: "Stajyer Faciası"
*   **Durum:** Stajyer saat 10:00'da Canlı (Prod) ortamda \`DROP TABLE Users;\` çalıştırdı.
*   **Görev:** Veriyi kurtar. Elimizde gece 00:00 yedeği ve WAL arşivleri var.
*   **Çözüm:**
    1.  00:00 yedeğini geri yükle.
    2.  00:00 ile 09:59 arasındaki WAL dosyalarını (işlemleri) tekrar oynat.
    3.  **Dur!** 10:00 anını oynatma.
    4.  Sistemi aç. Tablo kurtarıldı.`
    },
    realWorldUses: [],
    pros: [],
    cons: [],
    complexity: { time: "RPO / RTO", space: "Storage Cost" },
    codeSnippet: `# PostgreSQL Backup (pg_dump)
pg_dump -U username -h localhost dbname > backup.sql

# Restore
psql -U username -d dbname -f backup.sql

# WAL Archiving (recovery.conf)
restore_command = 'cp /mnt/server/archivedir/%f %p'`,
    questions: [],
  },
  {
    id: "dba-replication",
    title: { en: "Replication & HA", tr: "Replikasyon & HA" },
    category: "System Design",
    domain: "DBA",
    summary: {
        en: "Master-Replica, Failover, High Availability.",
        tr: "Master-Replica, Failover, Yüksek Erişilebilirlik."
    },
    descriptionStandard: {
        en: "Creating copies of the database (Replicas) to handle Read-heavy loads and ensure High Availability (HA) in case the Master server fails.",
        tr: "Veritabanının kopyalarını (Replica) oluşturarak okuma yükünü dağıtmak ve Master sunucu çökerse sistemin ayakta kalmasını (HA) sağlamak."
    },
    descriptionELI5: {
        en: "The Teacher (Master) speaks, and Students (Replicas) take notes. If you want to know what was said, you can ask any student. If the Teacher gets sick, the smartest student becomes the Teacher.",
        tr: "Öğretmen (Master) anlatır, Öğrenciler (Replica) not alır. Notları okumak isteyen herhangi bir öğrenciye sorabilir (Read Scaling). Öğretmen hastalanırsa, en çalışkan öğrenci tahtaya geçer (Failover)."
    },
    contentMarkdown: {
        en: `### Architectures
1.  **Master-Slave (Primary-Replica):**
    *   Writes go to **Master** only.
    *   Reads can go to **Replicas**.
    *   *Async Replication:* Lag possible, but Master performs fast.
    *   *Sync Replication:* Zero data loss, but Master waits for Replica (slower).
2.  **Multi-Master:** Writes can go to any node. Complex conflict resolution.

### High Availability (HA)
*   **Failover:** If Master crashes, a Replica is promoted to be the new Master.
*   **Tools:** Patroni, HAProxy, AWS RDS Multi-AZ.

### 🧠 Scenario: "The Lag"
*   **Situation:** A user updates their profile photo, refreshes the page, but still sees the old photo.
*   **Analysis:** This is **Replication Lag**. The write went to Master, but the read went to a Replica that hasn't received the update yet.
*   **Solution:**
    *   Read-your-own-writes consistency (sticky sessions).
    *   Force critical reads to go to Master.`,
        tr: `### Mimariler
1.  **Master-Slave (Primary-Replica):**
    *   Yazma işlemleri sadece **Master**'a gider.
    *   Okuma işlemleri **Replica**'lardan yapılabilir (Yük dağıtımı).
    *   *Asenkron:* Master, Replica'nın yazmasını beklemez. Hızlıdır ama Replica geriden gelebilir.
    *   *Senkron:* Master, Replica onaylayana kadar işlemi bitirmez. Veri kaybı sıfırdır ama yavaştır.

### Yüksek Erişilebilirlik (HA)
*   **Failover:** Master çökerse, otomatik olarak bir Replica yeni Master seçilir.
*   **Araçlar:** Patroni, HAProxy, AWS RDS Multi-AZ.

### 🧠 Senaryo: "Gecikme (Lag)"
*   **Durum:** Kullanıcı profil fotosunu güncelledi, sayfayı yeniledi ama eski fotoyu görüyor.
*   **Analiz:** Bu **Replication Lag**'dir. Yazma Master'a yapıldı, ama okuma işlemi henüz güncellemeyi almamış bir Replica'dan yapıldı.
*   **Çözüm:**
    *   Kritik okumaları (kendi profilin gibi) Master'dan yapmaya zorla.
    *   "Read-your-own-writes" mantığı uygula.`
    },
    realWorldUses: [],
    pros: [],
    cons: [],
    complexity: { time: "High Availability", space: "Redundancy" },
    codeSnippet: `-- PostgreSQL Streaming Replication Setup
primary_conninfo = 'host=master_ip port=5432 user=replicator password=pass'
recovery_target_timeline = 'latest'`,
    questions: [],
  },
  {
    id: "dba-concurrency",
    title: { en: "Locks & Concurrency (MVCC)", tr: "Kilitler & Eşzamanlılık (MVCC)" },
    category: "Database Concept",
    domain: "DBA",
    summary: {
        en: "Deadlocks, Blocking, Pessimistic vs Optimistic Locking.",
        tr: "Deadlock, Bloklama, Pessimistic vs Optimistic Kilitleme."
    },
    descriptionStandard: {
        en: "Managing how multiple users access data at the same time. Understanding Locking strategies and MVCC is vital to prevent 'Frozen' scenarios (Deadlocks) and ensure data correctness.",
        tr: "Birden fazla kullanıcının aynı anda veriye erişimini yönetmek. Kilitleme stratejilerini ve MVCC'yi anlamak, sistemin donmasını (Deadlock) engellemek için hayatidir."
    },
    descriptionELI5: {
        en: "Two people trying to use the same bathroom. You need a lock on the door so no one walks in on you. But if two people lock each other out, that's a Deadlock.",
        tr: "İki kişinin aynı tuvaleti kullanmaya çalışması. Kapıya kilit takmalısınız. Ama iki kişi birbirinin anahtarını saklarsa (Deadlock), kimse içeri giremez."
    },
    contentMarkdown: {
        en: `### MVCC (Multi-Version Concurrency Control)
Postgres and MySQL (InnoDB) use MVCC.
*   **Concept:** Writers don't block Readers, Readers don't block Writers.
*   **How:** Each transaction sees a "snapshot" of the database at a specific time.

### Problems
*   **Blocking:** A long transaction holds a lock, making others wait.
*   **Deadlock:** Transaction A waits for B, B waits for A. The DB must kill one process to resolve it.

### Locking Strategies
*   **Pessimistic:** Lock the row immediately. "I am editing this, nobody touch it." (Safe, Slow)
*   **Optimistic:** Don't lock. Check version at save time. "I hope nobody changed it." (Fast, Retry needed)

### 🧠 Scenario: "The Deadlock"
*   **Log:** \`Deadlock found when trying to get lock; try restarting transaction\`
*   **Cause:**
    *   Tx1: Updates Row A, wants Row B.
    *   Tx2: Updates Row B, wants Row A.
*   **Fix:** Always access resources in the **same order** (e.g., sort by ID before updating multiple rows).`,
        tr: `### MVCC (Çok Versiyonlu Eşzamanlılık Kontrolü)
PostgreSQL ve InnoDB motoru bunu kullanır.
*   **Kural:** Okuyanlar yazanları, yazanlar okuyanları engellemez.
*   **Nasıl:** Her işlem veritabanının belirli bir andaki "fotoğrafını" (snapshot) görür.

### Sorunlar
*   **Blocking:** Uzun süren bir işlem bir satırı kilitler, diğer herkes kuyrukta bekler.
*   **Deadlock (Ölümcül Kilitlenme):** İşlem A, B'yi bekler; İşlem B, A'yı bekler. Veritabanı mecburen birini "öldürür" (kill process).

### Kilitleme Stratejileri
*   **Pessimistic:** Satırı hemen kilitle. "Ben düzenliyorum, kimse dokunmasın." (Güvenli, Yavaş)
*   **Optimistic (İyimser):** Kilitleme. Kaydederken versiyonu kontrol et. "Umarım kimse değiştirmemiştir." (Hızlı, Çakışırsa tekrar dene)

### 🧠 Senaryo: "Deadlock Çözümü"
*   **Log:** \`Deadlock found... işlem iptal edildi.\`
*   **Sebep:**
    *   Tx1: A satırını güncelledi, B'yi istiyor.
    *   Tx2: B satırını güncelledi, A'yı istiyor.
*   **Çözüm:** Kaynaklara erişirken her zaman **aynı sırayı** takip et (örn: Önce ID'si küçük olanı güncelle, sonra büyüğü).`
    },
    realWorldUses: [],
    pros: [],
    cons: [],
    complexity: { time: "Locking", space: "Throughput" },
    codeSnippet: `-- FOR UPDATE locks the row
BEGIN;
SELECT * FROM products WHERE id = 10 FOR UPDATE;
-- Do stuff...
COMMIT;

-- Check Locks (Postgres)
SELECT * FROM pg_locks;`,
    questions: [],
  },
  {
    id: "dba-security",
    title: { en: "Security & RBAC", tr: "Güvenlik & RBAC" },
    category: "System Design",
    domain: "DBA",
    summary: {
        en: "Permissions, SQL Injection, Encryption.",
        tr: "Yetkilendirme, SQL Injection, Şifreleme."
    },
    descriptionStandard: {
        en: "Database security isn't just a password. It involves Role-Based Access Control (RBAC), Least Privilege principle, and protecting data `At Rest` and `In Transit`.",
        tr: "Veritabanı güvenliği sadece şifreden ibaret değildir. Rol Bazlı Erişim Kontrolü (RBAC), En Az Yetki Prensibi ve verinin hem diskte hem ağda şifrelenmesini içerir."
    },
    descriptionELI5: {
        en: "Not everyone gets the master key to the building. Cleaning staff has keys to rooms, Security has keys to the gate. Giving everyone the Master Key is a disaster waiting to happen.",
        tr: "Binanın ana anahtarını herkese vermezsin. Temizlikçinin ofis anahtarı, Güvenliğin kapı anahtarı vardır. Herkese 'Yönetici' yetkisi vermek felakettir."
    },
    contentMarkdown: {
        en: `### Core Principles
1.  **Least Privilege:** Give a user ONLY what they need. A reporting tool should strictly have \`SELECT\`, never \`DELETE\`.
2.  **RBAC (Role-Based Access Control):** Assign permissions to Roles (e.g., "Read_Only_Role"), then assign Users to Roles.
3.  **Encryption:**
    *   *At Rest:* Encrypting the HDD/Files so stealing the disk yields no data.
    *   *In Transit:* Using SSL/TLS so network sniffers see garbage.

### The #1 Enemy: SQL Injection
Occurs when user input is concatenated directly into a query string.
*   *Bad:* \`"SELECT * FROM users WHERE name = '" + userInput + "'"\`
*   *Hack:* Input = \`' OR '1'='1\` -> Returns ALL users.
*   *Defense:* **Prepared Statements** (Parameterized Queries).

### 🧠 Scenario: "The Breach"
*   **Situation:** A hacker dumped the entire User table.
*   **Investigation:** The App was logging in as \`root\` (Superuser).
*   **Fix:**
    Create a locked-down user:
    \`GRANT SELECT, INSERT ON app_schema.* TO 'app_user';\`
    Never use root/postgres user for the application connection!`,
        tr: `### Temel Prensipler
1.  **Least Privilege (En Az Yetki):** Kullanıcıya SADECE ihtiyacı olanı ver. Raporlama aracı sadece \`SELECT\` yapabilmeli, asla \`DROP\` yapamamalı.
2.  **RBAC (Rol Bazlı Erişim):** Yetkileri önce Rol'e ver (örn: "Okuyucu_Rolü"), sonra kullanıcıyı o role ata.
3.  **Şifreleme:**
    *   *At Rest:* Disk şifreleme (HDD çalınırsa veri okunamaz).
    *   *In Transit:* SSL/TLS kullanımı (Ağ dinlenirse veri okunamaz).

### 1 Numaralı Düşman: SQL Injection
Kullanıcı girdisi doğrudan sorguya yapıştırılırsa oluşur.
*   *Kötü:* \`"SELECT * FROM users WHERE name = '" + userInput + "'"\`
*   *Saldırı:* Girdi = \`' OR '1'='1\` -> Tüm kullanıcıları listeler.
*   *Savunma:* **Prepared Statements** (Parametrik Sorgular) kullanın.

### 🧠 Senaryo: "Sızıntı"
*   **Durum:** Hacker tüm kullanıcı tablosunu çaldı.
*   **İnceleme:** Uygulama veritabanına \`root\` (Süper kullanıcı) olarak bağlanıyordu.
*   **Çözüm:**
    Kısıtlı bir kullanıcı oluştur:
    \`GRANT SELECT, INSERT ON app_schema.* TO 'app_user';\`
    Uygulama bağlantısı için asla yetkili kullanıcı (postgres/root) kullanma!`
    },
    realWorldUses: [],
    pros: [],
    cons: [],
    complexity: { time: "Authentication", space: "Compliance" },
    codeSnippet: `-- Create a Read-Only Role
CREATE ROLE read_only;
GRANT CONNECT ON DATABASE mydb TO read_only;
GRANT USAGE ON SCHEMA public TO read_only;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO read_only;

-- Assign to user
GRANT read_only TO 'intern_user';`,
    questions: [],
  },
  {
    id: "dba-sharding",
    title: { en: "Sharding", tr: "Sharding (Veri Bölümleme)" },
    category: "System Design",
    domain: "DBA",
    summary: {
        en: "Horizontal scaling of data.",
        tr: "Verinin yatay ölçeklenmesi."
    },
    descriptionStandard: {
        en: "Sharding is a method of splitting and storing a single logical dataset in multiple databases. By distributing the data among multiple machines, a cluster of database systems can store larger datasets and handle additional requests.",
        tr: "Sharding, büyük bir veri setinin parçalanarak birden fazla sunucuda saklanmasıdır. Bu sayede tek bir sunucunun kapasitesini aşan veriler ve trafik yönetilebilir."
    },
    descriptionELI5: {
        en: "Splitting a phone book into 2 volumes: A-M and N-Z. If you have too many names for one book, you buy a second book and split the names.",
        tr: "Telefon rehberini iki cilde bölmek gibi: A-M arası ve N-Z arası. Tek bir kitaba sığmayacak kadar çok isim varsa, ikinci bir kitap alır ve isimleri paylaştırırsınız."
    },
    contentMarkdown: {
        en: `### Why Sharding?
When a database grows too large for a single server (CPU, RAM, or Disk limits), we must scale.
*   **Vertical Scaling (Scale-up):** Buy a bigger server. Expensive and has hard limits.
*   **Horizontal Scaling (Scale-out):** Add more servers. This is **Sharding**.

### Sharding Strategies
1.  **Key-Based (Hash) Sharding:**
    *   Use a hash function on an ID (e.g., \`UserID % 4\`).
    *   *Pros:* Even distribution.
    *   *Cons:* Resharding is hard if you update server count.
2.  **Range-Based Sharding:**
    *   Split by ranges (e.g., UserIDs 1-1000 on Server A, 1001-2000 on Server B).
    *   *Pros:* Easy for range queries.
    *   *Cons:* Can create "Hot spots" (e.g., if all new users are active, only the last server gets load).
3.  **Directory-Based:**
    *   A lookup table tracks which shard holds which data.

### Challenges
*   **Joins:** performing joins across shards is extremely slow and complex.
*   **Resharding:** Moving data without downtime is hard.
*   **Consistent Hashing:** A technique used to minimize data movement when resizing clusters.`,
        tr: `### Neden Sharding?
Bir veritabanı tek bir sunucunun kapasitesini (CPU, RAM, Disk) aştığında ölçekleme yapmamız gerekir.
*   **Dikey Ölçekleme (Vertical):** Daha pahalı ve güçlü bir sunucu almak. Limiti vardır.
*   **Yatay Ölçekleme (Horizontal):** Daha fazla sunucu eklemek. İşte bu **Sharding**'dir.

### Sharding Stratejileri
1.  **Key-Based (Hash) Sharding:**
    *   ID üzerinde hash fonksiyonu kullanılır (örn: \`UserID % 4\`).
    *   *Artı:* Veri eşit dağılır.
    *   *Eksi:* Sunucu sayısı değişirse her şeyi yeniden dağıtmak (resharding) zordur.
2.  **Range-Based Sharding:**
    *   Aralıklara göre bölme (örn: Kullanıcı 1-1000 Sunucu A'da, 1001-2000 Sunucu B'de).
    *   *Artı:* Aralık sorguları kolaydır.
    *   *Eksi:* "Hot spot" oluşabilir (örn: yeni kullanıcıların hepsi aktifse, sadece son sunucu yüklenir).

### Zorluklar
*   **Join İşlemleri:** Farklı sunuculardaki tabloları birleştirmek (Join) çok zordur ve performansı öldürür.
*   **Resharding:** Sistemi durdurmadan veriyi taşımak zordur.
*   **Consistent Hashing:** Sunucu sayısı değişiminde veri taşımasını minimize eden özel bir tekniktir.`
    },
    realWorldUses: [],
    pros: [],
    cons: [],
    complexity: { time: "Horizontal Scale", space: "Partitioning" },
    codeSnippet: `// Logic in Application Layer
function getShardID(userId) {
    return userId % 4; // Mapped to Shard 0, 1, 2, or 3
}

const shardID = getShardID(12345);
const db = connectToShard(shardID);
db.query("SELECT * FROM users WHERE id = 12345");`,
    questions: [],
  },
  {
    id: "dba-cap",
    title: { en: "CAP Theorem", tr: "CAP Teoremi" },
    category: "System Design",
    domain: "DBA",
    summary: {
        en: "Consistency, Availability, Partition Tolerance.",
        tr: "Consistency (Tutarlılık), Availability (Erişilebilirlik), Partition Tolerance."
    },
    descriptionStandard: {
        en: "It is impossible for a distributed data store to simultaneously provide more than two out of the three guarantees.",
        tr: "Dağıtık bir veri sisteminin aynı anda şu üç garantiden sadece ikisini sağlayabileceğini belirtir: Tutarlılık (herkes aynı veriyi görür), Erişilebilirlik (her istek yanıt alır), Bölünme Toleransı (ağ kopsa bile sistem çalışır)."
    },
    descriptionELI5: {
        en: "You can't have a perfect system. Choose 2: Everyone agrees (Consistency), Always works (Availability), Works when cables are cut (Partition Tolerance).",
        tr: "Mükemmel sistem diye bir şey yoktur. 2 tane seçmelisin: Ya herkes aynı anda aynı şeyi bilir (C), ya sistem her zaman cevap verir (A), ya da kablolar kopsa bile çalışmaya devam eder (P)."
    },
    contentMarkdown: {
        en: `### Concept
In a distributed computer system, you can only support two of the following guarantees:

1.  **Consistency (C):** Every read receives the most recent write or an error. All nodes see the same data at the same time.
2.  **Availability (A):** Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
3.  **Partition Tolerance (P):** The system continues to operate despite an arbitrary number of messages being dropped or delayed by the network between nodes.

### The Trade-off: CP vs AP
**P (Partition Tolerance)** is usually mandatory in distributed systems because networks are unreliable (cables get cut, switches fail). So the real choice is between **CP** and **AP**.

*   **CP (Consistency + Partition Tolerance):** Wait for all nodes to sync. If a node is unreachable, return an error or timeout. Reliable but risks downtime.
    *   *Examples:* Banking, HBase, MongoDB (default).
*   **AP (Availability + Partition Tolerance):** Return the most recent *available* version of data, even if it might be stale. Sync later (Eventual Consistency).
    *   *Examples:* Social Media Feeds (Instagram likes), Cassandra, DynamoDB.

### CA (Consistency + Availability)
Only possible if you **never** have a network partition (i.e., a single server database like a standard MySQL instance, not distributed).`,
        tr: `### Konsept
Dağıtık bir bilgisayar sisteminde, aşağıdaki üç garantiden sadece ikisini aynı anda sağlayabilirsiniz:

1.  **Consistency (Tutarlılık):** Her okuma işlemi, en son yazılan veriyi alır veya hata döner. Tüm sunucular (node) aynı anda aynı veriyi görür.
2.  **Availability (Erişilebilirlik):** Her istek, en güncel veri garantisi olmasa bile mutlaka bir yanıt alır. Sistem "şu an meşgulüm" demez.
3.  **Partition Tolerance (Bölünme Toleransı):** Ağdaki kopmalara veya iletişim gecikmelerine rağmen sistem çalışmaya devam eder.

### Büyük Takas: CP mi AP mi?
Modern ağlarda bağlantı kopmaları kaçınılmaz olduğu için **P (Bölünme Toleransı)** genelde zorunludur. Asıl seçim **CP** ile **AP** arasındadır.

*   **CP (Tutarlılık + Bölünme Toleransı):** Veri yazıldığında tüm sunucuların senkronize olmasını bekler. Eğer bir sunucuya ulaşılamıyorsa, sistem hata verir ama yanlış veri dönmez. Güvenlidir ama yavaşlayabilir.
    *   *Örnek:* Bankacılık, MongoDB (varsayılan).
*   **AP (Erişilebilirlik + Bölünme Toleransı):** Her isteğe cevap verilir. Veriler o an senkronize olmamış olabilir ("Eventual Consistency" - Sonunda Tutarlı). Hızlıdır ama eski veri gösterebilir.
    *   *Örnek:* Instagram like sayıları, Cassandra, Amazon DynamoDB.

### CA (Tutarlılık + Erişilebilirlik)
Sadece ağ bölünmesi yaşanma ihtimali yoksa (örneğin tek makinede çalışan veritabanı) mümkündür.`
    },
    realWorldUses: [],
    pros: [],
    cons: [],
    complexity: { time: "Trade-off", space: "Distributed" },
    codeSnippet: `// MongoDB defaults to CP (Consistency + Partition Tolerance)
// If the master node goes down, the system rejects writes until a new master is elected.

// Cassandra defaults to AP (Availability + Partition Tolerance)
// It will always accept writes, even if nodes are out of sync (Eventually Consistent).`,
    questions: [],
  },
  {
    id: "dba-normalization",
    title: { en: "Normalization", tr: "Normalizasyon" },
    category: "Database Concept",
    domain: "DBA",
    summary: {
        en: "Reducing data redundancy.",
        tr: "Veri tekrarını azaltma."
    },
    descriptionStandard: {
        en: "The process of organizing data in a database. This includes creating tables and establishing relationships between those tables according to rules designed both to protect the data and to make the database more flexible by eliminating redundancy.",
        tr: "Veritabanındaki veriyi organize etme sürecidir (1NF, 2NF, 3NF). Tekrar eden verileri azaltarak tutarlılığı artırır ve disk alanından tasarruf sağlar."
    },
    descriptionELI5: {
        en: "Don't write the same thing twice. Instead of writing the Customer Address on every Order, just write 'Customer ID' and look up the address in a separate notebook.",
        tr: "Aynı şeyi iki kere yazma. Her sipariş kağıdına Müşteri Adresini uzun uzun yazmak yerine, sadece 'Müşteri No' yaz ve adresi müşteri defterinden bak."
    },
    contentMarkdown: {
        en: `### Why Normalize?
To minimize **Redundancy** (duplicate data) and **Anomalies** (Insert, Update, Delete errors).

### Normal Forms (The Steps)
1.  **1NF (First Normal Form):**
    *   Columns check contain atomic values (no lists like "red,blue").
    *   Each record needs a unique Primary Key.
2.  **2NF (Second Normal Form):**
    *   Must be in 1NF.
    *   No **Partial Dependency**: All non-key columns must depend on the *whole* primary key (important for composite keys).
3.  **3NF (Third Normal Form):**
    *   Must be in 2NF.
    *   No **Transitive Dependency**: Non-key columns shouldn't depend on other non-key columns (e.g., storing 'City' based on 'ZipCode'—City depends on Zip, not ID).

### Denormalization
Sometimes we intentionally break these rules (adding redundancy) to improve read performance, avoiding expensive JOINs. This is common in Data Warehousing and Analytical workloads (OLAP).`,
        tr: `### Neden Normalizasyon?
**Tekrarı (Redundancy)** ve **Anomalileri** (Ekleme, Güncelleme, Silme hataları) önlemek için yapılır.

### Normal Formlar (Adımlar)
1.  **1NF (Birinci Normal Form):**
    *   Sütunlar atomik değer içermeli (örn: "kırmızı,mavi" gibi liste olmamalı).
    *   Her satırın eşsiz bir anahtarı (Primary Key) olmalı.
2.  **2NF (İkinci Normal Form):**
    *   1NF şartları sağlanmalı.
    *   **Kısmi Bağımlılık (Partial Dependency)** olmamalı: Anahtar olmayan sütunlar, anahtarın *tamamına* bağlı olmalı (bileşik anahtarlarda önemli).
3.  **3NF (Üçüncü Normal Form):**
    *   2NF şartları sağlanmalı.
    *   **Geçişli Bağımlılık (Transitive Dependency)** olmamalı: Bir sütun, başka bir sütuna değil, doğrudan anahtara bağlı olmalı (örn: PostaKodu varsa Şehir bilgisini ayrı tabloda tut, aynı tabloda tekrar etme).

### Denormalizasyon
Bazen okuma hızını artırmak ve pahalı JOIN işlemlerinden kaçınmak için bu kuralları bilerek bozarız. Veri ambarları ve Raporlama sistemleri (OLAP) genelde denormalize yapıdadır.`
    },
    realWorldUses: [],
    pros: [],
    cons: [],
    complexity: { time: "Write Optimized", space: "No Redundancy" },
    codeSnippet: `/* Example of Normalized Design */

Table: Users
- ID
- Name
- Address

Table: Orders
- ID
- User_ID (Foreign Key) -- References Users table
- Item
- Price

-- We don't store Name/Address in Orders table.`,
    questions: [],
  }
];

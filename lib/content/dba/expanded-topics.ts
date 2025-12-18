import { ContentItem } from "../types";

export const dbaExpandedContent: ContentItem[] = [
  // --- 1. CORE DATABASE CONCEPTS ---
  {
    id: "dba-sql-vs-nosql",
    title: { en: "SQL vs NoSQL", tr: "SQL vs NoSQL" },
    category: "Database Concept",
    domain: "DBA",
    summary: { en: "Deep dive into Relational vs Non-Relational paradigms.", tr: "İlişkisel vs İlişkisel Olmayan paradigmaların derinlemesine incelenmesi." },
    descriptionStandard: {
      en: "The choice between SQL and NoSQL is one of the most fundamental decisions in system design. It is not just about 'structure' vs 'flexibility'; it defines your scaling strategy, consistency model, and query capabilities.",
      tr: "SQL ve NoSQL arasındaki seçim, sistem tasarımındaki en temel kararlardan biridir. Bu sadece 'yapı' ve 'esneklik' meselesi değildir; ölçekleme stratejinizi, tutarlılık modelinizi ve sorgu yeteneklerinizi belirler."
    },
    descriptionELI5: {
      en: "Think of SQL like a highly organized filing cabinet system in a law firm. Every document has a specific folder, label, and format. If you want to file a document, it MUST match the rules. This makes finding things very fast and accurate. NoSQL is like a creative's messy desk or a laundry basket. You can throw anything in—photos, napkins with ideas, clothes. It's super fast to put things in, but if you need to find 'all receipts from last week', it might take a while to dig them out.",
      tr: "SQL'i bir hukuk bürosundaki aşırı düzenli dosya dolabı sistemi gibi düşünün. Her belgenin belirli bir klasörü, etiketi ve formatı vardır. Bir belge koymak isterseniz kurallara UYMALIDIR. Bu, aradığınızı bulmayı çok hızlı ve kesin yapar. NoSQL ise dağınık bir sanatçı masası veya çamaşır sepeti gibidir. İçine her şeyi atabilirsiniz—fotoğraflar, peçeteye yazılmış fikirler, kıyafetler. İçeri bir şey atmak çok hızlıdır ama 'geçen haftaki tüm fişleri' bulmanız gerekirse, onları ayıklamak zaman alabilir."
    },
    contentMarkdown: {
      en: `### 1. SQL (Relational Databases)
Relational databases (RDBMS) have been the standard for decades. They are built on Codd's relational model.
- **Key Characteristics**:
  - **Schema**: Rigid. You must define tables and columns before inserting data. \`ALTER TABLE\` is expensive.
  - **ACID**: Atomicity, Consistency, Isolation, Durability. Guaranteed validity of transactions.
  - **Normalization**: Data is broken down into small tables to reduce redundancy (3NF).
  - **Query Language**: SQL is powerful (complex JOINs, Aggregations, Window Functions).
- **When to use**: Financial systems, ERPs, CRM, or any app where data integrity is critical.
- **Examples**: PostgreSQL (Advanced), MySQL (Popular), SQL Server (Enterprise).

### 2. NoSQL (Non-Relational)
NoSQL rose with the web scale era (Google, Amazon, Facebook) when SQL databases struggled to scale horizontally.
- **Key Characteristics**:
  - **Schema-less**: Insert JSON, XML, or binary blobs. Structure can evolve on the fly.
  - **BASE**: Basically Available, Soft state, Eventual consistency. Prioritizes Availability over strict Consistency (CAP Theorem).
  - **Denormalization**: Data is often duplicated to optimize for read speed. "Read-heavy" optimization.
  - **Scaling**: Designed to run on clusters of commodity hardware (Horizontal Scaling).

### 3. Types of NoSQL
- **Document Stores (MongoDB, CouchDB)**: Stores mostly JSON. Great for CMS, Catalogs, User Profiles. allows indexing on nested fields.
- **Key-Value Stores (Redis, DynamoDB)**: The simplest model. \`get(key)\` and \`set(key, value)\`. Blazingly fast. Good for Caching, Sessions, Leaderboards.
- **Column-Family (Cassandra, HBase)**: Stores data in columns rather than rows. Optimized for massive WRITE throughput. Good for IoT logs, Chat history.
- **Graph Databases (Neo4j)**: Nodes and Edges. Optimized for relationships. Good for Social Networks, Fraud Detection, Recommendation Engines.

### Summary: Which one?
- Need ACID transactions? -> **SQL**
- Need complex JOINs? -> **SQL**
- Need extreme Write speed? -> **Cassandra (NoSQL)**
- Need flexible data structure? -> **MongoDB (NoSQL)**
- Need < 1ms response time? -> **Redis (NoSQL)**`,
      tr: `### 1. SQL (İlişkisel Veritabanları)
İlişkisel veritabanları (RDBMS) on yıllardır standarttır. Codd'un ilişkisel modeline dayanırlar.
- **Temel Özellikler**:
  - **Şema**: Katıdır. Veri girmeden önce tablo ve sütunları tanımlamanız gerekir. \`ALTER TABLE\` pahalı bir işlemdir.
  - **ACID**: Atomicity, Consistency, Isolation, Durability. İşlemlerin (%100) geçerliliğini garanti eder.
  - **Normalizasyon**: Veri tekrarını önlemek için küçük tablolara bölünür (3NF).
  - **Sorgu Dili**: SQL çok güçlüdür (Karmaşık JOIN'ler, Gruplamalar, Window Functions).
- **Ne zaman kullanılır?**: Finansal sistemler, ERP, CRM veya veri bütünlüğünün kritik olduğu her yer.
- **Örnekler**: PostgreSQL (Gelişmiş), MySQL (Popüler), SQL Server (Kurumsal).

### 2. NoSQL (İlişkisel Olmayan)
NoSQL, web ölçeği çağında (Google, Amazon, Facebook) SQL veritabanları yatay ölçeklemede zorlandığında yükselişe geçti.
- **Temel Özellikler**:
  - **Şemasız**: JSON, XML veya binary veri atabilirsiniz. Yapı anlık olarak değişebilir.
  - **BASE**: Basically Available, Soft state, Eventual consistency. Kesin Tutarlılık yerine Erişilebilirliği önceler (CAP Teoremi).
  - **Denormalizasyon**: Okuma hızını artırmak için veri genellikle kopyalanır (Duplicate edilir).
  - **Ölçekleme**: Ucuz donanımlardan oluşan kümeler (Cluster) üzerinde çalışmak üzere tasarlanmıştır (Yatay Ölçekleme).

### 3. NoSQL Türleri
- **Document Stores (MongoDB, CouchDB)**: Genellikle JSON saklar. CMS, Kataloglar, Kullanıcı Profilleri için harikadır. İç içe alanlarda indeksleme yapılabilir.
- **Key-Value Stores (Redis, DynamoDB)**: En basit model. \`al(anahtar)\` ve \`yaz(anahtar, değer)\`. Şimşek hızındadır. Önbellek (Cache), Oturumlar (Session), Liderlik Tabloları için iyidir.
- **Column-Family (Cassandra, HBase)**: Veriyi satır yerine sütun bazlı saklar. Muazzam YAZMA hızı için optimize edilmiştir. IoT logları, Sohbet geçmişi için iyidir.
- **Graph Databases (Neo4j)**: Düğümler ve Kenarlar. İlişkiler için optimize edilmiştir. Sosyal Ağlar, Sahtecilik Tespiti, Öneri Motorları için iyidir.

### Özet: Hangisini Seçmeli?
- ACID transaction lazım mı? -> **SQL**
- Karmaşık JOIN lazım mı? -> **SQL**
- Aşırı Yazma (Write) hızı mı lazım? -> **Cassandra (NoSQL)**
- Esnek veri yapısı mı lazım? -> **MongoDB (NoSQL)**
- 1ms altı yanıt süresi mi lazım? -> **Redis (NoSQL)**`
    },
    codeSnippet: `-- SQL: Structured Query
SELECT u.name, o.total 
FROM users u 
JOIN orders o ON u.id = o.user_id 
WHERE o.total > 100;

// NoSQL (Mongo): JSON Query
db.users.aggregate([
  { $lookup: { from: "orders", localField: "_id", foreignField: "user_id", as: "orders" } },
  { $match: { "orders.total": { $gt: 100 } } }
]);

// NoSQL (Redis): Key-Value
SET user:1001 '{"name":"Ali", "score":50}'`,
    complexity: { time: "Schema Rigidness", space: "Scaling Model" },
    questions: [], realWorldUses: [], pros: [], cons: []
  },
  {
    id: "dba-data-warehouse",
    title: { en: "Data Warehouse, Data Lake & ETL", tr: "Veri Ambarı, Veri Gölü & ETL" },
    category: "System Design",
    domain: "DBA",
    summary: { en: "Analyzing massive datasets with OLAP.", tr: "Büyük verilerin OLAP ile analizi." },
    descriptionStandard: {
      en: "Operational databases (OLTP) are optimized for transactions. Analytics databases (OLAP) are optimized for reading and grouping millions of rows. Understanding this separation is key to 'Big Data'.",
      tr: "Operasyonel veritabanları (OLTP) işlemler için optimize edilmiştir. Analitik veritabanları (OLAP) milyonlarca satırı okumak ve gruplamak için optimize edilmiştir. Bu ayrımı anlamak 'Büyük Veri'nin anahtarıdır."
    },
    descriptionELI5: {
      en: "Imagine a busy supermarket. The cash registers (OLTP) are optimized for checking people out FAST. They can't stop to calculate 'How many bananas did we sell last year?'. If they did, the line would stop. Instead, every night, they send their receipts to the Head Office (Data Warehouse). The analysts at Head Office have big computers designed to crunch these numbers without slowing down the checkout lines.",
      tr: "Yoğun bir süpermarket düşünün. Kasalar (OLTP) insanları HIZLICA geçirmek için tasarlanmıştır. Durup 'Geçen yıl kaç muz sattık?' diye hesap yapamazlar. Yaparlarsa kuyruk durur. Bunun yerine, her gece fişleri Merkez Ofise (Veri Ambarı) gönderirler. Merkezdeki analistlerin, kasaları yavaşlatmadan bu sayıları işlemek için tasarlanmış güçlü bilgisayarları vardır."
    },
    contentMarkdown: {
      en: `### 1. OLTP (Online Transaction Processing)
- **Purpose**: Run the business day-to-day.
- **Characteristics**: 
  - Many small transactions (INSERT, UPDATE, DELETE).
  - High concurrency.
  - Normalized schema (avoid redundancy).
- **Examples**: MySQL, PostgreSQL running your web app.

### 2. OLAP (Online Analytical Processing)
- **Purpose**: Analyze business performance.
- **Characteristics**:
  - Few massive queries (SELECT SUM...).
  - Historical data (Append-only).
  - Columnar Storage (Reads only relevant columns, huge speed boost).
- **Examples**: Snowflake, Google BigQuery, Amazon Redshift, ClickHouse.

### 3. Data Warehouse vs Data Lake
- **Data Warehouse**: Clean, structured (Schema-on-Write). High quality data. Used for BI Reporting.
- **Data Lake (S3, HDFS)**: Raw, unstructured (Schema-on-Read). Dump everything here (Logs, Images, CSVs). Used for Machine Learning.

### 4. ETL vs ELT
- **ETL (Extract, Transform, Load)**: Old school. Extract data, clean it on a server, then load into Warehouse. Hard to maintain.
- **ELT (Extract, Load, Transform)**: Modern. Extract and Dump raw data into Warehouse (Snowflake). Then use SQL/DBT inside the Warehouse to transform it. Leveraging the Warehouse's power.`,
      tr: `### 1. OLTP (Online Transaction Processing)
- **Amaç**: İşletmeyi günlük olarak yürütmek.
- **Özellikler**: 
  - Çok sayıda küçük işlem (EKLE, GÜNCELLE, SİL).
  - Yüksek eşzamanlılık (Concurrency).
  - Normalize şema (tekrar yok).
- **Örnekler**: Web uygulamanızı çalıştıran MySQL, PostgreSQL.

### 2. OLAP (Online Analytical Processing)
- **Amaç**: İşletme performansını analiz etmek.
- **Özellikler**:
  - Az sayıda devasa sorgu (TOPLA, ORTALAMA AL...).
  - Tarihsel veri (Genelde sadece ekleme yapılır).
  - Kolon Bazlı Depolama (Sadece ilgili kolonları okur, devasa hız artışı sağlar).
- **Örnekler**: Snowflake, Google BigQuery, Amazon Redshift, ClickHouse.

### 3. Veri Ambarı (Warehouse) vs Veri Gölü (Lake)
- **Data Warehouse**: Temiz, yapısal (Yazarken Şema). Yüksek kaliteli veri. Raporlama için kullanılır.
- **Data Lake (S3, HDFS)**: Ham, yapısal olmayan (Okurken Şema). Her şeyi buraya dök (Loglar, Resimler, CSV). Yapay Zeka/ML için kullanılır.

### 4. ETL vs ELT
- **ETL (Transform before Load)**: Eski yöntem. Veriyi al, sunucuda işle/temizle, sonra Ambara yükle. Bakımı zordur.
- **ELT (Load before Transform)**: Modern yöntem. Ham veriyi olduğu gibi Ambara (Snowflake) yükle. Sonra Ambarın gücünü kullanarak içeride dönüştür (SQL veya DBT ile).`
    },
    codeSnippet: `// Python: Simple ETL Script
import pandas as pd
import sqlalchemy

# 1. EXTRACT
users = pd.read_sql("SELECT * FROM users", oltp_db)

# 2. TRANSFORM
users['email'] = users['email'].apply(lambda x: x.lower())
users = users[users['active'] == True]

# 3. LOAD
users.to_sql("dim_users", olap_warehouse, if_exists='append')`,
    complexity: { time: "Batch", space: "Petabytes" },
    questions: [], realWorldUses: [], pros: [], cons: []
  },
  
  // --- 2. SYSTEM DESIGN & DISTRIBUTED SYSTEMS ---
  {
    id: "dba-distributed-systems",
    title: { en: "Distributed Systems Fallacies", tr: "Dağıtık Sistem Yanılgıları" },
    category: "System Design",
    domain: "DBA",
    summary: { en: "Why networks fail and latency kills.", tr: "Ağ neden bozulur ve gecikme neden öldürür." },
    descriptionStandard: {
      en: "Programmers new to distributed systems often make false assumptions: 'The network is reliable', 'Latency is zero', 'Bandwidth is infinite'. Reality is much harsher. Packets get lost, sharks bit undersea cables, and garbage collection pauses servers.",
      tr: "Dağıtık sistemlere yeni başlayan programcılar genellikle yanlış varsayımlarda bulunurlar: 'Ağ güvenilirdir', 'Gecikme sıfırdır', 'Bant genişliği sonsuzdur'. Gerçek çok daha acımasızdır. Paketler kaybolur, köpekbalıkları denizaltı kablolarını ısırır ve Garbage Collection sunucuları durdurur."
    },
    descriptionELI5: {
      en: "Imagine trying to conduct an orchestra where every musician is in a different building and they join via Zoom call. Sometimes the internet freezes. Sometimes the drummer hears the conductor 2 seconds late. It's chaos. Distributed Systems is the art of making this orchestra sound good despite the lag.",
      tr: "Her müzisyenin farklı bir binada olduğu ve Zoom üzerinden katıldığı bir orkestrayı yönetmeye çalıştığınızı hayal edin. Bazen internet donar. Bazen davulcu şefi 2 saniye geç duyar. Tam bir kaos. Dağıtık Sistemler, bu gecikmelere rağmen orkestranın güzel duyulmasını sağlama sanatıdır."
    },
    contentMarkdown: {
      en: `### The 8 Fallacies of Distributed Computing
1.  **The network is reliable**: It's not. Timeout handling is mandatory.
2.  **Latency is zero**: Going to DB takes time. Going to another region takes 100x more time.
3.  **Bandwidth is infinite**: Sending huge JSON blobs will clog the pipes.
4.  **The network is secure**: Assume hackers are sniffing traffic. Use TLS/SSL everywhere.
5.  **Topology doesn't change**: Servers allow IP changes. DNS is your friend.
6.  **There is one admin**: No, access rights vary.
7.  **Transport cost is zero**: Serialization/Deserialization (JSON.parse) burns CPU.
8.  **The network is homogeneous**: Some servers are fast, some are slow hardware.

### Latency Numbers (Every Engineer Should Know)
- **L1 Cache**: 0.5 ns
- **RAM**: 100 ns
- **Read 1MB from Memory**: 250,000 ns
- **Send 2K over Network**: 150,000,000 ns
*Notice the network is ~1000x slower than RAM.*

### Handling Failures
- **Retry Pattern**: Try again (but use Exponential Backoff!).
- **Circuit Breaker**: If service fails 5 times, stop calling it for 1 minute.
- **Idempotency**: Retrying a payment should not charge the user twice.`,
      tr: `### Dağıtık Bilişimin 8 Yanılgısı
1.  **Ağ güvenilirdir**: Değildir. Timeout (zaman aşımı) yönetimi zorunludur.
2.  **Gecikme (Latency) sıfırdır**: DB'ye gitmek zaman alır. Başka ülkedeki sunucuya gitmek 100 kat daha fazla zaman alır.
3.  **Bant genişliği sonsuzdur**: Devasa JSON verileri göndermek boruları tıkar.
4.  **Ağ güvenlidir**: Bilgisayar korsanlarının trafiği izlediğini varsayın. Her yerde TLS/SSL kullanın.
5.  **Topoloji değişmez**: Sunucuların IP'si değişir. DNS kullanın.
6.  **Tek bir yönetici vardır**: Hayır, erişim hakları karışıktır.
7.  **Taşıma maliyeti sıfırdır**: Serileştirme (JSON.stringify/parse) CPU yakar.
8.  **Ağ homojendir**: Bazı sunucular hızlı, bazıları yavaş donanımdır.

### Gecikme Sayıları (Her Mühendis Bilmeli)
- **L1 Cache**: 0.5 ns
- **RAM**: 100 ns
- **Bellekten 1MB Oku**: 250,000 ns
- **Ağdan 2KB Gönder**: 150,000,000 ns
*Dikkat: Ağ, RAM'den ~1000 kat daha yavaştır.*

### Hata Yönetimi
- **Retry (Tekrar Dene)**: Tekrar dene (ama Exponential Backoff ile, sürekli vurma!).
- **Circuit Breaker (Sigorta)**: Servis 5 kere hata verirse, 1 dakika boyunca hiç çağırma.
- **Idempotency (Etkisizlik)**: Bir ödeme isteğini tekrar yollamak, kullanıcıdan iki kere para çekmemelidir.`
    },
    codeSnippet: `// Exponential Backoff Algorithm
async function callApi(retries = 3, delay = 1000) {
  try {
    return await fetch('/api/data');
  } catch (err) {
    if (retries === 0) throw err;
    console.log(\`Retrying in \${delay}ms...\`);
    await sleep(delay);
    return callApi(retries - 1, delay * 2); // Double the delay
  }
}`,
    complexity: { time: "Network Time", space: "Decentralized" },
    questions: [], realWorldUses: [], pros: [], cons: []
  },
  {
    id: "dba-eventual-consistency",
    title: { en: "Strong vs Eventual Consistency", tr: "Güçlü vs Nihai Tutarlılık" },
    category: "System Design",
    domain: "DBA",
    summary: { en: "CAP Theorem and Consistency Models.", tr: "CAP Teoremi ve Tutarlılık Modelleri." },
    descriptionStandard: {
      en: "In a distributed system, you cannot have everything. The CAP Theorem states you must choose between Consistency (Strong) or Availability (Eventual) when a network partition happens. Understanding this trade-off is critical for database selection.",
      tr: "Dağıtık bir sistemde her şeye sahip olamazsınız. CAP Teoremi, bir ağ kopması (Partition) durumunda Tutarlılık (Consistency) veya Erişilebilirlik (Availability) arasında seçim yapmanız gerektiğini söyler. Veritabanı seçiminde bu takası anlamak kritiktir."
    },
    descriptionELI5: {
      en: "The 'Wedding Invite' Problem. You want to tell everyone the wedding date changed. \nOption A (Strong Consistency): You lock everyone in a room and don't let them leave until they all agree on the new date. Nobody can 'work' while locked up. \nOption B (Eventual Consistency): You send a message via pigeons. Some people know the new date, some think it's the old date. Eventually, everyone knows, but for a few days, there is confusion. But everyone can keep working.",
      tr: "'Düğün Davetiyesi' Problemi. Düğün tarihinin değiştiğini herkese söylemek istiyorsun. \nSeçenek A (Güçlü Tutarlılık): Herkesi bir odaya kilitlersin ve herkes yeni tarihi onaylayana kadar çıkmalarına izin vermezsin. Kimse kilitliyken 'iş yapamaz'. \nSeçenek B (Nihai Tutarlılık): Güvercinle haber yollarsın. Bazıları yeni tarihi bilir, bazıları eskiyi. 'Sonunda' herkes öğrenir ama arada karışıklık olur. Fakat herkes işine devam edebilir."
    },
    contentMarkdown: {
      en: `### CAP Theorem
- **C - Consistency**: Every read receives the most recent write or an error.
- **A - Availability**: Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
- **P - Partition Tolerance**: The system continues to operate despite an arbitrary number of messages being dropped or delayed by the network.
*Reality: P is unavoidable. So you choose CP (consistency) or AP (availability).*

### Consistency Levels
1.  **Strong Consistency (CP)**: (e.g., Banking). Users never see stale data. System might block/fail if sync is broken. (SQL, HBase).
2.  **Eventual Consistency (AP)**: (e.g., Instagram Likes). Users might see "10 likes" while others see "12". It fixes itself later. (Cassandra, DynamoDB).
3.  **Causal Consistency**: "Answers to comments appear after the comment". Middle ground.

### Conflict Resolution
When two users edit the same Wiki page at the same time in an AP system, who wins?
- **Last Write Wins (LWW)**: Based on timestamp. Dangerous (data loss).
- **CRDTs (Conflict-free Replicated Data Types)**: Mathematically mergeable data types.`,
      tr: `### CAP Teoremi (Brewer)
- **C - Consistency (Tutarlılık)**: Her okuma en son yazılan veriyi alır veya hata döner (eski veri asla dönmez).
- **A - Availability (Erişilebilirlik)**: Her istek mutlaka bir cevap alır (hata almaz), ama veri güncel olmayabilir.
- **P - Partition Tolerance (Bölünme Toleransı)**: Ağ kopsa bile sistem çalışmaya devam eder.
*Gerçek: P kaçınılmazdır. Yani ya CP (Tutarlı ama yavaş/durabilir) ya da AP (Hızlı ama tutarsız olabilir) seçersiniz.*

### Tutarlılık Seviyeleri
1.  **Güçlü Tutarlılık (CP)**: (Örn: Bankacılık). Kullanıcı asla eski bakiye görmez. Senkronizasyon koparsa sistem durur. (SQL, HBase).
2.  **Nihai Tutarlılık (AP)**: (Örn: Instagram Beğenileri). Biri "10 beğeni" görürken diğeri "12" görebilir. Sonradan düzelir. (Cassandra, DynamoDB).
3.  **Nedensel (Causal) Tutarlılık**: "Yoruma gelen cevap, yorumdan sonra görünmelidir". Ara yol.

### Çakışma Çözümü (Conflict Resolution)
İki kullanıcı aynı anda Wiki sayfasını düzenlerse (AP sistemde), kim kazanır?
- **Last Write Wins (LWW)**: Zaman damgasına bakılır. Tehlikelidir (veri kaybı).
- **CRDTs**: Matematiksel olarak birleştirilebilir veri tipleri.`
    },
    codeSnippet: `// DynamoDB Configuration
// Consistency Mode is selectable per query

// 1. Eventual Consistency (Default, Cheaper, Faster)
const item = await dynamoDb.get({ 
    TableName: 'Users', 
    Key: { id: 1 },
    ConsistentRead: false 
});

// 2. Strong Consistency (Slower, 2x Cost)
const item = await dynamoDb.get({ 
    TableName: 'Users', 
    Key: { id: 1 },
    ConsistentRead: true 
});`,
    complexity: { time: "Sync Delay", space: "AP Model" },
    questions: [], realWorldUses: [], pros: [], cons: []
  },
];

import { ContentItem } from "../types";

export const dataStructures: ContentItem[] = [
  {
    id: "ds-array",
    title: { en: "Array (Dynamic)", tr: "Array (Dynamic)" },
    category: "Data Structure",
    domain: "DSA",
    level: "Junior",
    summary: { 
        en: "Contiguous memory with resizing logic.",
        tr: "Boyutlandırma mantığına sahip ardışık bellek."
    },
    descriptionStandard: {
        en: "Arrays store elements in contiguous memory location.",
        tr: "Diziler elemanları ardışık bellekte saklar."
    },
    descriptionELI5: {
        en: "Imagine a row of numbered seats in a movie theater. Everyone sits in a straight line. If the theater gets full and a new friend wants to join, you can't just squeeze them in; everyone has to move to a bigger theater! Finding seat #5 is super fast because you just count to 5, but moving to a new building takes a long time.",
        tr: "Bir sinema salonundaki numaralı koltukları düşün. Herkes yan yana oturuyor. Eğer salon dolarsa ve yeni bir arkadaş gelirse, onu araya sıkıştıramazsın; herkesin daha büyük bir salona taşınması gerekir! 5 numaralı koltuğu bulmak çok kolaydır, ama tüm salonu taşımak zaman alır."
    },
    contentMarkdown: {
        en: `### Definition
A **Dynamic Array** (like \`ArrayList\` in Java or \`list\` in Python) is a contiguous block of memory that can grow in size. Unlike static arrays, you don't need to specify the size upfront.

### How Resizing Works
When you create a dynamic array, it allocates a small fixed block (e.g., size 4).
1. When you add elements, it fills these slots.
2. If you try to add an element when it's **full**, it triggers a **resize operation**.
3. It creates a **new array** with double the capacity (e.g., 8).
4. It **copies** all existing elements to the new array.
5. It deletes the old array (garbage collection).

### Complexity Analysis
- **Access**: \`O(1)\` - Mathematical calculation of memory address.
- **Append**: \`O(1)\` amortized. Most writes are fast. Only occasional writes trigger the \`O(N)\` resize.
- **Insert/Delete (Middle)**: \`O(N)\` - Requires shifting subsequent elements.`,
        tr: `### Tanım
**Dinamik Dizi** (Java'daki \`ArrayList\` veya Python'daki \`list\` gibi), boyutu büyüyebilen ardışık bir bellek bloğudur. Statik dizilerin aksine, boyutu baştan belirtmeniz gerekmez.

### Yeniden Boyutlandırma (Resizing) Nasıl Çalışır?
Bir dinamik dizi oluşturduğunuzda, küçük ve sabit bir blok (örn: boyut 4) ayrılır.
1. Eleman eklediğinizde bu yuvalar dolar.
2. Dizi **doluyken** yeni eleman eklemeye çalışırsanız, **resize işlemi** tetiklenir.
3. Kapasitesi iki katına (örn: 8) çıkarılmış **yeni bir dizi** oluşturulur.
4. Mevcut tüm elemanlar yeni diziye **kopyalanır**.
5. Eski dizi silinir (garbage collection).

### Karmaşıklık Analizi
- **Erişim (Access)**: \`O(1)\` - Bellek adresi matematiksel olarak hesaplanır.
- **Ekleme (Append)**: \`O(1)\` amortize edilmiş. Çoğu yazma işlemi hızlıdır. Sadece nadiren yapılan \`O(N)\` resize işlemi maliyetlidir.
- **Araya Ekleme/Silme**: \`O(N)\` - Takip eden elemanların kaydırılmasını (shift) gerektirir.`
    },
    realWorldUses: [
        { en: "Storing pixel data for images (Buffer)", tr: "Görüntü işleme için piksel verilerinin saklanması (Buffer)" },
        { en: "Lookup tables/Matrices in scientific computing", tr: "Bilimsel hesaplamalarda arama tabloları ve matrisler" },
        { en: "Building blocks for other structures (Heaps, HashTables)", tr: "Diğer veri yapılarının (Heap, HashTable) temel taşı" }
    ],
    pros: [
        { en: "O(1) Random Access via index", tr: "İndeks ile O(1) rastgele erişim" },
        { en: "Cache friendliness (spatial locality)", tr: "Önbellek dostu (mekansal yerellik)" }
    ],
    cons: [
        { en: "O(N) deletion/insertion in the middle (shifting required)", tr: "Ortadan silme/ekleme O(N) maliyetlidir (kaydırma gerekir)" },
        { en: "Fixed initial size (resizing is costly)", tr: "Sabit başlangıç boyutu (boyutlandırma maliyetlidir)" }
    ],
    complexity: { time: "Access: O(1), Resize: O(N)", space: "O(N)" },
    codeSnippet: `class DynamicArray<T> {
    private data: { [index: number]: T };
    private capacity: number;
    length: number;

    constructor(initialCapacity: number = 2) {
        this.data = {};
        this.capacity = initialCapacity;
        this.length = 0;
    }

    get(index: number): T | undefined {
        return this.data[index];
    }

    push(item: T): void {
        // 1. Check if array needs resizing
        if (this.length === this.capacity) {
            this.resize(this.capacity * 2);
        }
        // 2. Insert item
        this.data[this.length] = item;
        this.length++;
    }

    private resize(newCapacity: number): void {
        const newData: { [index: number]: T } = {};
        // Copy all existing items to new storage
        for (let i = 0; i < this.length; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
        this.capacity = newCapacity;
        console.log(\`Resized to \${newCapacity}\`);
    }
}

const arr = new DynamicArray<string>();
arr.push("A");
arr.push("B");
arr.push("C"); // Triggers resize!`,
    questions: [
        { id: 1, title: "Two Sum", difficulty: "Easy", url: "https://leetcode.com/problems/two-sum/" },
        { id: 121, title: "Best Time to Buy and Sell Stock", difficulty: "Easy", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        { id: 11, title: "Container With Most Water", difficulty: "Medium", url: "https://leetcode.com/problems/container-with-most-water/" },
        { id: 53, title: "Maximum Subarray", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-subarray/" },
        { id: 41, title: "First Missing Positive", difficulty: "Hard", url: "https://leetcode.com/problems/first-missing-positive/" },
        { id: 42, title: "Trapping Rain Water", difficulty: "Hard", url: "https://leetcode.com/problems/trapping-rain-water/" }
    ],
  },
  {
    id: "ds-linked-list",

    title: { en: "Linked List", tr: "Linked List" },
    category: "Data Structure",
    domain: "DSA",
    level: "Junior",
    summary: {
        en: "Nodes connected by pointers.",
        tr: "İşaretçilerle (pointer) birbirine bağlı düğümler."
    },
    descriptionStandard: {
        en: "Manual implementation of a Singly Linked List.",
        tr: "Tek Bağlı Liste implementasyonu."
    },
    descriptionELI5: {
        en: "Imagine a treasure hunt where each clue leads you to the next location. You have the first clue in your hand, which tells you where to find the box. Inside that box is a toy AND a note telling you where the next box is. You can't skip to the end; you have to follow the chain of clues one by one!",
        tr: "Bir hazine avı düşün. Elindeki ilk ipucu seni bir kutuya götürür. O kutunun içinde hem bir oyuncak hem de bir sonraki kutunun nerede olduğunu söyleyen bir not vardır. En sona atlayamazsın; ipuçlarını tek tek takip etmen gerekir!"
    },
    contentMarkdown: {
        en: `### Definition
A **Linked List** is a linear data structure where elements are not stored at contiguous memory locations. Instead, each element (Node) contains a pointer to the next element.

### Architecture
- **Head**: The entry point to the list.
- **Node**: A container consisting of data and a reference (pointer) to the next node.
- **Tail** (Optional): A pointer to the last node for O(1) appends.

### Why use it?
Linked lists excel at insertions and deletions. In an array, inserting at index 0 requires shifting N elements (O(N)). In a Linked List, it's just updating the \`head\` pointer (O(1)).`,
        tr: `### Tanım
**Bağlı Liste (Linked List)**, elemanların bellekte ardışık olarak tutulmadığı doğrusal bir veri yapısır. Bunun yerine, her eleman (Düğüm/Node) bir sonraki elemana bir işaretçi (pointer) tutar.

### Mimari
- **Head (Baş)**: Listeye giriş noktası.
- **Node (Düğüm)**: Veriyi ve sonraki düğümün referansını tutan yapı.
- **Tail (Kuyruk)** (Opsiyonel): Listenin sonuna O(1) ile ekleme yapmak için son düğümü tutan işaretçi.

### Neden Kullanılır?
Bağlı listeler ekleme ve silme işlemlerinde mükemmeldir. Bir dizide en başa eleman eklemek için N elemanı kaydırmanız gerekir (O(N)). Bağlı listede ise sadece \`head\` işaretçisini güncellemeniz yeterlidir (O(1)).`
    },
    realWorldUses: [
        { en: "Implementing file systems (FAT)", tr: "Dosya sistemlerinin (FAT) implementasyonu" },
        { en: "Adjacency lists for Graphs", tr: "Çizgeler (Graph) için komşuluk listeleri" },
        { en: "Memory allocation (malloc/free blocks)", tr: "Bellek tahsisi (malloc/free blokları)" }
    ],
    pros: [
        { en: "O(1) insertion/deletion (if pointer is known)", tr: "Ekleme/Silme O(1) (işaretçi biliniyorsa)" },
        { en: "Dynamic size (no realloc overhead)", tr: "Dinamik boyut (yeniden boyutlandırma yükü yok)" }
    ],
    cons: [
        { en: "O(N) Access (Sequential traversal only)", tr: "Erişim O(N) (Sadece sıralı gezinilebilir)" },
        { en: "Extra memory for pointers", tr: "İşaretçiler için ekstra bellek kullanımı" }
    ],
    complexity: { time: "Access: O(N), Insert: O(1)", space: "O(N)" },
    codeSnippet: `class Node<T> {
    value: T;
    next: Node<T> | null = null;
    constructor(val: T) { this.value = val; }
}

class LinkedList<T> {
    head: Node<T> | null = null;
    tail: Node<T> | null = null;

    append(value: T): void {
        const newNode = new Node(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    prepend(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    find(value: T): Node<T> | null {
        let current = this.head;
        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }

    delete(value: T): void {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            if (!this.head) this.tail = null;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                if (!current.next) this.tail = current;
                return;
            }
            current = current.next;
        }
    }
}`,
    questions: [
        { id: 206, title: "Reverse Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-linked-list/" },
        { id: 21, title: "Merge Two Sorted Lists", difficulty: "Easy", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
        { id: 19, title: "Remove Nth Node From End of List", difficulty: "Medium", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
        { id: 2, title: "Add Two Numbers", difficulty: "Medium", url: "https://leetcode.com/problems/add-two-numbers/" },
        { id: 23, title: "Merge k Sorted Lists", difficulty: "Hard", url: "https://leetcode.com/problems/merge-k-sorted-lists/" },
        { id: 25, title: "Reverse Nodes in k-Group", difficulty: "Hard", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/" }
    ],
  },
  {
    id: "ds-stack",
    title: { en: "Stack (Node Based)", tr: "Stack (Node Based)" },
    category: "Data Structure",
    domain: "DSA",
    level: "Junior",
    summary: {
        en: "LIFO implementation using Nodes.",
        tr: "Node'lar kullanılarak yapılan LIFO implementasyonu."
    },
    descriptionStandard: {
        en: "Implementing a Stack using a Linked List.",
        tr: "Bağlı Liste kullanarak Stack implementasyonu."
    },
    descriptionELI5: {
        en: "Think of a stack of plates at a buffet. You can only take the top plate, and if you wash a new one, you put it on the very top. You can't pull a plate from the bottom without everything crashing down! The last plate you put on is the first one you take off (LIFO).",
        tr: "Yemekhanedeki tabak yığınını düşün. Sadece en üstteki tabağı alabilirsin. Yeni bir tabak yıkadığında onu en üste koyarsın. En alttan tabak çekmeye çalışırsan her şey devrilir! En son koyduğun tabağı ilk sen alırsın (LIFO)."
    },
    contentMarkdown: {
        en: `### Definition
A **Stack** is a linear data structure that follows the **LIFO** (Last In, First Out) principle. The last element added is the first one to be removed.

### Implementation Styles
1. **Array Based**: Uses a dynamic array. Fast, but occasional resizing lag.
2. **Node Based** (This implementation): Uses a Linked List.
   - **Push**: Prepend to head.
   - **Pop**: Remove head.
   - Guaranteed **O(1)** time for every operation, no resizing spikes.

### Usage
Stacks are fundamental to how computers run code. Every time you call a function, your local variables are pushed onto the "Call Stack". When the function returns, they are popped off.`,
        tr: `### Tanım
**Stack (Yığın)**, **LIFO** (Last In, First Out / Son Giren İlk Çıkar) prensibine göre çalışan doğrusal bir veri yapısır. Eklenen son eleman, çıkarılan ilk eleman olur.

### Uygulama Yöntemleri
1. **Dizi Tabanlı**: Dinamik dizi kullanır. Hızlıdır ancak ara sıra boyutlandırma gecikmesi yaşanır.
2. **Node Tabanlı** (Bu implementasyon): Bağlı Liste kullanır.
   - **Push**: Listenin başına ekle (Prepend).
   - **Pop**: Listenin başını sil.
   - Her işlem için **O(1)** garantilidir, boyutlandırma maliyeti yoktur.

### Kullanım
Yığınlar bilgisayarların çalışma mantığının temelidir. Her fonksiyon çağırdığınızda, yerel değişkenleriniz "Call Stack" (Çağrı Yığını) üzerine eklenir. Fonksiyon bittiğinde yığından silinir.`
    },
    realWorldUses: [
        { en: "Expression Evaluation / Syntax Parsing", tr: "İfade Değerlendirme / Sözdizimi Ayrıştırma" },
        { en: "Browser History (Back Button)", tr: "Tarayıcı Geçmişi (Geri Butonu)" },
        { en: "Function Call Stack & Recursion", tr: "Fonksiyon Çağrı Yığını & Özyineleme (Recursion)" }
    ],
    pros: [
        { en: "Strict LIFO order control", tr: "Katı LIFO (Son Giren İlk Çıkar) düzeni" },
        { en: "O(1) constant time operations", tr: "Tüm işlemler O(1) sabit sürede" }
    ],
    cons: [
        { en: "No random access to elements", tr: "Elemanlara rastgele erişim yoktur" },
        { en: "Stack Overflow risk in recursion", tr: "Özyinelemede 'Stack Overflow' riski" }
    ],
    complexity: { time: "Push/Pop: O(1)", space: "O(N)" },
    codeSnippet: `class Node<T> {
    value: T;
    next: Node<T> | null = null;
    constructor(val: T) { this.value = val; }
}

class Stack<T> {
    private top: Node<T> | null = null;
    size: number = 0;

    push(val: T): void {
        const newNode = new Node(val);
        // New node points to current top
        newNode.next = this.top;
        // Top becomes new node
        this.top = newNode;
        this.size++;
    }

    pop(): T | null {
        if (!this.top) return null;
        const val = this.top.value;
        // Move top pointer down
        this.top = this.top.next;
        this.size--;
        return val;
    }
    
    peek(): T | null {
        return this.top ? this.top.value : null;
    }
}
// NO Array.pop() used! Pure pointer logic.`,
    questions: [
        { id: 20, title: "Valid Parentheses", difficulty: "Easy", url: "https://leetcode.com/problems/valid-parentheses/" },
        { id: 155, title: "Min Stack", difficulty: "Easy", url: "https://leetcode.com/problems/min-stack/" },
        { id: 739, title: "Daily Temperatures", difficulty: "Medium", url: "https://leetcode.com/problems/daily-temperatures/" },
        { id: 150, title: "Evaluate Reverse Polish Notation", difficulty: "Medium", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
        { id: 84, title: "Largest Rectangle in Histogram", difficulty: "Hard", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
        { id: 224, title: "Basic Calculator", difficulty: "Hard", url: "https://leetcode.com/problems/basic-calculator/" }
    ],
  },
  {
    id: "ds-queue",
    title: { en: "Queue (Node Based)", tr: "Queue (Node Based)" },
    category: "Data Structure",
    domain: "DSA",
    level: "Junior",
    summary: {
        en: "FIFO implementation using Head/Tail pointers.",
        tr: "Baş/Son işaretçileri kullanan FIFO implementasyonu."
    },
    descriptionStandard: {
        en: "Implementing Queue with Nodes to avoid O(N) shift operations.",
        tr: "Dizilerdeki O(N) kaydırma işleminden kaçınmak için Node'lar ile Kuyruk."
    },
    descriptionELI5: {
        en: "Imagine a line of kids waiting for the ice cream truck. The kid who arrived first gets their ice cream first. If you join the line, you go to the back. It wouldn't be fair if the person who just arrived cut in front of everyone! (FIFO)",
        tr: "Dondurmacının önünde sıraya girmiş çocukları düşün. İlk gelen çocuk dondurmayı ilk alır. Eğer sıraya girersen, en arkaya geçersin. Yeni gelenin en öne geçmesi haksızlık olurdu! (FIFO)"
    },
    contentMarkdown: {
        en: `### Definition
A **Queue** is a linear structure following the **FIFO** (First In, First Out) principle. It's like a lineup at a grocery store.

### The Array Problem
If you implement a Queue using an Array:
- **Enqueue (push)** is O(1).
- **Dequeue (shift)** removes the first element (index 0). This forces all other elements to shift left by 1. This is **O(N)**, which is very slow for large queues.

### The Linked List Solution
By using pointers:
- We keep a **Head** pointer (front) and **Tail** pointer (back).
- **Enqueue**: Add to Tail. Update Tail pointer. O(1).
- **Dequeue**: Remove Head. Update Head pointer. O(1).
No shifting required!`,
        tr: `### Tanım
**Queue (Kuyruk)**, **FIFO** (First In, First Out / İlk Giren İlk Çıkar) prensibine göre çalışan doğrusal bir yapıdır. Market sırası gibidir.

### Dizi Problemi
Eğer dizileri kullanarak bir Kuyruk yaparsanız:
- **Ekleme (push)** O(1)'dir.
- **Çıkarma (shift)** ilk elemanı (index 0) siler. Bu, kalan tüm elemanların sola 1 birim kaymasını gerektirir. Bu işlem **O(N)**'dir ve büyük kuyruklarda çok yavaştır.

### Bağlı Liste Çözümü
İşaretçiler (pointers) kullanarak:
- Bir **Head (Baş)** ve **Tail (Son)** işaretçisi tutarız.
- **Ekleme**: Son'a ekle. Tail işaretçisini güncelle. O(1).
- **Çıkarma**: Baş'ı sil. Head işaretçisini güncelle. O(1).
Hiçbir kaydırma işlemi gerekmez!`
    },
    realWorldUses: [
        { en: "Job Scheduling (CPU, Print Spoolers)", tr: "İş Zamanlama (CPU, Yazıcı Kuyrukları)" },
        { en: "Breadth-First Search (BFS) in Graphs", tr: "Çizgelerde BFS (Genişlik Öncelikli Arama)" },
        { en: "Message Brokers (Kafka, RabbitMQ)", tr: "Mesaj Kuyruk Sistemleri (Kafka, RabbitMQ)" }
    ],
    pros: [
        { en: "Fairness (First Come First Serve)", tr: "Adil sıralama (İlk gelen ilk hizmet alır)" },
        { en: "Handles asynchronous data flow", tr: "Asenkron veri akışını yönetir" }
    ],
    cons: [
        { en: "No random access", tr: "Rastgele erişim yok" },
        { en: "Blocking in limiting buffer scenarios", tr: "Sınırlı tampon senaryolarında bloklama yapabilir" }
    ],
    complexity: { time: "Enqueue/Dequeue: O(1)", space: "O(N)" },
    codeSnippet: `class Node<T> {
    value: T;
    next: Node<T> | null = null;
    constructor(val: T) { this.value = val; }
}

class Queue<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;

    enqueue(val: T): void {
        const newNode = new Node(val);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue(): T | null {
        if (!this.head) return null;
        const val = this.head.value;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        return val;
    }
}`,
    questions: [
        { id: 933, title: "Number of Recent Calls", difficulty: "Easy", url: "https://leetcode.com/problems/number-of-recent-calls/" },
        { id: 225, title: "Implement Stack using Queues", difficulty: "Easy", url: "https://leetcode.com/problems/implement-stack-using-queues/" },
        { id: 622, title: "Design Circular Queue", difficulty: "Medium", url: "https://leetcode.com/problems/design-circular-queue/" },
        { id: 649, title: "Dota2 Senate", difficulty: "Medium", url: "https://leetcode.com/problems/dota2-senate/" },
        { id: 239, title: "Sliding Window Maximum", difficulty: "Hard", url: "https://leetcode.com/problems/sliding-window-maximum/" },
        { id: 862, title: "Shortest Subarray with Sum at Least K", difficulty: "Hard", url: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/" }
    ],
  },
  {
    id: "ds-hashmap",
    title: { en: "HashTable (From Scratch)", tr: "HashTable (From Scratch)" },
    category: "Data Structure",
    domain: "DSA",
    level: "Junior",
    summary: {
        en: "Hash function and collision handling (Chaining).",
        tr: "Hash fonksiyonu ve çakışma yönetimi (Zincirleme)."
    },
    descriptionStandard: {
        en: "Implementation of a Hash Table using a bucket array.",
        tr: "Kova (bucket) dizisi kullanarak Hash Table implementasyonu."
    },
    descriptionELI5: {
        en: "Imagine a giant library where every book has a magic code. Instead of searching every shelf, you type the code into a computer, and it tells you EXACTLY which shelf and slot the book is in. Instant finding, no matter how big the library is!",
        tr: "Her kitabın sihirli bir kodunun olduğu dev bir kütüphane düşün. Rafları tek tek aramak yerine, kodu bilgisayara giriyorsun ve o sana kitabın tam olarak hangi rafta olduğunu söylüyor. Kütüphane ne kadar büyük olursa olsun, kitabı anında buluyorsun!"
    },
    contentMarkdown: {
        en: `### Definition
A **Hash Table** maps keys to values for highly efficient lookups. Ideally, it provides **O(1)** access time.

### How it Works
1. **Hash Function**: Converts a key (string/obj) into a number (index).
2. **Bucket Array**: Uses that index to store the value in an array.

### The Collision Problem
What if \`hash("apple")\` is 5 and \`hash("banana")\` is also 5? This is a **collision**.
We solve this using **Separate Chaining**:
- Each slot (bucket) in the array is actually a **Linked List** (or array).
- If collision happens, we just append the newItem to that list.
- To find an item, we go to index 5, then search the small list.`,
        tr: `### Tanım
**Hash Table**, anahtarları değerlerle eşleştiren ve çok hızlı erişim sağlayan bir yapıdır. İdeal durumda **O(1)** erişim süresi sunar.

### Nasıl Çalışır?
1. **Hash Fonksiyonu**: Anahtarı (key) alır ve bir sayıya (index) dönüştürür.
2. **Bucket (Kova) Dizisi**: Değeri saklamak için bu indeksi kullanır.

### Çakışma (Collision) Problemi
Ya \`hash("elma")\` 5 verirse ve \`hash("muz")\` da 5 verirse? Buna **çakışma** denir.
Bunu **Zincirleme (Separate Chaining)** ile çözeriz:
- Dizideki her yuva (bucket) aslında bir **Bağlı Liste** (veya dizi) tutar.
- Çakışma olursa, yeni elemanı o listenin sonuna ekleriz.
- Bir elemanı bulmak için, önce 5. indekse gider, sonra oradaki küçük listeyi tararız.`
    },
    realWorldUses: [
        { en: "Database Indexing", tr: "Veritabanı İndeksleme" },
        { en: "Caching mechanisms (Redis, LocalStorage)", tr: "Önbellekleme mekanizmaları (Redis, LocalStorage)" },
        { en: "Symbol Tables in Compilers", tr: "Derleyicilerde Sembol Tabloları" }
    ],
    pros: [
        { en: "Average O(1) lookup", tr: "Ortalama O(1) erişim hızı" },
        { en: "Flexible keys (strings, objects)", tr: "Esnek anahtar kullanımı" }
    ],
    cons: [
        { en: "Collisions degrade performance to O(N)", tr: "Çakışmalar performansı O(N)'e düşürebilir" },
        { en: "Unordered (iteration order not guaranteed)", tr: "Sıralı değildir (gezinme sırası garanti edilmez)" }
    ],
    complexity: { time: "Avg: O(1), Worst: O(N)", space: "O(N)" },
    codeSnippet: `class HashTable {
    size: number;
    buckets: Array<Array<[string, any]>>;

    constructor(size = 50) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
    }

    private _hash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.size;
        }
        return hash;
    }

    set(key: string, value: any) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        
        // Check update
        for(let i=0; i<bucket.length; i++) {
            if(bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }
        // Collision: Add to bucket chain
        bucket.push([key, value]);
    }

    get(key: string): any {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        for(let item of bucket) {
            if(item[0] === key) return item[1];
        }
        return undefined;
    }

    remove(key: string) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        // Filter out the item
        this.buckets[index] = bucket.filter(item => item[0] !== key);
    }
}`,
    questions: [
        { id: 217, title: "Contains Duplicate", difficulty: "Easy", url: "https://leetcode.com/problems/contains-duplicate/" },
        { id: 242, title: "Valid Anagram", difficulty: "Easy", url: "https://leetcode.com/problems/valid-anagram/" },
        { id: 49, title: "Group Anagrams", difficulty: "Medium", url: "https://leetcode.com/problems/group-anagrams/" },
        { id: 347, title: "Top K Frequent Elements", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
        { id: 381, title: "Insert Delete GetRandom O(1) - Duplicates allowed", difficulty: "Hard", url: "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/" },
        { id: 149, title: "Max Points on a Line", difficulty: "Hard", url: "https://leetcode.com/problems/max-points-on-a-line/" }
    ],
  },

  {
    id: "ds-binary-tree",
    title: { en: "Binary Tree", tr: "Binary Tree" },
    category: "Data Structure",
    domain: "DSA",
    level: "Mid",
    summary: {
        en: "Tree with max 2 children per node.",
        tr: "Her düğümde en fazla 2 çocuk."
    },
    descriptionStandard: {
        en: "A hierarchical data structure where each node has at most two children, referred to as the left child and the right child. Unlike BST, it is NOT sorted.",
        tr: "Her düğümün en fazla iki çocuğa (sol ve sağ) sahip olduğu hiyerarşik veri yapısı. BST'nin aksine sıralı DEĞİLDİR."
    },
    descriptionELI5: {
        en: "Think of your family tree. You are at the top (Root). Then you have two parents (Left and Right). They each have parents too. The tree branches out wider and wider as you go up (or down in CS trees). Unlike real families, in a Binary Tree, NO ONE can have more than 2 children!",
        tr: "Soyağacını düşün. En tepede sen varsın (Kök). Sonra iki ebeveynin var (Sol ve Sağ). Onların da ebeveynleri var. Ağaç dallanarak genişler. Gerçek ailelerin aksine, Binary Tree'de hiç kimsenin 2'den fazla çocuğu olamaz!"
    },
    contentMarkdown: {
        en: `### Definition
A **Binary Tree** is a tree data structure in which each node has at most two children.
*   **Root:** The top node.
*   **Leaf:** A node with no children.
*   **Height:** Number of edges from root to furthest leaf.

### Types
1.  **Full:** Every node has 0 or 2 children.
2.  **Complete:** All levels are filled except possibly the last, which is filled from left to right.
3.  **Perfect:** All internal nodes have 2 children, all leaves are at the same depth.

### Traversal
Unlike arrays (linear), trees can be traversed in many ways:
*   **BFS (Level Order):** Layer by layer.
*   **DFS (Pre/In/Post Order):** Going deep into branches first.`,
        tr: `### Tanım
**İkili Ağaç (Binary Tree)**, her düğümün en fazla iki çocuğu olan bir ağaç veri yapısıdır.
*   **Kök (Root):** En tepedeki düğüm.
*   **Yaprak (Leaf):** Çocuğu olmayan düğüm.
*   **Yükseklik:** Kökten en uzak yaprağa kadar olan kenar sayısı.

### Çeşitler
1.  **Full (Dolu):** Her düğümün ya 0 ya da 2 çocuğu vardır.
2.  **Complete (Tam):** Son katman hariç tüm katmanlar doludur, son katman soldan sağa doludur.
3.  **Perfect (Mükemmel):** Tüm iç düğümlerin 2 çocuğu vardır, tüm yapraklar aynı derinliktedir.

### Gezinme (Traversal)
Dizilerin (lineer) aksine, ağaçlar farklı şekillerde gezilebilir:
*   **BFS (Level Order):** Katman katman.
*   **DFS (Pre/In/Post Order):** Önce dalların derinliklerine inerek.`
    },
    realWorldUses: [
        { en: "Expression Trees (Compilers)", tr: "İfade Ağaçları (Derleyiciler)" },
        { en: "Binary Heaps", tr: "İkili Yığınlar (Heap)" },
        { en: "Huffman Coding Tree (Compression)", tr: "Huffman Kodlama Ağacı (Sıkıştırma)" }
    ],
    pros: [
        { en: "Hierarchical representation", tr: "Hiyerarşik temsil" },
        { en: "Flexible structure", tr: "Esnek yapı" }
    ],
    cons: [
        { en: "Slow search O(N) (unsorted)", tr: "Yavaş arama O(N) (sırasız)" },
        { en: "Complex pointer manipulation", tr: "Karmaşık pointer yönetimi" }
    ],
    complexity: { time: "Access: O(N)", space: "O(N)" },
    codeSnippet: `class TreeNode {
    val: number;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
    constructor(val: number) { this.val = val; }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);`,
    questions: [
        { id: 226, title: "Invert Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/invert-binary-tree/" },
        { id: 104, title: "Maximum Depth of Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
        { id: 102, title: "Binary Tree Level Order Traversal", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
        { id: 236, title: "Lowest Common Ancestor of a Binary Tree", difficulty: "Medium", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
        { id: 124, title: "Binary Tree Maximum Path Sum", difficulty: "Hard", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
        { id: 297, title: "Serialize and Deserialize Binary Tree", difficulty: "Hard", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" }
    ],
  },
  {
    id: "ds-tree",
    title: { en: "Binary Search Tree (BST)", tr: "Binary Search Tree (BST)" },
    category: "Data Structure",
    domain: "DSA",
    level: "Mid",
    summary: {
        en: "Recursive insertion and search nodes.",
        tr: "Rekürsif ekleme ve arama düğümleri."
    },
    descriptionStandard: {
        en: "A manual implementation of BST nodes.",
        tr: "Manuel BST implementasyonu."
    },
    descriptionELI5: {
        en: "Organizing files in a cabinet. Every file with a date BEFORE 2021 goes in the left drawer. Every file AFTER 2021 goes in the right drawer. When you need to find 'March 2020', you know immediately to ignore the whole right drawer!",
        tr: "Dosyaları dolaba yerleştirmek gibi. 2021'den ÖNCEKİ tüm dosyalar sol çekmeceye, SONRAKİLER sağ çekmeceye. 'Mart 2020'yi aradığında, sağ çekmeceye hiç bakmana gerek olmadığını bilirsin!"
    },
    contentMarkdown: {
        en: `### Definition
A **Binary Search Tree (BST)** is a tree data structure where each node has at most two children.
**The Golden Rule**: For any node, all values in left subtree < node.val < all values in right subtree.

### Efficiency
Because of this structure, every time you go left or right, you discard **half** of the remaining tree. This makes searching, inserting, and deleting extremely fast: **O(log N)** using Binary Search logic.

### Recursion
Trees are naturally recursive. Most operations (insert, search, DFS) are implemented by a function calling itself on the children nodes.`,
        tr: `### Tanım
**İkili Arama Ağacı (BST)**, her düğümün en fazla iki çocuğa sahip olduğu bir ağaç yapısıdır.
**Altın Kural**: Herhangi bir düğüm için, sol alt ağaçtaki tüm değerler < düğüm değeri < sağ alt ağaçtaki tüm değerler.

### Verimlilik
Bu yapı sayesinde, her sola veya sağa gidişinizde kalan ağacın **yarısını** elersiniz. Bu, arama, ekleme ve silme işlemlerini Binary Search mantığıyla **O(log N)** hızında yapmayı sağlar.

### Özyineleme (Recursion)
Ağaçlar doğal olarak özyinelemelidir. Çoğu işlem (ekleme, arama, DFS) bir fonksiyonun çocuk düğümler üzerinde kendini çağırmasıyla (recursion) uygulanır.`
    },
    realWorldUses: [
        { en: "Hierarchical Data (DOM, File System)", tr: "Hiyerarşik Veriler (DOM, Dosya Sistemi)" },
        { en: "Database Indexing (B-Trees variation)", tr: "Veritabanı İndeksleme (B-Tree varyasyonları)" },
        { en: "Auto-completion/Spell checkers (Tries)", tr: "Otomatik tamamlama (Trie ağaçları)" }
    ],
    pros: [
        { en: "Sorted Data retention", tr: "Veriyi sıralı tutar" },
        { en: "O(log N) efficient search/insert", tr: "O(log N) verimli arama/ekleme" }
    ],
    cons: [
        { en: "Can become unbalanced (O(N) skew)", tr: "Dengesizleşebilir (O(N) performans kaybı)" },
        { en: "Complex pointer management", tr: "Karmaşık işaretçi yönetimi" }
    ],
    complexity: { time: "O(log N)", space: "O(N)" },
    codeSnippet: `class TreeNode {
    val: number;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
    constructor(val: number) { this.val = val; }
}

class BST {
    root: TreeNode | null = null;

    insert(val: number) {
        this.root = this._insert(this.root, val);
    }

    private _insert(node: TreeNode | null, val: number): TreeNode {
        if (!node) return new TreeNode(val);
        if (val < node.val) node.left = this._insert(node.left, val);
        else if (val > node.val) node.right = this._insert(node.right, val);
        return node;
    }

    search(val: number): boolean {
        return this._search(this.root, val);
    }

    private _search(node: TreeNode | null, val: number): boolean {
        if (!node) return false;
        if (val === node.val) return true;
        return val < node.val 
            ? this._search(node.left, val) 
            : this._search(node.right, val);
    }

    remove(val: number) {
        this.root = this._remove(this.root, val);
    }

    private _remove(node: TreeNode | null, val: number): TreeNode | null {
        if (!node) return null;

        if (val < node.val) {
            node.left = this._remove(node.left, val);
        } else if (val > node.val) {
            node.right = this._remove(node.right, val);
        } else {
            // Node found
            // Case 1: No child
            if (!node.left && !node.right) return null;
            // Case 2: One child
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            
            // Case 3: Two children
            // Find min in right subtree
            let minNode = this._findMin(node.right);
            node.val = minNode.val;
            node.right = this._remove(node.right, minNode.val);
        }
        return node;
    }

    private _findMin(node: TreeNode): TreeNode {
        while (node.left) node = node.left;
        return node;
    }
    
    // Traversal (In-Order)
    printSorted() {
        this._inOrder(this.root);
    }
    private _inOrder(node: TreeNode | null) {
        if(!node) return;
        this._inOrder(node.left);
        console.log(node.val);
        this._inOrder(node.right);
    }
}`,
    questions: [
        { id: 700, title: "Search in a Binary Search Tree", difficulty: "Easy", url: "https://leetcode.com/problems/search-in-a-binary-search-tree/" },
        { id: 938, title: "Range Sum of BST", difficulty: "Easy", url: "https://leetcode.com/problems/range-sum-of-bst/" },
        { id: 98, title: "Validate Binary Search Tree", difficulty: "Medium", url: "https://leetcode.com/problems/validate-binary-search-tree/" },
        { id: 230, title: "Kth Smallest Element in a BST", difficulty: "Medium", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
        { id: 99, title: "Recover Binary Search Tree", difficulty: "Medium", url: "https://leetcode.com/problems/recover-binary-search-tree/" },
        { id: 1569, title: "Number of Ways to Reorder Array to Get Same BST", difficulty: "Hard", url: "https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/" }
    ],
  },
  {
    id: "ds-heap",
    title: { en: "Min Heap (Array Based)", tr: "Min Heap (Array Based)" },
    category: "Data Structure",
    domain: "DSA",
    level: "Mid",
    summary: {
        en: "Array based tree with heapify up/down.",
        tr: "Heapify up/down mantığıyla dizi tabanlı ağaç."
    },
    descriptionStandard: {
        en: "Full implementation of a Min Heap using an array.",
        tr: "Dizi kullanarak tam Min Heap implementasyonu."
    },
    descriptionELI5: {
        en: "Think of a 'King of the Hill' game. The smallest kid (Min Heap) always stands at the very top of the pyramid. If a new kid joins and is smaller, they swap places until the smallest is back on top. Finding the smallest one is instant—just look at the top!",
        tr: "'Tepenin Kralı' oyunu gibi düşün. En küçük çocuk (Min Heap) her zaman piramidin en tepesinde durur. Eğer yeni bir çocuk gelir ve daha küçükse, en küçük zirveye çıkana kadar yer değiştirirler. En küçüğü bulmak anlıktır—sadece tepeye bak!"
    },
    contentMarkdown: {
        en: `### Definition
A **Heap** is a complete binary tree that satisfies the heap property.
- **Min Heap**: Parent is always smaller than children. Root is minimum.
- **Max Heap**: Parent is always larger than children. Root is maximum.

### Array Representation
Heaps are beautifully efficient because they can be stored as a simple array, no pointers needed!
- **Left Child**: \`2 * i + 1\`
- **Right Child**: \`2 * i + 2\`
- **Parent**: \`Math.floor((i - 1) / 2)\`

### Operations
- **Insert**: Add to end of array. **Heapify Up** until heap property is restored.
- **Pop (Poll)**: Remove root. Move last element to root. **Heapify Down** until heap property is restored.`,
        tr: `### Tanım
**Heap**, heap özelliğini sağlayan tam bir ikili ağaçtır (complete binary tree).
- **Min Heap**: Ebeveyn her zaman çocuklardan küçüktür. Kök (root) en küçük elemandır.
- **Max Heap**: Ebeveyn her zaman çocuklardan büyüktür. Kök en büyük elemandır.

### Dizi Temsili
Heap'ler işaretçi (pointer) gerektirmeden düz bir dizide saklanabildikleri için çok verimlidir!
- **Sol Çocuk**: \`2 * i + 1\`
- **Sağ Çocuk**: \`2 * i + 2\`
- **Ebeveyn**: \`Math.floor((i - 1) / 2)\`

### İşlemler
- **Ekleme**: Dizinin sonuna ekle. Heap özelliği sağlanana kadar **Heapify Up (Yukarı)**.
- **Çıkarma (Pop/Poll)**: Kökü sil. Son elemanı köke taşı. Heap özelliği sağlanana kadar **Heapify Down (Aşağı)**.`
    },
    realWorldUses: [
        { en: "Priority Queues (Task Scheduling)", tr: "Öncelik Kuyrukları (Görev Zamanlama)" },
        { en: "Shortest Path Algorithms (Dijkstra)", tr: "En Kısa Yol Algoritmaları (Dijkstra)" },
        { en: "Order Statistics (finding Kth largest)", tr: "Sıralama İstatistikleri (K. en büyüğü bulma)" }
    ],
    pros: [
        { en: "O(1) Access to min/max", tr: "Min/Max elemana O(1) erişim" },
        { en: "Space efficient (Array implementation)", tr: "Alan tasarruflu (Dizi kullanımı)" }
    ],
    cons: [
        { en: "O(N) search for arbitrary element", tr: "Rastgele eleman arama O(N)" },
        { en: "Not sorting entire array directly", tr: "Tüm diziyi doğrudan sıralamaz" }
    ],
    complexity: { time: "O(log N)", space: "O(N)" },
    codeSnippet: `class MinHeap {
    heap: number[];
    
    constructor() { this.heap = []; }

    // Parent: (i-1)/2, Left: 2*i+1, Right: 2*i+2

    push(val: number) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    pop(): number | undefined {
        if (this.heap.length === 0) return undefined;
        const min = this.heap[0];
        const end = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown(0);
        }
        return min;
    }

    private heapifyUp(index: number) {
        const element = this.heap[index];
        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element >= parent) break;
            
            // Swap
            this.heap[parentIdx] = element;
            this.heap[index] = parent;
            index = parentIdx;
        }
    }
    
    private heapifyDown(index: number) {
        const length = this.heap.length;
        const element = this.heap[index];

        while(true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swapIdx = null;

            if(leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if(leftChild < element) {
                    swapIdx = leftChildIdx;
                }
            }

            if(rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if(
                    (swapIdx === null && rightChild < element) ||
                    (swapIdx !== null && rightChild < leftChild!)
                ) {
                    swapIdx = rightChildIdx;
                }
            }

            if(swapIdx === null) break;

            this.heap[index] = this.heap[swapIdx];
            this.heap[swapIdx] = element;
            index = swapIdx;
        }
    }
}`,
    questions: [
        { id: 1046, title: "Last Stone Weight", difficulty: "Easy", url: "https://leetcode.com/problems/last-stone-weight/" },
        { id: 506, title: "Relative Ranks", difficulty: "Easy", url: "https://leetcode.com/problems/relative-ranks/" },
        { id: 215, title: "Kth Largest Element in an Array", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
        { id: 347, title: "Top K Frequent Elements", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
        { id: 23, title: "Merge k Sorted Lists", difficulty: "Hard", url: "https://leetcode.com/problems/merge-k-sorted-lists/" },
        { id: 295, title: "Find Median from Data Stream", difficulty: "Hard", url: "https://leetcode.com/problems/find-median-from-data-stream/" }
    ],
  },

  {
    id: "ds-graph",
    level: "Mid",
    title: { en: "Graph (Adjacency List)", tr: "Graph (Adjacency List)" },
    category: "Data Structure",
    domain: "DSA",
    summary: {
        en: "HashMap of Arrays.",
        tr: "HashMap içinde Diziler."
    },
    descriptionStandard: {
        en: "Representing a Graph using an Adjacency List.",
        tr: "Komşuluk Listesi kullanarak Graph temsili."
    },
    descriptionELI5: {
        en: "Think of a network of airports. An airport is a dot (Node). A flight is a line (Edge). Some flights only go one way (Directed). If you write down 'London: [NYC, Paris]', that is your Adjacency List used to plan trips.",
        tr: "Havaalanları ağını düşün. Her havaalanı bir noktadır (Düğüm). Uçuşlar birer çizgidir (Kenar). Bazı uçuşlar tek yönlüdür. Eğer 'İstanbul: [Ankara, İzmir]' diye yazarsan, bu senin seyahat planlamak için kullandığın Komşuluk Listesi olur."
    },
    contentMarkdown: {
        en: `### Definition
A **Graph** is a set of vertices (nodes) and edges (connections).
- **Directed**: A -> B (One way street)
- **Undirected**: A - B (Two way street)

### Representations
1.  **Adjacency Matrix**: A 2D array of boolean/weights. Good for dense graphs, but high memory \`O(V^2)\`.
2.  **Adjacency List** (This implementation): A HashMap where Key = Node, Value = List of Neighbors. Efficient \`O(V+E)\` space.

### Why Adjacency List?
Most real world graphs (social networks, web) are **sparse** (not everything connects to everything). An adjacency list saves huge amounts of memory.`,
        tr: `### Tanım
**Çizge (Graph)**, düğümler (vertices) ve kenarlar (edges/bağlantılar) kümesidir.
- **Yönlü (Directed)**: A -> B (Tek yönlü yol)
- **Yönsüz (Undirected)**: A - B (Çift yönlü yol)

### Gösterim Şekilleri
1.  **Komşuluk Matrisi**: 2 boyutlu dizi. Yoğun graflar için iyidir ama bellek kullanımı yüksektir \`O(V^2)\`.
2.  **Komşuluk Listesi** (Bu implementasyon): Key = Düğüm, Value = Komşu Listesi olan bir HashMap. Verimli \`O(V+E)\` alan kullanımı.

### Neden Komşuluk Listesi?
Gerçek dünyadaki çoğu graf (sosyal ağlar, web) **seyrektir** (her şey her şeye bağlı değildir). Komşuluk listesi devasa bellek tasarrufu sağlar.`
    },
    realWorldUses: [
        { en: "Social Networks (Friendships)", tr: "Sosyal Ağlar (Arkadaşlıklar)" },
        { en: "Map Navigation (Roads/Traffic)", tr: "Harita Navigasyon (Yollar/Trafik)" },
        { en: "Network Topology / Routing", tr: "Ağ Topolojisi / Yönlendirme" }
    ],
    pros: [
        { en: "Excels at relationship modeling", tr: "İlişki modellemede mükemmeldir" },
        { en: "Space efficient for sparse graphs (Adj List)", tr: "Seyrek grafikler için alan tasarruflu" }
    ],
    cons: [
        { en: "Complex to debug and traverse", tr: "Hata ayıklaması ve gezinmesi karmaşık" },
        { en: "High complexity for dense graphs (use Matrix)", tr: "Yoğun grafiklerde yüksek karmaşıklık" }
    ],
    complexity: { time: "Varies", space: "O(V + E)" },
    codeSnippet: `class Graph {
    adjacencyList: { [key: string]: string[] } = {};

    addVertex(vertex: string) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1: string, v2: string) {
        // Undirected graph
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1: string, v2: string) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }
}`,
    questions: [
        { id: 1791, title: "Find Center of Star Graph", difficulty: "Easy", url: "https://leetcode.com/problems/find-center-of-star-graph/" },
        { id: 1971, title: "Find if Path Exists in Graph", difficulty: "Easy", url: "https://leetcode.com/problems/find-if-path-exists-in-graph/" },
        { id: 200, title: "Number of Islands", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-islands/" },
        { id: 133, title: "Clone Graph", difficulty: "Medium", url: "https://leetcode.com/problems/clone-graph/" },
        { id: 127, title: "Word Ladder", difficulty: "Hard", url: "https://leetcode.com/problems/word-ladder/" },
        { id: 329, title: "Longest Increasing Path in a Matrix", difficulty: "Hard", url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/" }
    ],
  },
  {
    id: "ds-trie",
    level: "Senior",
    title: { en: "Trie (Prefix Tree)", tr: "Trie (Prefix Tree)" },
    category: "Data Structure",
    domain: "DSA",
    summary: {
        en: "Nested objects for characters.",
        tr: "Karakterler için iç içe nesneler."
    },
    descriptionStandard: {
        en: "Implementation of a TrieNode with a children map.",
        tr: "Çocuk haritası (children map) olan bir TrieNode implementasyonu."
    },
    descriptionELI5: {
        en: "Imagine a predictive text system on your phone. When you type 'ap', it suggests 'apple', 'apricot'. It doesn't look at words starting with 'b'. It walks down the 'a' path, then 'p', and shows you only what branches from there.",
        tr: "Telefonundaki otomatik tamamlama sistemi gibi. 'el' yazdığında 'elma', 'elmas' önerir. 'k' ile başlayan kelimelere hiç bakmaz. 'e' yolundan gider, sonra 'l'ye sapar ve sadece oradan dallananları gösterir."
    },
    contentMarkdown: {
        en: `### Definition
A **Trie** (pronounced 'try') is a tree-like data structure used for storing strings. Node position in the tree defines the key associated with that node.

### The Problem it Solves
Searching for a word in an array of strings is **O(N * L)**.
In a Trie, searching is **O(L)** where L is word length. The number of total words (N) doesn't matter!

### Structure
- **Root**: Empty node.
- **Children**: Each node has a map/array pointing to next characters.
- **isEndOfWord**: Boolean flag marking valid words (e.g. valid at 't', 'to', 'tea').

### Memory vs Speed
Tries are incredibly fast for lookups but consume significant memory because of all the empty pointers/maps in nodes.`,
        tr: `### Tanım
**Trie**, metinleri (string) saklamak için kullanılan ağaç benzeri bir veri yapısır. Düğümün ağaçtaki konumu, o düğümle ilişkili anahtarı belirler.

### Çözdüğü Problem
Bir kelime listesinde arama yapmak **O(N * L)** maliyetlidir.
Trie'de arama **O(L)**'dir (L: kelime uzunluğu). Toplam kelime sayısı (N) hızı yavaşlatmaz!

### Yapı
- **Kök (Root)**: Boş düğüm.
- **Çocuklar**: Her düğüm bir sonraki karakterlere işaret eden bir harita/dizi tutar.
- **Bitiş (isEndOfWord)**: Geçerli kelimeleri işaretleyen bayrak (örn: 'at', 'ata', 'atak' hepsi geçerli olabilir).

### Bellek vs Hız
Trie aramalar için inanılmaz hızlıdır ancak düğümlerdeki boş pointerlar/haritalar yüzünden ciddi bellek tüketir.`
    },
    realWorldUses: [
        { en: "Autocomplete / Global Search", tr: "Otomatik Tamamlama / Global Arama" },
        { en: "Spell Checkers", tr: "Yazım Denetleyicileri" },
        { en: "IP Routing (Longest Prefix Match)", tr: "IP Yönlendirme (En Uzun Önek Eşleşmesi)" }
    ],
    pros: [
        { en: "O(L) search independent of database size", tr: "Veri setinden bağımsız O(L) arama hızı" },
        { en: "Space optimization for shared prefixes", tr: "Ortak önekler için alan optimizasyonu" }
    ],
    cons: [
        { en: "High memory overhead for sparse data", tr: "Seyrek verilerde yüksek bellek kullanımı" },
        { en: "Not efficient for random strings", tr: "Rastgele metinler için verimsiz" }
    ],
    complexity: { time: "O(L)", space: "O(N * L)" },
    codeSnippet: `class TrieNode {
    children: { [key: string]: TrieNode } = {};
    isEndOfWord: boolean = false;
}

class Trie {
    root: TrieNode = new TrieNode();

    insert(word: string) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }

    search(word: string): boolean {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) return false;
            current = current.children[char];
        }
        return current.isEndOfWord;
    }

    startsWith(prefix: string): boolean {
        let current = this.root;
        for (const char of prefix) {
            if (!current.children[char]) return false;
            current = current.children[char];
        }
        return true;
    }
}`,
    questions: [
        { id: 14, title: "Longest Common Prefix", difficulty: "Easy", url: "https://leetcode.com/problems/longest-common-prefix/" },
        { id: 1455, title: "Check if Word Occurs As a Prefix...", difficulty: "Easy", url: "https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/" },
        { id: 208, title: "Implement Trie", difficulty: "Medium", url: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
        { id: 211, title: "Design Add and Search Words", difficulty: "Medium", url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
        { id: 212, title: "Word Search II", difficulty: "Hard", url: "https://leetcode.com/problems/word-search-ii/" },
        { id: 1032, title: "Stream of Characters", difficulty: "Hard", url: "https://leetcode.com/problems/stream-of-characters/" }
    ],
  },
  {
    id: "ds-doubly-linked-list",
    level: "Mid",
    title: { en: "Doubly Linked List", tr: "Doubly Linked List" },
    category: "Data Structure",
    domain: "DSA",
    summary: {
        en: "Nodes with Next and Prev pointers.",
        tr: "İleri ve Geri işaretçileri olan düğümler."
    },
    descriptionStandard: {
        en: "A Linked List where each node has a pointer to the next node AND the previous node.",
        tr: "Her düğümün hem bir sonrakine hem de bir öncekine işaret ettiği liste yapısı."
    },
    descriptionELI5: {
        en: "Imagine a line of dancers holding hands. In a normal line, you only hold the hand of the person in front. Here, you hold BOTH hands—one with the person behind, one with the person ahead. You can communicate directions both ways instantly!",
        tr: "El ele tutuşmuş dansçıları düşün. Normal sırada sadece öndekinin elini tutarsın. Burada ise İKİ elini de kullanıyorsun—biri arkadakiyle, biri öndekiyle. İki yöne de anında mesaj iletebilirsin!"
    },
    contentMarkdown: {
        en: `### Definition
In a **Doubly Linked List**, every node has two pointers:
1. \`next\`: Points to the succeeding node.
2. \`prev\`: Points to the preceding node.

### The Superpower: O(1) Deletion
In a Singly Linked List, to delete a node, you typically need to know the *previous* node (to bridge the gap). Accessing the previous node takes O(N).
In a Doubly Linked List, you already have the \`prev\` pointer!
**Deleting a node if you have its reference is O(1).**

### Trade-off
You pay for this flexibility with:
- **Extra Memory**: Storing 2 pointers per node instead of 1.
- **Maintenance**: Every insert/delete requires updating 4 links instead of 2.`,
        tr: `### Tanım
**Çift Bağlı Liste (Doubly Linked List)** yapısında her düğümün iki işaretçisi vardır:
1. \`next\`: Sonraki düğümü gösterir.
2. \`prev\`: Önceki düğümü gösterir.

### Süper Güç: O(1) Silme
Tek bağlı listede bir düğümü silmek için *önceki* düğümü bilmeniz gerekir. Önceki düğüme erişmek O(N) sürer.
Çift bağlı listede ise \`prev\` işaretçisi elinizdedir!
**Referansına sahip olduğunuz bir düğümü silmek O(1)'dir.**

### Bedel (Trade-off)
Bu esneklik karşılığında ödediğiniz bedel:
- **Ekstra Bellek**: Düğüm başına 1 yerine 2 işaretçi.
- **Bakım**: Her ekleme/silme işlemi 2 yerine 4 bağlantının güncellenmesini gerektirir.`
    },
    realWorldUses: [
        { en: "Browser Cache (LRU implementation)", tr: "Tarayıcı Önbelleği (LRU implementasyonu)" },
        { en: "Music Player (Next/Prev track)", tr: "Müzik Çalar (Sonraki/Önceki şarkı)" },
        { en: "Undo/Redo operations", tr: "Geri Al/Yinele işlemleri" }
    ],
    pros: [
        { en: "Bidirectional traversal", tr: "Çift yönlü gezinme" },
        { en: "O(1) deletion of known node", tr: "Bilinen düğümü O(1) silme" }
    ],
    cons: [
        { en: "2x memory for pointers", tr: "İşaretçiler için 2 kat bellek" },
        { en: "More complex implementation", tr: "Daha karmaşık implementasyon" }
    ],
    complexity: { time: "Access: O(N), Delete: O(1)*", space: "O(N)" },
    codeSnippet: `class DNode<T> {
    val: T;
    next: DNode<T> | null = null;
    prev: DNode<T> | null = null;
    constructor(val: T) { this.val = val; }
}

class DoublyLinkedList<T> {
    head: DNode<T> | null = null;
    tail: DNode<T> | null = null;

    append(val: T) {
        const newNode = new DNode(val);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    removeLast() {
        if (!this.tail) return;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail!.next = null;
        }
    }
}`,
    questions: [
        { id: 234, title: "Palindrome Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/palindrome-linked-list/" },
        { id: 706, title: "Design HashMap", difficulty: "Easy", url: "https://leetcode.com/problems/design-hashmap/" },
        { id: 146, title: "LRU Cache", difficulty: "Medium", url: "https://leetcode.com/problems/lru-cache/" },
        { id: 430, title: "Flatten Multilevel Doubly Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/" },
        { id: 460, title: "LFU Cache", difficulty: "Hard", url: "https://leetcode.com/problems/lfu-cache/" },
        { id: 432, title: "All O`one Data Structure", difficulty: "Hard", url: "https://leetcode.com/problems/all-oone-data-structure/" }
    ],
  },
  {
    id: "ds-union-find",
    level: "Senior",
    title: { en: "Union Find (Disjoint Set)", tr: "Union Find (Disjoint Set)" },
    category: "Data Structure",
    domain: "DSA",
    summary: {
        en: "Efficiently tracks set membership.",
        tr: "Küme üyeliklerini verimli şekilde takip eder."
    },
    descriptionStandard: {
        en: "A data structure that tracks a set of elements partitioned into a number of disjoint (non-overlapping) subsets.",
        tr: "Elemanların ayrık alt kümelere bölündüğü bir yapıdır."
    },
    descriptionELI5: {
        en: "Imagine gangs in a city where everyone has a boss. If Gang A merges with Gang B, Boss A just starts listening to Boss B. Now everyone who used to listen to A is part of B's team! If you ask two people 'Who is your ultimate boss?', you can instantly tell if they are in the same gang.",
        tr: "Şehirdeki çeteleri düşün, herkesin bir patronu var. A Çetesi B Çetesi ile birleşirse, A'nın Patronu B'nin Patronunu dinlemeye başlar. Artık A'ya bağlı olan herkes B takımının parçasıdır! İki kişiye 'En büyük patronunuz kim?' diye sorarsan, aynı çetede olup olmadıklarını anında anlarsın."
    },
    contentMarkdown: {
        en: `### Definition
**Disjoint Set Union (DSU)**, also known as **Union-Find**, solves the connectivity problem efficiently. It answers "Are A and B in the same group?" almost instantly.

### Implementation
We use a \`parent\` array where \`parent[i]\` is the boss of node \`i\`.
- If \`parent[i] == i\`, then \`i\` is a generic leader (root).

### Optimizations (Crucial!)
1.  **Path Compression**: When finding the boss of A, update A to point DIRECTLY to the ultimate boss. Next time, lookup is O(1).
2.  **Union by Rank/Size**: Always attach the smaller tree to the bigger tree to keep the tree flat.

### Complexity
With these optimizations, the time complexity is **O(α(N))**, which is the inverse Ackermann function. For all practical universe sizes, this is **≤ 4**, effectively **O(1)**.`,
        tr: `### Tanım
**Disjoint Set Union (DSU)** veya bilinen adıyla **Union-Find**, bağlantı problemini verimli çözer. "A ve B aynı grupta mı?" sorusuna anında cevap verir.

### Uygulama
\`parent[i]\`'nin i düğümünün patronu olduğu bir \`parent\` dizisi kullanırız.
- Eğer \`parent[i] == i\` ise, \`i\` bir liderdir (kök).

### Optimizasyonlar (Kritik!)
1.  **Path Compression (Yol Sıkıştırma)**: A'nın patronunu ararken, A'yı DOĞRUDAN en tepedeki büyük patrona bağlarız. Sonraki aramalar O(1) olur.
2.  **Union by Rank/Size**: Ağacı düz (flat) tutmak için her zaman küçük ağacı büyük ağaca ekleriz.

### Karmaşıklık
Bu optimizasyonlarla karmaşıklık **O(α(N))** olur (Inverse Ackermann fonksiyonu). Evrendeki pratik tüm sayılar için bu değer **≤ 4**'tür, yani fiilen **O(1)** kabul edilir.`
    },
    realWorldUses: [
        { en: "Network Connectivity / Social Clusters", tr: "Ağ Bağlantısı / Sosyal Kümeler" },
        { en: "Image Processing (Connected Components)", tr: "Görüntü İşleme (Bağlantılı Bileşenler)" },
        { en: "Kruskal's Algorithm (Minimum Spanning Tree)", tr: "Kruskal Algoritması (Minimum Kapsayan Ağaç)" }
    ],
    pros: [
        { en: "Nearly constant time O(1) operations", tr: "Neredeyse sabit O(1) işlem süresi" },
        { en: "Simple array-based implementation", tr: "Basit dizi tabanlı implementasyon" }
    ],
    cons: [
        { en: "Cannot un-union (without rollback)", tr: "Birleştirme geri alınamaz (rollback yoksa)" },
        { en: "Only tracks connectivity, not path", tr: "Sadece bağlantıyı takip eder, yolu değil" }
    ],
    complexity: { time: "O(α(N)) ≈ O(1)", space: "O(N)" },
    codeSnippet: `class UnionFind {
    parent: number[];
    
    constructor(n: number) {
        // Initially everyone is their own parent
        this.parent = Array(n).fill(0).map((_, i) => i);
    }

    find(x: number): number {
        // Path Compression optimization
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x: number, y: number) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX !== rootY) {
            this.parent[rootX] = rootY; // Merge clouds
        }
    }
}`,
    questions: [
        { id: 1971, title: "Find if Path Exists in Graph", difficulty: "Easy", url: "https://leetcode.com/problems/find-if-path-exists-in-graph/" },
        { id: 1791, title: "Find Center of Star Graph", difficulty: "Easy", url: "https://leetcode.com/problems/find-center-of-star-graph/" },
        { id: 547, title: "Number of Provinces", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-provinces/" },
        { id: 721, title: "Accounts Merge", difficulty: "Medium", url: "https://leetcode.com/problems/accounts-merge/" },
        { id: 128, title: "Longest Consecutive Sequence", difficulty: "Hard", url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
        { id: 924, title: "Minimize Malware Spread", difficulty: "Hard", url: "https://leetcode.com/problems/minimize-malware-spread/" }
    ],
  },
  {
    id: "ds-avl-tree",
    title: { en: "AVL Tree", tr: "AVL Tree" },
    category: "Data Structure",
    domain: "DSA",
    level: "Mid",
    summary: {
        en: "Self-balancing Binary Search Tree.",
        tr: "Kendi kendini dengeleyen İkili Arama Ağacı."
    },
    descriptionStandard: {
        en: "A BST where the difference between heights of left and right subtrees cannot be more than one for all nodes.",
        tr: "Sol ve sağ alt ağaçların yükseklik farkının her düğüm için en fazla 1 olabildiği bir BST türü."
    },
    descriptionELI5: {
        en: "A tree that is a perfectionist. If one branch gets too long and heavy, the tree automatically spins (rotates) itself to shift the weight and make sure both sides are perfectly even. It never lets itself get lopsided!",
        tr: "Mükemmeliyetçi bir ağaç. Bir dal çok uzayıp ağırlaşırsa, ağaç ağırlığı kaydırmak ve iki tarafı da tamamen eşit tutmak için kendi etrafında döner (rotasyon). Asla yamulmasına izin vermez!"
    },
    contentMarkdown: {
        en: `### Concept
An **AVL Tree** is a self-balancing Binary Search Tree (BST). In a normal BST, if you insert numbers in sorted order (1, 2, 3...), it becomes a link list (skewed), degrading search to O(N).
AVL trees fix this by ensuring the height difference between left and right subtrees is at most 1.

### How it Works
1. **Balance Factor**: For every node, calculate \`height(left) - height(right)\`. It must be -1, 0, or 1.
2. **Rotations**: If insertion causes imbalance (factor becomes 2 or -2), perform rotations:
   - **Left Rotation**: If right side is too heavy.
   - **Right Rotation**: If left side is too heavy.
   - **Double Rotations**: Combinations (Left-Right or Right-Left) for complex imbalances.

### Complexity
- **Time**: **O(log N)** for search, insert, and delete. The tree height is strictly logarithmic.
- **Space**: **O(N)**.`,
        tr: `### Konsept
**AVL Ağacı**, kendi kendini dengeleyen bir İkili Arama Ağacıdır (BST). Normal bir BST'de, sayıları sıralı olarak (1, 2, 3...) eklerseniz, bir bağlı listeye dönüşür (çarpık) ve arama performansı O(N)'e düşer.
AVL ağaçları, sol ve sağ alt ağaçlar arasındaki yükseklik farkının en fazla 1 olmasını sağlayarak bunu düzeltir.

### Nasıl Çalışır?
1. **Denge Faktörü**: Her düğüm için \`yükseklik(sol) - yükseklik(sağ)\` hesaplayın. Bu -1, 0 veya 1 olmalıdır.
2. **Rotasyonlar**: Ekleme dengesizliğe neden olursa (faktör 2 veya -2 olursa), rotasyon yapın:
   - **Sola Rotasyon**: Sağ taraf çok ağırsa.
   - **Sağa Rotasyon**: Sol taraf çok ağırsa.
   - **Çift Rotasyonlar**: Karmaşık dengesizlikler için kombinasyonlar (Sol-Sağ veya Sağ-Sol).

### Karmaşıklık
- **Zaman**: Arama, ekleme ve silme için **O(log N)**. Ağaç yüksekliği kesinlikle logaritmiktir.
- **Alan**: **O(N)**.`
    },
    complexity: { time: "O(log N)", space: "O(N)" },
    codeSnippet: `class AVLNode {
    key: number;
    height: number = 1;
    left: AVLNode | null = null;
    right: AVLNode | null = null;
    constructor(k: number) { this.key = k; }
}

function rightRotate(y: AVLNode): AVLNode {
    // Rotation logic
    let x = y.left!;
    let T2 = x.right;
    x.right = y;
    y.left = T2;
    // Update heights...
    return x;
}
// Full implementation implies rotations on insert/delete`,
    questions: [
        { id: 110, title: "Balanced Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/balanced-binary-tree/" },
        { id: 108, title: "Convert Sorted Array to Binary Search Tree", difficulty: "Easy", url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/" },
        { id: 1382, title: "Balance a Binary Search Tree", difficulty: "Medium", url: "https://leetcode.com/problems/balance-a-binary-search-tree/" },
        { id: 450, title: "Delete Node in a BST", difficulty: "Medium", url: "https://leetcode.com/problems/delete-node-in-a-bst/" },
        { id: 327, title: "Count of Range Sum", difficulty: "Hard", url: "https://leetcode.com/problems/count-of-range-sum/" },
        { id: 493, title: "Reverse Pairs", difficulty: "Hard", url: "https://leetcode.com/problems/reverse-pairs/" }
    ],
  },
  {
    id: "ds-segment-tree",
    title: { en: "Segment Tree", tr: "Segment Tree" },
    category: "Data Structure",
    domain: "DSA",
    level: "Senior",
    summary: {
        en: "Efficient range queries.",
        tr: "Verimli aralık sorguları."
    },
    descriptionStandard: {
        en: "A tree data structure used for storing information about intervals or segments.",
        tr: "Aralıklar veya segmentler hakkında bilgi saklamak için kullanılan bir ağaç yapısı."
    },
    descriptionELI5: {
        en: "Imagine a giant scoreboard that not only shows individual points but also sums for every pair, every group of 4, every group of 8, etc. If you want to know the score from Player 2 to Player 7, you don't add them up one by one. You just look at the 'Group Summary' boxes to get the answer instantly!",
        tr: "Sadece bireysel puanları değil, her çiftin, her 4'lü grubun, her 8'li grubun vb. toplamlarını da gösteren dev bir skor tablosu düşün. Oyuncu 2'den Oyuncu 7'ye kadar olan puanı öğrenmek istersen, tek tek toplamazsın. Cevabı anında almak için 'Grup Özeti' kutularına bakarsın!"
    },
    contentMarkdown: {
        en: `### Concept
A **Segment Tree** is a versatile tree structure used when you have an array and need to perform range queries (like "Sum of arr[2...7]") and point updates ("Set arr[4] = 10") efficiently.

### How it Works
1. **Structure**: It is a full binary tree. The leaves are the array elements. Each internal node represents the sum (or min/max) of its children.
2. **Build**: Done recursively. \`Tree[i] = Tree[2*i] + Tree[2*i+1]\`.
3. **Query**: To find a range sum, we check overlaps.
   - No overlap: Return 0.
   - Total overlap: Return node value.
   - Partial overlap: Recursively check children.

### Complexity
- **Time**: **O(log N)** for both query and update.
- **Space**: **O(4 * N)** to store the tree nodes.`,
        tr: `### Konsept
**Segment Ağacı**, bir diziniz olduğunda ve aralık sorgularını ("arr[2...7] toplamı" gibi) ve nokta güncellemelerini ("arr[4] = 10 yap") verimli bir şekilde yapmanız gerektiğinde kullanılan çok yönlü bir ağaç yapısıdır.

### Nasıl Çalışır?
1. **Yapı**: Tam bir ikili ağaçtır. Yapraklar dizi elemanlarıdır. Her iç düğüm, çocuklarının toplamını (veya min/max) temsil eder.
2. **Oluşturma (Build)**: Özyinelemeli yapılır. \`Tree[i] = Tree[2*i] + Tree[2*i+1]\`.
3. **Sorgu**: Aralık toplamını bulmak için örtüşmelere bakarız.
   - Örtüşme yok: 0 döndür.
   - Tam örtüşme: Düğüm değerini döndür.
   - Kısmi örtüşme: Çocukları özyinelemeli kontrol et.

### Karmaşıklık
- **Zaman**: Hem sorgu hem güncelleme için **O(log N)**.
- **Alan**: Ağaç düğümlerini saklamak için **O(4 * N)**.`
    },
    complexity: { time: "Query: O(log N)", space: "O(N)" },
    codeSnippet: `// Segment Tree for Range Sum
class SegmentTree {
    tree: number[];
    n: number;
    constructor(arr: number[]) {
        this.n = arr.length;
        this.tree = new Array(4 * this.n);
        this.build(arr, 0, 0, this.n - 1);
    }
    build(arr, node, start, end) {
        if(start === end) { this.tree[node] = arr[start]; return; }
        const mid = Math.floor((start+end)/2);
        this.build(arr, 2*node+1, start, mid);
        this.build(arr, 2*node+2, mid+1, end);
        this.tree[node] = this.tree[2*node+1] + this.tree[2*node+2];
    }
    // Query O(logN)
}`,
    questions: [
        { id: 303, title: "Range Sum Query - Immutable", difficulty: "Easy", url: "https://leetcode.com/problems/range-sum-query-immutable/" },
        { id: 703, title: "Kth Largest Element in a Stream", difficulty: "Easy", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
        { id: 307, title: "Range Sum Query - Mutable", difficulty: "Medium", url: "https://leetcode.com/problems/range-sum-query-mutable/" },
        { id: 406, title: "Queue Reconstruction by Height", difficulty: "Medium", url: "https://leetcode.com/problems/queue-reconstruction-by-height/" },
        { id: 218, title: "The Skyline Problem", difficulty: "Hard", url: "https://leetcode.com/problems/the-skyline-problem/" },
        { id: 315, title: "Count of Smaller Numbers After Self", difficulty: "Hard", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" }
    ],
  },
  {
    id: "ds-fenwick-tree",
    title: { en: "Fenwick Tree (BIT)", tr: "Fenwick Tree (BIT)" },
    category: "Data Structure",
    domain: "DSA",
    level: "Senior",
    summary: {
        en: "Binary Indexed Tree for prefix sums.",
        tr: "Önek toplamları için Binary Indexed Tree."
    },
    descriptionStandard: {
        en: "A data structure that creates a tree with the values of an array to answer range queries.",
        tr: "Aralık sorgularını cevaplamak için dizi değerleriyle ağaç oluşturan bir veri yapısı."
    },
    descriptionELI5: {
        en: "Imagine you have a row of piggy banks (indices). Each bank holds some coins (values). But you also have 'Super Banks' that hold the total money of groups of banks. To find out how much money you have in the first 13 banks, you don't count them one by one. You just check Super Bank 8, Super Bank 4, and Bank 1. You only need to check log(N) banks to get the total sum instantly.",
        tr: "Bir sıra kumbaranız (indeksler) olduğunu hayal edin. Her kumbarada biraz bozuk para (değerler) var. Ama aynı zamanda kumbara gruplarının toplam parasını tutan 'Süper Kumbaralarınız' da var. İlk 13 kumbarada ne kadar paranız olduğunu öğrenmek için onları tek tek saymazsınız. Sadece Süper Kumbara 8, Süper Kumbara 4 ve Kumbara 1'i kontrol edersiniz. Toplam tutarı anında öğrenmek için sadece log(N) kadar kumbarayı kontrol etmeniz yeterlidir."
    },
    contentMarkdown: {
        en: `### Concept
A **Fenwick Tree** (Binary Indexed Tree) solves the same problem as a Segment Tree (Range Sums + Updates) but with much less code and slightly better constants, though it is harder to understand intuitively.

### How it Works
1. **Binary Logic**: Every integer can be represented as sum of powers of 2. Fenwick tree uses this to store partial sums.
2. **Update**: To add \`val\` to index \`i\`, we allow the change to "cascade" up to all ranges responsible for \`i\`. \`i += i & (-i)\`.
3. **Query**: To get prefix sum up to \`i\`, we sum up ranges cascading down. \`i -= i & (-i)\`.

### Complexity
- **Time**: **O(log N)** for query and update.
- **Space**: **O(N)**. Better than Segment Tree.`,
        tr: `### Konsept
**Fenwick Ağacı** (Binary Indexed Tree), Segment Ağacı ile aynı problemi çözer (Aralık Toplamları + Güncellemeler) ancak çok daha az kodla ve biraz daha iyi sabitlerle; ancak sezgisel olarak anlaşılması daha zordur.

### Nasıl Çalışır?
1. **İkili Mantık**: Her tamsayı 2'nin kuvvetlerinin toplamı olarak temsil edilebilir. Fenwick ağacı bunu kısmi toplamları saklamak için kullanır.
2. **Güncelleme**: \`i\` indeksine \`değer\` eklemek için, değişikliğin \`i\`'den sorumlu tüm aralıklara "yukarı doğru basamaklanmasına" izin veririz. \`i += i & (-i)\`.
3. **Sorgu**: \`i\`'ye kadar önek toplamını almak için, "aşağı doğru basamaklanan" aralıkları toplarız. \`i -= i & (-i)\`.

### Karmaşıklık
- **Zaman**: Sorgu ve güncelleme için **O(log N)**.
- **Alan**: **O(N)**. Segment Ağacından daha iyidir.`
    },
    complexity: { time: "O(log N)", space: "O(N)" },
    codeSnippet: `// Binary Indexed Tree (Fenwick)
class FenwickTree {
    tree: number[];
    constructor(size: number) {
        this.tree = new Array(size + 1).fill(0);
    }
    update(i: number, delta: number) {
        // Add delta to index i and its ancestors
        i++; // 1-based index
        while(i < this.tree.length) {
            this.tree[i] += delta;
            i += i & (-i);
        }
    }
    query(i: number): number {
        // Sum from 0 to i
        i++;
        let sum = 0;
        while(i > 0) {
            sum += this.tree[i];
            i -= i & (-i);
        }
        return sum;
    }
}`,
    questions: [
         { id: 303, title: "Range Sum Query - Immutable", difficulty: "Easy", url: "https://leetcode.com/problems/range-sum-query-immutable/" },
         { id: 1395, title: "Count Number of Teams", difficulty: "Medium", url: "https://leetcode.com/problems/count-number-of-teams/" },
         { id: 307, title: "Range Sum Query - Mutable", difficulty: "Medium", url: "https://leetcode.com/problems/range-sum-query-mutable/" },
         { id: 493, title: "Reverse Pairs", difficulty: "Hard", url: "https://leetcode.com/problems/reverse-pairs/" },
         { id: 327, title: "Count of Range Sum", difficulty: "Hard", url: "https://leetcode.com/problems/count-of-range-sum/" },
         { id: 315, title: "Count of Smaller Numbers After Self", difficulty: "Hard", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" }
    ],
  },
  {
    id: "ds-b-tree",
    title: { en: "B-Tree", tr: "B-Tree" },
    category: "Data Structure",
    domain: "DSA",
    level: "Senior",
    summary: {
        en: "Self-balancing tree for disk storage.",
        tr: "Disk depolama için kendi kendini dengeleyen ağaç."
    },
    descriptionStandard: {
        en: "A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.",
        tr: "Sıralı veriyi koruyan ve logaritmik zamanda arama, sıralı erişim, ekleme ve silme işlemlerine izin veren kendi kendini dengeleyen ağaç."
    },
    descriptionELI5: {
        en: "Think of a library filing cabinet. A normal drawer only fits one folder. A B-Tree drawer is huge and can fit hundreds of folders perfectly sorted. This means you have to open fewer drawers to find what you want, which is great because opening drawers (reading from disk) is slow work.",
        tr: "Bir kütüphane dosya dolabını düşün. Normal bir çekmeceye sadece bir dosya sığar. Bir B-Tree çekmecesi ise devasadır ve içine yüzlerce mükemmel sıralanmış dosya sığar. Bu, istediğini bulmak için daha az çekmece açman gerektiği anlamına gelir; bu harikadır çünkü çekmece açmak (diskten okumak) yavaş bir iştir."
    },
    contentMarkdown: {
        en: `### Concept
Binary Trees work well in memory (RAM). But when data is too big and stored on a Hard Disk, jumping around pointers is slow.
A **B-Tree** is a "fat" tree designed for storage systems. Each node can have thousands of children, matching the disk block size.

### How it Works
1. **Multi-Key Nodes**: Instead of 1 key, a node holds \`t-1\` to \`2t-1\` keys in sorted order.
2. **Disk Factors**: This minimizes the height of the tree significantly. A height of 3 or 4 can index billions of items.
3. **Self-Balancing**: All leaf nodes are at the same depth.

### Complexity
- **Time**: **O(log N)** search/insert/delete.
- **Space**: **O(N)**.`,
        tr: `### Konsept
İkili Ağaçlar (Binary Trees) bellekte (RAM) iyi çalışır. Ancak veri çok büyükse ve Sabit Diskte saklanıyorsa, işaretçiler arasında atlamak yavaştır.
**B-Tree**, depolama sistemleri için tasarlanmış "şişman" bir ağaçtır. Her düğüm, disk blok boyutuna uyan binlerce çocuğa sahip olabilir.

### Nasıl Çalışır?
1. **Çok Anahtarlı Düğümler**: Bir düğüm 1 anahtar yerine, sıralı düzende \`t-1\` ila \`2t-1\` anahtar tutar.
2. **Disk Faktörleri**: Bu, ağacın yüksekliğini önemli ölçüde en aza indirir. 3 veya 4 yüksekliği milyarlarca öğeyi indeksleyebilir.
3. **Kendi Kendini Dengeleme**: Tüm yaprak düğümler aynı derinliktedir.

### Karmaşıklık
- **Zaman**: Arama/ekleme/silme için **O(log N)**.
- **Alan**: **O(N)**.`
    },
    complexity: { time: "O(log N)", space: "O(N)" },
    codeSnippet: `class BTreeNode {
    keys: number[];
    children: BTreeNode[];
    isLeaf: boolean;
    // B-Tree Node has 't' to '2t' children
}

// B-Tree ensures all leaf nodes are at same depth.
// Insertion can cause node splitting growing UPWARDS.
// Deletion can cause node merging.`,
    questions: [
        { id: 589, title: "N-ary Tree Preorder Traversal", difficulty: "Easy", url: "https://leetcode.com/problems/n-ary-tree-preorder-traversal/" },
        { id: 590, title: "N-ary Tree Postorder Traversal", difficulty: "Easy", url: "https://leetcode.com/problems/n-ary-tree-postorder-traversal/" },
        { id: 429, title: "N-ary Tree Level Order Traversal", difficulty: "Medium", url: "https://leetcode.com/problems/n-ary-tree-level-order-traversal/" },
        { id: 1472, title: "Design Browser History", difficulty: "Medium", url: "https://leetcode.com/problems/design-browser-history/" },
        { id: 428, title: "Serialize and Deserialize N-ary Tree", difficulty: "Hard", url: "https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/" },
        { id: 642, title: "Design Search Autocomplete System", difficulty: "Hard", url: "https://leetcode.com/problems/design-search-autocomplete-system/" }
    ],
  },
  {
    id: "ds-skip-list",
    title: { en: "Skip List", tr: "Skip List" },
    category: "Data Structure",
    domain: "DSA",
    level: "Senior",
    summary: {
        en: "Probabilistic alternative to balanced trees.",
        tr: "Dengeli ağaçlara olasılıksal alternatif."
    },
    descriptionStandard: {
        en: "A probabilistic data structure that allows O(log N) search complexity within an ordered sequence of elements.",
        tr: "Sıralı eleman dizisi içinde O(log N) arama karmaşıklığı sağlayan olasılıksal veri yapısı."
    },
    descriptionELI5: {
        en: "Imagine express lanes on a highway. The slow lane stops at every exit. The fast lane only stops at major cities. The super-fast lane only stops at countries. If you want to go far, you take the super-fast lane first, then switch to the slower lanes as you get closer to your destination.",
        tr: "Otobandaki ekspres şeritleri hayal et. Yavaş şerit her çıkışta durur. Hızlı şerit sadece büyük şehirlerde durur. Süper hızlı şerit sadece ülkelerde durur. Uzağa gitmek istiyorsan önce süper hızlı şeridi kullanır, hedefine yaklaştıkça yavaş şeritlere geçersin."
    },
    contentMarkdown: {
        en: `### Concept
A **Skip List** provides O(log N) search efficiency like balanced trees (AVL, Red-Black) but uses a probabilistic approach (coin flips) instead of strict rotations. It is essentially multiple layers of Linked Lists.

### How it Works
1. **Layers**: The bottom layer (Level 0) contains all elements.
2. **Promotion**: When inserting an element, verify flip a coin.
   - Heads: Promote element to Level 1.
   - Flip again. Heads: Promote to Level 2...
3. **Search**: Start at top level. Move right. If next node > target, drop down a level. Move right again.

### Complexity
- **Time**: Average **O(log N)**. Worst case O(N) (extremely rare).
- **Space**: **O(N)** due to extra pointers.`,
        tr: `### Konsept
**Skip List (Atlamalı Liste)**, dengeli ağaçlar (AVL, Red-Black) gibi O(log N) arama verimliliği sağlar ancak katı rotasyonlar yerine olasılıksal bir yaklaşım (yazı tura) kullanır. Aslında birden çok Bağlı Liste katmanıdır.

### Nasıl Çalışır?
1. **Katmanlar**: En alt katman (Seviye 0) tüm elemanları içerir.
2. **Terfi (Promotion)**: Bir eleman eklerken yazı tura atın.
   - Yazı: Elemanı Seviye 1'e terfi ettir.
   - Tekrar at. Yazı: Seviye 2'ye terfi ettir...
3. **Arama**: En üst seviyeden başla. Sağa git. Sonraki düğüm > hedef ise, bir seviye aşağı in. Tekrar sağa git.

### Karmaşıklık
- **Zaman**: Ortalama **O(log N)**. En kötü durum O(N) (aşırı nadir).
- **Alan**: Ekstra işaretçiler nedeniyle **O(N)**.`
    },
    complexity: { time: "O(log N)", space: "O(N)" },
    codeSnippet: `class SkipListNode {
    value: number;
    next: SkipListNode[];
    // 'next' is an array of pointers for different levels
}

// Search: Start at top level, move right until next > target, then move down.
// Insert: Flip coin to decide how many levels new node spans.
// O(log N) average case driven by randomization.`,
    questions: [
        { id: 706, title: "Design HashMap", difficulty: "Easy", url: "https://leetcode.com/problems/design-hashmap/" },
        { id: 705, title: "Design HashSet", difficulty: "Easy", url: "https://leetcode.com/problems/design-hashset/" },
        { id: 1206, title: "Design Skiplist", difficulty: "Hard", url: "https://leetcode.com/problems/design-skiplist/" },
        { id: 707, title: "Design Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/design-linked-list/" },
        { id: 146, title: "LRU Cache", difficulty: "Medium", url: "https://leetcode.com/problems/lru-cache/" },
        { id: 460, title: "LFU Cache", difficulty: "Hard", url: "https://leetcode.com/problems/lfu-cache/" }
    ],
  },
];

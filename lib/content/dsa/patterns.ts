import { ContentItem } from "../types";

export const patterns: ContentItem[] = [
  {
    id: "pattern-two-pointers",
    title: { en: "Two Pointers", tr: "Two Pointers" },
    category: "Pattern",
    domain: "DSA",
    level: "Junior",
    summary: {
        en: "Two references moving towards each other or together.",
        tr: "Birbirine doğru veya aynı yönde hareket eden iki referans."
    },
    descriptionStandard: {
        en: "Used for sorted arrays or linked lists to find pairs or reverse / manipulate data in O(N) time without O(N) space.",
        tr: "Sıralı dizilerde veya bağlı listelerde çiftleri bulmak veya veri manipülasyonu yapmak için kullanılır. O(N) zaman ve O(1) alan karmaşıklığı sağlar."
    },
    descriptionELI5: {
        en: "Imagine you have a long piece of ribbon laid out flat. You put one finger on the left end and one finger on the right end. To find the perfect spot or pair, you slide your fingers toward each other, checking the ribbon as you go. You never have to lift your fingers or start over, you just slide them until they meet. This is much faster than jumping around randomly.",
        tr: "Uzun bir kurdelenin serili olduğunu hayal edin. Bir parmağınızı sol uca, diğerini sağ uca koyuyorsunuz. Mükemmel noktayı veya çifti bulmak için parmaklarınızı birbirine doğru kaydırıyor, ilerledikçe kurdeleyi kontrol ediyorsunuz. Parmaklarınızı kaldırmanıza veya baştan başlamanıza gerek yok, sadece birbirlerine değene kadar kaydırıyorsunuz. Bu, rastgele zıplamaktan çok daha hızlıdır."
    },
    contentMarkdown: {
        en: `### Concept
The **Two Pointers** pattern involves creating two pointers (indices) that traverse the data structure in a coordinated way.
Common variations:
1. **Opposite Direction**: One starts at 0, other at \`length-1\`. Move towards middle. (e.g., Two Sum Sorted, Palindrome).
2. **Same Direction**: Both start at 0, one moves faster or with a delay. (See Fast & Slow).

### Why it works?
In a brute force approach (Nested Loops), for every element \`i\`, we iterate through all \`j\`. This is **O(N^2)**.
By using Two Pointers on a **Sorted** array, we can make a decision to move \`left\` or \`right\` based on the current sum. This allows us to process the array in a single pass **O(N)**.`,
        tr: `### Konsept
**Two Pointers (İki İşaretçi)** deseni, veri yapısı üzerinde koordineli bir şekilde hareket eden iki işaretçi (indeks) oluşturmayı içerir.
Yaygın varyasyonlar:
1. **Zıt Yön**: Biri 0'da, diğeri \`length-1\`'de başlar. Ortaya doğru ilerlerler. (örn: Two Sum Sorted, Palindrom).
2. **Aynı Yön**: İkisi de 0'da başlar, biri daha hızlı veya gecikmeli gider. (Bkz: Hızlı & Yavaş).

### Neden çalışır?
Kaba kuvvet yaklaşımında (İç İçe Döngüler), her \`i\` elemanı için tüm \`j\`'leri tararız. Bu **O(N^2)**'dir.
**Sıralı** bir dizide İki İşaretçi kullanarak, mevcut toplam değerine göre \`sol\` veya \`sağ\` işaretçiyi hareket ettirme kararı verebiliriz. Bu, diziyi tek bir geçişte **O(N)** sürede işlememizi sağlar.`
    },
    realWorldUses: [
        { en: "Memory management (Compact & Sweep GC)", tr: "Bellek Yönetimi (Compact & Sweep Çöp Toplayıcılar)" },
        { en: "String reversal / Palindrome checks", tr: "Metin ters çevirme / Palindrom kontrolleri" },
        { en: "Merging two sorted lists (Merge Sort)", tr: "İki sıralı listeyi birleştirme (Merge Sort)" }
    ],
    pros: [
        { en: "Reduces O(N^2) loops to O(N)", tr: "O(N^2) döngüleri O(N)'e indirir" },
        { en: "Constant space O(1)", tr: "Sabit alan kullanımı O(1)" }
    ],
    cons: [
        { en: "Often requires SORTED input", tr: "Genellikle SIRALI girdi gerektirir" },
        { en: "Limited to linear structures", tr: "Sadece doğrusal yapılarla sınırlıdır" }
    ],
    complexity: { time: "O(N)", space: "O(1)" },
    codeSnippet: `// Template for catching a target sum in Sorted Array
function twoSumSorted(arr: number[], target: number): number[] {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let currentSum = arr[left] + arr[right];

        if (currentSum === target) {
            return [left, right];
        } else if (currentSum < target) {
            left++; // Need bigger sum
        } else {
            right--; // Need smaller sum
        }
    }
    return [-1, -1];
}`,
    questions: [
        { id: 125, title: "Valid Palindrome", difficulty: "Easy", url: "https://leetcode.com/problems/valid-palindrome/" },
        { id: 283, title: "Move Zeroes", difficulty: "Easy", url: "https://leetcode.com/problems/move-zeroes/" },
        { id: 15, title: "3Sum", difficulty: "Medium", url: "https://leetcode.com/problems/3sum/" },
        { id: 11, title: "Container With Most Water", difficulty: "Medium", url: "https://leetcode.com/problems/container-with-most-water/" },
        { id: 42, title: "Trapping Rain Water", difficulty: "Hard", url: "https://leetcode.com/problems/trapping-rain-water/" },
        { id: 76, title: "Minimum Window Substring", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-window-substring/" }
    ],
  },
  {
    id: "pattern-sliding-window",
    title: { en: "Sliding Window", tr: "Sliding Window" },
    category: "Pattern",
    domain: "DSA",
    level: "Mid",
    summary: {
        en: "Subarray/Substring problems.",
        tr: "Alt dizi / Alt metin problemleri."
    },
    descriptionStandard: {
        en: "Used when asked for 'longest variable subarray', 'shortest subarray', or 'k-sized subarray'. Maintains a window state.",
        tr: "Genellikle 'en uzun alt dizi', 'en kısa alt dizi' veya 'k boyutlu alt dizi' sorulduğunda kullanılır. Bir pencere durumu (toplamı, eleman sayıları vb.) korunur."
    },
    descriptionELI5: {
        en: "Imagine looking at a beautiful landscape through a small, rectangular picture frame. You can't see the whole view at once, only what's inside the frame. As you slide the frame to the right, a new tree enters the view on the right side, and an old rock disappears on the left side. You process the data 'inside the frame' as it moves, without needing to look at everything else.",
        tr: "Güzel bir manzaraya küçük, dikdörtgen bir resim çerçevesinden baktığınızı hayal edin. Tüm manzarayı aynı anda göremezsiniz, sadece çerçevenin içindekini görürsünüz. Çerçeveyi sağa kaydırdığınızda, sağ taraftan yeni bir ağaç görüntüye girer ve sol taraftan eski bir kaya kaybolur. Verileri, her şeye bakmaya gerek kalmadan, hareket eden 'çerçevenin içinde' işlersiniz."
    },
    contentMarkdown: {
        en: `### Concept
The **Sliding Window** pattern deals with subarray or substring problems. Instead of re-calculating the sum/count of a subarray from scratch every time (which gives O(N*K)), we "slide" the window by adding one element and removing one element.

### Types
1. **Fixed Size**: Window size \`k\` never changes.
2. **Dynamic Size**: Expand \`right\` until condition breaks, then shrink \`left\` until valid again.

### Complexity
Even though there is a \`while\` loop inside a \`for\` loop (in dynamic window), each element is added once and removed once. So it is strictly **2N**, which simplifies to **O(N)**.`,
        tr: `### Konsept
**Sliding Window (Kayan Pencere)** deseni, alt dizi veya alt metin problemleriyle ilgilenir. Her seferinde bir alt dizinin toplamını/sayısını sıfırdan hesaplamak yerine (ki bu O(N*K) yapar), pencereyi bir eleman ekleyip bir eleman çıkararak "kaydırırız".

### Türler
1. **Sabit Boyut**: Pencere boyutu \`k\` asla değişmez.
2. **Dinamik Boyut**: Koşul bozulana kadar \`sağ\` tarafı genişlet, sonra geçerli olana kadar \`sol\` tarafı daralt.

### Karmaşıklık
Dinamik pencerede \`for\` döngüsü içinde \`while\` döngüsü olsa bile, her eleman sadece bir kez eklenir ve bir kez çıkarılır. Yani işlem sayısı kesinlikle **2N**'dir, bu da **O(N)**'e sadeleşir.`
    },
    realWorldUses: [
        { en: "TCP Flow Control (Sliding Window Protocol)", tr: "TCP Akış Kontrolü (Sliding Window Protokolü)" },
        { en: "Data Streaming / Rate Limiting", tr: "Veri Akışı / Hız Sınırlama (Rate Limiting)" },
        { en: "Signal Processing (Moving Averages)", tr: "Sinyal İşleme (Hareketli Ortalamalar)" }
    ],
    pros: [
        { en: "O(N) vs O(N*K) brute force", tr: "O(N*K) kaba kuvvet yerine O(N) hız" },
        { en: "Avoids re-calculating overlapping data", tr: "Örtüşen verilerin tekrar hesaplanmasını önler" }
    ],
    cons: [
        { en: "Complex to handle edge cases", tr: "Uç durumları (edge cases) yönetmek zordur" },
        { en: "Hard to identify when applicable", tr: "Ne zaman uygulanacağını kestirmek zordur" }
    ],
    complexity: { time: "O(N)", space: "O(1)" },
    codeSnippet: `// Template for Variable Window
function slidingWindow(arr: number[]) {
    let left = 0;
    let currentSum = 0;
    let bestAns = 0;

    for (let right = 0; right < arr.length; right++) {
        // 1. Add element to window
        currentSum += arr[right];

        // 2. Shrink window while condition is broken
        while (currentSum > TARGET) {
            currentSum -= arr[left];
            left++;
        }

        // 3. Update answer
        bestAns = Math.max(bestAns, right - left + 1);
    }
}`,
    questions: [
        { id: 643, title: "Maximum Average Subarray I", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-average-subarray-i/" },
        { id: 1984, title: "Minimum Difference Between Highest and Lowest of K Scores", difficulty: "Easy", url: "https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/" },
        { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        { id: 1004, title: "Max Consecutive Ones III", difficulty: "Medium", url: "https://leetcode.com/problems/max-consecutive-ones-iii/" },
        { id: 76, title: "Minimum Window Substring", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-window-substring/" },
        { id: 239, title: "Sliding Window Maximum", difficulty: "Hard", url: "https://leetcode.com/problems/sliding-window-maximum/" }
    ],
  },
  {
    id: "pattern-prefix-sum",
    title: { en: "Prefix Sum", tr: "Prefix Sum" },
    category: "Pattern",
    domain: "DSA",
    level: "Junior",
    summary: {
        en: "Fast range sum queries.",
        tr: "Hızlı aralık toplamı sorguları."
    },
    descriptionStandard: {
        en: "Precomputing the sum of elements up to index i allows calculating the sum of any subarray [L, R] in O(1) time.",
        tr: "Her indekse kadar olan toplamları önceden hesaplayarak, herhangi bir [L, R] aralığının toplamını O(1) zamanda bulmanızı sağlar."
    },
    descriptionELI5: {
        en: "Imagine writing down your daily spending in a diary, but instead of just writing 'Today I spent $5', you write the TOTAL spent from the beginning of time until today. If your Day 10 total is $500 and Day 7 total was $300, you instantly know that you spent exactly $200 between Day 8 and Day 10, without having to add up the individual receipts again.",
        tr: "Günlük harcamalarınızı bir günlüğe not ettiğinizi hayal edin, ancak sadece 'Bugün 5$ harcadım' yazmak yerine, başlangıçtan bugüne kadar olan TOPLAM harcamayı yazıyorsunuz. Eğer 10. Gün toplamınız 500$ ve 7. Gün toplamınız 300$ ise, tek tek fişleri tekrar toplamak zorunda kalmadan 8. Gün ile 10. Gün arasında tam olarak 200$ harcadığınızı anında bilirsiniz."
    },
    contentMarkdown: {
        en: `### Concept
**Prefix Sum** is a technique that trades **Space** for **Time**.
By creating a new array where \`P[i]\` stores the sum of all numbers from \`0\` to \`i-1\` (or \`i\`), we can answer range queries instantly.

### Formula
Range Sum \`[L, R]\` = \`Prefix[R] - Prefix[L-1]\`.
This transforms an **O(N)** summation loop into a simple **O(1)** subtraction.

### Applications
Beyond simple sums, this applies to:
- Range XOR queries.
- Product queries (with care for zeros).
- 2D Prefix Sums for matrix sub-rectangles.`,
        tr: `### Konsept
**Prefix Sum**, **Zaman** kazanmak için **Alan** harcama tekniğidir.
\`P[i]\`'nin \`0\`'dan \`i-1\`'e (veya \`i\`) kadar olan tüm sayıların toplamını sakladığı yeni bir dizi oluşturarak, aralık sorgularına anında cevap verebiliriz.

### Formül
Aralık Toplamı \`[L, R]\` = \`Prefix[R] - Prefix[L-1]\`.
Bu, **O(N)** süren bir toplama döngüsünü basit bir **O(1)** çıkarma işlemine dönüştürür.

### Uygulamalar
Basit toplamların ötesinde:
- Aralık XOR sorguları.
- Çarpım sorguları (sıfıra dikkat edilerek).
- Matris alt dikdörtgenleri için 2D Prefix Sum.`
    },
    realWorldUses: [
        { en: "Image Processing (Integral Images)", tr: "Görüntü İşleme (İntegral Görüntüler)" },
        { en: "Analytics (Cumulative Signups/Sales)", tr: "Analitik (Kümülatif Üyelik/Satış)" },
        { en: "Gamedev (Grid based pathfinding heuristics)", tr: "Oyun Geliştirme (Grid tabanlı yol bulma)" }
    ],
    pros: [
        { en: "O(1) range queries", tr: "Sorgular O(1) süresindedir" },
        { en: "Simple mathematical concept", tr: "Basit matematiksel konsept" }
    ],
    cons: [
        { en: "O(N) extra space for prefix array", tr: "Prefix dizisi için O(N) ekstra alan" },
        { en: "Expensive to update (recalculate O(N))", tr: "Güncellemesi pahalıdır (O(N) yeniden hesaplama)" }
    ],
    complexity: { time: "O(N) build, O(1) query", space: "O(N)" },
    codeSnippet: `class NumArray {
    private prefix: number[];

    constructor(nums: number[]) {
        this.prefix = new Array(nums.length + 1).fill(0);
        for(let i=0; i<nums.length; i++) {
            this.prefix[i + 1] = this.prefix[i] + nums[i];
        }
    }

    sumRange(left: number, right: number): number {
        return this.prefix[right + 1] - this.prefix[left];
    }
}`,
    questions: [
        { id: 303, title: "Range Sum Query - Immutable", difficulty: "Easy", url: "https://leetcode.com/problems/range-sum-query-immutable/" },
        { id: 724, title: "Find Pivot Index", difficulty: "Easy", url: "https://leetcode.com/problems/find-pivot-index/" },
        { id: 560, title: "Subarray Sum Equals K", difficulty: "Medium", url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
        { id: 238, title: "Product of Array Except Self", difficulty: "Medium", url: "https://leetcode.com/problems/product-of-array-except-self/" },
        { id: 410, title: "Split Array Largest Sum", difficulty: "Hard", url: "https://leetcode.com/problems/split-array-largest-sum/" },
        { id: 363, title: "Max Sum of Rectangle No Larger Than K", difficulty: "Hard", url: "https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/" }
    ],
  },
  {
    id: "pattern-fast-slow",
    title: { en: "Fast & Slow Pointers", tr: "Fast & Slow Pointers" },
    category: "Pattern",
    domain: "DSA",
    level: "Mid",
    summary: {
        en: "Cycle detection in lists.",
        tr: "Listelerde döngü tespiti."
    },
    descriptionStandard: {
        en: "Two pointers move at different speeds (usually 2x and 1x). If they meet, there is a cycle.",
        tr: "İki işaretçi farklı hızlarda ilerler (genellikle biri 2 adım, diğeri 1 adım). Eğer bir noktada karşılaşırlarsa, listede döngü var demektir."
    },
    descriptionELI5: {
        en: "Imagine two runners on a race track. One is a fast hare, the other is a slow tortoise. If the track is a straight line, the hare will just finish and never see the tortoise again. But if the track is a LOOP (circle), the hare will eventually run all the way around and lap the tortoise, catching them from behind. If they meet, you know for sure the track is a circle.",
        tr: "Bir yarış pistinde iki koşucu hayal edin. Biri hızlı tavşan, diğeri yavaş kaplumbağa. Eğer pist düz bir çizgiyse, tavşan bitirir ve kaplumbağayı bir daha asla görmez. Ama pist bir DÖNGÜ (daire) ise, tavşan sonunda tam tur atar ve kaplumbağayı arkadan yakalar. Eğer karşılaşırlarsa, pistin bir daire olduğundan emin olursunuz."
    },
    contentMarkdown: {
        en: `### Concept
Also known as the **Tortoise and Hare** algorithm.
We maintain two pointers:
- **Slow**: Moves 1 step at a time.
- **Fast**: Moves 2 steps at a time.

### Logic
If there is NO cycle (straight line), Fast will reach \`null\` (the finish line) before Slow.
If there IS a cycle (circle), Fast serves the loop and eventually loops back to catch Slow from behind. The standard proof shows they are guaranteed to meet.

### Other Uses
- Finding the **Middle** of a Linked List (When Fast reaches end, Slow is at middle).
- Finding the **Start** of the cycle (Mathematical derivation involving meeting point).`,
        tr: `### Konsept
**Kaplumbağa ve Tavşan** algoritması olarak da bilinir.
İki işaretçi tutarız:
- **Yavaş (Slow)**: Her seferinde 1 adım gider.
- **Hızlı (Fast)**: Her seferinde 2 adım gider.

### Mantık
Eğer döngü YOKSA (düz çizgi), Hızlı olan Yavaş olandan önce \`null\`'a (bitiş çizgisine) ulaşır.
Eğer döngü VARSA (daire), Hızlı olan tur bindirir ve sonunda Yavaş olanı arkadan yakalar. Matematiksel ispat kesinlikle karşılaşacaklarını gösterir.

### Diğer Kullanımlar
- Bağlı Listenin **Ortasını** bulma (Hızlı sona vardığında, Yavaş ortadadır).
- Döngünün **Başlangıç Noktasını** bulma (Karşılaşma noktasını içeren matematiksel türetim).`
    },
    realWorldUses: [
        { en: "Cryptography (Pollard's rho algorithm)", tr: "Kriptografi (Pollard's rho algoritması)" },
        { en: "Process Scheduling (Deadlock detection)", tr: "İşlem Zamanlama (Deadlock tespiti)" },
        { en: "Linked List middle finding", tr: "Bağlı Liste ortasını bulma" }
    ],
    pros: [
        { en: "Floyd's Cycle Finding is O(1) Space", tr: "Floyd Döngü Tespiti O(1) Alan kullanır" },
        { en: "Very robust for pointer structures", tr: "Pointer yapıları için çok güvenilirdir" }
    ],
    cons: [
        { en: "Hard to understand exact meeting logic", tr: "Karşılaşma mantığını anlamak zordur" },
        { en: "Modifies navigation logic typically", tr: "Gezinme mantığını değiştirir" }
    ],
    complexity: { time: "O(N)", space: "O(1)" },
    codeSnippet: `function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true; // Cycle detected
        }
    }
    return false;
}`,
    questions: [
        { id: 141, title: "Linked List Cycle", difficulty: "Easy", url: "https://leetcode.com/problems/linked-list-cycle/" },
        { id: 876, title: "Middle of the Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/middle-of-the-linked-list/" },
        { id: 142, title: "Linked List Cycle II", difficulty: "Medium", url: "https://leetcode.com/problems/linked-list-cycle-ii/" },
        { id: 287, title: "Find the Duplicate Number", difficulty: "Medium", url: "https://leetcode.com/problems/find-the-duplicate-number/" },
        { id: 25, title: "Reverse Nodes in k-Group", difficulty: "Hard", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
        { id: 41, title: "First Missing Positive", difficulty: "Hard", url: "https://leetcode.com/problems/first-missing-positive/" }
    ],
  },
  {
    id: "pattern-merge-intervals",
    title: { en: "Merge Intervals", tr: "Merge Intervals" },
    category: "Pattern",
    domain: "DSA",
    level: "Mid",
    summary: {
        en: "Processing overlapping time ranges.",
        tr: "Örtüşen zaman aralıklarını işleme."
    },
    descriptionStandard: {
        en: "A pattern used to handle overlapping intervals. Usually involves sorting the intervals by start time.",
        tr: "Örtüşen aralıkları yönetmek için kullanılan bir desen. Genellikle aralıkları başlangıç zamanına göre sıralamayı içerir."
    },
    descriptionELI5: {
        en: "Imagine you are reserving a meeting room. Meeting A is from 1:00 PM to 3:00 PM. Meeting B is from 2:00 PM to 4:00 PM. Since they overlap, you can't have two separate bookings. You just block out the room from 1:00 PM all the way to 4:00 PM. You keep combining overlapping times until you have a few long, unbroken blocks of busy time.",
        tr: "Bir toplantı odası ayırttığınızı hayal edin. Toplantı A, 13:00 - 15:00 arası. Toplantı B, 14:00 - 16:00 arası. Çakıştıkları için iki ayrı rezervasyon yapamazsınız. Odayı sadece 13:00'ten 16:00'ya kadar bloklarsınız. Birkaç uzun, kesintisiz meşgul zaman bloğunuz olana kadar örtüşen zamanları birleştirmeye devam edersiniz."
    },
    contentMarkdown: {
        en: `### Concept
This pattern describes an efficient technique to deal with overlapping intervals. In a lot of problems involving intervals, you either need to find overlapping intervals or merge intervals if they overlap.

### How it Works
1. **Sort**: First, sort the intervals by their start time. This is crucial because it ensures that if an overlap exists, it will be with adjacent intervals.
2. **Iterate**: Create a new list for merged intervals. Add the first interval.
3. **Compare**: For each subsequent interval, check if it overlaps with the last interval in the merged list.
   - **Overlap Condition**: \`Current.Start <= LastMerged.End\`
   - **Merge Action**: \`LastMerged.End = max(LastMerged.End, Current.End)\`
   - **No Overlap**: Push the current interval as a new entry.

### Complexity
- **Time**: **O(N log N)** due to sorting. The iteration itself is O(N).
- **Space**: **O(N)** to store the result.`,
        tr: `### Konsept
Bu desen, örtüşen (çakışan) aralıklarla başa çıkmak için verimli bir teknik tanımlar. Aralıkları içeren birçok problemde, örtüşen aralıkları bulmanız veya çakışıyorlarsa birleştirmeniz gerekir.

### Nasıl Çalışır?
1. **Sıralama**: İlk olarak, aralıkları başlangıç zamanlarına göre sıralayın. Bu çok önemlidir çünkü bir çakışma varsa, bunun bitişik aralıklarla olacağını garanti eder.
2. **Yineleme**: Birleştirilmiş aralıklar için yeni bir liste oluşturun. İlk aralığı ekleyin.
3. **Karşılaştırma**: Sonraki her aralık için, birleştirilmiş listedeki son aralıkla çakışıp çakışmadığını kontrol edin.
   - **Çakışma Koşulu**: \`Mevcut.Başlangıç <= SonBirleşen.Bitiş\`
   - **Birleştirme İşlemi**: \`SonBirleşen.Bitiş = max(SonBirleşen.Bitiş, Mevcut.Bitiş)\`
   - **Çakışma Yok**: Mevcut aralığı yeni bir giriş olarak ekleyin.

### Karmaşıklık
- **Zaman**: Sıralama nedeniyle **O(N log N)**. Yinelemenin kendisi O(N)'dir.
- **Alan**: Sonucu saklamak için **O(N)**.`
    },
    realWorldUses: [
        { en: "Calendar/Event Scheduling (Google Calendar)", tr: "Takvim/Etkinlik Planlama (Google Takvim)" },
        { en: "Memory Allocation (Merging free blocks)", tr: "Bellek Tahsisi (Boş blokları birleştirme)" },
        { en: "Video editing (Timeline rendering)", tr: "Video Düzenleme (Zaman çizelgesi oluşturma)" }
    ],
    pros: [
        { en: "Solves complex scheduling problems cleanly", tr: "Karmaşık planlama problemlerini temiz bir şekilde çözer" },
        { en: "O(N) single pass after sorting", tr: "Sıralamadan sonra O(N) tek geçişle biter" }
    ],
    cons: [
        { en: "Requires sorting (O(N log N) bottleneck)", tr: "Sıralama gerektirir (O(N log N) darboğazı)" },
        { en: "Space for output array", tr: "Çıktı dizisi için alan" }
    ],
    complexity: { time: "O(N log N)", space: "O(N)" },
    codeSnippet: `// Merge Intervals: Time O(N log N) | Space O(N)
function merge(intervals: number[][]): number[][] {
    if (intervals.length <= 1) return intervals;

    // 1. Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);

    const result: number[][] = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const lastMerged = result[result.length - 1];

        // 2. Overlap?
        if (current[0] <= lastMerged[1]) {
            // Merge: End time is max of both
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            // No overlap, add interval
            result.push(current);
        }
    }
    return result;
}`,
    questions: [
        { id: 228, title: "Summary Ranges", difficulty: "Easy", url: "https://leetcode.com/problems/summary-ranges/" },
        { id: 495, title: "Teemo Attacking", difficulty: "Easy", url: "https://leetcode.com/problems/teemo-attacking/" },
        { id: 56, title: "Merge Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/merge-intervals/" },
        { id: 57, title: "Insert Interval", difficulty: "Medium", url: "https://leetcode.com/problems/insert-interval/" },
        { id: 352, title: "Data Stream as Disjoint Intervals", difficulty: "Hard", url: "https://leetcode.com/problems/data-stream-as-disjoint-intervals/" },
        { id: 715, title: "Range Module", difficulty: "Hard", url: "https://leetcode.com/problems/range-module/" }
    ],
  },
  {
    id: "pattern-cyclic-sort",
    title: { en: "Cyclic Sort", tr: "Cyclic Sort" },
    category: "Pattern",
    domain: "DSA",
    level: "Mid",
    summary: {
        en: "Sorting numbers 1 to N in O(N).",
        tr: "1'den N'e sayıları O(N)'de sıralama."
    },
    descriptionStandard: {
        en: "Used when the input array contains numbers in a specific range (like 1 to N). We can sort it in O(N) by placing each number at its correct index.",
        tr: "Girdi dizisi belirli bir aralıkta (1'den N'e gibi) sayılar içerdiğinde kullanılır. Her sayıyı doğru indeksine koyarak O(N) sürede sıralayabiliriz."
    },
    descriptionELI5: {
        en: "Imagine a classroom with numbered seats 1 to 30. Each student has a ticket with their seat number on it, but they are sitting randomly! You walk up to the student in Seat #1. His ticket says '#5'. You say 'Go to Seat #5!'. He goes there and swaps with whoever is currently in seat #5. You keep doing this until the student holding Ticket #1 is actually sitting in Seat #1. Then you move to Seat #2 and repeat.",
        tr: "1'den 30'a kadar numaralandırılmış koltukları olan bir sınıf hayal edin. Her öğrencinin elinde koltuk numarası yazılı bir bilet var, ama rastgele oturuyorlar! Koltuk #1'deki öğrenciye gidiyorsunuz. Biletinde '#5' yazıyor. 'Koltuk #5'e git!' diyorsunuz. Oraya gidiyor ve şu anda koltuk #5'te oturan kişiyle yer değiştiriyor. Bilet #1'i tutan öğrenci gerçekten Koltuk #1'e oturana kadar buna devam ediyorsunuz. Sonra Koltuk #2'ye geçip tekrar ediyorsunuz."
    },
    contentMarkdown: {
        en: `### Concept
The **Cyclic Sort** pattern iterates over the array one number at a time, and if the current number you are iterating is not at the correct index, you swap it with the number at its correct index.

### When to Use
This pattern is specifically used when you are given an array containing numbers in a given range (like \`1\` to \`N\`) and you need to find the missing or duplicate numbers.

### How it Works
1. Iterate from \`i = 0\` to \`N\`.
2. Determine the correct index for \`arr[i]\`. Usually \`correctIndex = arr[i] - 1\`.
3. If \`arr[i]\` is not at \`correctIndex\`, swap \`arr[i]\` with \`arr[correctIndex]\`.
4. If it IS at the correct position, move to \`i + 1\`.

### Complexity
- **Time**: **O(N)**. Although there is a nested check (swap), each number is swapped at most once to its correct position.
- **Space**: **O(1)**. It sorts in-place.`,
        tr: `### Konsept
**Cyclic Sort (Döngüsel Sıralama)** deseni, diziyi her seferinde bir sayı üzerinden yineler ve yinelediğiniz mevcut sayı doğru indekste değilse, onu doğru indeksindeki sayıyla takas eder.

### Ne Zaman Kullanılır?
Bu desen, özellikle belirli bir aralıkta (\`1\` ila \`N\` gibi) sayılar içeren bir dizi verildiğinde ve eksik veya yinelenen sayıları bulmanız gerektiğinde kullanılır.

### Nasıl Çalışır?
1. \`i = 0\` dan \`N\`'e kadar ilerleyin.
2. \`arr[i]\` için doğru indeksi belirleyin. Genellikle \`dogruIndeks = arr[i] - 1\`.
3. Eğer \`arr[i]\`, \`dogruIndeks\`te değilse, \`arr[i]\` ile \`arr[dogruIndeks]\`i takas edin.
4. Eğer doğru konumdaysa, \`i + 1\`'e geçin.

### Karmaşıklık
- **Zaman**: **O(N)**. İç içe bir kontrol (takas) olsa da, her sayı en fazla bir kez doğru konumuna takas edilir.
- **Alan**: **O(1)**. Yerinde (in-place) sıralama yapar.`
    },
    realWorldUses: [
        { en: "Data recovery (Restoring shuffled indices)", tr: "Veri Kurtarma (Karışmış indeksleri düzeltme)" },
        { en: "Finding missing pages in a book", tr: "Kitaptaki eksik sayfaları bulma" },
        { en: "Quality Control (Checking complete sets)", tr: "Kalite Kontrol (Tam setleri kontrol etme)" }
    ],
    pros: [
        { en: "O(N) sort time (very fast)", tr: "O(N) sıralama süresi (çok hızlı)" },
        { en: "O(1) space (in-place)", tr: "O(1) alan kullanımı (yerinde)" }
    ],
    cons: [
        { en: "Only works for numbers in specific range (1-N)", tr: "Sadece belirli aralıktaki (1-N) sayılar için çalışır" },
        { en: "Mutates the original array", tr: "Orijinal diziyi değiştirir" }
    ],
    complexity: { time: "O(N)", space: "O(1)" },
    codeSnippet: `// Cyclic Sort: Time O(N) | Space O(1)
function cyclicSort(nums: number[]): void {
    let i = 0;
    while (i < nums.length) {
        // Value 1 belongs at index 0, Value 5 at index 4, etc.
        const correctIndex = nums[i] - 1; 
        
        // Is number at correct place?
        if (nums[i] !== nums[correctIndex]) {
            // Swap
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }
}`,
    questions: [
        { id: 268, title: "Missing Number", difficulty: "Easy", url: "https://leetcode.com/problems/missing-number/" },
        { id: 645, title: "Set Mismatch", difficulty: "Easy", url: "https://leetcode.com/problems/set-mismatch/" },
        { id: 442, title: "Find All Duplicates in an Array", difficulty: "Medium", url: "https://leetcode.com/problems/find-all-duplicates-in-an-array/" },
        { id: 287, title: "Find the Duplicate Number", difficulty: "Medium", url: "https://leetcode.com/problems/find-the-duplicate-number/" },
        { id: 41, title: "First Missing Positive", difficulty: "Hard", url: "https://leetcode.com/problems/first-missing-positive/" },
        { id: 765, title: "Couples Holding Hands", difficulty: "Hard", url: "https://leetcode.com/problems/couples-holding-hands/" }
    ],
  },
  {
    id: "pattern-top-k-elements",
    title: { en: "Top 'K' Elements", tr: "Top 'K' Elements" },
    category: "Pattern",
    domain: "DSA",
    level: "Mid",
    summary: {
        en: "Finding top K items using Heap.",
        tr: "Heap kullanarak en iyi K elemanı bulma."
    },
    descriptionStandard: {
        en: "Using a Min-Heap or Max-Heap to keep track of the 'K' largest or smallest elements in a stream of data.",
        tr: "Bir veri akışındaki en büyük veya en küçük 'K' elemanı takip etmek için Min-Heap veya Max-Heap kullanma."
    },
    descriptionELI5: {
        en: "Imagine a 'Hall of Fame' board that can only hold 10 names. Hundreds of players are playing the game. When someone gets a high score, you check the board. Is their score higher than the lowest score on the board? If yes, you erase the lowest score and write the new one. If no, you ignore them. At the end of the day, the board is guaranteed to have the top 10 players of all time.",
        tr: "Sadece 10 isim alabilen bir 'Şeref Kürsüsü' panosu hayal edin. Yüzlerce oyuncu oyunu oynuyor. Biri yüksek bir skor elde ettiğinde panoyu kontrol edersiniz. Puanları, panodaki en düşük puandan yüksek mi? Evet ise, en düşük puanı siler ve yenisini yazarsınız. Hayır ise, onları görmezden gelirsiniz. Günün sonunda, panonun tüm zamanların en iyi 10 oyuncusuna sahip olması garantidir."
    },
    contentMarkdown: {
        en: `### Concept
Any problem that asks us to find the top/smallest/frequent 'K' elements among a given set falls under this pattern.

### Why Heap?
Sorting the entire array takes **O(N log N)**. If we only need the top K, we can do better using a **Heap**.
A Heap is a binary tree structure that ensures the root is always the min (or max).

### How it Works (Finding Top K Largest)
1. Initialize a **Min-Heap**.
2. Iterate through the numbers.
3. Push number into Heap.
4. If Heap size > K, remove the **smallest** element (root).
   - This keeps the Heap size strictly at K.
   - By always removing the smallest, we guarantee that the numbers remaining in the heap are the **largest** seen so far.

### Complexity
- **Time**: **O(N log K)**. Each insertion/deletion into a heap of size K takes O(log K). We do this N times.
- **Space**: **O(K)** to store the heap.`,
        tr: `### Konsept
Verilen bir küme arasından en iyi/en küçük/en sık 'K' elemanı bulmamızı isteyen herhangi bir problem bu desene girer.

### Neden Heap?
Tüm diziyi sıralamak **O(N log N)** sürer. Sadece en iyi K elemana ihtiyacımız varsa, bir **Heap (Yığın)** kullanarak daha iyisini yapabiliriz.
Heap, kökün her zaman en küçük (veya en büyük) olmasını sağlayan bir ikili ağaç yapısıdır.

### Nasıl Çalışır? (En Büyük K'yı Bulma)
1. Bir **Min-Heap** başlatın.
2. Sayılar arasında ilerleyin.
3. Sayıyı Heap'e ekleyin.
4. Eğer Heap boyutu > K ise, **en küçük** elemanı (kökü) çıkarın.
   - Bu, Heap boyutunu kesinlikle K'da tutar.
   - Her zaman en küçüğü çıkararak, heap'te kalan sayıların şimdiye kadar görülen **en büyükler** olmasını garanti ederiz.

### Karmaşıklık
- **Zaman**: **O(N log K)**. K boyutundaki bir heap'e her ekleme/silme O(log K) sürer. Bunu N kez yaparız.
- **Alan**: Heap'i saklamak için **O(K)**.`
    },
    realWorldUses: [
        { en: "Trending Topics (Twitter/X hashtags)", tr: "Trend Konular (Twitter/X hashtag'leri)" },
        { en: "Game Leaderboards (Top 10 scores)", tr: "Oyun Liderlik Tabloları (İlk 10 skor)" },
        { en: "Recommendation Systems (Top 5 similar items)", tr: "Öneri Sistemleri (En çok benzeyen ilk 5 ürün)" }
    ],
    pros: [
        { en: "Faster than sorting entire array O(N log K)", tr: "Tüm diziyi sıralamaktan daha hızlıdır O(N log K)" },
        { en: "Streaming compatible (can process Data Stream)", tr: "Akış uyumludur (Veri akışını işleyebilir)" }
    ],
    cons: [
        { en: "Requires Heap data structure", tr: "Heap veri yapısı gerektirir" },
        { en: "Slower than QuickSelect O(N) for finding just Kth element", tr: "Sadece K. elemanı bulmak için QuickSelect'ten O(N) yavaştır" }
    ],
    complexity: { time: "O(N log K)", space: "O(K)" },
    codeSnippet: `// Top K Elements using Min-Heap
// Time: O(N log K) | Space: O(K)
function topKElements(nums: number[], k: number): number[] {
    // Conceptual Min-Heap (Assuming Heap class exists)
    // const minHeap = new MinHeap<number>();

    // for (const num of nums) {
    //     minHeap.push(num);
    //     if (minHeap.size() > k) {
    //         minHeap.pop(); // Remove smallest
    //     }
    // }
    // return minHeap.toArray();
    
    // For Native JS (Sort way - slower O(N log N))
    return nums.sort((a,b) => b-a).slice(0, k);
}`,
    questions: [
        { id: 414, title: "Third Maximum Number", difficulty: "Easy", url: "https://leetcode.com/problems/third-maximum-number/" },
        { id: 703, title: "Kth Largest Element in a Stream", difficulty: "Easy", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
        { id: 347, title: "Top K Frequent Elements", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
        { id: 215, title: "Kth Largest Element in an Array", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
        { id: 295, title: "Find Median from Data Stream", difficulty: "Hard", url: "https://leetcode.com/problems/find-median-from-data-stream/" },
        { id: 480, title: "Sliding Window Median", difficulty: "Hard", url: "https://leetcode.com/problems/sliding-window-median/" }
    ],
  },
  {
    id: "pattern-two-heaps",
    title: { en: "Two Heaps", tr: "Two Heaps" },
    category: "Pattern",
    domain: "DSA",
    level: "Senior",
    summary: {
        en: "Finding median of stream.",
        tr: "Veri akışının medyanını bulma."
    },
    descriptionStandard: {
        en: "Using two heaps (a Min-Heap and a Max-Heap) to divide a dataset into two halves, allowing access to the median element in O(1) time.",
        tr: "Veri setini iki yarıya bölmek için iki heap (Min-Heap ve Max-Heap) kullanarak medyan elemanına O(1) sürede erişim sağlar."
    },
    descriptionELI5: {
        en: "Imagine a balance scale. You want to know the 'middle' weight of all the rocks you have. You put the lighter rocks in the left pan and the heavier rocks in the right pan. You keep shuffling rocks between them so both pans have the same number of rocks. The 'median' is just the heaviest rock in the light pan (or the lightest in the heavy pan). You can always find it instantly without weighing every single rock again.",
        tr: "Bir denge terazisi hayal edin. Sahip olduğunuz tüm taşların 'orta' ağırlığını bilmek istiyorsunuz. Hafif taşları sol kefeye, ağır taşları sağ kefeye koyuyorsunuz. Her iki kefede de aynı sayıda taş olması için taşları aralarında karıştırmaya devam ediyorsunuz. 'Medyan', hafif kefedeki en ağır taştır (veya ağır kefedeki en hafiftir). Her bir taşı tekrar tartmadan onu her zaman anında bulabilirsiniz."
    },
    contentMarkdown: {
        en: `### Concept
In many problems, we are granted access to the dataset element-by-element (like a stream) and asked to calculate something like the **Median**.

### Why Two Heaps?
The median is the middle element. To find it efficiently, we can divide the data into two halves:
1. **Max-Heap**: Stores the smaller half of the numbers. The root is the largest of the small numbers (closest to median).
2. **Min-Heap**: Stores the larger half of the numbers. The root is the smallest of the large numbers (closest to median).

### How it Works
1. **Insert**: Compare new number with heaps. Balance them so their sizes differ by at most 1.
2. **Find Median**:
   - If heaps are equal size: Median is \`(MaxHeap.top + MinHeap.top) / 2\`.
   - If one is larger: Median is the top of the larger heap.

### Complexity
- **Time**: **O(log N)** for insertion. **O(1)** for finding median.
- **Space**: **O(N)** to store elements.`,
        tr: `### Konsept
Birçok problemde, veri setine eleman eleman erişimimiz vardır (bir akış gibi) ve **Medyan** gibi bir şeyi hesaplamamız istenir.

### Neden İki Heap?
Medyan orta elemandır. Verimli bir şekilde bulmak için veriyi iki yarıya bölebiliriz:
1. **Max-Heap**: Sayıların küçük yarısını saklar. Kök, küçük sayıların en büyüğüdür (medyana en yakın).
2. **Min-Heap**: Sayıların büyük yarısını saklar. Kök, büyük sayıların en küçüğüdür (medyana en yakın).

### Nasıl Çalışır?
1. **Ekleme**: Yeni sayıyı heap’lerle karşılaştır. Boyutları arasındaki fark en fazla 1 olacak şekilde dengele.
2. **Medyan Bulma**:
   - Heap'ler eşit boyuttaysa: Medyan \`(MaxHeap.top + MinHeap.top) / 2\`.
   - Biri daha büyükse: Medyan, büyük olan heap'in tepesindekidir.

### Karmaşıklık
- **Zaman**: Ekleme için **O(log N)**. Medyan bulmak için **O(1)**.
- **Alan**: Elemanları saklamak için **O(N)**.`
    },
    realWorldUses: [
        { en: "Live Statistics Dashboard (Median Latency)", tr: "Canlı İstatistik Panosu (Ortalama Gecikme)" },
        { en: "Financial Data Streams (Median Price)", tr: "Finansal Veri Akışları (Medyan Fiyat)" },
        { en: "Load Balancing (Balancing server loads)", tr: "Yük Dengeleme (Sunucu yüklerini dengeleme)" }
    ],
    pros: [
        { en: "O(1) access to Median", tr: "Medyana O(1) erişim" },
        { en: "Efficient online processing (elements added one by one)", tr: "Verimli çevrimiçi işleme (elemanlar tek tek eklenir)" }
    ],
    cons: [
        { en: "Complex management of two heaps", tr: "İki heap'in karmaşık yönetimi" },
        { en: "Needs re-balancing on every insert", tr: "Her eklemede yeniden dengeleme gerektirir" }
    ],
    complexity: { time: "O(log N)", space: "O(N)" },
    codeSnippet: `class MedianFinder {
    // maxHeap stores smaller half
    // minHeap stores larger half
    
    addNum(num: number): void {
        // Balance logic...
    }
    
    findMedian(): number {
        // If heaps equal size: average of tops
        // Else: top of maxHeap
        return 0; 
    }
}`,
    questions: [
        { id: 1046, title: "Last Stone Weight", difficulty: "Easy", url: "https://leetcode.com/problems/last-stone-weight/" },
        { id: 506, title: "Relative Ranks", difficulty: "Easy", url: "https://leetcode.com/problems/relative-ranks/" },
        { id: 436, title: "Find Right Interval", difficulty: "Medium", url: "https://leetcode.com/problems/find-right-interval/" },
        { id: 373, title: "Find K Pairs with Smallest Sums", difficulty: "Medium", url: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/" },
        { id: 295, title: "Find Median from Data Stream", difficulty: "Hard", url: "https://leetcode.com/problems/find-median-from-data-stream/" },
        { id: 480, title: "Sliding Window Median", difficulty: "Hard", url: "https://leetcode.com/problems/sliding-window-median/" }
    ],
  }
];

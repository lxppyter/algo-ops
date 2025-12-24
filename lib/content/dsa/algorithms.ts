import { ContentItem } from "../types";

export const algorithms: ContentItem[] = [
  {
    id: "algo-bubble-sort",
    title: { en: "Bubble Sort", tr: "Bubble Sort" },
    category: "Algorithm",
    domain: "DSA",
    level: "Junior",
    summary: {
        en: "Simple swapping of adjacent elements.",
        tr: "Bitişik elemanların basit takası."
    },
    descriptionStandard: {
        en: "Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
        tr: "Listeyi defalarca gezer, bitişik elemanları karşılaştırır ve sıraları yanlışsa takas eder."
    },
    descriptionELI5: {
        en: "Imagine you are lining up students by height for a class photo. You look at two students standing next to each other. If the one on the left is taller than the one on the right, you swap them. You keep doing this pair by pair, all the way to the end of the line. By the time you reach the end, the tallest student will have 'bubbled up' to the last spot. Then you start again from the beginning, but you don't need to check the last person anymore.",
        tr: "Sınıf fotoğrafı için öğrencileri boy sırasına dizdiğinizi hayal edin. Yan yana duran iki öğrenciye bakıyorsunuz. Soldaki sağdakinden uzunsa, yerlerini değiştiriyorsunuz. Bunu çiftler halinde sıranın sonuna kadar yapıyorsunuz. Sona ulaştığınızda, en uzun öğrenci 'baloncuk gibi' en sona yükselmiş oluyor. Sonra baştan tekrar başlıyorsunuz, ancak artık en sondaki kişiyi kontrol etmenize gerek kalmıyor."
    },
    contentMarkdown: {
        en: `### Definition
**Bubble Sort** is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.

### Algorithm Steps
1. Start at the beginning.
2. Compare \`arr[i]\` and \`arr[i+1]\`.
3. If \`arr[i] > arr[i+1]\`, **swap** them.
4. Move to the next pair.
5. Repeat \`N\` times.
After the first pass, the specific largest element is guaranteed to be at the end. After the second pass, the second largest is at the second to last position, etc.

### Optimization
An essential optimization is the \`swapped\` flag. If we go through a full pass without swapping anything, the array is already sorted, and we can stop deeply early. This makes the **Best Case O(N)**.`,
        tr: `### Tanım
**Bubble Sort**, bitişik elemanları karşılaştırıp sıraları yanlışsa yer değiştirerek çalışan en basit sıralama algoritmasıdır.

### Algoritma Adımları
1. Baştan başla.
2. \`arr[i]\` ile \`arr[i+1]\`'i karşılaştır.
3. Eğer \`arr[i] > arr[i+1]\` ise, **takas et (swap)**.
4. Bir sonraki çifte geç.
5. Bu işlemi \`N\` kez tekrarla.
İlk geçişten sonra, en büyük eleman kesinlikle en sona yerleşmiş olur.

### Optimizasyon
Önemli bir optimizasyon \`swapped\` bayrağıdır. Eğer bir tam turu hiç takas yapmadan tamamlarsak, dizi zaten sıralı demektir ve erken durabiliriz. Bu, **En İyi Durumun O(N)** olmasını sağlar.`
    },
    realWorldUses: [
        { en: "Teaching basic sorting concepts", tr: "Temel sıralama kavramlarını öğretme" },
        { en: "Computer Graphics (Polygon filling)", tr: "Bilgisayar Grafikleri (Poligon doldurma)" },
        { en: "Small datasets where code simplicity matters", tr: "Kod basitliğinin önemli olduğu küçük veri setleri" }
    ],
    pros: [
        { en: "Easy to implement", tr: "Uygulaması çok kolay" },
        { en: "O(1) extra space (In-place)", tr: "O(1) ekstra alan (Yerinde sıralama)" }
    ],
    cons: [
        { en: "O(N^2) makes it unusable for large data", tr: "O(N^2) olması büyük verilerde kullanılamaz yapar" },
        { en: "Excessive swapping operations", tr: "Aşırı sayıda takas işlemi yapar" }
    ],
    complexity: { time: "O(N^2)", space: "O(1)" },
    codeSnippet: `function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    let swapped;
    
    // Outer loop for each pass
    for (let i = 0; i < n; i++) {
        swapped = false;
        // Inner loop: Compare adjacent elements
        // Last 'i' elements are already sorted, so we reduce range
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap if left > right
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        // Optimization: If no swaps occured in a full pass,
        // the array is already sorted. Stop early.
        if (!swapped) break;
    }
    return arr;
}`,
    questions: [
        { id: 1051, title: "Height Checker", difficulty: "Easy", url: "https://leetcode.com/problems/height-checker/" },
        { id: 1122, title: "Relative Sort Array", difficulty: "Easy", url: "https://leetcode.com/problems/relative-sort-array/" },
        { id: 75, title: "Sort Colors", difficulty: "Medium", url: "https://leetcode.com/problems/sort-colors/" },
        { id: 148, title: "Sort List", difficulty: "Medium", url: "https://leetcode.com/problems/sort-list/" },
        { id: 164, title: "Maximum Gap", difficulty: "Hard", url: "https://leetcode.com/problems/maximum-gap/" },
        { id: 321, title: "Create Maximum Number", difficulty: "Hard", url: "https://leetcode.com/problems/create-maximum-number/" }
    ],
  },
  {
    id: "algo-quick-sort",
    title: { en: "Quick Sort", tr: "Quick Sort" },
    category: "Algorithm",
    domain: "DSA",
    level: "Mid",
    summary: {
        en: "Divide and conquer using a pivot.",
        tr: "Pivot kullanarak böl ve yönet (Divide and Conquer)."
    },
    descriptionStandard: {
        en: "Picks a 'pivot' element and partitions the array into two sub-arrays: elements less than pivot and elements greater than pivot.",
        tr: "Bir 'pivot' elemanı seçer ve diziyi ikiye böler: pivot'tan küçükler ve büyükler."
    },
    descriptionELI5: {
        en: "Think of organizing a messy room. You pick one toy (the 'pivot') and say, 'Everything smaller than this toy goes to the left corner, and everything bigger goes to the right corner.' Now your room is split into two piles. Then you go to the left pile, pick another toy, and split that pile again. You keep doing this until every single toy is in its perfect spot.",
        tr: "Dağınık bir odayı topladığınızı düşünün. Bir oyuncak seçiyorsunuz ('pivot') ve diyorsunuz ki: 'Bu oyuncaktan küçük olan her şey sol köşeye, büyük olan her şey sağ köşeye.' Şimdi odanız iki yığına bölündü. Sonra sol yığına gidip başka bir oyuncak seçiyor ve o yığını da tekrar ayırıyorsunuz. Her bir oyuncak mükemmel yerini bulana kadar buna devam ediyorsunuz."
    },
    contentMarkdown: {
        en: `### Definition
**Quick Sort** is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays.

### How it Works (Divide & Conquer)
1. **Pivot Selection**: Pick an element (first, last, random, or median).
2. **Partitioning**: Reorder the array so that all elements with values *less* than the pivot come before the pivot, and all elements with values *greater* than the pivot come after it.
3. **Recursion**: Recursively apply the above steps to the sub-array of elements with smaller values and separate array of elements with greater values.

### Why is it fast?
While worst case is \`O(N^2)\` (if pivot is always increasing/decreasing), the average case is \`O(N log N)\` with very small constants (low memory overhead). It effectively cuts the problem size in half (log N) at each step (N).`,
        tr: `### Tanım
**Quick Sort**, diziyi daha küçük parçalara bölerek çalışan (bölümleme) çok verimli bir sıralama algoritmasıdır.

### Nasıl Çalışır? (Böl ve Yönet)
1. **Pivot Seçimi**: Bir eleman seç (ilk, son, rastgele veya ortanca).
2. **Bölümleme (Partitioning)**: Diziyi yeniden düzenle; pivot'tan *küçük* olanlar soluna, *büyük* olanlar sağına gelsin.
3. **Özyineleme (Recursion)**: Oluşan iki alt diziye de aynı işlemi uygula.

### Neden Hızlı?
En kötü durum \`O(N^2)\` (her seferinde en küçük/büyük elemanı pivot seçerseniz) olsa da, ortalama durum \`O(N log N)\`'dir ve sabitleri çok küçüktür. Her adımda (N) problem boyutunu yarı yarıya böler (log N).`
    },
    realWorldUses: [
        { en: "Standard libraries (C++ std::sort, Java Arrays.sort)", tr: "Standart kütüphaneler (C++ std::sort, Java Arrays.sort)" },
        { en: "Numerical analysis", tr: "Sayısal analiz" },
        { en: "Divide and Conquer paradigms", tr: "Böl ve Yönet paradigmaları" }
    ],
    pros: [
        { en: "Very fast in practice (Average O(N log N))", tr: "Pratikte çok hızlıdır (Ortalama O(N log N))" },
        { en: "In-place execution (O(log N) stack)", tr: "Yerinde (In-place) çalışır (O(log N) stack)" }
    ],
    cons: [
        { en: "Worst case O(N^2) (bad pivot)", tr: "En kötü durum O(N^2) (kötü pivot)" },
        { en: "Unstable (changes relative order of equals)", tr: "Kararsızdır (eşit elemanların sırasını bozabilir)" }
    ],
    complexity: { time: "Avg: O(N log N), Worst: O(N^2)", space: "O(log N)" },
    codeSnippet: `// Main QuickSort Function
function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1): number[] {
    if (left < right) {
        // 1. Partition the array and get pivot index
        const pivotIndex = partition(arr, left, right);
        
        // 2. Recursively sort elements before partition
        quickSort(arr, left, pivotIndex - 1);
        
        // 3. Recursively sort elements after partition
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

// Partition Logic (Lomuto Partition Scheme)
function partition(arr: number[], left: number, right: number): number {
    const pivot = arr[right]; // Choose last element as pivot
    let i = left - 1; // Index for smaller element

    for (let j = left; j < right; j++) {
        // If current element is smaller than pivot
        if (arr[j] < pivot) {
            i++; // Move smaller element index forward
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
        }
    }
    // Place pivot in correct position (after all smaller elements)
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1; // Return pivot index
}`,
    questions: [
        { id: 905, title: "Sort Array By Parity", difficulty: "Easy", url: "https://leetcode.com/problems/sort-array-by-parity/" },
        { id: 169, title: "Majority Element", difficulty: "Easy", url: "https://leetcode.com/problems/majority-element/" },
        { id: 912, title: "Sort an Array", difficulty: "Medium", url: "https://leetcode.com/problems/sort-an-array/" },
        { id: 215, title: "Kth Largest Element in an Array", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
        { id: 315, title: "Count of Smaller Numbers After Self", difficulty: "Hard", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" },
        { id: 493, title: "Reverse Pairs", difficulty: "Hard", url: "https://leetcode.com/problems/reverse-pairs/" }
    ],
  },
  {
    id: "algo-binary-search",
    title: { en: "Binary Search", tr: "Binary Search" },
    category: "Algorithm",
    domain: "DSA",
    level: "Junior",
    summary: {
        en: "Halving the search space.",
        tr: "Arama alanını ikiye bölmek."
    },
    descriptionStandard: {
        en: "Efficient algorithm for finding an item from a sorted list of items. Works by repeatedly dividing the portion of the list that could contain the item in half.",
        tr: "Sıralı bir listeden eleman bulmak için verimli algoritma. Listeyi sürekli ikiye bölerek çalışır."
    },
    descriptionELI5: {
        en: "Imagine playings a guessing game where I picked a number between 1 and 100. If you guess '50' and I say 'Too low', you instantly know the number is NOT 1, 2, ..., or 50. You just threw away half the numbers in one guess! Then you guess '75'. If I say 'Too high', you throw away everything above 75. You can find any number remarkably fast by always checking the middle.",
        tr: "1 ile 100 arasında bir sayı tuttuğum bir tahmin oyunu oynadığımızı hayal edin. Eğer '50' derseniz ve ben 'Çok düşük' dersem, sayının 1, 2, ... veya 50 OLMADIĞINI anında bilirsiniz. Tek bir tahminde sayıların yarısını çöpe attınız! Sonra '75' dersiniz. Eğer 'Çok yüksek' dersem, 75'in üzerindeki her şeyi atarsınız. Her zaman ortayı kontrol ederek herhangi bir sayıyı inanılmaz hızlı bulabilirsiniz."
    },
     contentMarkdown: {
        en: `### Definition
**Binary Search** is the ultimate optimization for searching. Instead of checking every element (Linear Search O(N)), we leverage the fact that data is **SORTED**.

### Execution
1. Find the \`mid\` point.
2. Is \`target == arr[mid]\`? Found it!
3. Is \`target < arr[mid]\`? Then the answer MUST be in the **left** half. Ignore the right half.
4. Is \`target > arr[mid]\`? Then the answer MUST be in the **right** half. Ignore the left half.
5. Repeat.

### Why O(log N)?
If you have 1,000,000 items:
- Divide 1: 500,000
- Divide 2: 250,000
- ...
- Divide 20: 1 item left.
It takes only ~20 steps to find anything in 1 million items.`,
        tr: `### Tanım
**Binary Search (İkili Arama)**, arama işlemleri için nihai optimizasyondur. Her elemanı tek tek kontrol etmek yerine (Lineer Arama O(N)), verinin **SIRALI** olmasını kullanırız.

### Çalışma Mantığı
1. \`mid\` (orta) noktayı bul.
2. \`hedef == arr[mid]\` mi? Buldun!
3. \`hedef < arr[mid]\` mi? O zaman cevap kesinlikle **sol** yarıdadır. Sağ tarafı çöpe at.
4. \`hedef > arr[mid]\` mi? O zaman cevap kesinlikle **sağ** yarıdadır. Sol tarafı çöpe at.
5. Tekrarla.

### Neden O(log N)?
1,000,000 elemanınız varsa:
- Bölme 1: 500,000
- Bölme 2: 250,000
- ...
- Bölme 20: 1 eleman kaldı.
1 milyon eleman içinde herhangi bir şeyi bulmak sadece ~20 adım sürer.`
    },
    realWorldUses: [
        { en: "Database Index seeking (B-Trees use this logic)", tr: "Veritabanı İndeks arama (B-Tree bu mantığı kullanır)" },
        { en: "Debugging (Git bisect uses binary search on commits)", tr: "Hata ayıklama (Git bisect commitlerde binary search yapar)" },
        { en: "Dictionary lookup", tr: "Sözlük araması" }
    ],
    pros: [
        { en: "Extremely fast O(log N)", tr: "İnanılmaz hızlıdır O(log N)" },
        { en: "Predictable performance", tr: "Öngörülebilir performans" }
    ],
    cons: [
        { en: "Requires SORTED data", tr: "Verinin SIRALI olmasını gerektirir" },
        { en: "Harder to implement correctly (off-by-one errors)", tr: "Doğru uygulaması zordur (+/-1 hataları)" }
    ],
    complexity: { time: "O(log N)", space: "O(1)" },
    codeSnippet: `function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calculate mid safely (avoid overflow)
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Found the target
        } else if (arr[mid] < target) {
            left = mid + 1; // Target is in the Right half
        } else {
            right = mid - 1; // Target is in the Left half
        }
    }
    return -1; // Not found
}`,
    questions: [
        { id: 704, title: "Binary Search", difficulty: "Easy", url: "https://leetcode.com/problems/binary-search/" },
        { id: 35, title: "Search Insert Position", difficulty: "Easy", url: "https://leetcode.com/problems/search-insert-position/" },
        { id: 33, title: "Search in Rotated Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
        { id: 34, title: "Find First and Last Position", difficulty: "Medium", url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
        { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
        { id: 154, title: "Find Minimum in Rotated Sorted Array II", difficulty: "Hard", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/" }
    ],
  },
  {
    id: "algo-tree-traversal",
    title: { en: "Tree Traversal (DFS & BFS)", tr: "Tree Traversal (DFS & BFS)" },
    category: "Algorithm",
    domain: "DSA",
    level: "Mid",
    summary: {
        en: "Pre-order, In-order, Post-order & Level-order.",
        tr: "Önce-Kök, Ortada-Kök, Sonra-Kök ve Seviye Öncelikli."
    },
    descriptionStandard: {
        en: "Ways to visit every node in a tree. DFS (Depth First) includes Pre/In/Post-order. BFS (Breadth First) is Level-order.",
        tr: "Bir ağacın her düğümünü ziyaret etme yöntemleri. DFS (Derinlik Öncelikli) Pre/In/Post-order içerir. BFS (Genişlik Öncelikli) Level-order'dır."
    },
    descriptionELI5: {
        en: "Imagine walking through a family tree. In 'DFS' (Depth First), you start at the Grandfather, go to the first Father, then go straight to the youngest baby before looking at any other uncles. You dive as deep as possible first. In 'BFS' (Breadth First), you visit the Grandfather, then you visit ALL of his sons (uncles) before you look at ANY grandchildren. You go level by level.",
        tr: "Bir soyağacında yürüdüğünüzü hayal edin. 'DFS'de (Derinlik Öncelikli), Dededen başlar, ilk Babaya gider ve diğer amcalara bakmadan önce doğrudan en küçük bebeğe gidersiniz. Önce mümkün olduğunca derine dalarsınız. 'BFS'de (Genişlik Öncelikli) ise Dede'yi ziyaret eder, sonra HİÇBİR toruna bakmadan önce TÜM oğullarını (amcaları) ziyaret edersiniz. Seviye seviye gidersiniz."
    },
    contentMarkdown: {
        en: `### Types of Traversal
Since trees are hierarchical, we have specific orders:

1.  **DFS (Depth First Search):**
    *   **Pre-Order (Root -> Left -> Right):** Good for copying trees.
    *   **In-Order (Left -> Root -> Right):** Used in BST to get sorted values.
    *   **Post-Order (Left -> Right -> Root):** Good for deleting trees (delete children first).
2.  **BFS (Breadth First Search):**
    *   **Level-Order:** Visit nodes row by row.

### No Cycles!
Unlike Graphs, Trees (usually) don't have cycles. So we generally **don't need a 'visited' set** if we only move down from parent to child.`,
        tr: `### Gezinme Türleri
Ağaçlar hiyerarşik olduğu için belirli sıralar vardır:

1.  **DFS (Derinlik Öncelikli):**
    *   **Pre-Order (Kök -> Sol -> Sağ):** Ağaç kopyalamak için iyidir.
    *   **In-Order (Sol -> Kök -> Sağ):** BST'de sıralı değerleri almak için kullanılır.
    *   **Post-Order (Sol -> Sağ -> Kök):** Ağaç silmek için iyidir (önce çocukları sil).
2.  **BFS (Genişlik Öncelikli):**
    *   **Level-Order (Seviye Sıralı):** Düğümleri satır satır gezer.

### Döngü Yok!
Grafların aksine, Ağaçlarda (genelde) döngü olmaz. Bu yüzden sadece ebeveynden çocuğa gidiyorsak **'visited' kümesine ihtiyaç duymayız**.`
    },
    realWorldUses: [
        { en: "DOM Manipulation (Pre-order)", tr: "DOM Manipülasyonu (Pre-order)" },
        { en: "File System Traversal", tr: "Dosya Sistemi Gezintisi" },
        { en: "Abstract Syntax Trees (In-order for calculators)", tr: "Soyut Sözdizimi Ağaçları (Hesap makineleri için In-order)" }
    ],
    pros: [
        { en: "DFS is memory efficient (Stack depth)", tr: "DFS bellek açısından verimlidir (Yığın derinliği)" },
        { en: "In-order gives sorted elements in BST", tr: "In-order BST'de sıralı elemanları verir" }
    ],
    cons: [
        { en: "BFS is memory heavy (Width of tree)", tr: "BFS bellek açısından yüksektir (Ağaç genişliği)" },
        { en: "Recursion depth limit in DFS", tr: "DFS'de özyineleme derinlik limiti (Stack Overflow)" }
    ],
    complexity: { time: "O(N)", space: "O(N) (Recursion Stack or Queue)" },
    codeSnippet: `// 1. Pre-Order (Visit Root FIRST)
// Used for: Copying trees, prefix expression evaluation
function preOrder(node: TreeNode | null) {
    if (!node) return;
    console.log(node.val); // Process Root
    preOrder(node.left);   // Then Left
    preOrder(node.right);  // Then Right
}

// 2. In-Order (Visit Root BETWEEN)
// Used for: Getting sorted values from BST
function inOrder(node: TreeNode | null) {
    if (!node) return;
    inOrder(node.left);    // Left
    console.log(node.val); // Root
    inOrder(node.right);   // Right
}

// 3. Level-Order (BFS)
// Used for: Finding shortest path (unweighted), serializing tree
function levelOrder(root: TreeNode | null) {
    if (!root) return;
    const queue = [root]; // Start with root
    
    while (queue.length > 0) {
        // Dequeue first element
        const node = queue.shift()!;
        console.log(node.val);
        
        // Enqueue children (if they exist)
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}`,
    questions: [
        { id: 144, title: "Binary Tree Preorder Traversal", difficulty: "Easy", url: "https://leetcode.com/problems/binary-tree-preorder-traversal/" },
        { id: 145, title: "Binary Tree Postorder Traversal", difficulty: "Easy", url: "https://leetcode.com/problems/binary-tree-postorder-traversal/" },
        { id: 102, title: "Binary Tree Level Order Traversal", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
        { id: 103, title: "Binary Tree Zigzag Level Order Traversal", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
        { id: 987, title: "Vertical Order Traversal of a Binary Tree", difficulty: "Hard", url: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/" },
        { id: 297, title: "Serialize and Deserialize Binary Tree", difficulty: "Hard", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" }
    ],
  },
  {
    id: "algo-graph-traversal",
    title: { en: "Graph Traversal (BFS & DFS)", tr: "Graph Traversal (BFS & DFS)" },
    category: "Algorithm",
    domain: "DSA",
    level: "Mid",
    summary: {
        en: "Exploring nodes with Cycle Detection.",
        tr: "Döngü Tespiti ile düğümleri keşfetme."
    },
    descriptionStandard: {
        en: "Exploring general graphs (Social networks, Maps). Critical concept here is tracking 'Visited' nodes to prevent infinite loops in cycles.",
        tr: "Genel grafları (Sosyal ağlar, Haritalar) keşfetme. Buradaki kritik kavram, döngüleri engellemek için 'Ziyaret Edilen' (Visited) düğümleri takip etmektir."
    },
    descriptionELI5: {
        en: "Imagine you are exploring a giant maze. To make sure you don't run in circles forever, you carry a piece of chalk. Every time you enter a room, you mark a big 'X' on the floor. If you walk into a room and see an 'X' already there, you say 'Whoops! I've been here before!' and turn back immediately. This prevents you from getting stuck in an infinite loop.",
        tr: "Devasa bir labirenti keşfettiğinizi hayal edin. Sonsuza kadar daireler çizerek dönmemek için yanınızda bir tebeşir taşıyorsunuz. Girdiğiniz her odaya yere kocaman bir 'X' çiziyorsunuz. Eğer bir odaya girip yerde zaten bir 'X' görürseniz, 'Hoppala! Buraya daha önce gelmişim!' deyip hemen geri dönüyorsunuz. Bu, sonsuz bir döngüde sıkışıp kalmanızı önler."
    },
    contentMarkdown: {
        en: `### Graph vs Tree
Unlike trees, Graphs can contain **Cycles** (A -> B -> C -> A).
If you run standard tree traversal on a graph, you will get an **Infinite Loop**.

### The Solution: Visited Set
We must keep a \`Set\` or boolean array of visited nodes. Before processing a node, check if it's in the Set.

### Applications
1.  **BFS:** Shortest Path in unweighted graph. (Web Crawlers, Social Distance).
2.  **DFS:** Path finding, Topological Sort, Cycle Detection.`,
        tr: `### Graph vs Tree
Ağaçların aksine, Graflar **Döngü (Cycle)** içerebilir (A -> B -> C -> A).
Eğer bir graf üzerinde standart ağaç gezintisi yaparsanız, **Sonsuz Döngüye** girersiniz.

### Çözüm: Ziyaret Kümesi (Visited Set)
Ziyaret edilen düğümleri bir \`Set\` veya dizi içinde tutmalıyız. Bir düğümü işlemeden önce, bu kümede olup olmadığına bakmalıyız.

### Uygulamalar
1.  **BFS:** Ağırlıksız grafikte en kısa yol. (Web Örümcekleri, Sosyal Mesafe).
2.  **DFS:** Yol bulma, Topolojik Sıralama, Döngü Tespiti.`
    },
    realWorldUses: [
        { en: "Social Network Analysis", tr: "Sosyal Ağ Analizi" },
        { en: "Garbage Collection (Mark and Sweep)", tr: "Çöp Toplama (Mark and Sweep)" },
        { en: "Maze Solving", tr: "Labirent Çözme" }
    ],
    pros: [
        { en: "Handles generic complex connections", tr: "Genel karmaşık bağlantıları yönetir" },
        { en: "Can detect cycles", tr: "Döngüleri tespit edebilir" }
    ],
    cons: [
        { en: "Requires extra memory for Visited Set", tr: "Visited Set için ekstra bellek gerekir" },
        { en: "More complex than Tree traversal", tr: "Ağaç gezintisinden daha karmaşıktır" }
    ],
    complexity: { time: "O(V + E)", space: "O(V)" },
    codeSnippet: `// BFS (Breadth-First Search) - Shortest Path in Unweighted Graph
function bfs(start: string, graph: any) {
    const queue = [start];
    // VISITED Set is crucial to prevent infinite loops in cycles
    const visited = new Set([start]); 

    while(queue.length > 0) {
        const node = queue.shift();
        console.log(node);

        for(const neighbor of graph[node]) {
            if(!visited.has(neighbor)) {
                visited.add(neighbor); // Mark as soon as we see it
                queue.push(neighbor);
            }
        }
    }
}

// DFS (Depth-First Search) - Recursive
// Good for: Path existence, Cycle detection
function dfs(node: string, graph: any, visited = new Set()) {
    if(visited.has(node)) return; // Base case for cycles
    
    visited.add(node);
    console.log(node);

    for(const neighbor of graph[node]) {
        dfs(neighbor, graph, visited); // Recurse deep
    }
}`,
    questions: [
        { id: 733, title: "Flood Fill", difficulty: "Easy", url: "https://leetcode.com/problems/flood-fill/" },
        { id: 463, title: "Island Perimeter", difficulty: "Easy", url: "https://leetcode.com/problems/island-perimeter/" },
        { id: 200, title: "Number of Islands", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-islands/" },
        { id: 994, title: "Rotting Oranges", difficulty: "Medium", url: "https://leetcode.com/problems/rotting-oranges/" },
        { id: 127, title: "Word Ladder", difficulty: "Hard", url: "https://leetcode.com/problems/word-ladder/" },
        { id: 827, title: "Making A Large Island", difficulty: "Hard", url: "https://leetcode.com/problems/making-a-large-island/" }
    ],
  },
  {
    id: "algo-dijkstra",
    title: { en: "Dijkstra's Algorithm", tr: "Dijkstra's Algorithm" },
    category: "Algorithm",
    domain: "DSA",
    level: "Senior",
    summary: {
        en: "Shortest path in weighted graphs.",
        tr: "Ağırlıklı grafiklerde en kısa yol."
    },
    descriptionStandard: {
        en: "Finds the shortest paths between nodes in a graph, which may represent, for example, road networks.",
        tr: "Bir grafikteki düğümler arasındaki en kısa yolları bulur (örneğin yol ağları)."
    },
    descriptionELI5: {
        en: "This is exactly how Google Maps works. You are at Home and want to go to School. There are many roads. Some are highways (fast/cheap), some are muddy paths (slow/expensive). Dijkstra's algorithm keeps a list of the 'fastest known time' to every intersection. It always explores the fastest roads first. It guarantees that when you finally reach School, you took the absolute best path possible, because it never wasted time exploring slow, muddy roads unless they were the ONLY option.",
        tr: "Bu tam olarak Google Haritalar'ın çalışma şeklidir. Evdesiniz ve Okula gitmek istiyorsunuz. Birçok yol var. Bazıları otoyol (hızlı/ucuz), bazıları çamurlu patika (yavaş/pahalı). Dijkstra algoritması, her kavşağa 'bilinen en hızlı süreyi' not eder. Her zaman önce en hızlı yolları keşfeder. Okula vardığınızda, mutlak en iyi yolu seçtiğinizi garanti eder, çünkü tek seçenek olmadıkça asla yavaş, çamurlu yolları keşfederek zaman kaybetmez."
    },
    contentMarkdown: {
        en: `### Definition
**Dijkstra's Algorithm** is a "Greedy" algorithm that finds the shortest path from a source node to all other nodes in a graph with non-negative edge weights.

### Logic (Priority Queue)
1. Set distance to Start = 0, others = Infinity.
2. Put Start in a **Min-Priority Queue**.
3. While PQ is not empty:
    - Pop the node with the **smallest distance** (u).
    - For each neighbor (v) of (u):
        - \`newDist = dist[u] + weight(u,v)\`
        - If \`newDist < dist[v]\`: Update \`dist[v]\` and push to PQ.

It's essentially BFS, but instead of a normal Queue (FIFO), we use a Priority Queue to always expand the "cheapest" path so far.`,
        tr: `### Tanım
**Dijkstra Algoritması**, negatif olmayan kenar ağırlıklarına sahip bir grafikte, kaynak düğümden diğer tüm düğümlere olan en kısa yolu bulan "Açgözlü" (Greedy) bir algoritmadır.

### Mantık (Öncelik Kuyruğu)
1. Başlangıç mesafesini 0, diğerlerini Sonsuz yap.
2. Başlangıcı bir **Min-Priority Queue**'ya koy.
3. PQ boşalana kadar:
    - **En küçük mesafeye** sahip düğümü (u) çıkar.
    - (u)'nun her komşusu (v) için:
        - \`yeniMesafe = mesafe[u] + ağırlık(u,v)\`
        - Eğer \`yeniMesafe < mesafe[v]\`: \`mesafe[v]\`'yi güncelle ve PQ'ya ekle.

Bu aslında BFS gibidir, ancak normal Queue yerine Priority Queue kullanarak her zaman şu ana kadarki en "ucuz" yolu genişletir.`
    },
    realWorldUses: [
        { en: "IP Routing (OSPF Protocol)", tr: "IP Yönlendirme (OSPF Protokolü)" },
        { en: "Google Maps / GPS", tr: "Google Haritalar / GPS" },
        { en: "Flight connections", tr: "Uçuş bağlantıları" }
    ],
    pros: [
        { en: "Guaranteed Shortest Path (non-negative)", tr: "En Kısa Yolu Garanti Eder (negatif olmayan)" },
        { en: "Efficient with Priority Queue", tr: "Priority Queue ile verimlidir" }
    ],
    cons: [
        { en: "Fails with negative weights (Use Bellman-Ford)", tr: "Negatif ağırlıklarla çalışmaz (Bellman-Ford kullanın)" },
        { en: "Slower than BFS for unweighted graphs", tr: "Ağırlıksız grafiklerde BFS'den yavaştır" }
    ],
    complexity: { time: "O(E log V)", space: "O(V + E)" },
    codeSnippet: `function dijkstra(graph: Graph, start: string) {
    // Distance table: tracks shortest known distance to each node
    const distances = {};
    const pq = new PriorityQueue(); // Custom MQ required

    // 1. Initialize all as Infinity
    for (let node in graph) distances[node] = Infinity;
    distances[start] = 0;
    
    // 2. Add Start to Priority Queue
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        // 3. Get the node with the SMALLEST distance (Greedy)
        const { node: u, priority: d } = pq.dequeue();

        // Optimization: If we found a shorter way to 'u' already, skip
        if (d > distances[u]) continue;

        // 4. Relax Edges (Check neighbors)
        for (let neighbor in graph[u]) {
            let weight = graph[u][neighbor];
            let newDist = d + weight;

            // If found a shorter path to neighbor, update it
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                // Add to PQ to explore its neighbors later
                pq.enqueue(neighbor, newDist);
            }
        }
    }
    return distances;
}`,
    questions: [
        { id: 1971, title: "Find if Path Exists in Graph", difficulty: "Easy", url: "https://leetcode.com/problems/find-if-path-exists-in-graph/" },
        { id: 1791, title: "Find Center of Star Graph", difficulty: "Easy", url: "https://leetcode.com/problems/find-center-of-star-graph/" },
        { id: 743, title: "Network Delay Time", difficulty: "Medium", url: "https://leetcode.com/problems/network-delay-time/" },
        { id: 1514, title: "Path with Maximum Probability", difficulty: "Medium", url: "https://leetcode.com/problems/path-with-maximum-probability/" },
        { id: 847, title: "Shortest Path Visiting All Nodes", difficulty: "Hard", url: "https://leetcode.com/problems/shortest-path-visiting-all-nodes/" },
        { id: 2642, title: "Design Graph With Shortest Path Calculator", difficulty: "Hard", url: "https://leetcode.com/problems/design-graph-with-shortest-path-calculator/" }
    ],
  },
  {
    id: "algo-dp-climbing-stairs",
    title: { en: "Dynamic Programming: Climbing Stairs", tr: "Dinamik Programlama: Climbing Stairs" },
    category: "Algorithm",
    domain: "DSA",
    level: "Mid",
    summary: {
        en: "Classic Dynamic Programming intro.",
        tr: "Klasik Dinamik Programlama girişi."
    },
    descriptionStandard: {
        en: "Count ways to reach the Nth stair taking 1 or 2 steps at a time. The problem decomposes into overlapping subproblems.",
        tr: "Her seferinde 1 veya 2 adım atarak N. basamağa ulaşmanın yollarını sayın. Problem örtüşen alt problemlere ayrılır."
    },
    descriptionELI5: {
        en: "Imagine trying to climb to the 10th step. It's hard to figure out all the ways at once. But if you already knew how many ways there are to reach step 8 and step 9, it's easy! To get to step 10, you MUST have come from either step 8 (jumping 2) or step 9 (jumping 1). So you just add those two numbers together. You build your answer from the bottom up, step by step, instead of recalculating everything from scratch.",
        tr: "10. basamağa çıkmaya çalıştığınızı hayal edin. Tüm yolları bir kerede hesaplamak zordur. Ama 8. ve 9. basamağa ulaşmanın kaç yolu olduğunu zaten biliyorsanız, işiniz çok kolay! 10. basamağa gelmek için YA 8. basamaktan (2 zıplayarak) YA DA 9. basamaktan (1 zıplayarak) gelmiş olmalısınız. Yani bu iki sayıyı toplamanız yeterli. Her şeyi baştan hesaplamak yerine, cevabınızı adım adım aşağıdan yukarıya doğru inşa edersiniz."
    },
    contentMarkdown: {
        en: `### Definition
**Dynamic Programming (DP)** is an optimization over recursion.
If a problem has **Overlapping Subproblems** and **Optimal Substructure**, we can cache (memoize) the results so we don't recalculate them.

### The Problem
You are climbing a staircase. It takes \`n\` steps to reach the top. Each time you can either climb 1 or 2 steps. How many distinct ways can you climb to the top?

### The Logic (Bottom Up)
1. To reach step \`i\`, I could have jumped from \`i-1\` OR from \`i-2\`.
2. Therefore, \`dp[i] = dp[i-1] + dp[i-2]\`.
3. Base cases: Step 1 = 1 way. Step 2 = 2 ways.

This reduces an exponential O(2^N) recursion tree into a linear O(N) loop.`,
        tr: `### Tanım
**Dinamik Programlama (DP)**, özyineleme (recursion) üzerinde bir optimizasyondur.
Bir problem **Örtüşen Alt Problemler** ve **Optimal Altyapı** içeriyorsa, sonuçları önbelleğe (memoize) alarak tekrar hesaplamaktan kurtulabiliriz.

### Problem
Bir merdiven çıkıyorsunuz. Zirveye ulaşmak \`n\` adım sürüyor. Her seferinde 1 veya 2 adım atabilirsiniz. Zirveye kaç farklı şekilde çıkabilirsiniz?

### Mantık (Bottom Up)
1. \`i\`. adıma ulaşmak için, ya \`i-1\`'den ya da \`i-2\`'den atlamış olmalıyım.
2. Bu nedenle, \`dp[i] = dp[i-1] + dp[i-2]\`.
3. Temel durumlar: 1. Adım = 1 yol. 2. Adım = 2 yol.

Bu mantık, üstel O(2^N) olan özyineleme ağacını lineer O(N) bir döngüye indirger.`
    },
    realWorldUses: [
        { en: "Resource Optimization", tr: "Kaynak Optimizasyonu" },
        { en: "Financial Modeling (Option Pricing)", tr: "Finansal Modelleme (Opsiyon Fiyatlama)" },
        { en: "Genomics (Sequence Alignment)", tr: "Genomik (Dizi Hizalama)" }
    ],
    pros: [
        { en: "Optimizes exponential problems to polynomial", tr: "Üstel problemleri polinomiyal zamana indirger" },
        { en: "Guarantees optimal solution", tr: "Optimal çözümü garanti eder" }
    ],
    cons: [
        { en: "High memory usage (DP Table)", tr: "Yüksek bellek kullanımı (DP Tablosu)" },
        { en: "Hard to formulate recurrence relation", tr: "Tekrarlama ilişkisini formüle etmek zordur" }
    ],
    complexity: { time: "O(N)", space: "O(1)" },
    codeSnippet: `// Climbing Stairs (DP Bottom-Up)
function climbStairs(n: number): number {
    if (n <= 2) return n; // Base cases: 1->1, 2->2

    // We only need the last two values, not whole array (Space Optimization)
    let oneStepBefore = 2; // dp[i-1]
    let twoStepsBefore = 1; // dp[i-2]
    let allWays = 0;

    for (let i = 3; i <= n; i++) {
        // Recurrence: ways(i) = ways(i-1) + ways(i-2)
        allWays = oneStepBefore + twoStepsBefore;
        
        // Shift values for next iteration
        twoStepsBefore = oneStepBefore;
        oneStepBefore = allWays;
    }
    return allWays;
}`,
    questions: [
        { id: 70, title: "Climbing Stairs", difficulty: "Easy", url: "https://leetcode.com/problems/climbing-stairs/" },
        { id: 746, title: "Min Cost Climbing Stairs", difficulty: "Easy", url: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
        { id: 198, title: "House Robber", difficulty: "Medium", url: "https://leetcode.com/problems/house-robber/" },
        { id: 91, title: "Decode Ways", difficulty: "Medium", url: "https://leetcode.com/problems/decode-ways/" },
        { id: 32, title: "Longest Valid Parentheses", difficulty: "Hard", url: "https://leetcode.com/problems/longest-valid-parentheses/" },
        { id: 72, title: "Edit Distance", difficulty: "Hard", url: "https://leetcode.com/problems/edit-distance/" }
    ],
  },
  {
    id: "algo-selection-sort",
    title: { en: "Selection Sort", tr: "Selection Sort" },
    category: "Algorithm",
    domain: "DSA",
    level: "Junior",
    summary: {
        en: "Repeatedly finding the minimum element.",
        tr: "Sürekli en küçük elemanı bulma."
    },
    descriptionStandard: {
        en: "Sorts an array by repeatedly finding the minimum element from unsorted part and putting it at the beginning.",
        tr: "Sıralanmamış kısımdan sürekli en küçük elemanı bulup başa koyarak diziyi sıralar."
    },
    descriptionELI5: {
        en: "Imagine a teacher wanting to organize the class by height. She scans the WHOLE line of students to find the absolute shortest one, say little Timmy. She brings Timmy to the very front. Then she scans everyone else remaining to find the next shortest, and puts them behind Timmy. She repeats this until everyone is in order. It's slow because she has to scan everyone again and again.",
        tr: "Bir öğretmenin sınıfı boy sırasına dizmek istediğini hayal edin. Mutlak en kısa öğrenciyi, diyelim ki küçük Timmy'yi bulmak için TÜM sırayı tarar. Timmy'yi en öne getirir. Sonra kalan herkesi tarar, bir sonraki en kısayı bulur ve Timmy'nin arkasına koyar. Herkes sıraya girene kadar bunu tekrarlar. Bu yavaştır çünkü tekrar tekrar herkesi taraması gerekir."
    },
    contentMarkdown: {
        en: `### Concept
Selection Sort is a simple comparison-based algorithm. It divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted.

### How it Works
1. **Find Minimum**: Iterate through the unsorted sublist to find the minimum element.
2. **Swap**: Swap the minimum element with the leftmost element of the unsorted sublist.
3. **Move Boundary**: Move the sublist boundary one element to the right.
4. **Repeat**: Continue until the unsorted sublist is empty.

### Complexity
- **Time**: **O(N^2)**. We have nested loops: for each position \`i\`, we scan the rest of the array \`N-i\`.
- **Space**: **O(1)**. Sorts in-place.`,
        tr: `### Konsept
Selection Sort (Seçmeli Sıralama), basit bir karşılaştırma tabanlı algoritmadır. Girdi listesini iki parçaya böler: zaten sıralanmış olan alt liste ve sıralanmayı bekleyen kalan elemanlar.

### Nasıl Çalışır?
1. **En Küçüğü Bul**: Sıralanmamış alt listede en küçük elemanı bulmak için ilerleyin.
2. **Takas Et**: En küçük elemanı, sıralanmamış alt listenin en solundaki elemanla takas edin.
3. **Sınırı Taşı**: Alt liste sınırını bir eleman sağa kaydırın.
4. **Tekrarla**: Sıralanmamış alt liste boşalana kadar devam edin.

### Karmaşıklık
- **Zaman**: **O(N^2)**. İç içe döngüler vardır: her \`i\` pozisyonu için dizinin geri kalanını \`N-i\` tararız.
- **Alan**: **O(1)**. Yerinde (in-place) sıralar.`
    },
    complexity: { time: "O(N^2)", space: "O(1)" },
    codeSnippet: `function selectionSort(arr: number[]): number[] {
    const n = arr.length;
    // Iterate through unsorted portion
    for (let i = 0; i < n; i++) {
        let minIdx = i; // Assume current is min
        
        // Find absolute minimum in the remaining unsorted array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j; // Update min index
            }
        }
        
        // Swap found minimum with the first unsorted element
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    return arr;
}`,
    questions: [
        { id: 414, title: "Third Maximum Number", difficulty: "Easy", url: "https://leetcode.com/problems/third-maximum-number/" },
        { id: 455, title: "Assign Cookies", difficulty: "Easy", url: "https://leetcode.com/problems/assign-cookies/" },
        { id: 215, title: "Kth Largest Element in an Array", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
        { id: 347, title: "Top K Frequent Elements", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
        { id: 41, title: "First Missing Positive", difficulty: "Hard", url: "https://leetcode.com/problems/first-missing-positive/" },
        { id: 164, title: "Maximum Gap", difficulty: "Hard", url: "https://leetcode.com/problems/maximum-gap/" }
    ],
  },
  {
    id: "algo-heap-sort",
    title: { en: "Heap Sort", tr: "Heap Sort" },
    category: "Algorithm",
    domain: "DSA",
    level: "Mid",
    summary: {
        en: "Sorting using a Binary Heap.",
        tr: "Binary Heap kullanarak sıralama."
    },
    descriptionStandard: {
        en: "Builds a Max-Heap from the input data, then repeatedly extracts the maximum element and moves it to the end of the array.",
        tr: "Veriden bir Max-Heap oluşturur, sonra sürekli en büyük elemanı çekip dizinin sonuna atar."
    },
    descriptionELI5: {
        en: "Imagine a magical pile of sand where the biggest rock always floats to the top. To sort the rocks, you just pick the big one off the top and put it in a box. The pile rumbles, and the next biggest rock floats up to replace it. You keep doing this—take the top rock, let the pile adjust—until all rocks are in the box, perfectly sorted from biggest to smallest.",
        tr: "En büyük taşın her zaman en tepeye çıktığı büyülü bir kum yığını hayal edin. Taşları sıralamak için, tepedeki büyük olanı alıp bir kutuya koyarsınız. Yığın gürüler ve bir sonraki en büyük taş onun yerini almak için yukarı çıkar. Bunu yapmaya devam edersiniz; tepe taşını al, yığının düzelmesine izin ver... ta ki tüm taşlar kutuda büyükten küçüğe mükemmel bir şekilde sıralanana kadar."
    },
    contentMarkdown: {
        en: `### Concept
Heap Sort is a comparison-based sorting technique based on the Binary Heap data structure. It's similar to Selection Sort where we first find the maximum element and place the maximum element at the end, but the "finding max" part is done efficiently using a Heap.

### How it Works
1. **Build Max-Heap**: Transform the input array into a Max-Heap. Now the largest item is at the root \`arr[0]\`.
2. **Swap**: Swap the root with the last item of the heap.
3. **Reduce Heap**: Reduce the heap size by 1 (ignoring the last item which is now sorted).
4. **Heapify**: Call \`heapify\` on the root to restore the Max-Heap property.
5. **Repeat**: Until heap size is 1.

### Complexity
- **Time**: **O(N log N)**. Building heap is O(N). Removing N elements takes N * log N.
- **Space**: **O(1)**. Done in-place.`,
        tr: `### Konsept
Heap Sort (Yığın Sıralaması), Binary Heap veri yapısına dayalı karşılaştırmalı bir sıralama tekniğidir. Selection Sort'a benzer şekilde önce en büyük elemanı bulup sona koyarız, ancak "en büyüğü bulma" kısmı Heap kullanılarak verimli bir şekilde yapılır.

### Nasıl Çalışır?
1. **Max-Heap Kur**: Girdi dizisini bir Max-Heap'e dönüştürün. Artık en büyük öğe köktedir \`arr[0]\`.
2. **Takas Et**: Kökü, heap'in son öğesiyle takas edin.
3. **Heap'i Küçült**: Heap boyutunu 1 azaltın (şimdi sıralanmış olan son öğeyi yok sayarak).
4. **Heapify**: Max-Heap özelliğini geri yüklemek için kök üzerinde \`heapify\` çağırın.
5. **Tekrarla**: Heap boyutu 1 olana kadar.

### Karmaşıklık
- **Zaman**: **O(N log N)**. Heap kurmak O(N). N elemanı çıkarmak N * log N sürer.
- **Alan**: **O(1)**. Yerinde yapılır.`
    },
    complexity: { time: "O(N log N)", space: "O(1)" },
    codeSnippet: `function heapSort(arr: number[]): number[] {
    const n = arr.length;

    // 1. Build Max Heap (Rearrange array)
    // Start from last non-leaf node and go up
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // 2. Extract elements one by one
    for (let i = n - 1; i > 0; i--) {
        // Move current root (Largest) to the end (sorted region)
        [arr[0], arr[i]] = [arr[i], arr[0]];
        
        // Call max heapify on the reduced heap (size i)
        heapify(arr, i, 0);
    }
    return arr;
}

// To heapify a subtree rooted with node i which is an index in arr[]. 
// n is size of heap
function heapify(arr: number[], n: number, i: number) {
    let largest = i; // Initialize largest as root
    const l = 2 * i + 1; // Left child
    const r = 2 * i + 2; // Right child

    // If left child is larger than root
    if (l < n && arr[l] > arr[largest]) largest = l;

    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest]) largest = r;

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
        
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}`,
    questions: [
        { id: 1046, title: "Last Stone Weight", difficulty: "Easy", url: "https://leetcode.com/problems/last-stone-weight/" },
        { id: 506, title: "Relative Ranks", difficulty: "Easy", url: "https://leetcode.com/problems/relative-ranks/" },
        { id: 215, title: "Kth Largest Element in an Array", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
        { id: 451, title: "Sort Characters By Frequency", difficulty: "Medium", url: "https://leetcode.com/problems/sort-characters-by-frequency/" },
        { id: 23, title: "Merge k Sorted Lists", difficulty: "Hard", url: "https://leetcode.com/problems/merge-k-sorted-lists/" },
        { id: 295, title: "Find Median from Data Stream", difficulty: "Hard", url: "https://leetcode.com/problems/find-median-from-data-stream/" }
    ],
  },
  {
    id: "algo-merge-sort",
    title: { en: "Merge Sort", tr: "Merge Sort" },
    category: "Algorithm",
    domain: "DSA",
    level: "Mid",
    summary: {
        en: "Divide and conquer (Stable).",
        tr: "Böl ve yönet (Kararlı/Stable)."
    },
    descriptionStandard: {
        en: "Divides the array into halves, sorts them and then merges them. Guaranteed O(N log N) but requires O(N) space.",
        tr: "Diziyi yarılara böler, sıralar ve birleştirir. O(N log N) garantilidir ancak O(N) alan ister."
    },
    descriptionELI5: {
        en: "Imagine a messy deck of cards. You cut it in half, then half again, until you have 52 tiny piles of 1 card each. A single card is obviously sorted! Then you take two little piles and zipper-merge them together: 'Low card, high card.' Now you have sorted piles of 2. You merge those into piles of 4, then 8, then 16... until the whole deck is back together in perfect order.",
        tr: "Dağınık bir iskambil destesi hayal edin. Desteyi ikiye bölersiniz, sonra tekrar ikiye, ta ki elinizde her birinde 1 kart olan 52 küçük yığın kalana kadar. Tek bir kart doğal olarak sıralıdır! Sonra iki küçük yığını alıp fermuar gibi birleştirirsiniz: 'Düşük kart, yüksek kart.' Artık 2'li sıralı yığınlarınız var. Bunları 4'lü, sonra 8'li, sonra 16'lı yığınlar halinde birleştirirsiniz... ta ki tüm deste yeniden mükemmel bir sırada birleşene kadar."
    },
    contentMarkdown: {
        en: `### Concept
Merge Sort is a "Divide and Conquer" algorithm. It recursively divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.

### How it Works
1. **Divide**: Find the middle point to divide the array into two halves.
2. **Conquer**: Call mergeSort for the first half and the second half.
3. **Combine**: Merge the two halves sorted in step 2.
   - The merge step takes two pointers, compares the heads of both lists, and picks the smaller one to put into the result.

### Complexity
- **Time**: **O(N log N)**. We divide the array log N times, and merge takes linear time N.
- **Space**: **O(N)**. We need a temporary array to merge the elements.`,
        tr: `### Konsept
Merge Sort (Birleştirmeli Sıralama), bir "Böl ve Yönet" algoritmasıdır. Girdi dizisini özyinelemeli olarak iki yarıya böler, iki yarı için kendini çağırır ve ardından iki sıralı yarıyı birleştirir.

### Nasıl Çalışır?
1. **Böl**: Diziyi iki yarıya bölmek için orta noktayı bulun.
2. **Yönet**: İlk yarı ve ikinci yarı için mergeSort'u çağırın.
3. **Birleştir**: 2. adımda sıralanan iki yarıyı birleştirin.
   - Birleştirme adımı iki işaretçi alır, her iki listenin başlarını karşılaştırır ve sonucu koymak için daha küçük olanı seçer.

### Karmaşıklık
- **Zaman**: **O(N log N)**. Diziyi log N kez böleriz ve birleştirme lineer zaman N alır.
- **Alan**: **O(N)**. Elemanları birleştirmek için geçici bir diziye ihtiyacımız var.`
    },
    complexity: { time: "O(N log N)", space: "O(N)" },
    codeSnippet: `// Main MergeSort Function (Recursive)
function mergeSort(arr: number[]): number[] {
    // Base case: Array of 0 or 1 element is sorted
    if (arr.length <= 1) return arr;

    // Divide
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // Sort Left
    const right = mergeSort(arr.slice(mid));   // Sort Right

    // Conquer & Combine
    return merge(left, right);
}

// Merge Helper: Zipper Logic
function merge(left: number[], right: number[]): number[] {
    let resultArray: number[] = [], leftIndex = 0, rightIndex = 0;

    // Compare elements from both lists and pick smaller
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate remaining elements (if any)
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}`,
    questions: [
        { id: 88, title: "Merge Sorted Array", difficulty: "Easy", url: "https://leetcode.com/problems/merge-sorted-array/" },
        { id: 977, title: "Squares of a Sorted Array", difficulty: "Easy", url: "https://leetcode.com/problems/squares-of-a-sorted-array/" },
        { id: 148, title: "Sort List", difficulty: "Medium", url: "https://leetcode.com/problems/sort-list/" },
        { id: 56, title: "Merge Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/merge-intervals/" },
        { id: 327, title: "Count of Range Sum", difficulty: "Hard", url: "https://leetcode.com/problems/count-of-range-sum/" },
        { id: 493, title: "Reverse Pairs", difficulty: "Hard", url: "https://leetcode.com/problems/reverse-pairs/" }
    ],
  },
  {
    id: "algo-bellman-ford",
    title: { en: "Bellman-Ford Algorithm", tr: "Bellman-Ford Algorithm" },
    category: "Algorithm",
    domain: "DSA",
    level: "Senior",
    summary: {
        en: "Shortest path with negative weights.",
        tr: "Negatif ağırlıklarla en kısa yol."
    },
    descriptionStandard: {
        en: "Computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph. Can handle negative weights.",
        tr: "Ağırlıklı bir grafta tek bir kaynaktan diğer tüm düğümlere en kısa yolları hesaplar. Negatif ağırlıkları yönetebilir."
    },
    descriptionELI5: {
        en: "Bellman-Ford is like a paranoid traveler. While Dijkstra just grabs the fastest road and goes, Bellman-Ford stops and checks every single map route repeatedly. 'Did a new shortcut open up? Did a magical time-warp tunnel (negative weight) just appear?' It does this check V-1 times to be absolutely sure no cheaper route exists. It's slower, but much safer if the map is weird.",
        tr: "Bellman-Ford paranoyak bir gezgin gibidir. Dijkstra sadece en hızlı yolu seçip giderken, Bellman-Ford durur ve her bir harita rotasını defalarca kontrol eder. 'Yeni bir kestirme mi açıldı? Büyülü bir zaman tüneli (negatif ağırlık) mı belirdi?' Daha ucuz bir rota olmadığından kesinlikle emin olmak için bu kontrolü V-1 kez yapar. Daha yavaştır, ancak harita tuhafsa çok daha güvenlidir."
    },
    contentMarkdown: {
        en: `### Concept
Bellman-Ford computes shortest paths from a single source vertex to all other vertices. Unlike Dijkstra, it is capable of handling graphs in which some of the edge weights are negative numbers.

### How it Works
1. **Initialize**: Set distance to source = 0, others = Infinity.
2. **Relaxation**: Iterate \`V-1\` times through ALL edges in the graph.
   - For edge \`u -> v\` with weight \`w\`:
   - If \`dist[u] + w < dist[v]\`, update \`dist[v]\`.
3. **Negative Cycle Check**: Iterate one more time. If any distance can still be reduced, there is a negative weight cycle (infinite optimization loop).

### Complexity
- **Time**: **O(V * E)**. We relax all E edges, V-1 times.
- **Space**: **O(V)**.`,
        tr: `### Konsept
Bellman-Ford, tek bir kaynak düğümden diğer tüm düğümlere en kısa yolları hesaplar. Dijkstra'nın aksine, bazı kenar ağırlıklarının negatif sayı olduğu grafları yönetebilir.

### Nasıl Çalışır?
1. **Başlat**: Kaynağa olan mesafeyi 0, diğerlerini Sonsuz yapın.
2. **Gevşetme (Relaxation)**: Graftaki TÜM kenarlar üzerinden \`V-1\` kez geçin.
   - Ağırlığı \`w\` olan \`u -> v\` kenarı için:
   - Eğer \`dist[u] + w < dist[v]\` ise, \`dist[v]\`'yi güncelleyin.
3. **Negatif Döngü Kontrolü**: Bir kez daha yineleyin. Herhangi bir mesafe hala azaltılabiliyorsa, negatif ağırlıklı bir döngü vardır (sonsuz optimizasyon döngüsü).

### Karmaşıklık
- **Zaman**: **O(V * E)**. Tüm E kenarlarını, V-1 kez gevşetiriz.
- **Alan**: **O(V)**.`
    },
    realWorldUses: [
        { en: "Network Routing (RIP Protocol uses this)", tr: "Ağ Yönlendirme (RIP Protokolü bunu kullanır)" },
        { en: "Arbitrage Detection in Finance", tr: "Finansta Arbitraj Tespiti" },
        { en: "Chemical Reaction Pathways", tr: "Kimyasal Reaksiyon Yolları" }
    ],
    pros: [
        { en: "Handles negative weights", tr: "Negatif ağırlıkları yönetebilir" },
        { en: "Simpler to implement than Dijkstra (no Priority Queue)", tr: "Uygulaması Dijkstra'dan daha basittir (PQ gerekmez)" }
    ],
    cons: [
        { en: "Slower than Dijkstra O(V*E)", tr: "Dijkstra'dan daha yavaştır O(V*E)" },
        { en: "Fails on negative cycles", tr: "Negatif döngülerde başarısız olur (tespit edebilir)" }
    ],
    complexity: { time: "O(V * E)", space: "O(V)" },
    codeSnippet: `function bellmanFord(graph: any, start: string) {
    // 1. Init Distance
    const distances = {};
    for(let node in graph) distances[node] = Infinity;
    distances[start] = 0;

    const nodes = Object.keys(graph);
    
    // 2. Relax Edges V-1 times
    // We do this loop V-1 times because in worst case (line graph),
    // info takes V-1 steps to travel from start to end.
    for(let i=0; i < nodes.length - 1; i++) {
        for(let u of nodes) {
            for(let v in graph[u]) {
                const weight = graph[u][v];
                // Relaxation check
                if(distances[u] + weight < distances[v]) {
                    distances[v] = distances[u] + weight;
                }
            }
        }
    }

    // 3. Check Negative Cycles
    // If we can STILL reduce distance after V-1 loops, 
    // there must be a cycle that reduces total weight forever.
    for(let u of nodes) {
         for(let v in graph[u]) {
             if(distances[u] + graph[u][v] < distances[v]) {
                 throw new Error("Negative Cycle Detected");
             }
         }
    }
    return distances;
}`,
    questions: [
        { id: 1971, title: "Find if Path Exists in Graph", difficulty: "Easy", url: "https://leetcode.com/problems/find-if-path-exists-in-graph/" },
        { id: 1791, title: "Find Center of Star Graph", difficulty: "Easy", url: "https://leetcode.com/problems/find-center-of-star-graph/" },
        { id: 787, title: "Cheapest Flights Within K Stops", difficulty: "Medium", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
        { id: 743, title: "Network Delay Time", difficulty: "Medium", url: "https://leetcode.com/problems/network-delay-time/" },
        { id: 882, title: "Reachable Nodes In Subdivided Graph", difficulty: "Hard", url: "https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/" },
        { id: 2045, title: "Second Minimum Time to Reach Destination", difficulty: "Hard", url: "https://leetcode.com/problems/second-minimum-time-to-reach-destination/" }
    ],
  },
  {
    id: "algo-prim",
    title: { en: "Prim's Algorithm", tr: "Prim's Algorithm" },
    category: "Algorithm",
    domain: "DSA",
    level: "Senior",
    summary: {
        en: "Minimum Spanning Tree (MST).",
        tr: "Minimum Kapsayan Ağaç (MST)."
    },
    descriptionStandard: {
        en: "Greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.",
        tr: "Ağırlıklı yönsüz bir graf için minimum kapsayan ağacı (MST) bulan açgözlü algoritma."
    },
    descriptionELI5: {
        en: "Imagine you want to connect electricity to every house in a village using the least amount of copper wire. You start at the Mayor's house. You look at all the neighbors and connect the one with the shortest distance. Now you have two houses connected. You look from BOTH houses: 'Who is the closest unconnected neighbor to EITHER of us?' You connect them. You keep expanding your single network blob until everyone has power.",
        tr: "Bir köydeki her eve en az miktarda bakır kablo kullanarak elektrik bağlamak istediğinizi hayal edin. Belediye Başkanı'nın evinden başlarsınız. Tüm komşulara bakarsınız ve en kısa mesafedeki olanı bağlarsınız. Şimdi iki ev bağlı. HER İKİ evden de bakarsınız: 'BİZE (herhangi birimize) en yakın, henüz bağlanmamış komşu kim?' Onu bağlarsınız. Herkesin elektriği olana kadar tek ağınızı genişletmeye devam edersiniz."
    },
    contentMarkdown: {
        en: `### Concept
Prim's Algorithm is a greedy algorithm that finds a Minimum Spanning Tree (MST) for a weighted undirected graph. It starts with an arbitrary node and grows the tree one edge at a time.

### How it Works
1. **Start**: Pick arbitrary node (e.g., node 0).
2. **Priority Queue**: Maintain a PQ of edges connecting the tree to vertices NOT in the tree.
3. **Expand**: Extract the minimum weight edge from PQ.
   - If the destination vertex is already in the tree using a cheaper path, ignore.
   - Else, add vertex to tree and add its neighbors to PQ.
4. **Repeat**: Until all vertices are included.

### Complexity
- **Time**: **O(E log V)** using a Binary Heap.
- **Space**: **O(V + E)**.`,
        tr: `### Konsept
Prim Algoritması, ağırlıklı yönsüz bir graf için Minimum Kapsayan Ağaç (MST) bulan açgözlü bir algoritmadır. Rastgele bir düğümle başlar ve ağacı her seferinde bir kenar büyüterek ilerletir.

### Nasıl Çalışır?
1. **Başla**: Rastgele bir düğüm seçin (örn. düğüm 0).
2. **Öncelik Kuyruğu**: Ağacı, ağaçta OLMAYAN köşelere bağlayan kenarların bir PQ'sunu tutun.
3. **Genişlet**: PQ'dan minimum ağırlıklı kenarı çekin.
   - Hedef köşe zaten daha ucuz bir yolla ağaçtaysa, yoksayın.
   - Değilse, köşeyi ağaca ekleyin ve komşularını PQ'ya ekleyin.
4. **Tekrarla**: Tüm köşeler dahil edilene kadar.

### Karmaşıklık
- **Zaman**: Binary Heap kullanarak **O(E log V)**.
- **Alan**: **O(V + E)**.`
    },
    realWorldUses: [
        { en: "Network Connectivity (Laying cables)", tr: "Ağ Bağlantısı (Kablo döşeme)" },
        { en: "Maze Generation", tr: "Labirent Oluşturma" },
        { en: "Circuit Design (Minimizing wire length)", tr: "Devre Tasarımı (Kablo uzunluğunu en aza indirme)" }
    ],
    pros: [
        { en: "Efficient for dense graphs", tr: "Yoğun graflar için verimlidir" },
        { en: "Guarantees optimal MST", tr: "Optimal MST'yi garanti eder" }
    ],
    cons: [
        { en: "Complex to implement (needs Priority Queue)", tr: "Uygulaması karmaşıktır (Priority Queue gerektirir)" },
        { en: "Slower on sparse graphs than Kruskal's", tr: "Seyrek graflarda Kruskal'den daha yavaştır" }
    ],
    complexity: { time: "O(E log V)", space: "O(V + E)" },
    codeSnippet: `function prim(graph: number[][]): number {
    // Simplified Adjacency Matrix implementation
    const n = graph.length;
    let key = new Array(n).fill(Infinity); // Min weight to connect i
    let mstSet = new Array(n).fill(false); // Included in MST?

    // Initial node (0)
    key[0] = 0;

    for (let count = 0; count < n - 1; count++) {
        // 1. Pick min key vertex not yet in MST
        let u = minKey(key, mstSet, n); 
        mstSet[u] = true; // Include it

        // 2. Update key value of adjacent vertices
        for (let v = 0; v < n; v++) {
            // Update key if:
            // - edge exists
            // - v is not in MST
            // - weight is smaller than current key
            if (graph[u][v] && !mstSet[v] && graph[u][v] < key[v]) {
                key[v] = graph[u][v]; // Update with cheaper connection
            }
        }
    }
    return key.reduce((a,b) => a+b, 0); // Total Weight of MST
}

// Helper to find min key index (Greedy Step)
function minKey(key, mstSet, n) {
    let min = Infinity, minIndex = -1;
    for(let v=0; v<n; v++)
        if(!mstSet[v] && key[v] < min) { min=key[v]; minIndex=v; }
    return minIndex;
}`,
    questions: [
        { id: 1971, title: "Find if Path Exists in Graph", difficulty: "Easy", url: "https://leetcode.com/problems/find-if-path-exists-in-graph/" },
        { id: 1128, title: "Number of Equivalent Domino Pairs", difficulty: "Easy", url: "https://leetcode.com/problems/number-of-equivalent-domino-pairs/" },
        { id: 1584, title: "Min Cost to Connect All Points", difficulty: "Medium", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/" },
        { id: 1319, title: "Number of Operations to Make Network Connected", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/" },
        { id: 1192, title: "Critical Connections in a Network", difficulty: "Hard", url: "https://leetcode.com/problems/critical-connections-in-a-network/" },
        { id: 1579, title: "Remove Max Number of Edges...", difficulty: "Hard", url: "https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/" }
    ],
  },
  {
    id: "algo-kruskal",
    title: { en: "Kruskal's Algorithm", tr: "Kruskal's Algorithm" },
    category: "Algorithm",
    domain: "DSA",
    level: "Senior",
    summary: {
        en: "MST using Union-Find.",
        tr: "Union-Find kullanarak MST."
    },
    descriptionStandard: {
        en: "Finds MST by sorting edges by weight and adding them if they don't form a cycle.",
        tr: "Kenarları ağırlığa göre sıralayıp, döngü oluşturmuyorlarsa ekleyerek MST bulur."
    },
    descriptionELI5: {
        en: "Imagine you are building a highway system for a country. Instead of starting from one city, you put all possible road projects on a list sorted by price. You just build the cheapest road first, anywhere in the country. Then next cheapest. If a road tries to connect two cities that are already connected (even indirectly), you skip it to save money. Eventually, all fragments merge into one national grid.",
        tr: "Bir ülke için otoyol sistemi kurduğunuzu hayal edin. Tek bir şehirden başlamak yerine, olası tüm yol projelerini fiyata göre sıralanmış bir listeye koyarsınız. Sadece en ucuz yolu önce yaparsınız, ülkenin herhangi bir yerinde. Sonra bir sonraki en ucuzu. Eğer bir yol, zaten birbirine bağlı (dolaylı olsa bile) iki şehri bağlamaya çalışırsa, tasarruf etmek için onu atlarsınız. Sonunda, tüm parçalar tek bir ulusal şebekede birleşir."
    },
    contentMarkdown: {
        en: `### Concept
Kruskal's Algorithm finds the MST by treating every node as a separate tree (forest) and connecting them with the cheapest possible edges, provided they don't form a cycle.

### How it Works
1. **Sort**: Sort all edges in non-decreasing order of their weight.
2. **Iterate**: Pick the smallest edge. Check if it forms a cycle with the spanning tree formed so far.
   - We use the **Union-Find** (Disjoint Set) data structure for efficient cycle detection.
3. **Union**: If no cycle (nodes are in different sets), include this edge and Union the sets.
4. **Repeat**: Until we have \`V-1\` edges.

### Complexity
- **Time**: **O(E log E)** or **O(E log V)** due to sorting edges.
- **Space**: **O(V + E)**.`,
        tr: `### Konsept
Kruskal Algoritması, her düğümü ayrı bir ağaç (orman) olarak ele alıp, döngü oluşturmadıkları sürece onları mümkün olan en ucuz kenarlarla bağlayarak MST'yi bulur.

### Nasıl Çalışır?
1. **Sırala**: Tüm kenarları ağırlıklarına göre küçükten büyüğe sıralayın.
2. **Yineleme**: En küçük kenarı seçin. Şimdiye kadar oluşturulan kapsayan ağaçla bir döngü oluşturup oluşturmadığını kontrol edin.
   - Verimli döngü tespiti için **Union-Find** (Ayrık Küme) veri yapısını kullanırız.
3. **Birleştir**: Döngü yoksa (düğümler farklı kümelerde), bu kenarı dahil edin ve kümeleri Birleştirin (Union).
4. **Tekrarla**: \`V-1\` kenarımız olana kadar.

### Karmaşıklık
- **Zaman**: Kenarları sıralama nedeniyle **O(E log E)** veya **O(E log V)**.
- **Alan**: **O(V + E)**.`
    },
    realWorldUses: [
        { en: "Water distribution networks", tr: "Su dağıtım şebekeleri" },
        { en: "LAN Connection optimization", tr: "LAN Bağlantı optimizasyonu" },
        { en: "Electric Grid wiring", tr: "Elektrik Şebekesi kablolaması" }
    ],
    pros: [
        { en: "Perfect for sparse graphs", tr: "Seyrek graflar için mükemmeldir" },
        { en: "Simple logic with Union-Find", tr: "Union-Find ile basit mantık" }
    ],
    cons: [
        { en: "Slower for dense graphs (Sorting E edges)", tr: "Yoğun graflarda yavaştır (E kenarları sıralama)" },
        { en: "Requires disjoint-set data structure", tr: "Ayrık küme veri yapısı gerektirir" }
    ],
    complexity: { time: "O(E log E)", space: "O(V + E)" },
    codeSnippet: `// Kruskal uses Union-Find + Edge Sorting to find MST
function kruskal(numVertices: number, edges: number[][]) {
    // Edge format: [src, dest, weight]
    
    // 1. Sort edges by weight (Ascending)
    // Greedy approach: always try to add the cheapest edge
    edges.sort((a,b) => a[2] - b[2]);

    // Union-Find (Disjoint Set) initialization
    // Initially, each vertex is its own parent (own set)
    const parent = Array(numVertices).fill(0).map((_,i) => i);
    
    // Find with Path Compression
    function find(i) {
        if(parent[i] == i) return i;
        return find(parent[i]);
    }
    
    // Union logic
    function union(i, j) {
        const rootI = find(i);
        const rootJ = find(j);
        if(rootI !== rootJ) parent[rootI] = rootJ;
    }

    let mstWeight = 0;
    let edgesCount = 0;

    for(let edge of edges) {
        let [u, v, w] = edge;
        
        // 2. Check Cycle: If u and v are in different sets
        if(find(u) !== find(v)) {
            union(u, v);     // Merge sets
            mstWeight += w;  // Add cost
            edgesCount++;
        }
    }
    return mstWeight;
}`,
    questions: [
        { id: 1971, title: "Find if Path Exists in Graph", difficulty: "Easy", url: "https://leetcode.com/problems/find-if-path-exists-in-graph/" },
        { id: 1791, title: "Find Center of Star Graph", difficulty: "Easy", url: "https://leetcode.com/problems/find-center-of-star-graph/" },
        { id: 1584, title: "Min Cost to Connect All Points", difficulty: "Medium", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/" },
        { id: 684, title: "Redundant Connection", difficulty: "Medium", url: "https://leetcode.com/problems/redundant-connection/" },
        { id: 1697, title: "Checking Existence of Edge Length Limited Paths", difficulty: "Hard", url: "https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/" },
        { id: 924, title: "Minimize Malware Spread", difficulty: "Hard", url: "https://leetcode.com/problems/minimize-malware-spread/" }
    ],
  },
  {
    id: "algo-astar",
    title: { en: "A* Algorithm", tr: "A* Algorithm" },
    category: "Algorithm",
    domain: "DSA",
    level: "Senior",
    summary: {
        en: "Pathfinding with Heuristics.",
        tr: "Heuristics (Sezgisel) ile yol bulma."
    },
    descriptionStandard: {
        en: "An informed search algorithm, or a best-first search. Uses a heuristic function to estimate cost to goal.",
        tr: "Bilgili bir arama algoritması veya best-first search. Hedefe olan maliyeti tahmin etmek için sezgisel bir fonksiyon kullanır."
    },
    descriptionELI5: {
        en: "Imagine finding your way through a forest to a golden castle. Dijkstra searches every path in a circle around you. A* is smarter—it has a magical compass that points to the castle. It still checks paths, but it prioritizes paths that actually go TOWARDS the castle. If a path goes North but the castle is South, A* ignores it unless absolutely necessary. It combines logic (distance traveled) with a hunch (distance remaining).",
        tr: "Bir ormanda altın kaleye giden yolu bulduğunuzu hayal edin. Dijkstra, etrafınızdaki bir daire içindeki her yolu arar. A* daha akıllıdır—kaleyi gösteren büyülü bir pusulası vardır. Yine de yolları kontrol eder, ancak aslında kaleye DOĞRU giden yolları önceliklendirir. Eğer bir yol Kuzeye gidiyorsa ama kale Güneydeyse, A* kesinlikle gerekli olmadıkça onu görmezden gelir. Mantığı (gidilen mesafe) bir seziyle (kalan mesafe) birleştirir."
    },
    contentMarkdown: {
        en: `### Concept
A* (A-Star) is an informed search algorithm used for pathfinding. It is an extension of Dijkstra's Algorithm that uses heuristics to guide the search towards the goal more efficiently.

### How it Works
1. **Formula**: Uses a cost function \`f(n) = g(n) + h(n)\`.
   - \`g(n)\`: Actual cost from start to node \`n\`.
   - \`h(n)\`: Heuristic estimated cost from \`n\` to goal (e.g., straight line distance).
2. **Priority Queue**: Like Dijkstra, but orders nodes by \`f(n)\`.
3. **Expand**: Always pick the node with lowest \`f(n)\`. This means "Shortest path so far + looks closest to goal".

### Complexity
- **Time**: Depends on the heuristic. In worst case **O(E)** (exponential if heuristic is bad). With good heuristic, it expands fewer nodes than Dijkstra.
- **Space**: **O(V)** to store open/closed lists.`,
        tr: `### Konsept
A* (A-Star), yol bulma için kullanılan bilgilendirilmiş bir arama algoritmasıdır. Aramayı hedefe daha verimli bir şekilde yönlendirmek için sezgisel yöntemler (heuristics) kullanan Dijkstra Algoritmasının bir uzantısıdır.

### Nasıl Çalışır?
1. **Formül**: \`f(n) = g(n) + h(n)\` maliyet fonksiyonunu kullanır.
   - \`g(n)\`: Başlangıçtan \`n\` düğümüne gerçek maliyet.
   - \`h(n)\`: \`n\`'den hedefe tahmini sezgisel maliyet (örn. kuş uçuşu mesafe).
2. **Öncelik Kuyruğu**: Dijkstra gibi, ancak düğümleri \`f(n)\`'e göre sıralar.
3. **Genişlet**: Her zaman en düşük \`f(n)\`'e sahip düğümü seçin. Bu, "Şimdiye kadarki en kısa yol + hedefe en yakın görünen" anlamına gelir.

### Karmaşıklık
- **Zaman**: Sezgisel yönteme bağlıdır. En kötü durumda **O(E)** (sezgisel kötüyse üstel olabilir). İyi sezgisel ile Dijkstra'dan daha az düğüm genişletir.
- **Alan**: Açık/kapalı listeleri saklamak için **O(V)**.`
    },
    realWorldUses: [
        { en: "Video Games (NPC Pathfinding)", tr: "Video Oyunları (NPC Yol Bulma)" },
        { en: "Robotics Motion Planning", tr: "Robotik Hareket Planlama" },
        { en: "Route Planning (GPS with traffic estimates)", tr: "Rota Planlama (Trafik tahminli GPS)" }
    ],
    pros: [
        { en: "Optimal pathfinding (with admissible heuristic)", tr: "Optimal yol bulma (doğru sezgisel ile)" },
        { en: "Faster than Dijkstra (expands fewer nodes)", tr: "Dijkstra'dan daha hızlıdır (daha az düğüm genişletir)" }
    ],
    cons: [
        { en: "Memory heavy (stores all generated nodes)", tr: "Bellek yoğundur (tüm üretilen düğümleri saklar)" },
        { en: "Performance depends directly on Heuristic", tr: "Performans doğrudan Sezgisel (Heuristic) fonksiyona bağlıdır" }
    ],
    complexity: { time: "O(E)", space: "O(V)" },
    codeSnippet: `// A* Concept (Heuristic Search)
// f(n) = g(n) + h(n)
function aStar(grid: number[][], start: [number, number], goal: [number, number]): [number, number][] | null {
    const rows = grid.length;
    const cols = grid[0].length;
    
    // Directions: Up, Down, Left, Right
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // Priority Queue substitute (We sort array by fScore each iteration)
    // Node structure: [row, col, fScore, gScore]
    const openSet: {r: number, c: number, f: number, g: number}[] = [];
    
    // Map to track path: Key="r,c" -> Value={r,c} (Parent)
    const cameFrom = new Map<string, {r: number, c: number}>();
    
    // Cost from start to current node
    const gScore = new Map<string, number>();
    
    const startKey = \`\${start[0]},\${start[1]}\`;
    gScore.set(startKey, 0); // Cost to start is 0
    
    // Add start node
    openSet.push({ 
        r: start[0], 
        c: start[1], 
        f: heuristic(start, goal), // Estimated total cost
        g: 0 
    });

    while (openSet.length > 0) {
        // 1. Get node with LOWEST fScore
        openSet.sort((a, b) => a.f - b.f);
        const current = openSet.shift()!;
        
        // 2. Goal check
        if (current.r === goal[0] && current.c === goal[1]) {
            return reconstructPath(cameFrom, current.r, current.c);
        }

        const currentKey = \`\${current.r},\${current.c}\`;

        // 3. Explore Neighbors
        for (const [dr, dc] of dirs) {
            const nr = current.r + dr;
            const nc = current.c + dc;

            // Boundary and Wall check (0=Walkable, 1=Wall)
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 0) {
                
                const tentative_g = current.g + 1; // Distance logic (1 per step)
                const neighborKey = \`\${nr},\${nc}\`;

                // If path is better than any previous one
                if (tentative_g < (gScore.get(neighborKey) ?? Infinity)) {
                    // Record path
                    cameFrom.set(neighborKey, { r: current.r, c: current.c });
                    gScore.set(neighborKey, tentative_g);
                    
                    // f = g + h
                    const f = tentative_g + heuristic([nr, nc], goal);
                    
                    // Add to Open Set
                    // In a real PQ, we would update priority if exists, but push is simpler here
                    openSet.push({ r: nr, c: nc, f, g: tentative_g });
                }
            }
        }
    }
    return null; // No path found
}

// Manhattan Distance Heuristic (for Grid)
function heuristic(a: [number, number], b: [number, number]): number {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

// Backtrack from Goal to Start to rebuild path
function reconstructPath(cameFrom: Map<string, {r: number, c: number}>, r: number, c: number) {
    const path: [number, number][] = [[r, c]];
    let key = \`\${r},\${c}\`;
    
    while (cameFrom.has(key)) {
        const parent = cameFrom.get(key)!;
        path.unshift([parent.r, parent.c]);
        key = \`\${parent.r},\${parent.c}\`;
    }
    return path;
}`,
    questions: [
        { id: 821, title: "Shortest Distance to a Character", difficulty: "Easy", url: "https://leetcode.com/problems/shortest-distance-to-a-character/" },
        { id: 994, title: "Rotting Oranges", difficulty: "Medium", url: "https://leetcode.com/problems/rotting-oranges/" },
        { id: 1091, title: "Shortest Path in Binary Matrix", difficulty: "Medium", url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/" },
        { id: 752, title: "Open the Lock", difficulty: "Medium", url: "https://leetcode.com/problems/open-the-lock/" },
        { id: 773, title: "Sliding Puzzle", difficulty: "Hard", url: "https://leetcode.com/problems/sliding-puzzle/" },
        { id: 1263, title: "Minimum Moves to Move a Box to Their Target Location", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/" }
    ],
  }
];

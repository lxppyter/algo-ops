"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useExplanation } from "@/context/explanation-context";

export default function PatternsPage() {
  const { language } = useExplanation();

  const constraints = [
    { n: "N <= 10 (12)", time: "O(N!)", algo: { en: "Backtracking / Permutations", tr: "Backtracking / Permütasyonlar" } },
    { n: "N <= 20", time: "O(2^N)", algo: { en: "Recursion + Memoization (DP)", tr: "Memoization (DP) ile Rekürsiyon" } },
    { n: "N <= 500", time: "O(N³)", algo: { en: "Dynamic Programming / Floyd Warshall", tr: "DP / Floyd Warshall" } },
    { n: "N <= 2,000", time: "O(N²)", algo: { en: "Nested Loops / Matrix", tr: "İç İçe Döngüler / Matris" } },
    { n: "N <= 20,000", time: "O(N log N)", algo: { en: "Sorting / Heap / Divide & Conquer", tr: "Sıralama / Heap / Böl ve Yönet" } },
    { n: "N <= 1,000,000", time: "O(N)", algo: { en: "Hash Map / Two Pointers / Stack", tr: "Hash Map / Two Pointers / Stack" } },
    { n: "N > 1,000,000", time: "O(log N)", algo: { en: "Binary Search", tr: "İkili Arama (Binary Search)" } },
  ];

  const recognitions = [
    {
       title: { en: "Top K Elements", tr: "En Büyük/Küçük K Eleman" },
       hint: { en: "Find K largest/smallest, Kth frequent...", tr: "K en büyük, K en sık geçen eleman..." },
       tool: "Heap (Priority Queue)"
    },
    {
        title: { en: "Sorted Array Input", tr: "Sıralı Dizi Girdisi" },
        hint: { en: "Find pair sum, duplicates, or target...", tr: "Toplam çifti, tekrar edenler veya hedef bulma..." },
        tool: "Two Pointers / Binary Search"
     },
     {
        title: { en: "Subarrays / Substrings", tr: "Alt Diziler / Alt Stringler" },
        hint: { en: "Longest, Shortest, Count with constraint...", tr: "En uzun, en kısa, kısıtlamalı alt dizi..." },
        tool: "Sliding Window"
     },
     {
        title: { en: "Shortest Path (Unweighted)", tr: "En Kısa Yol (Ağırlıksız)" },
        hint: { en: "Grid, Social Network, min steps...", tr: "Grid, Sosyal Ağ, minimum adım..." },
        tool: "BFS (Queue)"
     },
     {
        title: { en: "Shortest Path (Weighted)", tr: "En Kısa Yol (Ağırlıklı)" },
        hint: { en: "Routes, costs, connection fees...", tr: "Rotalar, maliyetler, bağlantı ücretleri..." },
        tool: "Dijkstra (Heap)"
     },
     {
        title: { en: "Connectivity / Isoloated Groups", tr: "Bağlantılılık / İzole Gruplar" },
        hint: { en: "Friend circles, network connection...", tr: "Arkadaş çemberleri, ağ bağlantısı..." },
        tool: "Union Find (Disjoint Set) / DFS"
     },
     {
        title: { en: "Permutations / Combinations", tr: "Permütasyon / Kombinasyon" },
        hint: { en: "Generate all possible ways...", tr: "Tüm olası yolları türetme..." },
        tool: "Backtracking"
     },
     {
        title: { en: "Next Greater / Smaller", tr: "Bir Sonraki Büyük/Küçük" },
        hint: { en: "Find next larger element involved...", tr: "Sıradaki daha büyük elemanı bulma..." },
        tool: "Monotonic Stack"
     }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
       <div className="mb-12 text-center space-y-4">
          <Badge variant="secondary" className="mb-2">
            {language === 'tr' ? 'Mülakat Stratejileri' : 'Interview Strategies'}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            {language === 'tr' ? 'LeetCode Pattern Analizi' : 'LeetCode Pattern Recognition'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'tr' 
              ? 'Problemleri ezberleme, kalıpları tanı. Girdi boyutlarına ve tiplerine bakarak çözüm yolunu anında kestir.' 
              : 'Don\'t memorize problems, recognize patterns. Predict the solution path instantly by looking at input sizes and types.'}
          </p>
      </div>

      <div className="grid gap-12">
        {/* Section 1: Constraints */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-blue-500 hover:bg-blue-600">1</Badge>
            <h2 className="text-2xl font-bold">
              {language === 'tr' ? 'Kısıt Analizi (Constraint Analysis)' : 'Constraint Analysis'}
            </h2>
          </div>
          <Card>
            <CardHeader>
              <CardDescription>
                {language === 'tr' 
                  ? 'Girdi boyutu (N), kullanabileceğin algoritmanın zaman karmaşıklığını belirler.'
                  : 'Input size (N) explicitly determines the time complexity of the algorithm you can use.'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {constraints.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border bg-card/50 hover:bg-secondary/20 transition-colors">
                    <div className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400 w-32">{item.n}</div>
                    <div className="font-mono text-xs text-muted-foreground w-20">{item.time}</div>
                    <div className="flex-1 text-right font-medium">{language === 'tr' ? item.algo.tr : item.algo.en}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 2: Problem Recognition */}
        <section>
          <div className="flex items-center gap-3 mb-6">
             <Badge className="bg-emerald-500 hover:bg-emerald-600">2</Badge>
            <h2 className="text-2xl font-bold">
               {language === 'tr' ? 'Problem Tanıma (Pattern Recognition)' : 'Problem Recognition'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {recognitions.map((item, i) => (
               <Card key={i} className="hover:border-emerald-500/50 transition-colors h-full">
                 <CardHeader className="pb-2 space-y-1">
                   <CardTitle className="text-sm font-bold text-foreground">
                      {language === 'tr' ? item.title.tr : item.title.en}
                   </CardTitle>
                   <CardDescription className="text-xs">
                      {language === 'tr' ? item.hint.tr : item.hint.en}
                   </CardDescription>
                 </CardHeader>
                 <CardContent>
                   <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 p-2 rounded text-center">
                    {item.tool}
                   </div>
                 </CardContent>
               </Card>
             ))}
          </div>
        </section>

        {/* Section 3: Input Types */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-orange-500 hover:bg-orange-600">3</Badge>
            <h2 className="text-2xl font-bold">
               {language === 'tr' ? 'Girdi Formatı İpuçları' : 'Input Format Hints'}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Sorted Array (Sıralı Dizi)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="p-2 bg-secondary/30 rounded text-sm">Binary Search (O(log N))</div>
                  <div className="p-2 bg-secondary/30 rounded text-sm">Two Pointers (O(N))</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tree / Graph</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="p-2 bg-secondary/30 rounded text-sm">DFS (Recursion / Stack)</div>
                  <div className="p-2 bg-secondary/30 rounded text-sm">BFS (Queue)</div>
                </CardContent>
              </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

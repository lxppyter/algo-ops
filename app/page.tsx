"use client";

import { contentData } from "@/lib/content";
import { TopicCard } from "@/components/topic-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useExplanation } from "@/context/explanation-context";
import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const { domain, language } = useExplanation();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter content based on selected domain and search query
  const filteredContent = contentData.filter((item) => {
    const matchesDomain = item.domain === domain;
    const matchesSearch = item.title[language]
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full bg-secondary/50 text-xs font-medium text-muted-foreground mb-4">
          🚀{" "}
          {language === "tr"
            ? "Mülakat Hazırlık Platformu"
            : "Interview Prep Platform"}
        </div>
        <h1 className="text-4xl md:text-7xl font-bold font-heading tracking-tight text-foreground">
          {
            <>
              {language === "tr" ? "Algoritma &" : "Algorithms &"} <br />
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                {language === "tr" ? "Veri Yapıları" : "Data Structures"}
              </span>
            </>
          }
        </h1>
        <p className="text-xl text-muted-foreground">
          {language === "tr"
            ? `Karmaşık algoritmaları en basite indirgeyin.`
            : `Simplify complex algorithms.`}
          <br className="hidden md:block" />
          {language === "tr" ? (
            <>
              Tek bir tıkla profesyonel açıklamadan{" "}
              <span className="text-emerald-500 font-bold">
                5 yaş anlatımına
              </span>{" "}
              geçiş yapın.
            </>
          ) : (
            <>
              Switch from professional to{" "}
              <span className="text-emerald-500 font-bold">
                ELI5 explanation
              </span>{" "}
              with one click.
            </>
          )}
        </p>

        {/* Search Bar */}
        <div className="relative max-w-lg mx-auto mt-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <Input
            className="pl-10 h-12 text-lg rounded-full bg-background border-muted-foreground/20 focus-visible:ring-primary/50 shadow-sm"
            placeholder={
              language === "tr"
                ? "Konu ara... (örn: Stack, QuickSort)"
                : "Search topics... (e.g. Stack, QuickSort)"
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {filteredContent.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <TopicCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-lg">
            {language === "tr"
              ? "Sonuç bulunamadı. Başka bir terim deneyin."
              : "No results found. Try a different term."}
          </p>
        </div>
      )}
    </div>
  );
}

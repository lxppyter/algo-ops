"use client";

import Link from "next/link";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingCoffee() {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link href="https://buymeacoffee.com/lxppyter" target="_blank">
        <Button
          variant="outline"
          size="lg"
          className="shadow-lg hover:shadow-xl transition-all border-yellow-500/20 bg-background/80 backdrop-blur-sm group gap-0 hover:gap-3 rounded-full h-14 px-4 hover:px-8"
        >
          <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-full group-hover:bg-transparent transition-colors">
             <Coffee className="w-6 h-6 text-yellow-600 dark:text-yellow-500" />
          </div>
          <span className="w-0 overflow-hidden group-hover:w-auto group-hover:opacity-100 opacity-0 transition-all duration-300 text-base font-bold text-yellow-700 dark:text-yellow-400 whitespace-nowrap">
            Buy me a coffee
          </span>
        </Button>
      </Link>
    </div>
  );
}

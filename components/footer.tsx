"use client";

import Link from "next/link";
import { Coffee, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4 mx-auto">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <Link
            href="https://github.com/jxpyter"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            jxpyter
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/jxpyter/algo-ops"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
        <div className="flex items-center gap-2">
           <Link href="https://buymeacoffee.com/lxppyter" target="_blank">
            <Button
              variant="ghost"
              size="sm"
              className="text-yellow-600 dark:text-yellow-500 gap-2"
            >
              <Coffee className="h-4 w-4" />
              <span>Buy Me A Coffee</span>
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

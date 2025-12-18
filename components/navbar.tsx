"use client"

import * as React from "react"
import Link from "next/link"
import { useExplanation } from "@/context/explanation-context"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { BookMarked, CalendarDays, Menu, Github, Languages } from "lucide-react"

export function Navbar() {
  const { mode, toggleMode, domain, setDomain, language, setLanguage } = useExplanation()

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between relative">
        {/* Left: Logo & Toggle */}
        <div className="flex items-center gap-2 sm:gap-6">
            <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl sm:text-2xl font-bold font-heading bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent truncate max-w-[100px] sm:max-w-none">
                  AlgoOps
                </span>
            </Link>

            {/* Domain Selector - Always Visible */}
            <div className="flex items-center bg-secondary/30 p-1 rounded-lg border border-border/50 gap-1">
                <button
                    onClick={() => setDomain('DSA')}
                    className={`px-2 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                        domain === 'DSA' 
                        ? 'bg-background shadow-sm text-foreground' 
                        : 'text-muted-foreground hover:text-foreground/80'
                    }`}
                >
                    DSA
                </button>
                <button
                    onClick={() => setDomain('DBA')}
                    className={`px-2 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                        domain === 'DBA' 
                        ? 'bg-background shadow-sm text-orange-600 dark:text-orange-400' 
                        : 'text-muted-foreground hover:text-foreground/80'
                    }`}
                >
                    DBA
                </button>
             </div>
        </div>

        {/* Center: Study Plans (Absolute Centered) - Desktop Only */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
            <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                    <Button variant="link" className="text-foreground/80 hover:text-foreground">
                        {language === 'tr' ? 'Çalışma Planları' : 'Study Plans'}
                    </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">LeetCode Plans</h4>
                            <p className="text-sm text-muted-foreground">
                                {language === 'tr' ? 'Mülakatlar için seçilmiş en iyi listeler.' : 'Curated lists for interview prep.'}
                            </p>
                            <div className="flex flex-col gap-2 pt-4">
                                <Link href="https://leetcode.com/studyplan/leetcode-75/" target="_blank" className="flex items-center gap-2 text-sm hover:underline hover:text-primary">
                                    <BookMarked className="w-4 h-4 text-indigo-500" /> LeetCode 75
                                </Link>
                                <Link href="https://leetcode.com/studyplan/top-interview-150/" target="_blank" className="flex items-center gap-2 text-sm hover:underline hover:text-primary">
                                    <BookMarked className="w-4 h-4 text-emerald-500" /> Top Interview 150
                                </Link>
                                <Link href="https://leetcode.com/studyplan/top-100-liked/" target="_blank" className="flex items-center gap-2 text-sm hover:underline hover:text-primary">
                                    <BookMarked className="w-4 h-4 text-blue-500" /> Top 100 Liked
                                </Link>
                                <Link href="https://leetcode.com/studyplan/top-sql-50/" target="_blank" className="flex items-center gap-2 text-sm hover:underline hover:text-primary">
                                    <BookMarked className="w-4 h-4 text-orange-500" /> SQL 50
                                </Link>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>

        {/* Right: Controls & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Language - Desktop Only */}
            <button
                onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
                className="hidden lg:block text-sm font-semibold text-muted-foreground hover:text-primary transition-colors w-8 uppercase"
                title="Switch Language"
            >
                {language}
            </button>

            {/* Mode Switch - Always Visible & Scaled */}
            <div className="flex items-center gap-1.5 border rounded-full px-2 py-1 sm:px-3 sm:py-1.5 bg-secondary/50">
                <span className={`text-[10px] sm:text-xs font-medium transition-colors ${mode === 'standard' ? 'text-foreground' : 'text-muted-foreground'}`}>
                    Std
                </span>
                <Switch 
                    checked={mode === 'eli5'} 
                    onCheckedChange={toggleMode}
                    className="h-3.5 w-7 sm:h-4 sm:w-8 data-[state=checked]:bg-emerald-500"
                />
                <span className={`text-[10px] sm:text-xs font-medium transition-colors flex items-center gap-0.5 ${mode === 'eli5' ? 'text-emerald-600 font-bold' : 'text-muted-foreground'}`}>
                    ELI5 <span className="text-[10px] sm:text-xs">👶</span>
                </span>
            </div>
            
            <Link href="https://github.com/jxpyter" target="_blank">
                <Button variant="ghost" size="icon" className="hidden lg:flex w-9 h-9">
                    <Github className="w-5 h-5" />
                </Button>
            </Link>

            {/* Mobile Menu Trigger (Dropdown) */}
            <div className="lg:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="w-9 h-9">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        
                        <DropdownMenuLabel>
                             {language === 'tr' ? 'Çalışma Planları' : 'Study Plans'}
                        </DropdownMenuLabel>
                        <DropdownMenuGroup>
                             <DropdownMenuItem asChild>
                                <Link href="https://leetcode.com/studyplan/leetcode-75/" target="_blank" className="flex items-center gap-2 w-full cursor-pointer">
                                    <BookMarked className="w-4 h-4 text-indigo-500" /> LeetCode 75
                                </Link>
                             </DropdownMenuItem>
                             <DropdownMenuItem asChild>
                                <Link href="https://leetcode.com/studyplan/top-interview-150/" target="_blank" className="flex items-center gap-2 w-full cursor-pointer">
                                    <BookMarked className="w-4 h-4 text-emerald-500" /> Top Interview 150
                                </Link>
                             </DropdownMenuItem>
                             <DropdownMenuItem asChild>
                                <Link href="https://leetcode.com/studyplan/top-100-liked/" target="_blank" className="flex items-center gap-2 w-full cursor-pointer">
                                    <BookMarked className="w-4 h-4 text-blue-500" /> Top 100 Liked
                                </Link>
                             </DropdownMenuItem>
                             <DropdownMenuItem asChild>
                                <Link href="https://leetcode.com/studyplan/top-sql-50/" target="_blank" className="flex items-center gap-2 w-full cursor-pointer">
                                    <BookMarked className="w-4 h-4 text-orange-500" /> SQL 50
                                </Link>
                             </DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator />

                        <DropdownMenuLabel>
                             {language === 'tr' ? 'Ayarlar' : 'Settings'}
                        </DropdownMenuLabel>
                         <DropdownMenuItem onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')} className="gap-2 cursor-pointer">
                            <Languages className="w-4 h-4" /> 
                            {language === 'tr' ? 'Switch to English' : 'Türkçe\'ye Geç'}
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem asChild>
                            <Link href="https://github.com/jxpyter" target="_blank" className="flex items-center gap-2 w-full cursor-pointer">
                                <Github className="w-5 h-5" /> GitHub
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
      </div>
    </nav>
  )
}

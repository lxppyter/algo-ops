"use client"

import { ContentItem } from "@/lib/content"
import { useExplanation } from "@/context/explanation-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Clock, HardDrive, Code as CodeIcon, BookOpen, Sparkles, Check, ChevronRight, Copy } from "lucide-react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from "react"
import { cn } from "@/lib/utils"

export function TopicDetailView({ item }: { item: ContentItem }) {
  const { mode, language } = useExplanation()
  const [copied, setCopied] = useState(false)
  
  const isDBA = item.domain === 'DBA';
  const contentFont = isDBA ? 'font-dba' : 'font-content';

  const handleCopy = () => {
    navigator.clipboard.writeText(item.codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background animate-in fade-in duration-500">
      {/* Top Navigation Bar for Context */}
      <div className="sticky top-16 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
         <div className="container flex h-14 items-center gap-4 px-4">
             <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                {language === 'tr' ? '← Ana Sayfa' : '← Home'}
             </Link>
             <div className="h-4 w-px bg-border" />
             <div className="flex items-center gap-2">
                 <span className="font-semibold">{item.title[language]}</span>
                 <Badge variant={item.domain === 'DSA' ? 'default' : 'secondary'} className="text-xs">
                    {item.domain}
                 </Badge>
             </div>
         </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className={cn(
            "grid gap-8 lg:gap-12",
            item.domain === 'DBA' ? "lg:grid-cols-1 mx-auto w-full" : "lg:grid-cols-2"
        )}>
            
            {/* LEFT COLUMN: Content & Explanations */}
            <div className="space-y-8 lg:pr-4">
                {/* Header Info */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-heading tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        {item.title[language]}
                    </h1>
                    <div className="flex gap-4 text-sm font-mono text-muted-foreground">
                        <span className="flex items-center gap-1.5 bg-secondary/30 px-2 py-1 rounded border border-secondary">
                            <Clock className="w-4 h-4" /> {item.complexity.time}
                        </span>
                        <span className="flex items-center gap-1.5 bg-secondary/30 px-2 py-1 rounded border border-secondary">
                            <HardDrive className="w-4 h-4" /> {item.complexity.space}
                        </span>
                    </div>
                </div>

                {/* Explanation Card */}
                <Card className="border-2 border-primary/5 shadow-xl bg-gradient-to-b from-card to-card/50">
                    <CardHeader className="bg-muted/10 pb-4 border-b border-border/50">
                        <CardTitle className="text-lg flex justify-between items-center font-heading">
                            <span className="flex items-center gap-2">
                                {mode === 'standard' ? <BookOpen className="w-5 h-5 text-primary" /> : <Sparkles className="w-5 h-5 text-emerald-500" />}
                                {language === 'tr' ? 'Konu Anlatımı' : 'Explanation'}
                            </span>
                            <Badge variant={mode === 'eli5' ? 'outline' : 'secondary'} className={cn("transition-colors", mode === 'eli5' && "border-emerald-500 text-emerald-500")}>
                                {mode === 'eli5' ? 'ELI5 (Simple)' : 'Standard'}
                            </Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={mode}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className={cn("text-lg leading-relaxed", contentFont)}
                            >
                                {mode === 'eli5' ? (
                                    <div className="prose prose-lg dark:prose-invert">
                                        <p className="text-emerald-800 dark:text-emerald-100 font-medium font-handwriting text-xl border-l-4 border-emerald-500 pl-4 bg-emerald-500/5 py-2 rounded-r">
                                            "{item.descriptionELI5[language]}"
                                        </p>
                                    </div>
                                ) : (
                                    <div className="prose dark:prose-invert text-foreground/90 max-w-none">
                                        {item.contentMarkdown ? (
                                            <ReactMarkdown 
                                                components={{
                                                    h3: ({node, ...props}: any) => <h3 className="text-xl font-bold mt-8 mb-4 text-primary tracking-tight font-heading" {...props} />,
                                                    ul: ({node, ...props}: any) => <ul className="list-disc pl-5 my-4 space-y-2 marker:text-primary/50" {...props} />,
                                                    li: ({node, ...props}: any) => <li className="pl-1" {...props} />,
                                                    p: ({node, ...props}: any) => <p className="mb-4 text-muted-foreground/90 leading-7" {...props} />,
                                                    strong: ({node, ...props}: any) => <strong className="font-bold text-foreground" {...props} />
                                                }}
                                            >
                                                {item.contentMarkdown[language]}
                                            </ReactMarkdown>
                                        ) : (
                                            <p>{item.descriptionStandard[language]}</p>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </CardContent>
                </Card>

                {/* Pros & Cons Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {item.pros && item.domain !== 'DBA' && (
                        <Card className="bg-emerald-500/5 border-emerald-500/20 shadow-sm">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-base flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-heading">
                                     <Check className="w-5 h-5" />
                                     {language === 'tr' ? 'Avantajlar' : 'Advantages'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className={cn("space-y-2.5 text-sm", contentFont)}>
                                    {item.pros.map((p, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                            <span className="text-muted-foreground/90">{p[language]}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    )}
                    
                    {item.cons && item.domain !== 'DBA' && (
                        <Card className="bg-rose-500/5 border-rose-500/20 shadow-sm">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-base flex items-center gap-2 text-rose-600 dark:text-rose-400 font-heading">
                                     <ExternalLink className="w-5 h-5 rotate-45" />
                                     {language === 'tr' ? 'Dezavantajlar' : 'Disadvantages'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className={cn("space-y-2.5 text-sm", contentFont)}>
                                    {item.cons.map((c, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                                            <span className="text-muted-foreground/90">{c[language]}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    )}
                </div>

                 {item.realWorldUses && item.domain !== 'DBA' && (
                     <div className="pt-2">
                        <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider font-heading">
                            {language === 'tr' ? 'Gerçek Hayat Kullanımları' : 'Real World Uses'}
                        </h3>
                        <div className={cn("flex flex-wrap gap-2", contentFont)}>
                            {item.realWorldUses.map((u, i) => (
                                <div key={i} className="bg-secondary/40 border border-secondary/60 px-3 py-1.5 rounded-full text-sm font-medium text-foreground/80">
                                    {u[language]}
                                </div>
                            ))}
                        </div>
                     </div>
                 )}
            </div>

            {/* RIGHT COLUMN: Code & Practice (Sticky) - Hidden for DBA */}
            {item.domain !== 'DBA' && (
            <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-10rem)] overflow-hidden lg:overflow-y-auto space-y-8 no-scrollbar pb-10">
                
                {/* Code Block */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center px-1">
                        <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground font-heading">
                            <CodeIcon className="w-5 h-5 text-indigo-500" />
                            {language === 'tr' ? 'Uygulama' : 'Implementation'}
                        </h3>
                         <div className="flex items-center gap-2">
                             <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                TypeScript
                            </Badge>
                             <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleCopy}>
                                {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                            </Button>
                        </div>
                    </div>
                    
                    {/* Reverted Code Design */}
                    <div className="relative rounded-lg overflow-hidden border bg-[#1d1f21] shadow-xl group">
                        <div className="absolute top-3 right-3 flex gap-1.5 z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <SyntaxHighlighter 
                            language="typescript" 
                            style={atomDark}
                            customStyle={{
                                margin: 0,
                                padding: '1.5rem',
                                paddingTop: '2.5rem', // Space for dots
                                fontSize: '0.9rem',
                                fontFamily: isDBA ? 'var(--font-dba)' : 'var(--font-content)',
                                backgroundColor: 'transparent' // Let container bg handle it
                            }}
                            wrapLongLines={true}
                        >

                            {item.codeSnippet}
                        </SyntaxHighlighter>
                    </div>
                </div>

                {/* LeetCode Questions */}
                {item.questions.length > 0 && (
                    <div className="space-y-4 pt-4 border-t border-border/40">
                        <h3 className="text-lg font-semibold px-1">
                            {language === 'tr' ? 'Pratik Sorular' : 'Practice Questions'}
                        </h3>
                        <div className="grid gap-3">
                            {item.questions.map((q) => (
                                <a 
                                    key={q.id} 
                                    href={q.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block group"
                                >
                                    <div className="bg-card hover:bg-secondary/30 border border-border/50 hover:border-primary/30 rounded-lg p-4 transition-all duration-200 flex justify-between items-center shadow-sm hover:shadow-md">
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-xs text-muted-foreground bg-secondary/50 px-1.5 py-0.5 rounded">
                                                #{q.id}
                                            </span>
                                            <span className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                                                {q.title}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                             <Badge className={cn(
                                                "text-[10px] px-2 py-0 h-5 pointer-events-none",
                                                q.difficulty === 'Easy' && "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
                                                q.difficulty === 'Medium' && "bg-amber-500/10 text-amber-600 border-amber-500/20",
                                                q.difficulty === 'Hard' && "bg-rose-500/10 text-rose-600 border-rose-500/20"
                                             )}>
                                                {q.difficulty}
                                             </Badge>
                                             <ChevronRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-foreground/50 transition-colors" />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            )}
        </div>
      </div>
    </div>
  )
}

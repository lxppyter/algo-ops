"use client"

import { ContentItem } from "@/lib/content"
import { useExplanation } from "@/context/explanation-context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Clock, HardDrive, BookOpen, Sparkles } from "lucide-react"
import Link from "next/link"

export function TopicCard({ item }: { item: ContentItem }) {
  const { mode, language } = useExplanation()
  
  const isDBA = item.domain === 'DBA';
  const contentFont = isDBA ? 'font-dba' : 'font-content';

  return (
    <Card className="flex flex-col h-full hover:shadow-xl transition-all duration-300 border-muted-foreground/20 hover:border-primary/20 bg-card/95 hover:bg-card group">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
            <div className="flex gap-2 flex-wrap">
                <Badge variant={item.domain === 'DSA' ? 'default' : 'secondary'} className={
                    item.domain === 'DSA' ? 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20' : 'bg-orange-500/10 text-orange-400 hover:bg-orange-500/20'
                }>
                    {item.domain}
                </Badge>
                {item.level && (
                    <Badge variant="outline" className={
                        item.level === 'Junior' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                        item.level === 'Mid' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' :
                        'bg-red-500/10 text-red-500 border-red-500/20'
                    }>
                        {item.level}
                    </Badge>
                )}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex gap-3">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.complexity.time}</span>
                <span className="flex items-center gap-1"><HardDrive className="w-3 h-3" /> {item.complexity.space}</span>
            </div>
        </div>
        <CardTitle className="text-xl font-bold font-heading group-hover:text-primary transition-colors">{item.title[language]}</CardTitle>
        <CardDescription className={`line-clamp-2 ${contentFont}`}>{item.summary[language]}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <AnimatePresence mode="wait">
            <motion.div
                key={mode}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="text-sm leading-relaxed"
            >
                {mode === 'eli5' ? (
                    <div className="p-4 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100 rounded-xl border border-emerald-500/20 shadow-sm">
                        <div className="flex gap-2">
                            <span className="text-xl">👶</span>
                            <span className="font-medium italic">"{item.descriptionELI5[language]}"</span>
                        </div>
                    </div>
                ) : (
                    <p className="text-muted-foreground">{item.descriptionStandard[language]}</p>
                )}
            </motion.div>
        </AnimatePresence>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href={`/topics/${item.id}`} className="w-full">
            <Button className="w-full group/btn relative overflow-hidden" variant="outline">
                <span className="relative z-10 flex items-center justify-center">
                    {language === 'tr' ? 'Detayları İncele' : 'View Details'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"/>
                </span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary/50 group-hover/btn:h-full transition-all duration-300 opacity-10"/>
            </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

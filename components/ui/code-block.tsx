"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { codeToHtml } from 'shiki'

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export function CodeBlock({ code, language = 'typescript', className }: CodeBlockProps) {
  const [html, setHtml] = React.useState<string>("")
  const [isCopied, setIsCopied] = React.useState(false)

  React.useEffect(() => {
    async function highlight() {
      const out = await codeToHtml(code, {
        lang: language,
        themes: {
          light: 'min-light',
          dark: 'github-dark-dimmed',
        }
      })
      setHtml(out)
    }
    highlight()
  }, [code, language])

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className={cn("relative group rounded-lg overflow-hidden border bg-zinc-950", className)}>
      <div className="absolute right-4 top-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="secondary"
          size="icon"
          className="h-8 w-8 bg-zinc-800 hover:bg-zinc-700 text-zinc-400"
          onClick={copyToClipboard}
        >
          {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
      <div 
        className="p-4 overflow-x-auto text-sm font-mono leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html || `<pre><code>${code}</code></pre>` }}
      />
    </div>
  )
}

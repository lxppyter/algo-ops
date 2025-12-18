"use client"

import React, { createContext, useContext, useState } from "react"
import type { Domain } from "@/lib/content"

export type ExplanationMode = "standard" | "eli5"
export type Language = "tr" | "en"

interface ExplanationContextType {
  mode: ExplanationMode
  setMode: (mode: ExplanationMode) => void
  toggleMode: () => void
  domain: Domain
  setDomain: (domain: Domain) => void
  language: Language
  setLanguage: (lang: Language) => void
}

const ExplanationContext = createContext<ExplanationContextType | undefined>(undefined)

export function ExplanationProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ExplanationMode>("standard")
  const [domain, setDomain] = useState<Domain>("DSA")
  const [language, setLanguage] = useState<Language>("tr")

  const toggleMode = () => {
    setMode((prev) => (prev === "standard" ? "eli5" : "standard"))
  }

  return (
    <ExplanationContext.Provider value={{ mode, setMode, toggleMode, domain, setDomain, language, setLanguage }}>
      {children}
    </ExplanationContext.Provider>
  )
}

export function useExplanation() {
  const context = useContext(ExplanationContext)
  if (context === undefined) {
    throw new Error("useExplanation must be used within an ExplanationProvider")
  }
  return context
}

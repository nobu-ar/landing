"use client"

import React from "react"

export type Language = "es" | "en"

const STORAGE_KEY = "nobu-language"

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null)

function detectBrowserLanguage(): Language {
  if (typeof navigator === "undefined") return "es"

  const candidates =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language]

  const hasSpanish = candidates.some((lang) => lang.toLowerCase().startsWith("es"))
  if (hasSpanish) return "es"

  const hasEnglish = candidates.some((lang) => lang.toLowerCase().startsWith("en"))
  if (hasEnglish) return "en"

  return "es"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("es")

  React.useEffect(() => {
    let storedLanguage: string | null = null
    try {
      storedLanguage = window.localStorage.getItem(STORAGE_KEY)
    } catch {
      // localStorage not available (private browsing, disabled storage, etc.)
    }

    if (storedLanguage === "es" || storedLanguage === "en") {
      setLanguageState(storedLanguage)
      return
    }

    setLanguageState(detectBrowserLanguage())
  }, [])

  const setLanguage = React.useCallback((next: Language) => {
    setLanguageState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore write errors
    }
  }, [])

  const value = React.useMemo(() => ({ language, setLanguage }), [language, setLanguage])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

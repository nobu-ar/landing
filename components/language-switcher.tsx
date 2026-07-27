"use client"

import React from "react"
import { ChevronDown } from "lucide-react"
import { AR, US } from "country-flag-icons/react/3x2"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage, type Language } from "@/lib/i18n/language-context"

const LANGUAGES: Array<{
  code: Language
  label: string
  short: string
  Flag: React.ComponentType<{ title?: string; className?: string }>
}> = [
  { code: "es", label: "Español", short: "ES", Flag: AR },
  { code: "en", label: "English", short: "EN", Flag: US },
]

interface LanguageSwitcherProps {
  textColor?: string;
  hoverBackgroundColor?: string;
}

export function LanguageSwitcher({
  textColor = "white",
  hoverBackgroundColor = "rgba(255, 255, 255, 0.12)",
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()
  const current = LANGUAGES.find((option) => option.code === language) ?? LANGUAGES[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Cambiar idioma / Change language"
          className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors outline-none"
          style={{ color: textColor }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBackgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          <current.Flag
            title={current.label}
            className="w-5 h-3.5 rounded-[2px] object-cover shrink-0"
          />
          <span className="hidden sm:inline">{current.short}</span>
          <ChevronDown className="w-3.5 h-3.5 opacity-70" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-36">
        {LANGUAGES.map((option) => (
          <DropdownMenuItem
            key={option.code}
            onSelect={() => setLanguage(option.code)}
            className="gap-2 cursor-pointer"
            data-active={option.code === language}
          >
            <option.Flag
              title={option.label}
              className="w-5 h-3.5 rounded-[2px] object-cover shrink-0"
            />
            <span>{option.label}</span>
            {option.code === language && (
              <span className="ml-auto text-primary text-xs font-semibold">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

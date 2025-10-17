"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useParams, usePathname } from 'next/navigation'
import { useTranslations } from '@/config/i18n/t'
import type { Locale } from '@/config/i18n/i18n'
import Link from "next/link"
import Image from "next/image"
import { LanguageSelector } from '@/components/LanguageSelector'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const params = useParams()
    const pathname = usePathname()
    const lang = (params?.lang || 'uz') as Locale
    const { t } = useTranslations(lang)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Section list
    const sections = [
        { key: "home", label: t('home') },
        { key: "about", label: t('about') },
        { key: "industries", label: t('industry') },
        { key: "services", label: t('services') },
        { key: "projects", label: t('projectsHeading') },
        { key: "partners", label: t('partners') },
        { key: "faq", label: t('navigation.faq') },
        { key: "contact", label: t('contact') },
    ]

    // Helper to get correct href for each section
    const getSectionHref = (section: string) => {
        // Always include lang in homepage path
        if (section === "home") return `/${lang}`
        // If not on homepage, go to homepage with hash
        if (pathname !== `/${lang}`) return `/${lang}#${section}`
        // If already on homepage, just use hash
        return `#${section}`
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/95 backdrop-blur-md border-b border-border shadow-md"
                : "bg-background/90 backdrop-blur-sm shadow-sm"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href={`/${lang}`} className="flex items-center gap-2">
                            <Image src="/logo.svg" alt="Optivora" width={120} height={40} className="h-10 w-auto " />
                        </Link>
                        <nav className="hidden lg:flex items-center gap-6">
                            {sections.map((section) => (
                                <Link
                                    key={section.key}
                                    href={getSectionHref(section.key) as unknown as any}
                                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                                    scroll={true}
                                >
                                    {section.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <LanguageSelector />
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <nav className="lg:hidden mt-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        {sections.map((section) => (
                            <Link
                                key={section.key}
                                href={getSectionHref(section.key) as unknown as any}
                                className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                                scroll={true}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {section.label}
                            </Link>
                        ))}
                        <div className="pt-2 border-t border-border mt-2">
                            <LanguageSelector />
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}
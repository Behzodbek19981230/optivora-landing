"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useParams } from 'next/navigation'
import { useTranslations } from '@/config/i18n/t'
import type { Locale } from '@/config/i18n/i18n'
import Link from "next/link"
import Image from "next/image"
import { LanguageSelector } from '@/components/LanguageSelector'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const params = useParams()
    const lang = (params?.lang || 'uz') as Locale
    const { t } = useTranslations(lang)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


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
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/logo.svg" alt="Optivora" width={120} height={40} className="h-10 w-auto " />
                        </Link>
                        <nav className="hidden lg:flex items-center gap-6">
                            <Link href={`/${lang}`} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                                {t('home')}
                            </Link>
                            <Link href={`/${lang}/about`} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                                {t('about')}
                            </Link>
                            <Link href="#industries" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                                {t('industry')}
                            </Link>
                            <Link href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                                {t('services')}
                            </Link>
                            
                            <Link href="#projects" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                                {t('projectsHeading')}
                            </Link>
                            <Link href="#partners" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                                {t('partners')}
                            </Link>
                          
                            <Link href="#faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                                {t('navigation.faq')}
                            </Link>
                              <Link href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                                {t('contact')}
                            </Link>
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
                        <Link
                            href={`/${lang}`}
                            className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('home')}
                        </Link>
                        <Link
                            href={`/${lang}/about`}
                            className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('about')}
                        </Link>
                         <Link
                            href="#industries"
                            className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('industry')}
                        </Link>
                        <Link
                            href="#services"
                            className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('services')}
                        </Link>
                       
                        <Link
                            href="#projects"
                            className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('projectsHeading')}
                        </Link>
                        <Link
                            href="#partners"
                            className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('partners')}
                        </Link>
                        
                        <Link
                            href="#faq"
                            className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('navigation.faq')}
                        </Link>
                        <Link
                            href="#contact"
                            className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('contact')}
                        </Link>
                        <div className="pt-2 border-t border-border mt-2">
                            <LanguageSelector />
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}

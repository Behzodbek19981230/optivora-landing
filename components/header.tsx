"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-md border-b border-border shadow-md"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/optivora-logo.jpg" alt="Optivora" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link
                href="/solutions"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Solutions & Services
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Projects & Experience
              </Link>
              <Link
                href="/partners"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Partners
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link href="/faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button variant="default" className="hidden md:inline-flex bg-primary hover:bg-primary/90">
                Request Consultation
              </Button>
            </Link>
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
              href="/"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/solutions"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions & Services
            </Link>
            <Link
              href="/projects"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects & Experience
            </Link>
            <Link
              href="/partners"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Partners
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

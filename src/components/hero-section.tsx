"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

const bannerSlides = [
  {
    id: 1,
    image: "/power-plant-control-room.png",
    title: "Powering Uzbekistan's Energy Infrastructure",
    description:
      "Trusted supplier of critical equipment and technical solutions for energy, water, and industrial facilities across Central Asia",
    badge: "Leading Equipment Supplier",
  },
  {
    id: 2,
    image: "/industrial-pumps-facility.jpg",
    title: "Industrial Pumps & Equipment Solutions",
    description:
      "Comprehensive range of pumps, compressors, and mechanical equipment for water treatment and industrial applications",
    badge: "Industrial Solutions",
  },
  {
    id: 3,
    image: "/industrial-automation-control-panel.jpg",
    title: "Advanced Automation & Control Systems",
    description:
      "State-of-the-art automation solutions and control systems for modern industrial facilities and power plants",
    badge: "Smart Technology",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }

  const currentBanner = bannerSlides[currentSlide]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              style={{ opacity: 0.3 }}
            />
            {/* Make gradient overlay more transparent */}
            <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-60" />
          </div>
        ))}
      </div>

      {/* Animated background pattern overlay */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          key={currentSlide}
        >
          <div className="inline-block px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground rounded-full text-sm font-semibold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {currentBanner.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
            {currentBanner.title}
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            {currentBanner.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link href="/solutions">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2 group"
              >
                Explore Our Solutions
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 gap-2 bg-transparent"
              >
                <Download className="h-5 w-5" />
                Request Catalog
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-sm text-primary-foreground p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-sm text-primary-foreground p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary-foreground" : "w-2 bg-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"
import { request } from "@/lib/api"
import { useParams } from "next/navigation"
import { useTranslations } from "@/config/i18n/t"
type Banner = {
  description: string;
    description_en: string;
    description_ru: string;
    description_uz: string;
    id: number;
    is_featured: boolean;
    order_index: number;
    photo: string;
    title: string;
    title_en: string;
    title_ru: string;
    title_uz: string;
    updated_by: null | string;
    updated_time: string;
}



export function HeroSection() {
    const {lang} = useParams()
    const {t}=useTranslations(lang as any)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [bannerSlides, setBannerSlides] = useState<Banner[]>([])
  const fetchData = async () => {
    const res=await request.get('/banner/public')
    if(res?.data?.results?.length){
        const banners:Banner[]=res.data.results
        
        setBannerSlides(banners)
      setCurrentSlide(0)
    }
  }
useEffect(() => {
  setIsVisible(true)
  fetchData()
}, [])

useEffect(() => {
  if (!bannerSlides.length) return
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
  }, 5000)
  return () => clearInterval(interval)
}, [bannerSlides])


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }

  const currentBanner = bannerSlides.find((slide) => slide.id === bannerSlides[currentSlide]?.id) || {
    title: "Welcome to Our Company",
    description: "Providing top-notch solutions for your business needs.",
    photo: "/placeholder.svg",
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {bannerSlides?.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.photo || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
          </div>
        ))}
      </div>

      {/* Animated background pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-[1]">
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
      

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
            {currentBanner.title}
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            {currentBanner.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2 group"
              >
                 {t("contactFormTitle")}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
"use client"

import { useTranslations } from "@/config/i18n/t"
import { useAppSelector } from "@/store/hooks"
import { useParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const {data}=useAppSelector(state=>state.about)
  const {lang}=useParams()
  const {t}=useTranslations(lang as any)

  const stats = [
    { value: data?.years_experience, suffix: "+", label: t("stats.yearsExperience") },
    { value: data?.equipment_categories, suffix: "+", label: t("stats.equipmentCategories") },
    { value: data?.projects_supported, suffix: "+", label: t("stats.projectsSupported") },
    { value: data?.international_partners, suffix: "+", label: t("stats.internationalPartners") },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-primary via-accent to-primary relative -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : "none",
              }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {isVisible ? <CountUp end={Number(stat.value)} suffix={stat.suffix} /> : "0"}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const duration = 2000

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}

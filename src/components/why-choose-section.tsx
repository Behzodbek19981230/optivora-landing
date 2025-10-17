"use client"

import { Locale } from "@/config/i18n/i18n"
import { useTranslations } from "@/config/i18n/t"
import { request } from "@/lib/api"
import { OurWork } from "@/types/our-work"
import { useParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export function WhyChooseSection() {
    const { lang } = useParams()
    const { t } = useTranslations(lang as Locale)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
    const [ourWorkItems, setOurWorkItems] = useState<OurWork[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const fetchData = async () => {
        setIsLoading(true)
        const res = await request.get('/our-work/public?type=why_choose')
        if (res?.data?.results?.length) {
            setOurWorkItems(res.data.results)
        }
        setIsLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])
 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {t("whyChoose.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("whyChoose.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ourWorkItems.map((item, index) => (
            <div
              key={index}
              className={`text-center space-y-4 p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

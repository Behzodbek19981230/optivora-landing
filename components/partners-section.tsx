"use client"

import { useEffect, useRef, useState } from "react"

export function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const partners = [
    { name: "Statron", country: "Germany", category: "Power Electronics" },
    { name: "Hyundai Electric", country: "South Korea", category: "Automation" },
    { name: "Yaskawa Electric", country: "Japan", category: "Drives & Motion" },
    { name: "Shin-Shin", country: "Japan", category: "Industrial Pumps" },
    { name: "Torishima", country: "Japan", category: "High-Performance Pumps" },
    { name: "KSB", country: "Germany", category: "Pumps & Valves" },
    { name: "Hanwha Power", country: "South Korea", category: "Power Generation" },
    { name: "Hansen", country: "Denmark", category: "Sealing Solutions" },
    { name: "Ingersoll Rand", country: "USA", category: "Compression Systems" },
    { name: "Minimax", country: "Germany", category: "Fire Safety" },
    { name: "Welland & Tuxhorn", country: "Germany", category: "Control Valves" },
    { name: "Hyosung", country: "South Korea", category: "Power Equipment" },
  ]

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
    <section id="partners" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            World-Class Equipment from Trusted Manufacturers
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Authorized representation of leading global technology providers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.country}</p>
                <p className="text-xs text-primary font-medium">{partner.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">And many more international partners</p>
        </div>
      </div>
    </section>
  )
}

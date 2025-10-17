"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Cog, Gauge, Zap, Droplets, Wind, Wrench } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function SolutionsPreviewSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const solutions = [
    {
      icon: Gauge,
      title: "Control & Instrumentation",
      description: "Advanced control systems, sensors, and monitoring equipment for precise operations",
      categories: ["PLCs & DCS", "Flow Meters", "Pressure Sensors", "Temperature Controllers"],
    },
    {
      icon: Cog,
      title: "Rotating Equipment",
      description: "High-performance pumps, compressors, and turbines for critical applications",
      categories: ["Centrifugal Pumps", "Compressors", "Turbines", "Motors"],
    },
    {
      icon: Zap,
      title: "Electrical Systems",
      description: "Power distribution, protection, and automation equipment",
      categories: ["Switchgear", "Transformers", "UPS Systems", "Cables"],
    },
    {
      icon: Droplets,
      title: "Water Treatment",
      description: "Complete solutions for water and wastewater treatment facilities",
      categories: ["Filtration", "Pumps", "Valves", "Chemical Dosing"],
    },
    {
      icon: Wind,
      title: "HVAC & Ventilation",
      description: "Climate control and air quality systems for industrial facilities",
      categories: ["Chillers", "Air Handlers", "Fans", "Ductwork"],
    },
    {
      icon: Wrench,
      title: "Maintenance & Spares",
      description: "Genuine spare parts and maintenance support for installed equipment",
      categories: ["OEM Parts", "Consumables", "Tools", "Support"],
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-background" id="solutions">
      <div className="container mx-auto px-4">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Comprehensive Equipment Portfolio</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From control systems to rotating equipment, we supply the critical components that keep your facilities
            running
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className={`border-2 hover:border-primary transition-all duration-500 hover:shadow-xl group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {solution.categories.map((category, idx) => (
                    <span key={idx} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/solutions">
            <Button size="lg" className="gap-2 group">
              View All Solutions & Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

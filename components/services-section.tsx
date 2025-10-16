"use client"

import { Package, Settings, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      icon: Package,
      title: "Equipment Supply",
      description:
        "Specialized equipment and components for energy generation, industrial processes, and critical infrastructure. From control systems to rotating equipment, we deliver reliable solutions.",
      link: "Learn More",
    },
    {
      icon: Settings,
      title: "Technical Integration",
      description:
        "End-to-end project support including equipment sourcing, technical coordination, and commissioning assistance for complex installations.",
      link: "Our Approach",
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description:
        "Deep understanding of Uzbekistan's energy sector requirements, regulations, and operational challenges. Fast delivery and responsive support.",
      link: "Why Optivora",
    },
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
    <section id="solutions" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Comprehensive Technical Solutions</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Delivering excellence in energy infrastructure through specialized equipment and expert support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-2 hover:border-primary transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">{service.description}</CardDescription>
                <Button variant="link" className="text-primary p-0 h-auto font-semibold group">
                  {service.link}
                  <span className="inline-block group-hover:translate-x-1 transition-transform ml-1">→</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

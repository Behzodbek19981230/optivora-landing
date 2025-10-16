"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: "Power Generation Control Systems",
      location: "Tashkent TPP",
      year: "2025",
      scope: "Supply of advanced power electronics and control systems for thermal power facility",
      deliverables: [
        "High-capacity inverter systems (Statron)",
        "Power control boards and automation equipment",
        "Protection and monitoring systems",
      ],
      image: "/power-plant-control-room.png",
    },
    {
      title: "Industrial Pumping Equipment",
      location: "Tashkent Region",
      year: "2025",
      scope: "Supply of specialized pumping systems and rotating equipment",
      deliverables: [
        "High-pressure centrifugal pumps",
        "Circulator pumps for thermal systems",
        "Spare parts and maintenance components",
      ],
      image: "/industrial-pumps-facility.jpg",
    },
    {
      title: "Automation & Safety Systems",
      location: "Industrial Facility",
      year: "2025",
      scope: "Supply of comprehensive control and safety equipment",
      deliverables: [
        "Industrial automation components",
        "Gas detection and fire safety systems",
        "Control valves and actuators",
      ],
      image: "/industrial-automation-control-panel.jpg",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Proven Track Record in Energy Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Selected supply references from power generation and industrial facilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">{project.year}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
                <CardDescription className="text-sm leading-relaxed">{project.scope}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Key Deliverables:</p>
                  <ul className="space-y-1">
                    {project.deliverables.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

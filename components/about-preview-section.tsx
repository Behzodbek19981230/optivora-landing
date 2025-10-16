"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Globe } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function AboutPreviewSection() {
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

  const highlights = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Decades of experience in energy infrastructure",
    },
    {
      icon: Users,
      title: "Trusted Partner",
      description: "Working with leading manufacturers worldwide",
    },
    {
      icon: Globe,
      title: "Local Presence",
      description: "Deep understanding of Uzbekistan market",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              About Optivora
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Your Trusted Partner in Energy Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Optivora is a leading supplier of specialized equipment and technical solutions for Uzbekistan's energy,
              water, and industrial sectors. We bridge the gap between world-class manufacturers and local projects,
              ensuring reliable delivery and expert support.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team combines deep technical knowledge with local market expertise to deliver solutions that meet the
              unique requirements of Central Asian infrastructure projects.
            </p>
            <Link href="/about">
              <Button size="lg" className="gap-2 group">
                Learn More About Us
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div
            className={`grid gap-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-card rounded-xl border-2 hover:border-primary transition-all duration-300 hover:shadow-lg"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

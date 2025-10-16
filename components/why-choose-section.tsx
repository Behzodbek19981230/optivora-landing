"use client"

import { Zap, Award, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const benefits = [
    {
      icon: Zap,
      title: "Fast Response",
      description:
        "Understanding urgent project timelines. Quick quotations, efficient procurement, and reliable delivery schedules.",
    },
    {
      icon: Award,
      title: "Technical Competence",
      description:
        "Expert equipment selection and specification. Pre-sales engineering support and post-delivery technical assistance.",
    },
    {
      icon: Users,
      title: "Market Insight",
      description:
        "Comprehensive knowledge of Uzbekistan's energy sector. Established relationships with facility operators and project developers.",
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
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Why Choose Optivora</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Speed, Reliability, Local Knowledge</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`text-center space-y-4 p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

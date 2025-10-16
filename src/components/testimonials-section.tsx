"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function TestimonialsSection() {
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

  const testimonials = [
    {
      quote:
        "Optivora has been instrumental in supplying critical equipment for our power plant modernization. Their technical expertise and reliable delivery made the project a success.",
      author: "Rustam Karimov",
      position: "Chief Engineer",
      company: "Tashkent Thermal Power Plant",
    },
    {
      quote:
        "Working with Optivora gave us access to world-class manufacturers while benefiting from local support. They understand both the technical requirements and local market dynamics.",
      author: "Dilshod Azimov",
      position: "Project Manager",
      company: "Uzbekenergo",
    },
    {
      quote:
        "The quality of equipment and after-sales support from Optivora has exceeded our expectations. They are our go-to partner for industrial automation solutions.",
      author: "Nodira Sharipova",
      position: "Operations Director",
      company: "Fergana Oil Refinery",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            See what our clients say about working with Optivora
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`border-2 hover:border-primary transition-all duration-500 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

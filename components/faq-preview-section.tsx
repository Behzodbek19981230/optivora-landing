"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function FaqPreviewSection() {
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

  const faqs = [
    {
      question: "What types of equipment does Optivora supply?",
      answer:
        "We supply a comprehensive range of equipment including control systems, instrumentation, rotating equipment (pumps, compressors), electrical systems, water treatment solutions, and HVAC systems for energy and industrial facilities.",
    },
    {
      question: "Do you provide technical support and after-sales service?",
      answer:
        "Yes, we provide comprehensive technical support including installation guidance, commissioning assistance, training, and ongoing maintenance support. Our local team ensures fast response times.",
    },
    {
      question: "What is your typical delivery timeline?",
      answer:
        "Delivery timelines vary based on equipment type and manufacturer. Standard items typically take 4-8 weeks, while specialized equipment may require 12-16 weeks. We work closely with clients to meet project schedules.",
    },
    {
      question: "Can you help with equipment selection and specifications?",
      answer:
        "Absolutely. Our technical team can assist with equipment selection, specification development, and ensuring compatibility with existing systems. We leverage our manufacturer relationships to find the best solutions.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Quick answers to common questions about our services
          </p>
        </div>

        <div
          className={`max-w-3xl mx-auto mb-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <Link href="/faq">
            <Button size="lg" variant="outline" className="gap-2 group bg-transparent">
              View All FAQs
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

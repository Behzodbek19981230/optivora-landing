"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What types of equipment does Optivora supply?",
      answer:
        "We supply a comprehensive range of energy infrastructure equipment including power electronics, control systems, industrial pumps, rotating machinery, safety monitoring systems, and specialized industrial equipment from world-leading manufacturers.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We serve power generation facilities, water and wastewater treatment plants, oil & gas operations, industrial manufacturing, renewable energy projects, and other critical infrastructure sectors across Uzbekistan.",
    },
    {
      question: "Do you provide technical support and coordination?",
      answer:
        "Yes, we offer comprehensive technical coordination services including equipment specification, manufacturer liaison, documentation support, logistics coordination, and post-delivery technical assistance.",
    },
    {
      question: "How long does equipment delivery typically take?",
      answer:
        "Delivery timelines vary depending on equipment type, manufacturer location, and project requirements. Standard equipment typically takes 8-16 weeks, while specialized or custom equipment may require 12-24 weeks. We provide detailed timelines during the quotation process.",
    },
    {
      question: "Are your products covered by manufacturer warranties?",
      answer:
        "Yes, all equipment we supply comes with full manufacturer warranties and certifications. We work exclusively with authorized manufacturers to ensure genuine products and comprehensive warranty coverage.",
    },
    {
      question: "Can you help with equipment specifications and selection?",
      answer:
        "Absolutely. Our technical team can assist with equipment selection, specification development, and ensuring compatibility with your existing infrastructure. We work closely with manufacturers to provide expert recommendations.",
    },
    {
      question: "Do you offer installation and commissioning services?",
      answer:
        "While we focus on equipment supply and technical coordination, we can connect you with qualified installation partners and provide manufacturer-supported commissioning assistance when needed.",
    },
    {
      question: "What documentation do you provide with equipment?",
      answer:
        "We provide complete documentation including technical datasheets, operation manuals, maintenance guides, certification documents, test reports, and any required compliance documentation.",
    },
    {
      question: "How do I request a quotation?",
      answer:
        "You can request a quotation through our contact form, by email at info@optivora.uz, or by phone at +998 71 123 45 67. Please provide project details, technical requirements, and timeline for the most accurate quotation.",
    },
    {
      question: "Do you work with international contractors and consultants?",
      answer:
        "Yes, we regularly collaborate with international contractors, engineering consultants, and project management firms. We understand international standards and can coordinate effectively with global project teams.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Find answers to common questions about our equipment supply and technical services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-lg border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                  >
                    <span className="font-semibold pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is ready to help with any inquiries about equipment supply, technical specifications, or project
            requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

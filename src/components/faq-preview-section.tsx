"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useParams } from 'next/navigation'
import { useTranslations } from '@/config/i18n/t'
import type { Locale } from '@/config/i18n/i18n'
import {request} from "@/lib/api";

export function FaqPreviewSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const params = useParams()
  const lang = (params?.lang || 'uz') as Locale
  const { t } = useTranslations(lang)
    const [faqs, setFaqs] = useState<{ id:number;question:string;answer:string }[]>([])
    const fetchFaqs = async () => {
            const response = await request.get('faq/public')
        setFaqs(response.data?.results.slice(0, 5)) // Get only the first 5 FAQs
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )
fetchFaqs()
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }


    return () => observer.disconnect()
  }, [])


  return (
    <section id='faq' ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            {t('navigation.faq')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t('navigation.faq')}</h2>
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
                  <span className="font-semibold">{
                      faq.question
                  }</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">{
                    faq.answer
                }</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/*<div className="text-center">*/}
        {/*  <Link href={`/${lang}/faq` as any}>*/}
        {/*    <Button size="lg" variant="outline" className="gap-2 group bg-transparent">*/}
        {/*      {t('viewAllFaqs')}*/}
        {/*      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />*/}
        {/*    </Button>*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </div>
    </section>
  )
}

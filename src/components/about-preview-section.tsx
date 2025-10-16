"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Globe } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useParams } from 'next/navigation'
import { useTranslations } from '@/config/i18n/t'
import type { Locale } from '@/config/i18n/i18n'
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { fetchCompanyProfile } from "@/store/aboutSlice"

export function AboutPreviewSection() {
  const params = useParams()
  const lang = (params?.lang || 'uz') as Locale
  const { t } = useTranslations(lang)
  const about=useAppSelector(state=>state.about)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!about?.raw && !about?.loading) {
      dispatch(fetchCompanyProfile())
    }
  }, [dispatch, about?.raw, about?.loading])

  const highlights = [
    {
      icon: Award,
      title: 'experience',
      description: 'aboutText',
    },
    {
      icon: Users,
      title: 'partnership',
      description: 'suppliersSubtitle',
    },
    {
      icon: Globe,
      title: 'about',
      description: about?.data?.title || t('footerLocation'),
    },
  ]

  return (
    <section  className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-700 ${
               "opacity-100 translate-x-0" 
            }`}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              {t('about')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('aboutText')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {about?.data?.title || t('aboutPreviewDescription')}
            </p>
            <Link href={`/${lang}/about` as any}>
              <Button size="lg" className="gap-2 group">
                {t('learnMore')}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div
            className={`grid gap-6 transition-all duration-700 delay-300 ${
              "opacity-100 translate-x-0" 
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
                  <h3 className="text-xl font-semibold mb-2">{t(item.title)}</h3>
                  <p className="text-muted-foreground">{t(item.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

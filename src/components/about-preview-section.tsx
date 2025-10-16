"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Globe, Building2, Target } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useParams } from 'next/navigation'
import { useTranslations } from '@/config/i18n/t'
import type { Locale } from '@/config/i18n/i18n'
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { fetchCompanyProfile } from "@/store/aboutSlice"
import AboutProfile from "./about-profile"

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
    <section id="about" className="py-24 bg-secondary/20">
      <AboutProfile />

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.mission.text')}
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">{t('about.vision.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.vision.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('about.coreValues.title')}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t('about.coreValues.quality.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('about.coreValues.quality.text')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t('about.coreValues.expertise.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('about.coreValues.expertise.text')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t('about.coreValues.reliability.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('about.coreValues.reliability.text')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t('about.coreValues.partnership.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('about.coreValues.partnership.text')}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

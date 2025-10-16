"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useParams } from 'next/navigation'
import { useTranslations } from '@/config/i18n/t'
import type { Locale } from '@/config/i18n/i18n'

export function ContactSection() {
  const params = useParams()
  const lang = (params?.lang || 'uz') as Locale
  const { t } = useTranslations(lang)

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary via-accent to-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              {t('interestedQuestion')}
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              {t('interestedDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">{t('email')}</h3>
                  <p className="text-primary-foreground/80">info@optivora.uz</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">{t('phone')}</h3>
                  <p className="text-primary-foreground/80">+998 71 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">{t('address')}</h3>
                  <p className="text-primary-foreground/80">{t('addressShort')}</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <Input placeholder={t('contactFormTitleField')} className="bg-background" />
                </div>
                <div>
                  <Input type="email" placeholder={t('contactFormTitlePlaceholder')} className="bg-background" />
                </div>
                <div>
                  <Input placeholder={t('company')} className="bg-background" />
                </div>
                <div>
                  <Textarea placeholder={t('contactFormMessagePlaceholder')} className="bg-background min-h-32" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                  {t('sendMessage')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

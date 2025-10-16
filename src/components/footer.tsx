"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { useParams } from 'next/navigation'
import { useTranslations } from '@/config/i18n/t'
import type { Locale } from '@/config/i18n/i18n'
import { useAppSelector } from "@/store/hooks"
import { AboutPageData } from "@/types/about"
import { Service } from "@/types/service"
import { Partner } from "@/types/partner"

export function Footer() {
  const params = useParams()
  const lang = (params?.lang || 'uz') as Locale
  const { t } = useTranslations(lang)
  const {data} = useAppSelector(state => state.about)
 const about=data as AboutPageData
 const {data:serviceData} = useAppSelector(state => state.service)
 const services=serviceData as Service[]
 const {data:partnerData} = useAppSelector(state => state.partner)
 const partners=partnerData as Partner[]

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Optivora</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {about?.title || t('footerDescription')}
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{about?.email || t('footerEmail')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{about?.phone || t('footerPhone')}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{about?.address || t('footerLocation')}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('services')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
                {services?.slice(0,5).map((service)=>(

              <li key={service.id}>
                  {service.name}
              </li>
                ))}
             
            </ul>
          </div>

      
          <div>
            <h4 className="font-semibold mb-4">{t('about')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`#about`}  className="hover:text-primary transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href={`#projects`} className="hover:text-primary transition-colors">
                  {t('projectsHeading')}
                </Link>
              </li>
              <li>
                <Link href={`#partners`} className="hover:text-primary transition-colors">
                  {t('partners')}
                </Link>
              </li>
              <li>
                <Link href={`#faq`}  className="hover:text-primary transition-colors">
                  {t('navigation.faq')}
                </Link>
              </li>
              <li>
                <Link href={`#contact`} className="hover:text-primary transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
            <div>
            <h4 className="font-semibold mb-4">{t('partners')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
                {partners?.slice(0,5).map((partner)=>(

              <li key={partner.id}>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {partner.name}
                </a>
              </li>
                ))}
             
            </ul>
          </div>
        </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Optivora. {about?.address || t('footerLocation')}</p>
        </div>
      </div>
    </footer>
  )
}

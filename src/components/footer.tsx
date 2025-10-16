"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { useParams } from 'next/navigation'
import { useTranslations } from '@/config/i18n/t'
import type { Locale } from '@/config/i18n/i18n'

export function Footer() {
  const params = useParams()
  const lang = (params?.lang || 'uz') as Locale
  const { t } = useTranslations(lang)
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Optivora</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {t('footerAbout')}
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@optivora.uz</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+998 71 123 45 67</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Tashkent, Uzbekistan</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('services')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/solutions#equipment" className="hover:text-primary transition-colors">
                  Equipment Supply
                </Link>
              </li>
              <li>
                <Link href="/solutions#technical" className="hover:text-primary transition-colors">
                  Technical Coordination
                </Link>
              </li>
              <li>
                <Link href="/solutions#integration" className="hover:text-primary transition-colors">
                  System Integration
                </Link>
              </li>
              <li>
                <Link href="/solutions#support" className="hover:text-primary transition-colors">
                  Project Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('productsTitle')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/solutions#power" className="hover:text-primary transition-colors">
                  Power Generation
                </Link>
              </li>
              <li>
                <Link href="/solutions#water" className="hover:text-primary transition-colors">
                  Water & Wastewater
                </Link>
              </li>
              <li>
                <Link href="/solutions#oil-gas" className="hover:text-primary transition-colors">
                  Oil & Gas
                </Link>
              </li>
              <li>
                <Link href="/solutions#renewable" className="hover:text-primary transition-colors">
                  Renewable Energy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('about')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`/${lang}/about` as any} className="hover:text-primary transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/projects` as any} className="hover:text-primary transition-colors">
                  {t('projectsHeading')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/partners` as any} className="hover:text-primary transition-colors">
                  {t('partners')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/faq` as any} className="hover:text-primary transition-colors">
                  {t('navigation.faq')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact` as any} className="hover:text-primary transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Optivora. {t('rightsReserved')} | {t('addressShort')}</p>
        </div>
      </div>
    </footer>
  )
}

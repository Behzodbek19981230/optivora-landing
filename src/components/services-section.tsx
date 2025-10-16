"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Locale } from "@/config/i18n/i18n"
import { useTranslations } from "@/config/i18n/t"
import { ServiceOursService } from "@/lib/api"
import { Service } from "@/types/service"
import { useParams } from "next/navigation"
import useSWR from "swr"
import { OptimizedImage } from "@/components/OptimizedImage"

export function ServicesSection() {
   const { lang } = useParams()
    const { t } = useTranslations(lang as Locale)
    const { data, isLoading } = useSWR('/api/services', ServiceOursService)
  if (isLoading) return <div>{t('states.loading')}</div>
  const services = (data?.results || []) as Service[]





  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            "opacity-100 translate-y-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t('services.title')}</h2>
          {/* <p className="text-lg text-muted-foreground leading-relaxed">
            {t('services.slideSubtitle')}
          </p> */}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-2 hover:border-primary transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors aspect-square">
                  <OptimizedImage
                    src={service.icon}
                    alt={service.name}
                    className="w-full h-full object-cover rounded-xl"
                    fallback="/placeholder.svg"
                  />
                </div>
                <CardTitle className="text-2xl mb-2">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

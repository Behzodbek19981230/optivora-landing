"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Locale } from "@/config/i18n/i18n"
import { useTranslations } from "@/config/i18n/t"
import { Service } from "@/types/service"
import { useParams } from "next/navigation"
import { OptimizedImage } from "@/components/OptimizedImage"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { serviceActions, selectServices, selectServiceLoading } from "@/store/serviceSlice"
import type { AppDispatch } from "@/store"

export function ServicesSection() {
    const { lang } = useParams();
    const { t } = useTranslations(lang as Locale);
    const dispatch = useDispatch<AppDispatch>();
    const services = useSelector(selectServices) as Service[] || [];
    const isLoading = useSelector(selectServiceLoading);

    useEffect(() => {
        dispatch(serviceActions.fetchServices());
    }, [dispatch]);


    if (isLoading) return <div>{t('states.loading')}</div>;





    return (
        <section id="services" className="py-24 bg-background" >
            <div className="container mx-auto px-4">
                <div
                    className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 opacity-100 translate-y-0
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
                            className={`border-2 hover:border-primary transition-all duration-500 hover:shadow-xl group opacity-100 translate-y-0
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <OptimizedImage
                                        src={service.icon}
                                        alt={service.name}
                                        className="h-6 w-6 text-primary"
                                    />
                                    {/* <solution.icon className="h-6 w-6 text-primary" /> */}
                                </div>
                                <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {service.equipment_categories.map((category, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                                            {category}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

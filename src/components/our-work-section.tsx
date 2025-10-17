"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "@/config/i18n/t";
import { Locale } from "@/config/i18n/i18n";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { request } from "@/lib/api";
import { OurWork } from "@/types/our-work";

export function OurWorkSection() {
    const { lang } = useParams()
    const { t } = useTranslations(lang as Locale)
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const [ourWorkItems, setOurWorkItems] = useState<OurWork[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const fetchData = async () => {
        setIsLoading(true)
        const res = await request.get('/our-work/public?type=technical_solution')
        if (res?.data?.results?.length) {
            setOurWorkItems(res.data.results)
        }
        setIsLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])
  
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
    return (
        <section id="our-work" ref={sectionRef} className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">

                <div
                    className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                        {t("ourwork.title")}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {t("ourwork.subtitle")}
                    </p>
                </div>
                {isLoading ? (
                    <div className="text-center py-12">Loading...</div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">
                        {ourWorkItems.map((ourWork, index) => (
                            <Card
                                key={ourWork.id}
                                className={`border-2 hover:border-primary transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <CardHeader>
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <img src={ourWork.icon} alt={ourWork.title} className="w-8 h-8 object-contain" />
                                    </div>
                                    <CardTitle className="text-2xl mb-2">{ourWork.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed mb-4">{ourWork.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

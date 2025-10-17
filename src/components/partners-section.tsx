"use client"


import { Locale } from "@/config/i18n/i18n"
import { getTranslation } from "@/config/i18n/t"
import { Partner } from "@/types/partner"
import { useParams } from "next/navigation"
import { OptimizedImage } from "@/components/OptimizedImage"
import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { partnerActions, selectPartners, selectPartnerLoading } from "@/store/partnerSlice"
import type { AppDispatch } from "@/store"
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight} from "lucide-react";


export function PartnersSection() {
  const { lang } = useParams();
  const { t } = getTranslation((lang as Locale) || 'uz');
  const dispatch = useDispatch<AppDispatch>();
  const partners = useSelector(selectPartners) as Partner[] || [];
  const isLoading = useSelector(selectPartnerLoading);

  useEffect(() => {
    dispatch(partnerActions.fetchPartners());
  }, [dispatch]);







  // early returns (after hooks)
  if (isLoading) return <div className="py-12 text-center">{t('states.loading') || 'Loading...'}</div>;
  if (!partners.length) return <div className="py-12 text-center">{t('partners.noData') || 'No partners available'}</div>;

  return (
    <section id="partners" className="py-24 bg-muted/30" >
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${"opacity-100 translate-y-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {t('partners') || 'World-Class Equipment from Trusted Manufacturers'}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('partners.subtitle') || 'Authorized representation of leading global technology providers'}
          </p>
        </div>

       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300 hover:-translate-y-1
               opacity-100 translate-y-0
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="text-center space-y-2">
                <h3 className="font-bold text-lg">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.country_detail?.name}</p>
                <p className="text-xs text-primary font-medium">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

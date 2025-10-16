"use client"


import { Locale } from "@/config/i18n/i18n"
import { getTranslation } from "@/config/i18n/t"
import { Partner } from "@/types/partner"
import { useParams } from "next/navigation"
import { OptimizedImage } from "@/components/OptimizedImage"
import { useCallback, useEffect, useState } from 'react'
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

  // Embla carousel: single-row slider with all partners as slides
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [paused, setPaused] = useState(false);
  // update controls state when embla changes
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // autoplay
  useEffect(() => {
    if (!emblaApi) return;
    if (partners.length <= 1) return;
    const id = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      if (emblaApi.canScrollNext() && !paused) emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(id);
  }, [emblaApi, partners.length, paused]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // early returns (after hooks)
  if (isLoading) return <div className="py-12 text-center">{t('states.loading') || 'Loading...'}</div>;
  if (!partners.length) return <div className="py-12 text-center">{t('partners.noData') || 'No partners available'}</div>;

  return (
    <section id="partners" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${"opacity-100 translate-y-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {t('partners') || 'World-Class Equipment from Trusted Manufacturers'}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('partners.subtitle') || 'Authorized representation of leading global technology providers'}
          </p>
        </div>

        <div className="relative">
          {/* Embla viewport */}
          <div className="overflow-hidden" ref={emblaRef} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div className="flex gap-6 items-stretch">
              {partners.map((partner) => (
                <div key={partner.id} className="flex-none w-40 sm:w-44 md:w-52 lg:w-64">
                  <div className="h-full bg-card  rounded-xl p-0  hover:shadow-lg hover:border-primary transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-start">
                    <a href={partner.website} target="_blank" rel="noopener noreferrer" >
                      <OptimizedImage src={partner.logo} alt={partner.name} className="object-cover rounded-xl w-full h-full" />
                    </a>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="inline-flex items-center justify-center p-2 rounded-full bg-white/90 shadow hover:bg-white disabled:opacity-40"
                disabled={!canScrollPrev}>

              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              disabled={!canScrollNext}
              aria-label="Next"
              className="inline-flex items-center justify-center p-2 rounded-full bg-white/90 shadow hover:bg-white disabled:opacity-40"
              onClick={scrollNext}
                >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          </div>
      </div>
    </section>
  )
}

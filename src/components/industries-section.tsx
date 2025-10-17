"use client";
import { useDispatch, useSelector } from "react-redux";
import { industryActions, selectIndustries, selectIndustryLoading } from "@/store/industrySlice";
import type { AppDispatch } from "@/store";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "@/config/i18n/t";
import { Locale } from "@/config/i18n/i18n";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function IndustriesSection() {
    const {lang}=useParams()
    const {t}=useTranslations(lang as Locale)
  const dispatch = useDispatch<AppDispatch>();
  const industries = useSelector(selectIndustries) || [];
  const isLoading = useSelector(selectIndustryLoading);
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    dispatch(industryActions.fetchIndustries());
  }, [dispatch]);
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
    <section id="industries" ref={sectionRef} className="py-24 bg-secondary/30">
              <div className="container mx-auto px-4">

     <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{
            t('industry')
            }</h2>
        </div>

        {isLoading ? (
          <div className="text-center py-12">Loading...</div>
        ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card hover:bg-accent/10 transition-colors cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <img
                  src={industry.icon}
                  alt={industry.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <p className="text-sm font-medium text-center leading-snug">{industry.name}</p>
            </div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}

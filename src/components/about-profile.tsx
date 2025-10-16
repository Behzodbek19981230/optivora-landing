"use client"

import useSWR from 'swr'
import { CompanyProfileService, request } from '@/lib/api'
import React from 'react'
import { Loader } from './ui/loader'
import { AboutPageData } from '@/types/about'



export function AboutProfile() {
  const { data, error, isLoading } = useSWR('/company-profile/public', CompanyProfileService)
  const companyData = data?.results as AboutPageData[]

  if (isLoading) return <Loader full />
  if (error) return <div className="py-8">Failed to load company profile.</div>

  const first = companyData && companyData.length > 0 ? companyData[0] : null

  if (!first) return <div className="py-8">No company profile found.</div>

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{first?.name}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {first?.title}
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
            {
                first?.description.split('\n').map((para, idx) => (<p key={idx} className="text-muted-foreground leading-relaxed mb-4">{para}</p>))
            }
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={first?.logo || "/power-plant-control-room.png"}
                alt="Modern control room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

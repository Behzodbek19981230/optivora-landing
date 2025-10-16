"use client"

import React from 'react'
import { Loader } from './ui/loader'
import {  useAppSelector } from '@/store/hooks'
import { fetchCompanyProfile } from '@/store/aboutSlice'

export default function AboutProfile() {
  const about = useAppSelector((s: any) => s.about)



  if (about?.loading) return <Loader full />
  if (about?.error) return <div className="py-8">Failed to load company profile: {String(about.error)}</div>

  const first = about?.data
  if (!first) return <div className="py-8">No company profile found.</div>

  return (
    <div className="about-profile">
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{first.name}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{first.title}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {String(first.description || '')
                .split('\n')
                .filter(Boolean)
                .map((para: string, idx: number) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
                ))}
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img src={first.logo || '/power-plant-control-room.png'} alt="Modern control room" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

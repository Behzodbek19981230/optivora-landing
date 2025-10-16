"use client"

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useParams, usePathname, useRouter } from 'next/navigation';
import DropdownMenu, { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
const getLocalePath = (pathName: string, locale: string) => {
  if (!pathName) return '/'
  const segments = pathName.split('/')

  segments[1] = locale

  return segments.join('/')
}
const languages = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'uz', name: 'Oʻzbek', flag: '🇺🇿' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];



export function LanguageSelector() {



    const { lang } = useParams();
    const pathName = usePathname();
    const router=useRouter()

  const currentLanguage = lang || 'uz';
  const currentLang = languages.find((l) => l.code === currentLanguage) || languages[1];

  const onLanguageChange = (newLanguage: string) => {
    localStorage.setItem('optivora-language', newLanguage);
  
    const newPath = getLocalePath(pathName, newLanguage);
    window.location.href = newPath;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 smooth-transition  bg-primary  text-primary-foreground">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLang.flag} {currentLang.name}</span>
          <span className="sm:hidden">{currentLang.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="card-shadow">
        {languages.map((language) => (
          <DropdownMenuItem
     
            key={language.code}
            onClick={() => onLanguageChange(language.code)}
            className={`gap-2 cursor-pointer ${
              currentLanguage === language.code ? 'bg-primary/10 font-medium' : ''
            }`}
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
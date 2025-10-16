"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Loader2, Send } from "lucide-react"
import { useParams } from 'next/navigation'
import { useTranslations } from '@/config/i18n/t'
import type { Locale } from '@/config/i18n/i18n'
import * as RadixSelect from "@radix-ui/react-select";
import {useState} from "react";
import { useAppSelector } from "@/store/hooks"
import { request } from "@/lib/api"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Card, CardContent } from "./ui/card"
type Props = {
    full_name: string;
    company: string;
    email: string;
    phone: string;
    inquiry_type: string;
    project_sector: string;
    message: string;
}
export function ContactSection() {
  const params = useParams()
  const lang = (params?.lang || 'uz') as Locale
  const { t } = useTranslations(lang)
  const {data}=useAppSelector(state=>state.about)
  const[isLoading,setIsLoading]=useState(false)
    const[sended,setSended]=useState(false)
    const [formData, setFormData] = useState<Props>({
        full_name: "",
        company: "",
        phone: "",
        email: "",
        inquiry_type: "equipment",
        project_sector: "power_generation",
        message: "",
    })

    const onSubmit = async() => {
      try{
            setIsLoading(true)
            await request.post('/inquiry/public', formData)
            
            setFormData({
                full_name: "",
                company: "",
                phone: "",
                email: "",
                inquiry_type: "equipment",
                project_sector: "power_generation",
                message: "",
            })
            setSended(true)
      }
        catch (e){
            alert(t('contactFormErrorMessage'))
        }
        finally {
            setIsLoading(false)
        }
    }
    

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary via-accent to-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              {t('interestedQuestion')}
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              {t('interestedDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">{t('email')}</h3>
                  <p className="text-primary-foreground/80">{
                    data?.email
                  }</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">{t('phone')}</h3>
                  <p className="text-primary-foreground/80">
                  {data?.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">{t('address')}</h3>
                  <p className="text-primary-foreground/80">
                  {data?.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8">
              {sended? <Card className="card-shadow">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {t('messageSentTitle')}
          </h3>
          <p className="text-muted-foreground">
            {t('messageSentDescription')}
          </p>
        </CardContent>
      </Card>:<form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit()
              }}>
                <div>
                  <Input placeholder={t('full_name')} className="bg-background"  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} />
                </div>
                <div>
                  <Input type="email" placeholder={t('email')} className="bg-background"  onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div>
                  <Input placeholder={t('company')} className="bg-background" onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                </div>
               
                  <div>
                      <Select
                   value={formData.inquiry_type}
                        onValueChange={(value) => setFormData({ ...formData, inquiry_type: value })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="equipment">{t('Equipment Supply Inquiry')}</SelectItem>
                    <SelectItem value="technical">{t('Technical Consultation')}</SelectItem>
                    <SelectItem value="quotation">{t('Project Quotation Request')}</SelectItem>
                    <SelectItem value="partnership">{t('Partnership Opportunity')}</SelectItem>
                    <SelectItem value="general">{t('General Question')}</SelectItem>
                  </SelectContent>
                </Select>
                </div>
                    <div>
                        <Select
                          value={formData.project_sector}
                            onValueChange={(value) => setFormData({ ...formData, project_sector: value })}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={t('projectSector')} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="power_generation">Power Generation</SelectItem>
                        <SelectItem value="water_wastewater">Water & Wastewater</SelectItem>
                        <SelectItem value="oil_gas">Oil & Gas</SelectItem>
                        <SelectItem value="industrial_manufacturing">Industrial Manufacturing</SelectItem>
                        <SelectItem value="renewable_energy">Renewable Energy</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
                    
                  </div>
                <div>
                  <Textarea placeholder={t('contactFormMessagePlaceholder')} className="bg-background min-h-32"  onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg" type="submit" disabled={isLoading}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : t('sendMessage')}
                </Button>
              </form>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

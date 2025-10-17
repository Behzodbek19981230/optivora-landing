"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import useSWR from "swr"
import { NewsService } from "@/lib/api"
import { Project } from "@/types/project"
import { useTranslations } from "@/config/i18n/t"
import { useParams, useRouter } from "next/navigation"
import { Locale } from "@/config/i18n/i18n"
import { News } from "@/types/news"
export default function NewsListPage() {
    const { lang } = useParams()
    const router = useRouter()
    const { t } = useTranslations(lang as Locale)
    const { data, isLoading } = useSWR('/api/news', NewsService)
    if (isLoading) return <div>Loading...</div>
    const news = (data?.results || []) as News[]
    return (
        <main className="min-h-screen">
            <Header />
            <section id="news" className="py-24 bg-background">

                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700 opacity-100 translate-y-0">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                            {t("news.title")}
                        </h2>
                        {/* <p className="text-lg text-muted-foreground leading-relaxed">
            {t("projectsIntro")}
          </p> */}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {news.map((newItem: News, index: number) => (
                        <Card
                            onClick={() => router.push(`/${lang}/news/${newItem.id}` as unknown as any)}
                            key={newItem.id}
                            className="overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-100 translate-y-0 p-0 pb-6"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={newItem.cover_image || "/placeholder.svg"}
                                    alt={newItem.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute top-4 right-4">
                                    <Badge className="bg-primary text-primary-foreground">{newItem.status}</Badge>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl mb-2">{newItem.title}</CardTitle>
                                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-2">
                                    <MapPin className="h-4 w-4" />
                                    <span>{newItem.excerpt}</span>
                                    <span>{newItem.published_at}</span>
                                </div>
                               
                               
                           
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-sm leading-relaxed mb-2">
                                    {newItem.body}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

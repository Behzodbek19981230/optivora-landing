"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import useSWR from "swr"
import { ProjectService } from "@/lib/api"
import { Project } from "@/types/project"
import { useTranslations } from "@/config/i18n/t"
import { useParams, useRouter } from "next/navigation"
import { Locale } from "@/config/i18n/i18n"
export default function ProjectListPage() {
    const { lang } = useParams()
    const router = useRouter()
    const { t } = useTranslations(lang as Locale)
    const { data, isLoading } = useSWR('/api/projects', ProjectService)
    if (isLoading) return <div>Loading...</div>
    const projects = (data?.results || []) as Project[]
    return (
        <main className="min-h-screen">
            <Header />
            <section id="projects" className="py-24 bg-background">

                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700 opacity-100 translate-y-0">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                            {t("projectsHeading")}
                        </h2>
                        {/* <p className="text-lg text-muted-foreground leading-relaxed">
            {t("projectsIntro")}
          </p> */}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(0, 3).map((project: Project, index: number) => (
                            <Card
                                onClick={() => router.push(`/${lang}/projects/${project.id}`)}
                                key={project.id}
                                className="overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-100 translate-y-0 p-0 pb-6"
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.featured_image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <Badge className="bg-primary text-primary-foreground">{project.year}</Badge>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>{project.country_detail?.name}</span>
                                        <span>{project.region_detail?.name}</span>
                                        <span>{project.district_detail?.name}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="font-semibold text-xs">{t("projects.industries")}</span>
                                        {project.industries_detail?.map((industry) => (
                                            <Badge key={industry.id} className="bg-secondary text-secondary-foreground">
                                                {industry.name}
                                            </Badge>
                                        ))}
                                        <span className="font-semibold text-xs">{t("projects.categories")}</span>
                                        {project.equipment_categories_detail?.map((cat, i) => (
                                            <Badge key={cat.slug + i} className="bg-accent text-accent-foreground">
                                                {cat.name}
                                            </Badge>
                                        ))}
                                    </div>
                                    <CardDescription className="text-sm leading-relaxed mb-2">
                                        {project.scope}
                                    </CardDescription>
                                    {project.summary && (
                                        <div className="text-xs text-muted-foreground mb-2 italic">{project.summary}</div>
                                    )}
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="font-semibold text-xs">{t("projects.partners")}</span>
                                        {project.partners_detail?.map((partner, i) => (
                                            <a
                                                key={partner.name + i}
                                                href={partner.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline text-xs text-primary hover:text-primary/80"
                                            >
                                                {partner.name}
                                            </a>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <p className="text-sm font-semibold">{t("projects.description")}</p>
                                        <ul className="space-y-1">
                                            {project.industries_detail?.map((industry) => (
                                                <li key={industry.id} className="text-sm text-muted-foreground flex items-start gap-2">
                                                    <span className="text-primary mt-1">•</span>
                                                    <span>{industry.description}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
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

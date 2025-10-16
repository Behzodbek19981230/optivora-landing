"use client";
import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, Calendar, MapPin, Share2, Building, TrendingUp, Users, Clock, X, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage
} from '@/components/ui/breadcrumb';
import { useTranslations } from '@/config/i18n/t';
import { Locale } from '@/config/i18n/i18n';
import { useParams, useRouter } from 'next/navigation';
import useSWR from 'swr';
import { ProjectDetailService, ProjectImagesService } from '@/lib/api';
import { OptimizedImage } from '@/components/OptimizedImage';
import { Project } from '@/types/project';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import RelatedProjects from './related-projects';
import moment from 'moment';




const ProjectDetail = () => {
    const { lang, id } = useParams();
    const activeLang = (lang as Locale) || 'uz';
    const { t } = useTranslations(activeLang);
    const router = useRouter()
    const currentLanguage = activeLang; // unify variable used below
    const { data: project, isLoading, error } = useSWR<Project>(
        id ? `/projects/public/${id}` : null,
        () => ProjectDetailService(String(id)),
        { fallbackData: undefined }
    );

    // For gallery, fallback to [featured_image] if no galleryImages
    const { data } = useSWR('/api/projects', () => ProjectImagesService(String(id)))

    const galleryImagesRaw = data?.results || []
    const galleryImages = galleryImagesRaw && Array.isArray(galleryImagesRaw) && galleryImagesRaw.length > 0
        ? galleryImagesRaw.map(itm => itm.image).filter(Boolean)
        : project?.featured_image ? [project.featured_image] : []
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);



    const openLightbox = (index: number) => {
        setActiveIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };
    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = '';
    };
    const showPrev = useCallback(() => {
        setActiveIndex(i => (galleryImages.length ? (i - 1 + galleryImages.length) % galleryImages.length : i));
    }, [galleryImages]);
    const showNext = useCallback(() => {
        setActiveIndex(i => (galleryImages.length ? (i + 1) % galleryImages.length : i));
    }, [galleryImages]);

    // Keyboard navigation for lightbox
    useEffect(() => {
        if (!lightboxOpen) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [lightboxOpen, showNext, showPrev]);









    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">{t('states.loading')}</p>
                </div>
            </div>
        );
    }

    if (!project || error) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-4">
                        {t('projectNotFound') || 'Project not found'}
                    </h1>
                    <Link href={`/${lang}`}>
                        <Button>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            {t('backToHome') || 'Back to home'}
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">

            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            {/* Breadcrumb */}
                            <Breadcrumb className="mb-8">
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={`/${lang}`}>{t('home')}</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={`/${lang}/projects`}>
                                            {currentLanguage === 'ru' ? 'Проекты' : currentLanguage === 'uz' ? 'Loyihalar' : 'Projects'}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>{(project.title || '').substring(0, 50)}...</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>

                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                <Badge variant="outline" className="border border-primary text-primary">
                                    {project.year}
                                </Badge>
                                <div className="flex items-center text-muted-foreground">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    {moment(project.created_time).format('DD.MM.YYYY')}
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    {[project.country_detail?.name, project.region_detail?.name, project.district_detail?.name].filter(Boolean).join(', ')}
                                </div>
                               
                            </div>

                            {/* Title & Description */}
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                                {project.scope}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-3 gap-12">
                                {/* Main Content */}
                                <div className="lg:col-span-2">
                                    {/* Main Image */}
                                    <Card className="card-shadow mb-12 p-0">
                                        <CardContent className="p-0">
                                            <OptimizedImage
                                                src={process.env.NEXT_PUBLIC_IMAGE_URL + project.featured_image || ''}
                                                alt={project.title}
                                                className="w-full h-96 object-cover rounded-lg"
                                            />
                                        </CardContent>
                                    </Card>

                                    {/* Project Description */}
                                    <Card className="card-shadow mb-12">
                                        <CardHeader>
                                            <CardTitle className="text-2xl font-bold text-primary">
                                                {t('projects.description')}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="prose prose-lg max-w-none">
                                                <ul className="space-y-2">
                                                    {project.industries_detail?.map((industry) => (
                                                        <li key={industry.id} className="text-base text-muted-foreground flex items-start gap-2">
                                                            <span className="text-primary mt-1">•</span>
                                                            <span>{industry.description}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                {project.summary && (
                                                    <div className="mt-4 text-sm text-muted-foreground italic">{project.summary}</div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Gallery */}
                                    {galleryImages.length > 0 && (
                                        <Card className="card-shadow">
                                            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                                <CardTitle className="text-2xl font-bold text-primary">
                                                    {t('projectGallery') || 'Project Gallery'}
                                                </CardTitle>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <span>{galleryImages.length} {t('images') || 'images'}</span>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                {/* Primary preview (first image) */}
                                                <div className="mb-6">
                                                    <div className="relative group overflow-hidden rounded-lg aspect-[16/9] bg-muted">
                                                        <OptimizedImage
                                                            src={galleryImages[activeIndex] || galleryImages[0]}
                                                            alt={`${project.title} - main`}
                                                            className="w-full h-full object-cover smooth-transition group-hover:scale-105 cursor-pointer"
                                                            onClick={() => openLightbox(activeIndex)}
                                                        />


                                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 smooth-transition flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-sm font-medium">
                                                            {t('open') || 'Open'}
                                                        </div>
                                                        {/* Navigation arrows over main preview (desktop) */}
                                                        {galleryImages.length > 1 && (
                                                            <>
                                                                <button onClick={showPrev} className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/40 hover:bg-black/60 text-white items-center justify-center smooth-transition">
                                                                    <ChevronLeft className="h-5 w-5" />
                                                                </button>
                                                                <button onClick={showNext} className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/40 hover:bg-black/60 text-white items-center justify-center smooth-transition">
                                                                    <ChevronRight className="h-5 w-5" />
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                {/* Thumbnails */}
                                                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                                                    {galleryImages.map((img, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => setActiveIndex(idx)}
                                                            className={`relative group rounded-md overflow-hidden ring-2 smooth-transition ${idx === activeIndex ? 'ring-primary' : 'ring-transparent hover:ring-primary/50'}`}
                                                        >
                                                            <OptimizedImage
                                                                src={img}
                                                                alt={`${project.title} - thumb ${idx + 1}`}
                                                                className="h-20 w-full object-cover group-hover:brightness-110"
                                                            />
                                                            {idx === activeIndex && (
                                                                <span className="absolute inset-0 ring-2 ring-primary pointer-events-none rounded-md" />
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )}
                                </div>

                                {/* Sidebar */}
                                <div className="lg:col-span-1">
                                    <div className="sticky top-24 space-y-8">
                                     

                                        {/* Related Projects */}
                                        <Card className="card-shadow">
                                            <CardHeader>
                                                <CardTitle className="text-xl font-bold text-primary">
                                                    {t('otherProjects') || 'Other Projects'}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">

                                                <RelatedProjects />
                                                <p className="text-sm text-muted-foreground">{t('relatedProjectsPlaceholder') || 'Related projects will appear here.'}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>

                            {/* Back Button */}
                            <div className="mt-12">
                                <Button variant="outline" size="lg" onClick={() => window.location.href = `/${lang}/projects`}>
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    {t('backToProjects') || 'Back to projects'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            {lightboxOpen && galleryImages.length > 0 && (
                <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
                    <div className="flex items-center justify-between p-4 text-white text-sm">
                        <span>
                            {activeIndex + 1}/{galleryImages.length}
                        </span>
                        <button onClick={closeLightbox} className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 smooth-transition">
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center relative px-4 pb-8">
                        {galleryImages.length > 1 && (
                            <button onClick={showPrev} className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center smooth-transition">
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                        )}
                        <img
                            src={galleryImages[activeIndex]}
                            alt={`${project.title} - full ${activeIndex + 1}`}
                            className="max-h-full max-w-full object-contain select-none"
                            draggable={false}
                        />
                        {galleryImages.length > 1 && (
                            <button onClick={showNext} className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center smooth-transition">
                                <ChevronRight className="h-6 w-6" />
                            </button>
                        )}
                    </div>
                    <div className="w-full overflow-x-auto py-3 px-4 bg-black/60 border-t border-white/10">
                        <div className="flex gap-3 min-w-max">
                            {galleryImages.map((g, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`relative h-16 w-28 rounded-md overflow-hidden ring-2 smooth-transition ${i === activeIndex ? 'ring-primary' : 'ring-transparent hover:ring-primary/50'}`}
                                >
                                    <img src={g} alt={`thumb ${i + 1}`} className="h-full w-full object-cover" />
                                    {i === activeIndex && <span className="absolute inset-0 ring-2 ring-primary rounded-md" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;
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
import { NewsDetailService } from '@/lib/api';
import { OptimizedImage } from '@/components/OptimizedImage';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import moment from 'moment';
import { News } from '@/types/news';
import RelatedNews from './related-news';




const NewsDetail = () => {
    const { lang, id } = useParams();
    const { t } = useTranslations(lang as Locale);
    const { data: news, isLoading, error } = useSWR<News>(
        id ? `/news-post/public/${id}` : null,
        () => NewsDetailService(String(id)),
        { fallbackData: undefined }
    );


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

    if (!news || error) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-4">
                        {t('newsNotFound') || 'News not found'}
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
                                        <BreadcrumbLink href={`/${lang}/news`}>
                                            {t('news.title')}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>{(news.title || '').substring(0, 50)}...</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>

                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                <Badge variant="outline" className="border border-primary text-primary">
                                    {news.category}
                                </Badge>
                                <div className="flex items-center text-muted-foreground">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    {moment(news.published_at).format('DD.MM.YYYY')}
                                </div>


                            </div>

                            {/* Title & Description */}
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                                {news.title}
                            </h1>
                           
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
                                                src={process.env.NEXT_PUBLIC_IMAGE_URL + news.cover_image || ''}
                                                alt={news.title}
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

                                                <div className="mt-4 text-sm text-muted-foreground italic">{news.body}</div>

                                            </div>
                                        </CardContent>
                                    </Card>


                                </div>

                                {/* Sidebar */}
                                <div className="lg:col-span-1">
                                    <div className="sticky top-24 space-y-8">


                                        <Card className="card-shadow">
                                            <CardHeader>
                                                <CardTitle className="text-xl font-bold text-primary">
                                                    {t('news.related') || 'Other News'}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">

                                                <RelatedNews />
                                              
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>

                            {/* Back Button */}
                            <div className="mt-12">
                                <Button variant="outline" size="lg" onClick={() => window.location.href = `/${lang}/news`}>
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    {t('news.back') || 'Back to news'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

        </div>
    );
};

export default NewsDetail;
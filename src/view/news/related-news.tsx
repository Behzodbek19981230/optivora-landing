import { NewsService } from '@/lib/api';
import { Project } from '@/types/project';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';
import moment from 'moment';
import { News } from '@/types/news';
const RelatedNews = () => {
    const { lang } = useParams()
    const { data, isLoading } = useSWR('/api/news-public', NewsService)
    if (isLoading) return <div>Loading...</div>
    const news = (data?.results || []) as News[]
    return (
        <div>
            <div className="space-y-4">
                {news.slice(0, 6).map((relatedNews: News) => (
                    <Link
                        key={relatedNews.id}
                        href={`/${lang || 'ru'}/news/${relatedNews.id}`}
                        className="block group"
                    >
                        <div className="flex space-x-4">
                            <Image
                                src={`${relatedNews.cover_image || '/placeholder.svg'}`}
                                alt={relatedNews.title}
                                className="w-16 h-16 object-cover rounded flex-shrink-0"
                                width={64}
                                height={64}
                            />
                            <div>
                                <h4 className="font-medium text-foreground group-hover:text-primary smooth-transition text-sm leading-tight">
                                    {relatedNews.title?.substring(0, 80)}...
                                </h4>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {moment(relatedNews.published_at).format('DD.MM.YYYY')}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}

export default RelatedNews;

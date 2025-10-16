import { ProjectService } from '@/lib/api';
import { Project } from '@/types/project';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';
import moment from 'moment';
const RelatedProjects = () => {
    const { lang } = useParams()
    const { data, isLoading } = useSWR('/api/projects-public', ProjectService)
    if (isLoading) return <div>Loading...</div>
    const projects = (data?.results || []) as Project[]
    return (
        <div>
            <div className="space-y-4">
                {projects.slice(0, 6).map((relatedProject: Project) => (
                    <Link
                        key={relatedProject.id}
                        href={`/${lang || 'ru'}/projects/${relatedProject.id}`}
                        className="block group"
                    >
                        <div className="flex space-x-4">
                            <Image
                                src={`${relatedProject.featured_image || '/placeholder.svg'}`}
                                alt={relatedProject.title}
                                className="w-16 h-16 object-cover rounded flex-shrink-0"
                                width={64}
                                height={64}
                            />
                            <div>
                                <h4 className="font-medium text-foreground group-hover:text-primary smooth-transition text-sm leading-tight">
                                    {relatedProject.title?.substring(0, 80)}...
                                </h4>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {moment(relatedProject.created_time).format('DD.MM.YYYY')}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}

export default RelatedProjects;

import NewsDetail from '@/view/news/news-detail';
import { i18n } from '@/config/i18n/i18n';

export const dynamicParams = false;

async function getAllNewsIds(): Promise<string[]> {
	const base = process.env.NEXT_PUBLIC_API_URL;
	if (!base) return [];

	const baseUrl = base.endsWith('/') ? base.slice(0, -1) : base;

	try {
		const res = await fetch(`${baseUrl}/news-post/public`, {
			headers: { Accept: 'application/json' },
		});
		if (!res.ok) return [];
		const data = (await res.json()) as { results?: Array<{ id?: string | number }> };
		return (data?.results || [])
			.map((item) => item?.id)
			.filter((id): id is string | number => id !== undefined && id !== null)
			.map((id) => String(id));
	} catch {
		return [];
	}
}

function parseEnvIds(raw: string | undefined): string[] {
	return (raw || '')
		.split(',')
		.map((s) => s.trim())
		.filter(Boolean);
}

export async function generateStaticParams() {
	const fetchedIds = await getAllNewsIds();
	const fallbackIds = parseEnvIds(process.env.STATIC_EXPORT_NEWS_IDS);
	const ids = fetchedIds.length > 0 ? fetchedIds : fallbackIds.length > 0 ? fallbackIds : ['1'];
	return i18n.locales.flatMap((lang) => ids.map((id) => ({ lang, id })));
}

const NewsDetailPage = () => {
	return <NewsDetail />;
};

export default NewsDetailPage;

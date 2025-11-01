import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Optivora',
	description: 'Optivora Landing Page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return children;
}

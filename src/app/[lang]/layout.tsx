import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import ReduxProvider from '@/providers/ReduxProvider'
import { i18n, type Locale } from '@/config/i18n/i18n'

export const metadata: Metadata = {
  title: 'Optivora',
  icons:'/logo.svg',
  description: 'Optivora is a modern trade and service company specializing in the supply and resale of industrial equipment and pumping systems.\r\n\r\nWe partner with leading global manufacturers such as Torishima, Ingersoll, KSB, and Sigma Group, providing our clients with reliable, energy-efficient, and proven solutions.\r\n\r\nOptivora offers a comprehensive approach: from equipment selection to delivery and technical support. We value the trust of our partners and strive to provide a high level of service, quality, and professionalism in all aspects of our work.',
}

export const dynamicParams = false;

export function generateStaticParams() {
	return i18n.locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
  <html lang={lang}>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}

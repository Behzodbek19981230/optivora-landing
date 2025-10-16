import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import ReduxProvider from '@/providers/ReduxProvider'

export const metadata: Metadata = {
  title: 'Optivora',
  icons:'/logo.svg',
  description: 'Optivora is a modern trade and service company specializing in the supply and resale of industrial equipment and pumping systems.\r\n\r\nWe partner with leading global manufacturers such as Torishima, Ingersoll, KSB, and Sigma Group, providing our clients with reliable, energy-efficient, and proven solutions.\r\n\r\nOptivora offers a comprehensive approach: from equipment selection to delivery and technical support. We value the trust of our partners and strive to provide a high level of service, quality, and professionalism in all aspects of our work.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ReduxProvider>
          {children}
          <Analytics />
        </ReduxProvider>
      </body>
    </html>
  )
}

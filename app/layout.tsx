import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Inline SVG favicon with your initials
const faviconSvg = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="6" fill="#4a148c"/>
  <path d="M8 10V22H12V14L16 20L20 14V22H24V10H20L16 16L12 10H8Z" fill="white"/>
  <path d="M24 10V22H20V10H24Z" fill="white"/>
</svg>
`

const faviconSvgUrl = `data:image/svg+xml,${encodeURIComponent(faviconSvg.trim())}`

export const metadata: Metadata = {
  title: 'Walid Noor - Marketing Team Lead & Social Media Manager',
  description: 'Professional portfolio of Walid Noor - Marketing Team Lead & Social Media Manager at blissio.ai. Specializing in social media strategy, content creation, and digital marketing.',
  icons: {
    icon: [
      { url: faviconSvgUrl },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#4a148c' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#4a148c',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Walid Noor',
  },
  openGraph: {
    title: 'Walid Noor - Marketing Team Lead & Social Media Manager',
    description: 'Professional portfolio of Walid Noor - Marketing Team Lead & Social Media Manager at blissio.ai',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Walid Noor - Marketing Team Lead & Social Media Manager</title>
        <link rel="icon" href={faviconSvgUrl} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

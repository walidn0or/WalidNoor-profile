import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Walid Noor - Marketing Team Lead & Social Media Manager',
  description: 'Professional portfolio of Walid Noor - Marketing Team Lead & Social Media Manager at blissio.ai. Specializing in social media strategy, content creation, and digital marketing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import React from "react"
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Apex Print Hub | Premium Offset Printing Solutions',
  description: 'Professional offset printing services with expert craftsmanship. Custom business cards, brochures, banners, and more.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

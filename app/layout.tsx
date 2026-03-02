import type { Metadata } from 'next'
import { Inter, PT_Sans_Caption, Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk'
})

const ptSansCaption = PT_Sans_Caption({
  variable: '--font-pt-sans-caption',
  weight: ['400', '700'],
  subsets: ['latin']
})

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Name',
  description: 'Description'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${spaceGrotesk.variable} ${ptSansCaption.variable} ${inter.variable} antialiased min-h-screen font-sans flex flex-col overflow-x-hidden bg-gray-700`}
      >
        <main className="flex-1 font-heading">{children}</main>
      </body>
    </html>
  )
}

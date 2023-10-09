import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ["500", "300", "400"] })

export const metadata: Metadata = {
  title: 'Digitary',
  description: 'Creative Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

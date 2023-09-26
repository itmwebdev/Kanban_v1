import './globals.css'
import type { Metadata } from 'next'
import { Zen_Kaku_Gothic_Antique  } from 'next/font/google'

const zen = Zen_Kaku_Gothic_Antique({ weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'ITM Kanban',
  description: 'Best one for planning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={zen.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PUBG Mobile - Sensibilité Infinix Note 40',
  description: 'Paramètres de sensibilité optimaux pour PUBG Mobile sur Infinix Note 40',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

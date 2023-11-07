import { Header } from '../components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import ClienteProvider from '../contexts/cliente'

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Revenda de Carros',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        <ClienteProvider>
        <Header />
        {children}
        </ClienteProvider>
      </body>
    </html>
  )
}
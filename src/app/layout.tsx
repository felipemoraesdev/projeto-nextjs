import './globals.css'
import { roboto } from './fonts';
import { NextAuthProvider } from '@/providers/NextAuthProvider';

export const metadata = {
  title: 'Claro Fibra',
  description: 'Claro Internet Fibra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}

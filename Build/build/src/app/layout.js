//fonts
import { Outfit } from 'next/font/google'
import './globals.css'
const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'DESIGN',
  description: 'E-commerce App Build By Nextjs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}

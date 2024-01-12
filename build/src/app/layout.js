import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'DESIGN',
  description: 'E-Commerce App for Selling and Buying Stuff.',
}
//components
import Footer from '@/components/footer/Footer'
//modules and Libraries(packages)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}
      <Footer/>
      </body>
    </html>
  )
}

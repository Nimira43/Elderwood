import { Poppins } from 'next/font/google'
import './globals.css';
import { Toaster } from '@/components/ui/sonner'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Elderwood',
  description: 'Online learning platform using Next JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        {children}
        <Toaster richColors position='top-center'/>
      </body>
    </html>
  )
}

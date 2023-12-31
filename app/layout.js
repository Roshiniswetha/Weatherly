import { Literata } from 'next/font/google'
// import Splash from '@/splash/Splash'
import Providers from '@/store/reducers'
import '@/styles/globals.scss'


const literata = Literata({ subsets: ['latin'],weight: "400" })

export const metadata = {
  title: 'Weatherly',
  description: 'Get Current Weather of a city',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={literata.className}>
        <Providers>
          {/* <Splash> */}
            {children}
            {/* </Splash> */}
        </Providers>
      </body>
    </html>
  )
}

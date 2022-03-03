import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

import Body from '@/components/Body'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div>
        <Header />
        <Body>
          <Component {...pageProps} />
        </Body>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MyApp

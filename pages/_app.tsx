import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DM_Mono, IBM_Plex_Sans } from 'next/font/google'


const dm_mono = DM_Mono({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-dm_mono'
})

const ibm_plex_sans = IBM_Plex_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-ibm_plex_sans'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>{`
        body {
          font-family: ${ibm_plex_sans.style.fontFamily};
        }

        h1, h2, h3 {
          font-family: ${dm_mono.style.fontFamily}
        }
      `}</style>
    <Component {...pageProps} />
    </>
  )
}

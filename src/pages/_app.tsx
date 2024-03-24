import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Poppins } from  "@next/font/google"

const catamoran = Poppins({
  subsets : ['latin'],
  weight : ["400"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <main className={catamoran.className}>
    <Component {...pageProps} />
    </main>
    </>
    )
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { useEffect } from "react";
import Script from "next/script";

const catamoran = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SLCJCDZHM3');
      `,
        }}
      ></Script>
       <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-SLCJCDZHM3"
      ></Script>
      <main className={catamoran.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      {/* <Scriptt dangerouslySetInnerHTML={{__html : `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-72JT26BEWP');`}}>

        </Scriptt> */}

        
      <link rel="icon" href="/favicon.png" sizes="any" />
      <Script dangerouslySetInnerHTML={{__html : `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-SLCJCDZHM3');`}}>

        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

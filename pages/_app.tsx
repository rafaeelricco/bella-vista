/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import '../assets/css/nprogress.css'
import '../styles/globals.css'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  const router = useRouter()
  useEffect(() => {
    const handleStart = (url: string) => {
      NProgress.start()
    }

    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <>
      <Head>
        <title>Bella Vista Imóveis | Um horizonte de escolhas</title>
        <noscript>
          <img
            height="1"
            width="1"
            style={{
              display: 'none'
            }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="1"
            width="1"
            style={{
              display: 'none'
            }}></iframe>
        </noscript>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Oferecemos uma vasta variedade em imóveis urbanos e propriedades rurais para a venda, além de facilidade para negociação e arrendamentos de terras."
        />
        <meta
          name="keywords"
          content="imóveis, cachoeira do sul, bella, vista, horizonte, escolhas, facilidade, negociação, arrendamento, terras, fazenda, sítio, chácara, casa, apartamento, venda, aluguel, rural, urbano, propriedade, rurais, urbanos, vasta, variedade"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          components: {
            Container: {
              defaultProps: {
                sizes: {
                  xs: 540,
                  sm: 720,
                  md: 960,
                  lg: 1200,
                  xl: 1320
                }
              }
            }
          }
        }}>
        <Component {...pageProps} />
      </MantineProvider>
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}')
          `
        }}
      />
    </>
  )
}

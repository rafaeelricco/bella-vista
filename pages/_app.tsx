import Head from 'next/head'
import NProgress from 'nprogress'
import '../assets/css/nprogress.css'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

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
          content="imóveis, cachoeira do sul, bella, vista, horizonte, escolhas, facilidade, negociação, arrendamento, terras, fazenda"
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
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}

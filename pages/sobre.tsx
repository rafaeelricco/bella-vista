import { GraphQLClient } from 'graphql-request'
import Script from 'next/script'
import About from '../components/About/About'
import { Footer } from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Informacoes } from '../typings'

export async function getServerSideProps() {
  const hygraph = new GraphQLClient(
    'https://api-sa-east-1.hygraph.com/v2/cl8ztf5m815ys01uk620z6nqj/master'
  )
  const { informacoes } = await hygraph.request(`
  query Informacoes {
    informacoes {
      location
      phone
      gmail
      instagram
      facebook
      whatsApp
    }
  }`)
  return {
    props: {
      informacoes
    }
  }
}

export default function AboutPage({
  informacoes
}: {
  informacoes: Informacoes[]
}) {
  return (
    <>
      <Header />
      <About />
      <Footer data={informacoes} />
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', ${process.env.NEXT_PUBLIC_PIXEL_ID});
          fbq('track', 'PageView');
          fbq('trackCustom', 'Sobre');
          `
        }}
      />
    </>
  )
}

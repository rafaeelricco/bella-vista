import { Carousel } from '@mantine/carousel'
import { GraphQLClient } from 'graphql-request'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { ContainerCard, ContainerCardHome } from '../assets/styled/Card'
import CardHome from '../components/Cards/Home'
import { Footer } from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Immobile, Informacoes } from '../typings'
import { stringfy } from '../utils/stringfy'

const DynamicMaps = dynamic(() => import('../components/Maps/Maps'), {
  loading: () => <p>Carregando...</p>,
  suspense: true
})

const DynamicAbout = dynamic(() => import('../components/About/About'), {
  ssr: true,
  loading: () => <p>Carregando...</p>,
  suspense: true
})

const DynamicBanner = dynamic(() => import('../components/Banner/Home'), {
  ssr: true
})

const DynamicProperties = dynamic(
  () => import('../components/Properties/Properties'),
  {
    ssr: true,
    suspense: true
  }
)

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const hygraph = new GraphQLClient(
    'https://api-sa-east-1.hygraph.com/v2/cl8ztf5m815ys01uk620z6nqj/master'
  )

  const { immobiles } = await hygraph.request(
    `
    query Immobiles {
      immobiles {
        id
        name
        description {
          html
          raw
          text
        }
        category
        type
        images {
          id
          url
        }
        location
        reference_point
        size_area
        price
        bedrooms
        bathrooms
        garage
        parking
        suits
        tags
        commercial_room
        updatedAt
        createdAt
      }
    }
    `
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
      immobiles,
      informacoes
    }
  }
}

export default function Index({
  immobiles,
  informacoes
}: {
  immobiles: Immobile[]
  informacoes: Informacoes[]
}) {
  return (
    <>
      <Header />
      <DynamicBanner value={immobiles} />
      <DynamicProperties
        title={'Principais imóveis'}
        description={
          'Oferecemos uma vasta variedade em imóveis urbanos e propriedades rurais para a venda, além de facilidade para negociação e arrendamentos de terras.'
        }
      />
      <ContainerCardHome>
        <Carousel
          id="carousel"
          slideSize="26%"
          slideGap="md"
          breakpoints={[
            { maxWidth: 'md', slideSize: '50%' },
            { maxWidth: 'sm', slideSize: '100%', slideGap: 0 }
          ]}
          styles={{
            indicator: {
              width: 12,
              height: 4,
              transition: 'width 250ms ease',
              alingItems: 'center',

              '&[data-active]': {
                width: 40
              }
            },
            container: {
              display: 'flex',
              alingItems: 'center',
              margin: '1rem 0 0 0'
            }
          }}
          loop
          height={500}
          align="start">
          {immobiles.map((immobile) => (
            <Carousel.Slide key={immobile.id}>
              <ContainerCard>
                <CardHome
                  title={immobile.name}
                  description={immobile.description.html}
                  img={immobile.images[0].url}
                  alt={immobile.name}
                  area={immobile.size_area}
                  bedrooms={immobile.bedrooms}
                  bathrooms={immobile.bathrooms}
                  garage={immobile.garage}
                  parking={immobile.parking}
                  suit={immobile.suits}
                  commercial={immobile.commercial_room}
                  link={`/venda/imovel/${stringfy(immobile.name)}`}
                  key={immobile.id}
                />
              </ContainerCard>
            </Carousel.Slide>
          ))}
        </Carousel>
      </ContainerCardHome>
      <DynamicAbout />
      <DynamicMaps />
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
          fbq('trackCustom', 'Página inicial');
          `
        }}
      />
    </>
  )
}

import { GraphQLClient } from 'graphql-request'
import { ContainerCard, ContainerCardHome } from '../assets/styled/Card'
import { Carousel } from '@mantine/carousel'
import { Immobile, Informacoes } from '../typings'
import { stringfy } from '../utils/stringfy'
import { Footer } from '../components/Footer/Footer'
import Banner from '../components/Banner/Home'
import Header from '../components/Header/Header'
import Properties from '../components/Properties/Properties'
import CardHome from '../components/Cards/Home'
import dynamic from 'next/dynamic'

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
          align="start"
        >
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
    </>
  )
}

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
  Badge,
  Button,
  Container,
  Divider,
  Tabs,
  TypographyStylesProvider
} from '@mantine/core'
import { Immobile, Informacoes } from '../../../typings'
import { Carousel } from '@mantine/carousel'
import { Footer } from '../../../components/Footer/Footer'
import { useRouter } from 'next/router'
import { GraphQLClient } from 'graphql-request'
import { ContainerCard } from '../../../assets/styled/Card'
import {
  Area,
  Bedroom,
  Bathroom,
  Location,
  Garage,
  Whatsapp,
  Suit,
  Commercial,
  Parking
} from '../../../utils/icons'
import { conditional } from '../../../utils/conditional-render'
import { stringfy } from '../../../utils/stringfy'
import { Form } from '../../../components/Form/Form'
import CardHome from '../../../components/Cards/Home'
import styled from 'styled-components'
import Header from '../../../components/Header/Header'
import Properties from '../../../components/Properties/Properties'

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

const Adress = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.318rem;
  align-content: center;
  margin: -1.618rem 0 0 0;
  @media (max-width: 500px) {
    margin: -1.618rem 0 -1rem 0;
  }
`
const BannerImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
const Description = styled.div`
  color: #305b1e;
  margin: 2rem 0 2rem 0;
`
const FichaTecnica = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1.281rem 0 2.281rem 0;
  transition: all 0.3s ease-out;
  justify-content: flex-start;
`
const IconFicha = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;
  gap: 0.518rem;

  p {
    font-size: 0.918rem;
    color: #305b1e;
    font-weight: bold;
    margin: 0.218rem 0 0.218rem 0;
  }
`
const Title = styled.h1`
  display: flex;
  font-size: 1.818rem;
  color: #305b1e;
  align-items: center;
  gap: 0.618rem;
  transition: all 0.3s ease-in-out;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    margin: 0.618rem 0 1rem 0;
  }
`
const Detail = styled.p`
  font-size: 1rem;
  letter-spacing: -0.5px;
  color: #305b1e;
`
const BadgeContainer = styled.div`
  margin: -7px 0 0 0;
  @media (max-width: 500px) {
    margin: -0.418rem 0 0.218rem 0;
  }
`
const Related = styled.div`
  background: rgba(48, 91, 30, 0.04);
`
const FormContainer = styled.div`
  box-sizing: border-box;
  background: #ffffff;
  margin: 2.818rem 0 -2.618rem 0;
  padding: 1.618rem;
  border: 1.825px solid #e6e6e6;
  border-radius: 1.418rem;
`
const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.618rem;
  margin: 0 0 2.618rem 0;
  @media (max-width: 500px) {
    margin: 1.118rem 0 1.618rem 0;
    flex-direction: column;
  }
`

export default function Imovel({
  immobiles,
  informacoes
}: {
  immobiles: Immobile[]
  informacoes: Informacoes[]
}) {
  const router = useRouter()
  const { slug } = router.query
  const immobile = immobiles.find((immobile) => {
    return stringfy(immobile.name) == slug
  })
  const related = immobiles.filter((i) => {
    return i.category == immobile?.category
  })

  return (
    <>
      <Header />
      <Container size={'lg'}>
        <Carousel
          slideSize="100%"
          slideGap="md"
          breakpoints={[
            {
              maxWidth: 1200,
              slideGap: 'lg',
              slideSize: '100%'
            },
            { maxWidth: 'md', slideSize: '100%' },
            { maxWidth: 'sm', slideSize: '100%' }
          ]}
          loop
          align="center"
        >
          {immobile?.images.map((img: Immobile) => (
            <Carousel.Slide key={img.id}>
              <img
                style={{
                  width: '100%',
                  height: '500px',
                  objectFit: 'cover'
                }}
                src={img.url}
                alt="ss"
              />
            </Carousel.Slide>
          ))}
        </Carousel>
        {immobile && (
          <>
            <Title>
              {immobile.name}{' '}
              <BadgeContainer>
                <Badge color="yellow" size="lg">
                  {immobile.category}
                </Badge>
              </BadgeContainer>
            </Title>
            <Adress>
              <Location fill="#F6B72A" width={14} />
              <Detail>
                {immobile.location} - {immobile.reference_point}
              </Detail>
            </Adress>
            <ButtonsContainer>
              <a
                href="https://api.whatsapp.com/send?phone=5551996966086"
                target={'_blank'}
                rel="noreferrer"
              >
                <Button
                  variant="light"
                  color={'green'}
                  radius={'md'}
                  leftIcon={<Whatsapp fill="#40c057" width={19} />}
                >
                  Consultar valores
                </Button>
              </a>
            </ButtonsContainer>
            <Description>
              <Tabs defaultValue="description" color="yellow">
                <Tabs.List>
                  <Tabs.Tab
                    style={{
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      color: '#305b1e'
                    }}
                    value="description"
                  >
                    Descrição
                  </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="description" pt="lg">
                  <TypographyStylesProvider
                    style={{
                      fontSize: '1rem',
                      color: '#305b1e',
                      margin: '-0.218rem 0 2rem 0'
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: immobile.description.html
                      }}
                    />
                  </TypographyStylesProvider>
                </Tabs.Panel>
              </Tabs>
            </Description>

            <FichaTecnica>
              <IconFicha
                style={{
                  display: conditional(immobile.garage)
                }}
              >
                <Garage width={23} />
                <p>{immobile.garage} Garagem</p>
              </IconFicha>

              <IconFicha
                style={{
                  display: conditional(immobile.bedrooms)
                }}
              >
                <Divider orientation="vertical" />
                <Bedroom width={24} />
                <p>{immobile.bedrooms} Quartos</p>
              </IconFicha>

              <IconFicha
                style={{
                  display: conditional(immobile.bathrooms)
                }}
              >
                <Divider orientation="vertical" />
                <Bathroom width={24} />
                <p>{immobile.bathrooms} Banheiros</p>
              </IconFicha>

              <IconFicha
                style={{
                  display: conditional(immobile.size_area)
                }}
              >
                <Divider orientation="vertical" />
                <Area width={24} />
                <p>{immobile.size_area}</p>
              </IconFicha>

              <IconFicha
                style={{
                  display: conditional(immobile.suits)
                }}
              >
                <Divider orientation="vertical" />
                <Suit fill={'#F6B72A'} width={24} />
                <p>{immobile.suits} Suíte</p>
              </IconFicha>

              <IconFicha
                style={{
                  display: conditional(immobile.commercial_room)
                }}
              >
                <Divider orientation="vertical" />
                <Commercial fill={'#F6B72A'} width={24} />
                <p>{immobile.commercial_room} Salas comerciais</p>
              </IconFicha>

              <IconFicha
                style={{
                  display: conditional(immobile.parking)
                }}
              >
                <Divider orientation="vertical" />
                <Parking fill={'#F6B72A'} width={24} />
                <p>{immobile.parking} Vagas de Estc</p>
              </IconFicha>
            </FichaTecnica>
          </>
        )}
        <FormContainer>
          {immobile && <Form key={immobile.id} obj={immobile.name} />}
        </FormContainer>
      </Container>
      <Properties
        title={'Imóveis Relacionados'}
        description={'Veja os principais imóveis da mesma categoria'}
      />
      <Related>
        <Carousel
          slideSize="30%"
          slideGap="sm"
          breakpoints={[
            { maxWidth: 'md', slideSize: '50%' },
            {
              maxWidth: 'sm',
              slideSize: '80%',
              slideGap: 0
            },
            {
              maxWidth: 'xs',
              slideSize: '100%',
              slideGap: 0
            }
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
          {related?.map((r) => (
            <Carousel.Slide key={r.id}>
              <ContainerCard>
                <CardHome
                  key={r.id}
                  link={`/venda/imovel/${stringfy(r.name)}`}
                  title={r.name}
                  description={r.description.html}
                  alt={r.name}
                  area={r.size_area}
                  bedrooms={r.bedrooms}
                  bathrooms={r.bathrooms}
                  commercial={r.commercial_room}
                  garage={r.garage}
                  img={r.images[0].url}
                  parking={r.parking}
                  suit={r.suits}
                />
              </ContainerCard>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Related>
      <Footer data={informacoes} />
    </>
  )
}

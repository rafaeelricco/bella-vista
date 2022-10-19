import { Footer } from '../../components/Footer/Footer'
import { Container, Select, TextInput } from '@mantine/core'
import { useState } from 'react'
import { GraphQLClient } from 'graphql-request'
import { useRouter } from 'next/router'
import { Immobile, Informacoes } from '../../typings'
import { stringfy } from '../../utils/stringfy'
import { IconSearch } from '@tabler/icons'
import Header from '../../components/Header/Header'
import styled from 'styled-components'
import Card from '../../components/Cards/Venda'

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

const Selectors = styled.div`
  display: flex;
  gap: 0.618rem;
  flex-direction: row;
  width: 100%;
  margin: -0rem 0 -1rem 0;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`
const Layout = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  margin: 2rem 0;
`
const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`
const SliderContainer = styled.div`
  width: 100%;
  margin: -0.518rem 0 0 0;
`

export default function Venda({
  immobiles,
  informacoes
}: {
  immobiles: Immobile[]
  informacoes: Informacoes[]
}) {
  const router = useRouter()
  const [disabled, setDisabled] = useState(true)
  const [state, setState] = useState(immobiles)
  const [location, setLocation] = useState([])
  const [size, setSize] = useState([])
  const [type, setType] = useState([])

  // function to filter all immobiles category
  const filterAllCategories = () => {
    const categories = immobiles.map((immobile) => immobile.category)
    const setCategory = [...new Set(categories)]
    return setCategory
  }

  //funuction to return immobile by category
  const filterByCategory = (value: string) => {
    const category = immobiles.filter((immobile) => immobile.category === value)
    setState(category)
  }

  // function to filter all immobiles type
  const filterAllTypes = (value: string) => {
    const filter = immobiles.filter((immobile) => immobile.category == value)
    const types = filter.map((immobile) => immobile.type)
    const uType = [...new Set(types)]
    return setType(uType)
  }

  //function to return immobile by type
  const filterByType = (value: string) => {
    const filter = immobiles.filter((immobile) => immobile.type == value)
    setState(filter)
  }

  // function to filter immobiles location
  const filterAllLocation = (value: string) => {
    const filter = immobiles.filter((immobile) => immobile.category == value)
    const locations = filter.map((immobile) => {
      const locations = immobile.location
      const format = locations.replace(/([\.,/-])/g, ',')
      const split = format.split(',')
      const location = split[0]
      return location
    })
    const uLocation = [...new Set(locations)]
    return setLocation(uLocation)
  }

  // function to return immobile by location
  const filterByLocation = (value: string) => {
    const filter = immobiles.filter((immobile) => {
      const locations = immobile.location
      const format = locations.replace(/([\.,/-])/g, ',')
      const split = format.split(',')
      const location = split[0]
      return location == value
    })
    setState(filter)
  }

  // function to return immobiles size_area
  const filterAllSizeArea = (value: string) => {
    const filter = immobiles.filter((immobile) => immobile.category == value)
    const size = filter.map((immobile) => {
      const size = immobile.size_area
      const format = size.replace(/([h][a])/g, 'Hectare')
      return format
    })
    const uSizes = [...new Set(size)]
    return setSize(uSizes)
  }

  // function to return immobile by size_area
  const filterBySizeArea = (value: string) => {
    if (value == null) {
      return setState(immobiles)
    } else {
      const format = value.replace(/(.*)\Hectare\b(.*)/g, '$1ha$2')
      const filter = immobiles.filter(
        (immobile) => immobile.size_area == format
      )
      setState(filter)
    }
  }

  // function to return immobiles by name
  const search = (value: string) => {
    const filter = immobiles.filter((immobile) => {
      const name = immobile.name
      const search = name.toLowerCase().includes(value.toLowerCase())
      return search
    })
    setState(filter)
  }

  return (
    <>
      <Header />
      <Container size={'lg'}>
        <Layout>
          <Selectors>
            <Select
              radius={'md'}
              transitionDuration={200}
              transitionTimingFunction={'ease-out'}
              placeholder="Categoria"
              style={{
                width: '100%'
              }}
              nothingFound="No options"
              data={[...filterAllCategories()]}
              onChange={(value) => {
                filterAllLocation(value)
                filterAllTypes(value)
                filterAllSizeArea(value)
                filterByCategory(value)
                setDisabled(false)
              }}
            />
            <Select
              radius={'md'}
              transitionDuration={200}
              transitionTimingFunction={'ease-out'}
              disabled={disabled}
              placeholder="Tipo de Imóvel"
              style={{
                width: '100%'
              }}
              nothingFound="No options"
              data={[...type]}
              onChange={(value) => {
                filterByType(value)
              }}
            />
            <Select
              radius={'md'}
              transitionDuration={200}
              transitionTimingFunction={'ease-out'}
              disabled={disabled}
              placeholder="Localização"
              style={{
                width: '100%'
              }}
              nothingFound="No options"
              data={[...location]}
              onChange={(value) => {
                filterByLocation(value)
              }}
            />

            <Select
              radius={'md'}
              transitionDuration={200}
              clearable={true}
              disabled={disabled}
              transitionTimingFunction={'ease-out'}
              placeholder="Tamanho da área"
              style={{
                width: '100%'
              }}
              nothingFound="No options"
              data={[...size]}
              onChange={(value) => {
                filterBySizeArea(value)
              }}
            />
          </Selectors>
          <TextInput
            icon={<IconSearch size={18} stroke={1.5} />}
            radius="md"
            size="sm"
            placeholder="Digite para pesquisar"
            rightSectionWidth={42}
            onChange={(e) => {
              const value = e.target.value
              search(value)
            }}
          />
          <Cards>
            {state?.map((immobile: Immobile) => (
              <Card
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
            ))}
          </Cards>
        </Layout>
      </Container>
      <Footer data={informacoes} />
    </>
  )
}

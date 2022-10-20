/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import { Autocomplete, Container, Tooltip } from '@mantine/core'
import { Search } from 'tabler-icons-react'
import { useRouter } from 'next/router'
import { stringfy } from '../../utils/stringfy'
import { Immobile } from '../../typings'

const Title = styled.h1`
  z-index: 1;
  font-size: 58px;
  letter-spacing: -1.5px;
  color: #ffffff;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  grid-auto-flow: column;
  grid-gap: 1rem;
  transition: all 0.3s ease-out;
  margin: 0 0 -0.618rem 0;

  @media (max-width: 890px) {
    font-size: 50px;
  }
  @media (max-width: 700px) {
    grid-gap: 0.618rem;
    font-size: 45px;
  }
  @media (max-width: 600px) {
    font-size: 32px;
    grid-auto-flow: column;
  }
  @media (max-width: 400px) {
    grid-gap: 0.418rem;
    font-size: 28px;
    margin: 0 0 -0.118rem 0;
    grid-auto-flow: column;
  }

  span {
    color: #f6b72a;
  }
`
const Subtitle = styled.p`
  z-index: 1;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  display: grid;
  grid-template-columns: 0.8fr;
  justify-content: center;
  transition: all 0.3s ease-out;
  margin: 0 0 0.618rem 0;

  @media (max-width: 890px) {
    font-size: 16px;
  }
  @media (max-width: 700px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 0.9fr;
    font-size: 12px;
  }
  @media (max-width: 400px) {
    grid-template-columns: 0.8fr;
    font-size: 12px;
  }
`
const ContainerImage = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 22px;
  background: black;
  z-index: -1;
`
const ContainerBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 0 0;
`
const ContainerItems = styled.div``

const ContainerSearch = styled.div`
  display: grid;
  transition: all 0.3s ease-out;
  grid-template-columns: 40vw;
  align-items: center;
  justify-content: center;
  @media (max-width: 890px) {
    grid-template-columns: 60vw;
  }
  @media (max-width: 700px) {
    grid-template-columns: 80vw;
  }
`
const image = styled.img``

const ImageCont = styled.img`
  width: 100%;
  height: 425px;
  object-fit: cover;
  object-position: center;
  border-radius: 22px;
  display: block;
  opacity: 0.5;
  transition: all 0.3s ease-out;
  @media (max-width: 890px) {
    height: 384px;
  }
  @media (max-width: 500px) {
    height: 300px;
  }
`
const ContainerInfos = styled.div`
  display: grid;
  position: absolute;
`

export default function Banner({ value }: { value: Immobile[] }) {
  const router = useRouter()

  const data = value.map((item: Immobile) => {
    return {
      value: item.name,
      label: item.name,
      group: item.category
    }
  })

  return (
    <>
      <Container size={'lg'}>
        <ContainerBanner>
          <ContainerInfos>
            <Title>Um horizonte de escolhas.</Title>
            <Subtitle>
              Bella Vista Imóveis foi criada para fazer a diferença e ajudar
              você a encontrar seu próprio horizonte.
            </Subtitle>
            <ContainerSearch>
              <Tooltip
                label="Após selecionar o imóvel, pressione enter para pesquisar"
                transition="scale"
                position="bottom"
                radius="md"
                transitionDuration={300}
                events={{ hover: true, focus: false, touch: false }}
              >
                <Autocomplete
                  icon={<Search size={18} />}
                  variant="filled"
                  radius="md"
                  size="sm"
                  placeholder="O que você procura?"
                  data={data}
                  onItemSubmit={(e) => {
                    router.push(`/venda/imovel/${stringfy(e.value)}`)
                  }}
                />
              </Tooltip>
            </ContainerSearch>
          </ContainerInfos>
          <ContainerImage>
            <ImageCont src="/images/sunset-farm.webp" alt="sunset" />
          </ContainerImage>
        </ContainerBanner>
      </Container>
    </>
  )
}

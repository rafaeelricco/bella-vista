import {
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  useMantineTheme
} from '@mantine/core'
import { useState } from 'react'
import Link from 'next/link'
import ActiveLink from './LinkState'
import styled from 'styled-components'
import Logo from '../../assets/icons/logo-simplificado.svg'
import WhatsApp from '../../assets/icons/whatsapp.svg'
import Home from '../../assets/icons/inicio.svg'
import Local from '../../assets/icons/localizacao.svg'
import Sale from '../../assets/icons/comprar-casa.svg'
import About from '../../assets/icons/sobre.svg'
import ContatForm from '../../assets/icons/enviar.svg'

const HeaderContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  padding: 0.218rem 0;
  margin: 1rem 0 1rem 0;
  background-color: #ffff;
  justify-content: space-between;
`
const Inicio = styled.div`
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 600px) {
    display: none;
  }
`
const Venda = styled(Inicio)`
  @media (max-width: 600px) {
    display: none;
  }
`
const Sobre = styled(Inicio)`
  @media (max-width: 600px) {
    display: none;
  }
`
const Contato = styled.div`
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 680px) {
    display: none;
  }
`
const Hamburguer = styled.div`
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 600px) {
    display: none;
  }
`
const TitleMenu = styled.h3`
  font-weight: 600;
  font-size: 1.218rem;
  color: #305b1e;
`

export default function Header() {
  const [opened, setOpened] = useState(false)
  const title = opened ? 'Close navigation' : 'Open navigation'
  const theme = useMantineTheme()
  return (
    <>
      <Container size={'lg'}>
        <HeaderContainer>
          <Link href={'/'}>
            <a>
              <Logo
                style={{
                  cursor: 'pointer'
                }}
                width={180}
              />
            </a>
          </Link>
          <Inicio>
            <ActiveLink name={'Início'} key={'inicio'} href={'/'} />
          </Inicio>
          <Venda>
            <ActiveLink name={'Venda'} key={'venda'} href={'/venda'} />
          </Venda>
          <Sobre>
            <ActiveLink name={'Sobre'} key={'sobre'} href={'/sobre'} />
          </Sobre>
          <Contato>
            <ActiveLink name={'Contato'} key={'contato'} href={'/contato'} />
          </Contato>
          <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=5551996966086"
            rightIcon={<WhatsApp width={18} fill="#ffff" />}
            styles={(theme) => ({
              root: {
                backgroundColor: '#305B1E',
                height: 35,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 12,
                [`@media (max-width: 600px)`]: {
                  display: 'none'
                },
                transition: 'all 0.3s ease-out',
                '&:hover': {
                  backgroundColor: theme.fn.darken('#F6B72A', 0.05),
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease-out'
                }
              }
            })}
          >
            Entre em contato
          </Button>
          <Hamburguer>
            <Burger
              color="#305B1E"
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
            />
            <Drawer
              opened={opened}
              onClose={() => setOpened(false)}
              padding={theme.spacing.md * 1.6}
              size="sm"
              position="right"
            >
              <Group spacing="xs">
                <Home
                  width={22}
                  style={{
                    marginRight: 3
                  }}
                  fill="#F6B72A"
                />
                <Link href={'/'}>
                  <a
                    style={{
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <TitleMenu>Início</TitleMenu>
                  </a>
                </Link>
              </Group>
              <Group spacing="xs">
                <Local width={24} fill="#F6B72A" />{' '}
                <a
                  href="https://www.google.com/maps/dir//R.+S%C3%A3o+Rafael,+653+-+Nossa+Sra.+de+Fatima+Cachoeira+do+Sul+-+RS+96506-110/@-30.0526279,-52.9062219,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x9504a7b277bc80e5:0xc4b6423d57479ce"
                  target={'_blank'}
                  rel="noreferrer"
                  style={{
                    textDecoration: 'none'
                  }}
                >
                  <TitleMenu>Localização</TitleMenu>
                </a>
              </Group>
              <Group spacing="xs">
                <Sale fill="#F6B72A" width={24} />
                <Link href={'/venda'}>
                  <a
                    style={{
                      cursor: 'pointer',
                      textDecoration: 'none'
                    }}
                  >
                    <TitleMenu>Venda</TitleMenu>
                  </a>
                </Link>
              </Group>
              <Group spacing="xs">
                <WhatsApp fill="#F6B72A" width={24} />
                <a
                  href="https://api.whatsapp.com/send?phone=5551996966086"
                  target={'_blank'}
                  rel="noreferrer"
                  style={{
                    textDecoration: 'none'
                  }}
                >
                  <TitleMenu>Fale comigo</TitleMenu>
                </a>
              </Group>
              <Group spacing="xs">
                <ContatForm fill="#F6B72A" width={26} />
                <Link href={'/contato'}>
                  <TitleMenu>Contato</TitleMenu>
                </Link>
              </Group>
              <Group spacing="xs">
                <About fill="#F6B72A" width={24} />
                <Link
                  style={{
                    cursor: 'pointer'
                  }}
                  href={'/sobre'}
                  prefetch={true}
                >
                  <a
                    style={{
                      cursor: 'pointer',
                      textDecoration: 'none'
                    }}
                  >
                    <TitleMenu>Sobre</TitleMenu>
                  </a>
                </Link>
              </Group>
            </Drawer>
          </Hamburguer>
        </HeaderContainer>
      </Container>
    </>
  )
}

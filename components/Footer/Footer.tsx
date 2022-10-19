import { createStyles, Text, Group, Container } from '@mantine/core'
import { Informacoes } from '../../typings'
import styled from 'styled-components'
import Phone from '../../assets/icons/phone.svg'
import Gmail from '../../assets/icons/gmail-yellow.svg'
import Logo from '../../assets/icons/logo-horizontal(branco).svg'
import Facebook from '../../assets/icons/facebook.svg'
import Instagram from '../../assets/icons/instagram.svg'
import WhatsApp from '../../assets/icons/whatsapp.svg'
import Location from '../../assets/icons/localizacao.svg'

const useStyles = createStyles((theme) => ({
  footer: {
    background: '#305B1E',
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl,
    width: '100%'
  },

  logo: {
    maxWidth: 300,
    maxHeight: 'auto',

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center'
    }
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'start'
    }
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '1rem 0 1rem 0'
  },

  link: {
    display: 'grid',
    color: '#ffffff',
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: theme.fontSizes.sm * 1.1,
    transition: 'font-size 0.2s ease-in-out',

    '&:hover': {
      textDecoration: 'underline',
      color: '#fff',
      fontSize: theme.fontSizes.xl / 1.18
    }
  },

  title: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 700,
    color: '#fff',
    marginBottom: theme.spacing.xs / 2,
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg * 1.5
    }
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid #F6B72A`,

    [theme.fn.smallerThan('sm')]: {
      alignItems: 'start'
    }
  },

  social: {
    marginRight: theme.spacing.xl * 2,
    marginTop: theme.spacing.xs * 1.5,
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xl / 1.5
    },
    ':hover': {
      cursor: 'pointer'
    }
  }
}))

const ContainerLinks = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 12px;
  align-items: center;
  justify-content: start;
  margin: 8px 0 8px 0;
`
const TextFooter = styled.p`
  color: #fff;
  font-size: 1rem;
  margin: 0;

  span {
    font-weight: 700;
  }
`
const TextOutline = styled.div`
  display: grid;
  color: #305b1e;
  border: 1px solid #f6b72a;
  border-radius: 1rem;
  padding: 0 1rem;
  height: 64px;
  width: 264px;
  align-items: center;
  margin: 1rem 0 0 0;
`

export function Footer({ data }: { data: Informacoes[] }) {
  const { classes } = useStyles()

  const location = data?.map((item) => {
    const location = item.location
    const replace = location?.replace(/ /g, '+')
    return replace
  })

  return (
    <footer className={classes.footer}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.logo}>
            <Logo width={172} />
            <TextOutline>
              <TextFooter>
                {' '}
                ANAJARA ALVES DE OLIVEIRA <span>CRECI 70.828</span>
              </TextFooter>
            </TextOutline>
          </div>
          <div className={classes.wrapper}>
            <ContainerLinks>
              <Location
                width={22}
                fill="#F6B72A"
                style={{
                  margin: '0 4px 0 0'
                }}
              />
              <a
                href={`https://www.google.com.br/maps/place/${location}`}
                target={'_blank'}
                rel="noreferrer"
                style={{
                  textDecoration: 'none'
                }}
              >
                <Text className={classes.link}>
                  {data?.map((item) => item.location)}
                </Text>
              </a>
            </ContainerLinks>
            <ContainerLinks>
              <Phone
                width={22}
                style={{
                  margin: '0 0px 0 0'
                }}
              />
              <a
                style={{
                  textDecoration: 'none'
                }}
                href={`tel:${data?.map((item) => item.phone)}`}
                target={'_blank'}
                rel="noreferrer"
              >
                <Text className={classes.link}>
                  {data?.map((item) => item.phone)}
                </Text>
              </a>
            </ContainerLinks>
            <ContainerLinks>
              <Gmail
                width={22}
                style={{
                  cursor: 'pointer',
                  margin: '3px 1px 0 0'
                }}
              />
              <a
                style={{
                  textDecoration: 'none'
                }}
                href={`mailto:${data?.map((item) => item.gmail)}`}
                target={'_blank'}
                rel="noreferrer"
              >
                <Text className={classes.link}>
                  {data?.map((item) => item.gmail)}
                </Text>
              </a>
            </ContainerLinks>
          </div>
        </div>
        <Group spacing={16} className={classes.social} position="left" noWrap>
          <a
            href={`${data?.map((item) => item.facebook)}`}
            target={'_blank'}
            rel="noreferrer"
          >
            {<Facebook color="#fff" size={25} stroke={'1.5'} />}
          </a>
          <a
            href={`${data?.map((item) => item.instagram)}`}
            target={'_blank'}
            rel="noreferrer"
          >
            <Instagram color="#fff" size={24} stroke={'1.5'} />
          </a>
          <a
            href={`https://api.whatsapp.com/send/?phone=${data?.map(
              (item) => item.whatsApp
            )}`}
            target={'_blank'}
            rel="noreferrer"
          >
            <WhatsApp width={27} fill="#F6B72A" stroke={'1.5'} />
          </a>
        </Group>
        <div className={classes.afterFooter}>
          <Text color="#fff" size="sm">
            © 2022 - Bella Vista Imóveis
          </Text>
        </div>
      </Container>
    </footer>
  )
}

import { Footer } from '../components/Footer/Footer'
import { Informacoes } from '../typings'
import { GraphQLClient } from 'graphql-request'
import { Form } from '../components/Form/Form'
import { Container } from '@mantine/core'
import Header from '../components/Header/Header'

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

export default function Contact({
  informacoes
}: {
  informacoes: Informacoes[]
}) {
  return (
    <>
      <Header />
      <Container size="lg">
        <Form />
      </Container>
      <Footer data={informacoes} />
    </>
  )
}

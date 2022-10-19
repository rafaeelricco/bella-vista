import { Container } from '@mantine/core'
import styled from 'styled-components'
import Bellavista from '../../assets/icons/logo-horizontal(branco).svg'
import MissaoIcon from '../../assets/icons/missao.svg'
import VisaoIcon from '../../assets/icons/visao.svg'
import ValoresIcon from '../../assets/icons/valores.svg'

const BackgroundContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 224px;
  background: #305b1e;
`
const Text = styled.p`
  display: grid;
  grid-template-columns: 0.8fr;
  justify-content: center;
  font-size: large;
  color: #305b1e;
  text-align: center;
  margin: 1.618rem 0 1.618rem 0;
`
const SquarText = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: -1.618rem 0 1rem 0;
`
const TextOutline = styled.p`
  font-size: large;
  color: #305b1e;
  border: 1px solid #305b1e;
  padding: 0.418rem 1rem;
  border-radius: 1rem;
  text-align: center;

  strong {
    font-weight: 800;
    color: #f6b72a;
  }
`
const MissaoVisaoValores = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1.218rem;
`

const Card = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  border: 0.933236px solid #f6b72a;
  border-radius: 32px;
  height: 524px;
  width: 362px;
  padding: 1.618rem;
  @media (max-width: 400px) {
    width: 90%;
    height: calc(100% + 1.618rem);
  }

  h2 {
    font-size: 26px;
    color: #305b1e;
    margin: 0 0 0.118rem 0;
    @media (max-width: 400px) {
      font-size: 24px;
    }
  }
  p {
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    margin: 0;
    color: rgba(48, 91, 30, 0.72);
    @media (max-width: 400px) {
      font-size: 16px;
    }
  }

  strong {
    color: #f6b72a;
    font-weight: bold;
  }
`

const Anajara = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 5rem 0 5rem 0;
  h1 {
    font-size: 40px;
    font-weight: 800;
    color: #f6b72a;
    transition: all 0.3s ease-out;
    @media (max-width: 600px) {
      font-size: 36px;
      margin-top: -1.618rem;
    }
  }
  p {
    color: #305b1e;
    font-size: 18px;
  }
`
const ImageAnaj = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
  border-radius: 2rem;
  @media (max-width: 1000px) {
    height: 500px;
    object-position: 25% 0;
  }
  @media (max-width: 600px) {
  }
`
const ContainerAnaj = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 3rem;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`

const TextAnaj = styled.div`
  h1 {
    margin: 0 0 -0.818rem 0;
    font-size: 42px;
    @media (max-width: 990px) {
      margin: -2rem 0 -0.618rem 0;
    }
    @media (max-width: 600px) {
      margin: -1.818rem 0 -1rem 0;
      font-size: 36px;
    }
    @media (max-width: 400px) {
      margin: -2.118rem 0 -1rem 0;
      font-size: 28px;
    }
  }
`

export default function About() {
  return (
    <>
      <BackgroundContainer>
        <Bellavista width={'100%'} />
      </BackgroundContainer>
      <Text>
        Unindo os negócios rurais e urbanos, a Bella Vista Imóveis foi criada
        para fazer a diferença e ajudar você a encontrar seu próprio horizonte.
        Oferecemos atendimento personalizado e uma ótima experiência no momento
        da aquisição da sua propriedade rural ou residencial, para o início de
        uma nova história. Trabalhamos com venda de imóveis urbanos e rurais,
        além de negociação para arrendamento de terra.
      </Text>
      <SquarText>
        <TextOutline>
          Conte com a Bella Vista para a <strong>concretização</strong> dos seus{' '}
          <strong>sonhos</strong>!
        </TextOutline>
      </SquarText>
      <MissaoVisaoValores>
        <Card>
          <MissaoIcon
            style={{
              marginBottom: '0.618rem'
            }}
            width={64}
          />
          <h2>Missão</h2>
          <p>
            Atuar no mercado imobiliário, com foco na venda de imóveis urbanos,
            propriedades rurais e arrendamentos de terras, garantindo a
            satisfação dos clientes, através do comprometimento e dedicação em
            todos os processos de compra, gerando uma ótima experiência para a
            realização de sonhos e novas histórias.
          </p>
        </Card>
        <Card>
          <VisaoIcon
            style={{
              marginBottom: '1.618rem'
            }}
            width={64}
          />
          <h2>Visão</h2>
          <p>
            Crescer no setor imobiliário, mantendo o reconhecimento adquirido
            pelos serviços prestados em vendas de imóveis urbanos e rurais, bem
            como arrendamentos. Além disso, expandir o volume de imóveis e
            terras, por meio da qualidade e profissionalização.
          </p>
        </Card>
        <Card>
          <ValoresIcon
            style={{
              marginBottom: '0.618rem'
            }}
            width={64}
          />
          <h2>Valores</h2>
          <p>
            <strong>Ética</strong> – Respeito, honestidade e transparência;{' '}
            <strong>Seriedade</strong> – Comprometimento e profissionalismo, com
            foco na qualidade dos serviços; <strong>Empreendedorismo</strong> –
            Utilização da experiência, conhecimento, soluções inovadores e
            eficazes, agilidade e qualidade, com foco na sustentabilidade.
          </p>
        </Card>
      </MissaoVisaoValores>
      <Container size="lg">
        <Anajara>
          <ContainerAnaj>
            <ImageAnaj src="/images/anajara.webp" alt="Anajara" />
            <TextAnaj>
              <h1>Olá! Me chamo Anajara,</h1>
              <p>
                sou formada em Direito pela Ulbra Cachoeira do Sul desde 2004.
                Em 2018, realizei minha pós-graduação em Responsabilidades Civil
                e Contratos e, junto a isso, iniciei o curso para ser corretora
                de imóveis.
              </p>
              <p>
                Decidi me especializar em negócios imobiliários rurais devido a
                minha história com o campo e com os meus pais. Nasci e cresci no
                meio da lida campeira e, após a partida do meu pai, mudei minha
                vida, passando a seguir seus passos e indo trabalhar na lida
                rural, assim como ele fazia. Minha mãe também foi fundamental e
                esteve presente em todos os momentos da minha vida.
              </p>
              <p>
                Ao escolher o nome Bella Vista Imóveis, decidi fazer uma
                homenagem a eles e a nossa fazenda, por se tratar de uma herança
                de minha mãe, cultivada com muito amor.
              </p>
              <p>
                Quando comecei a trabalhar com as vendas imobiliárias, percebi a
                satisfação que me trazia por realizar o sonho do meu cliente de
                ter seu imóvel.
              </p>
              <p>
                Atualmente, trabalho com imóveis urbanos e rurais, além de
                arrendamento de terras. Sempre com o objetivo de levar o melhor
                para meus clientes, para realização e encontro do seu próprio
                horizonte.
              </p>
            </TextAnaj>
          </ContainerAnaj>
        </Anajara>
      </Container>
    </>
  )
}

import { Container } from '@mantine/core'
import { PropertyProps } from '../../typings'
import styled from 'styled-components'

const ContainerCard = styled.div`
  display: grid;
  justify-content: center;
  overflow: visible;
`
const BackgroundContainer = styled.div`
  margin: 6rem 0 0rem 0;
  padding: 1.618rem 0 1.618rem 0;
  background: rgba(48, 91, 30, 0.04);
`
const Title = styled.h1`
  font-size: 2.218rem;
  color: #305b1e;
  margin: 0;
  transition: all 0.3s ease-out;
  @media (max-width: 400px) {
    font-size: 2rem;
    margin: 0 0 1rem 0;
  }
`
const Description = styled.p`
  color: rgba(48, 91, 30, 0.72);
  margin: 0.618rem 0 1.618rem 0;
  @media (max-width: 400px) {
    margin: 0.118rem 0 1.618rem 0;
  }
`
const Mark = styled.div`
  width: 8px;
  height: 54px;
  background: #f6b72a;
  @media (max-width: 400px) {
    margin: 0 0 1rem 0;
  }
`
const ContainerTitle = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`

export default function Properties({ title, description }: PropertyProps) {
  return (
    <>
      <BackgroundContainer>
        <Container size="lg">
          <ContainerTitle>
            <Mark />
            <Title>{title}</Title>
          </ContainerTitle>
          <Description>{description}</Description>
        </Container>
      </BackgroundContainer>
    </>
  )
}

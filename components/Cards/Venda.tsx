/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import { CardProps } from '../../typings'
import { conditional } from '../../utils/conditional-render'
import Area from '/assets/icons/area.svg'
import Bathroom from '/assets/icons/banheiros.svg'
import Bedroom from '/assets/icons/dormitorios.svg'
import Garage from '/assets/icons/garagem.svg'
import Parking from '/assets/icons/parking.svg'
import Commercial from '/assets/icons/sala-comercial.svg'
import Suit from '/assets/icons/suite.svg'

const widthCard = '100%'

const CardContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  height: 244px;
  width: ${widthCard};
  background: #ffffff;
  border-radius: 32px;
  -webkit-box-shadow: 12px 32px 32px -16px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 12px 32px 32px -16px rgba(0, 0, 0, 0.16);
  box-shadow: 12px 32px 32px -16px rgba(0, 0, 0, 0.16);
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    scale: 1.05;
    transition: all 0.3s ease-out;
    -webkit-box-shadow: 12px 32px 32px -16px rgba(0, 0, 0, 0.08);
    -moz-box-shadow: 12px 32px 32px -16px rgba(0, 0, 0, 0.08);
    box-shadow: 12px 32px 32px -16px rgba(0, 0, 0, 0.08);
  }
  @media (max-width: 1080px) {
    width: 100%;
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    height: 100%;
    width: 100%;
  }
`
const TitleCard = styled.h1`
  font-size: 1.618rem;
  color: rgba(48, 91, 30, 0.8);
  margin: 0;
  transition: all 0.3s ease-out;
  @media (max-width: 680px) {
    margin: -1.518rem 0 0 0;
  }
`
const DescriptionCard = styled.div`
  color: rgba(48, 91, 30, 0.8);

  div {
    white-space: normal;
    max-width: 46ch;
    overflow: hidden;
    max-height: 9ch;
    text-overflow: ellipsis;
    margin: 0 0 0.718rem 0;
    @media (max-width: 500px) {
      max-width: 40ch;
      max-height: 10ch;
      overflow: overlay;
      margin: 0 0 1rem 0;
    }
  }
  p {
    margin: 0.118rem 0 0.618rem 0;
    @media (max-width: 500px) {
      margin: 0.118rem 0 1rem 0;
    }
  }
`
const ImageCard = styled.img`
  width: 600px;
  height: 244px;
  border-radius: 40px;
  object-fit: cover;
  padding: 1rem;
  transition: all 0.3s ease-out;
  @media (max-width: 905px) {
    width: 400px;
  }
  @media (max-width: 748px) {
    width: 300px;
  }
  @media (max-width: 680px) {
    width: 100%;
    height: 232px;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 254px;
  }
`
const DetailsCard = styled.div`
  display: grid;
  align-content: center;
  padding: 1rem 1rem 0.618rem 1rem;
`
const DetailContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  grid-template-rows: 32px;
  gap: 0.318rem;
  height: 2.118rem;
  padding: 0.818rem;
  background: rgba(228, 228, 228, 0.24);
  border-radius: 12px;
`
const Detail = styled.p`
  font-size: 0.918rem;
  letter-spacing: -0.5px;
  color: #305b1e;
`
const LayoutDetails = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 0.618rem;
  transition: all 0.3s ease-out;
  @media (max-width: 680px) {
    margin: -0.218rem 0 0.618rem 0;
  }
`

export default function Card({
  link,
  img,
  alt,
  title,
  description,
  bedrooms,
  bathrooms,
  area,
  suit,
  commercial,
  garage,
  parking
}: CardProps) {
  return (
    <>
      <a href={link}>
        <CardContainer>
          <ImageCard src={img} alt={alt} />
          <DetailsCard>
            <TitleCard>{title}</TitleCard>
            <DescriptionCard>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </DescriptionCard>
            <LayoutDetails>
              <DetailContainer
                style={{
                  display: conditional(area)
                }}>
                <Area width={16} />
                <Detail>{area}</Detail>
              </DetailContainer>

              <DetailContainer
                style={{
                  display: conditional(bedrooms)
                }}>
                <Bedroom width={16} />
                <Detail>{bedrooms}</Detail>
              </DetailContainer>

              <DetailContainer
                style={{
                  display: conditional(bathrooms)
                }}>
                <Bathroom width={16} />
                <Detail>{bathrooms}</Detail>
              </DetailContainer>

              <DetailContainer
                style={{
                  display: conditional(garage)
                }}>
                <Garage fill={'#F6B72A'} width={15} />
                <Detail>{garage}</Detail>
              </DetailContainer>

              <DetailContainer
                style={{
                  display: conditional(suit)
                }}>
                <Suit fill={'#F6B72A'} width={16} />
                <Detail>{suit}</Detail>
              </DetailContainer>

              <DetailContainer
                style={{
                  display: conditional(commercial)
                }}>
                <Commercial fill={'#F6B72A'} width={16} />
                <Detail>{commercial}</Detail>
              </DetailContainer>

              <DetailContainer
                style={{
                  display: conditional(parking)
                }}>
                <Parking fill={'#F6B72A'} width={16} />
                <Detail>{parking}</Detail>
              </DetailContainer>
            </LayoutDetails>
          </DetailsCard>
        </CardContainer>
      </a>
    </>
  )
}

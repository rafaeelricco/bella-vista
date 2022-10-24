/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import {
  Area,
  Bathroom,
  Bedroom,
  Commercial,
  Garage,
  Parking,
  Suit
} from '../../utils/icons'
import Link from 'next/link'
import { conditional } from '../../utils/conditional-render'
import { CardProps } from '../../typings'
import Image from 'next/image'

const CardContainer = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr;
  width: 324px;
  height: 440px;
  background: #ffffff;
  border-radius: 32px;
  -webkit-box-shadow: 12px 32px 32px -16px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 12px 32px 32px -16px rgba(0, 0, 0, 0.16);
  box-shadow: 12px 32px 32px -16px rgba(0, 0, 0, 0.16);
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    scale: 1.05;
    -webkit-box-shadow: 12px 32px 32px -16px rgba(0, 0, 0, 0.08);
    -moz-box-shadow: 12px 32px 32px -16px rgba(0, 0, 0, 0.08);
    box-shadow: 12px 32px 32px -16px rgba(0, 0, 0, 0.08);
  }
`
const TitleCard = styled.h1`
  font-size: 1.618rem;
  color: rgba(48, 91, 30, 0.8);
  margin: -1rem 0 0 0;
  transition: all 0.3s ease-out;
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
const DescriptionCard = styled.div`
  color: rgba(48, 91, 30, 0.8);

  div {
    white-space: normal;
    max-width: 32ch;
    overflow: hidden;
    max-height: 8ch;
    text-overflow: ellipsis;
    margin: 0 0 0.818rem 0;
    @media (max-width: 500px) {
      max-width: 40ch;
      max-height: 10ch;
      overflow: overlay;
      margin: 0 0 0.618rem 0;
    }
  }
  p {
    margin: 0.118rem 0 0.618rem 0;
    @media (max-width: 500px) {
      margin: 0.118rem 0 0.618rem 0;
    }
  }
`
const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: flex-start;
  padding: 0rem 1rem 0.618rem 1rem;
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
export default function CardHome({
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
      <Link href={link}>
        <CardContainer>
          <Image
            className="image-card"
            quality={30}
            width={324}
            height={232}
            src={img}
            alt={alt}
          />
          <DetailsCard>
            <TitleCard>{title}</TitleCard>
            <DescriptionCard>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </DescriptionCard>
            <LayoutDetails>
              <DetailContainer
                style={{
                  display: conditional(area)
                }}
              >
                <Area width={16} />
                <Detail>{area}</Detail>
              </DetailContainer>

              <DetailContainer
                style={{
                  display: conditional(bedrooms)
                }}
              >
                <Bedroom width={16} />
                <Detail>{bedrooms}</Detail>
              </DetailContainer>

              <DetailContainer
                style={{
                  display: conditional(bathrooms)
                }}
              >
                <Bathroom width={16} />
                <Detail>{bathrooms}</Detail>
              </DetailContainer>

              <DetailContainer
                style={{
                  display: conditional(garage)
                }}
              >
                <Garage fill={'#F6B72A'} width={15} />
                <Detail>{garage}</Detail>
              </DetailContainer>

              <DetailContainer
                style={{
                  display: conditional(suit)
                }}
              >
                <Suit fill={'#F6B72A'} width={16} />
                <Detail>{suit}</Detail>
              </DetailContainer>

              <DetailContainer
                style={{
                  display: conditional(commercial)
                }}
              >
                <Commercial fill={'#F6B72A'} width={16} />
                <Detail>{commercial}</Detail>
              </DetailContainer>

              <DetailContainer
                style={{
                  display: conditional(parking)
                }}
              >
                <Parking fill={'#F6B72A'} width={16} />
                <Detail>{parking}</Detail>
              </DetailContainer>
            </LayoutDetails>
          </DetailsCard>
        </CardContainer>
      </Link>
    </>
  )
}

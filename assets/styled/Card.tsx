import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr;
  width: 324px;
  height: 424px;
  background: #ffffff;
  border-radius: 32px;
  -webkit-box-shadow: 12px 32px 32px -16px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 12px 32px 32px -16px rgba(0, 0, 0, 0.16);
  box-shadow: 12px 32px 32px -16px rgba(0, 0, 0, 0.16);
  transition: all 0.3s ease-out;
  cursor: pointer;
`

export const TitleCard = styled.h1`
  font-size: 1.618rem;
  color: #305b1e;
  padding: 0 1.218rem 0 1.218rem;
  margin: -1rem 0 0 0;
`

export const DescriptionCard = styled.div`
  color: #305b1e;
  padding: 0 1.218rem 0 1.218rem;
  margin: 0;

  div {
    white-space: normal;
    max-width: 46ch;
    overflow: hidden;
    max-height: 9ch;
    text-overflow: ellipsis;
    margin: 0 0.718rem 0.718rem 0;
  }
`

export const ImageCard = styled.img`
  width: 324px;
  height: 232px;
  border-radius: 40px;
  padding: 0.618rem;
`
export const DetailsCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 1rem;
  padding: 1.218rem 1.218rem 0.618rem 1.218rem;
`

export const DetailContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  grid-template-rows: 32px;
  gap: 0.318rem;
  height: 2.118rem;
  background: rgba(228, 228, 228, 0.24);
  border-radius: 12px;
`

export const Detail = styled.p`
  font-size: 0.918rem;
  letter-spacing: -0.5px;
  color: #305b1e;
`

export const ContainerCard = styled.div`
  display: grid;
  justify-content: center;
  overflow: visible;
`
export const ContainerCardHome = styled.div`
  background: rgba(48, 91, 30, 0.04);
  margin: 0 0 0 0;
`

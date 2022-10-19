interface StaticImageData {
  src: string
  height: number
  width: number
  placeholder: string
}

declare module '*.svg' {
  import React from 'react'
  const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

  export default Component
}

interface Value {
  map: any
  item: any
  value: string
  label: string
  group: string
  name: string
  category: string
}

interface Immobile {
  id: number
  name: string
  description: {
    __html: string
    html: string
    raw: string
    text: string
  }
  category: string
  type: string
  images: {
    map: any
    [key: number]: {
      id: number
      url: string
    }
    id: number
    url: string
  }
  url: string
  location: string
  reference_point: string
  size_area: any
  price: string
  bedrooms: number
  bathrooms: number
  garage: number
  parking: number
  suits: number
  commercial_room: number
  value: Value
  map: any
  tags: string
}

interface Informacoes {
  id: number
  phone: string
  gmail: string
  location: string
  instagram: string
  facebook: string
  whatsApp: string
  map: any
  data: any
}

interface CardProps {
  link: string
  alt: string
  img: string
  title: string
  area: number
  suit: number
  bedrooms: number
  bathrooms: number
  garage: number
  commercial: number
  description: string
  parking: number
}

interface PropertyProps {
  title: string
  description: string
}

export type { Immobile, Informacoes, CardProps, PropertyProps, Value }

import { useRouter } from 'next/router'
import styled from 'styled-components'

interface Props {
  href: string
  name: string
}

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`

function ActiveLink({ href, name }: Props) {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === href ? '#F6B72A' : '#305B1E',
    fontWeight: router.asPath === href ? 'bold' : 'normal'
  }

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Anchor href={href} onClick={handleClick} style={style}>
      {name}
    </Anchor>
  )
}

export default ActiveLink

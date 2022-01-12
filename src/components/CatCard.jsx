import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const CardContainer = styled.div`
  border: 1px solid red;
  margin: 15px;
`
const Header = styled.h2`
  text-transform: capitalize;
  color: #222629;
`
const Paragraph = styled.p`
  color: #222629;
`

export const CatCard = ({ cat }) => {
  return (
    <>
      <Link to={`/reviews?category=${cat.slug}`}>
        <CardContainer>
          <Header>{cat.slug}</Header>
          <Paragraph>{cat.description}</Paragraph>
        </CardContainer>
      </Link>
    </>
  )
}

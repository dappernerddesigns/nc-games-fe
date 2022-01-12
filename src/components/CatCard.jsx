import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const CardContainer = styled.div`
  background-color: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 1rem;
  margin: 15px;
  padding: 12px;
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

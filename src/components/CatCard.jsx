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
  margin-bottom: 20px;
  padding: 15px;
  width: 85%;
`
const Header = styled.h2`
  text-transform: capitalize;
  color: #222629;
  text-align: center;
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
          {<Paragraph>{cat.description}</Paragraph>}
        </CardContainer>
      </Link>
    </>
  )
}

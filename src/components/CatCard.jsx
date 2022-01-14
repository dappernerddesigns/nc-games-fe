import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
  &:hover {
    box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.53);
  }
`
const Header = styled.h2`
  text-transform: capitalize;
  text-align: center;
  font-size: 1.5rem;
`

export const CatCard = ({ cat }) => {
  return (
    <>
      <Link
        to={`/reviews?category=${cat.slug}`}
        style={{ textDecoration: 'none' }}
      >
        <CardContainer>
          <Header>{cat.slug}</Header>
          {<p>{cat.description}</p>}
        </CardContainer>
      </Link>
    </>
  )
}

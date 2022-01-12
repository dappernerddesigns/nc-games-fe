import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Container = styled.div`
  background-color: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 1rem;
  margin: 15px;
  margin-top: 15px;
  padding: 12px;
  color: #061826;
`

const Button = styled.button`
  background-color: #ee6c1b;
  border: none;
  color: white;
  padding: 15px;
  margin: 10px;
  border-radius: 12px;
`
export const Home = () => {
  return (
    <Container>
      <p>
        A little corner of the internet where we take games and decide if we
        like them or not!
      </p>
      <p>
        Pick a category of game to get started, or just pile into our reviews!
      </p>
      <Link to="/categories">
        <Button>Show me categories!</Button>
      </Link>
      <Link to="/reviews">
        <Button>Let me at everything!</Button>
      </Link>
    </Container>
  )
}

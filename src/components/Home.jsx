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
const Icon = styled.i`
  color: white;
  font-size: 30px;
  margin: 16px;
`
const Header = styled.h1`
  font-weight: bold;
  text-align: center;
  color: #061826;
  font-size: 2rem;
`

export const Home = () => {
  return (
    <Container>
      <Header>NC Games</Header>
      <p>
        A little corner of the internet where we take games and decide if we
        like them or not!
      </p>
      <p>
        Pick a category of game to get started, or just pile into our reviews!
      </p>
      <Link to="/categories">
        <Button>
          <Icon className="fas fa-folder-open" />
          Show me categories!
        </Button>
      </Link>
      <Link to="/reviews">
        <Button>
          <Icon className="fas fa-dice-d20" />
          Let me at everything!
        </Button>
      </Link>
    </Container>
  )
}

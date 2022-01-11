import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Button = styled.button``
export const Home = () => {
  return (
    <div>
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
    </div>
  )
}

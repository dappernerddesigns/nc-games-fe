import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../img/nc_logo_white.png'

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
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`

const Logo = styled.img`
  height: 70px;
  margin-top: 12px;
  margin-bottom: 12px;

  padding: 0;
  align-self: center;
`
const Icon = styled.i`
  color: #ee6c1b;
  font-size: 2.5rem;
  margin: 16px;
  padding: 0;
  align-self: center;
`
export const Nav = () => {
  return (
    <Container>
      <Link to="/">
        <Logo className="logo" src={logo} />
      </Link>

      <Link to="/categories">
        <Icon className="fas fa-folder-open" />
      </Link>
      <Link to="/reviews">
        <Icon className="fas fa-dice-d20" />
      </Link>
      <Link to="/users">
        <Icon className="fas fa-users" />
      </Link>
    </Container>
  )
}

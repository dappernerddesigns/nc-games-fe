import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
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
const Header = styled.h1`
  font-weight: bold;
  text-align: center;
  color: #061826;
  font-size: 2rem;
`
const Logo = styled.img`
  height: 70px;
  margin-top: 12px;
  margin-bottom: 12px;

  padding: 0;
  vertical-align: middle;
`

export const Nav = () => {
  return (
    <Container>
      <Link to="/">
        <Logo className="logo" src={logo} />
        <Header>NC Games</Header>
      </Link>
      {/* <Link to="/categories">Categories</Link>
      <Link to="/users">
        <i className="fas fa-users"></i>
      </Link> */}
    </Container>
  )
}

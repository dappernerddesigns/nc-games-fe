import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import logo from '../img/nc_logo_white.png'

const Container = styled.div`
  border: 1px solid #222629;
  background-color: #222629;
`
const Header = styled.h1`
  font-weight: bold;
  position: relative;
  color: #86c232;
  font-size: 2rem;
`
const NavLink = styled.a`
  color: #86c232;
  margin: 8px;
  font-size: 1.5rem;
  text-decoration: none;
  &:hover {
  }
`

export const Nav = () => {
  return (
    <Container>
      <Link to="/">
        <img className="logo" src={logo} />
        <Header>NC Games</Header>
      </Link>
      <Link to="/categories">
        <NavLink>Categories</NavLink>
      </Link>
      <Link to="/users">
        <NavLink>
          <i className="fas fa-users"></i>
        </NavLink>
      </Link>
    </Container>
  )
}

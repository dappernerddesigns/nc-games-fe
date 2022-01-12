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

export const Nav = () => {
  return (
    <Container>
      <Link to="/">
        <img className="logo" src={logo} />
        <Header>NC Games</Header>
      </Link>
      <Link to="/categories">Categories</Link>
      <Link to="/users">
        <i className="fas fa-users"></i>
      </Link>
    </Container>
  )
}

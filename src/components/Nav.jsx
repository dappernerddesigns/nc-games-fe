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
  display: grid;
  grid-template-columns: 1fr auto 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`
const LogoDiv = styled.div`
  grid-area: 1/1/2/2;
  align-self: auto;
  justify-self: flex-start;
`
const Logo = styled.img`
  height: 70px;
  margin-top: 12px;
  margin-bottom: 12px;
  flex: 1 1 auto;
  padding-left: 3px;
`
const IconDiv = styled.div`
  grid-area: 1/3/2/5;
  align-self: auto;
  justify-self: flex-end;
`
const Icon = styled.i`
  color: #ee6c1b;
  font-size: 2.5rem;
  margin: 24px;
  padding: 0;
`
const NameDiv = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  align-self: center;
  justify-self: flex-start;
  font-size: 1.5rem;
  font-weight: bold;
`
export const Nav = () => {
  return (
    <Container>
      <LogoDiv>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo className="logo" src={logo} />
        </Link>
      </LogoDiv>
      <NameDiv>NC /G</NameDiv>
      <IconDiv>
        <Link to="/categories">
          <Icon className="fas fa-folder-open" />
        </Link>
        <Link to="/reviews">
          <Icon className="fas fa-dice-d20" />
        </Link>
      </IconDiv>
    </Container>
  )
}

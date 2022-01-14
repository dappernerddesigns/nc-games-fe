import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CatCard } from './CatCard'
import { AllCategories } from '../utils/api'
import Loading from '../img/loading.svg'
import styled from 'styled-components'

const CatDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
`
const Header = styled.h1`
  font-size: 2rem;
  text-align: center;
`
const Button = styled.button`
  background-color: #ee6c1b;
  border: none;
  color: white;
  padding: 15px;
  margin: 10px;
  border-radius: 12px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  &:hover {
    background-color: transparent;
    border: 4px solid white;
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`
const LoadingSpin = styled.img`
  max-width: 400px;
  position: absolute;
  top: 25%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
export const Categories = () => {
  const [cats, setCat] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    AllCategories().then((allCats) => {
      setIsLoading(false)
      setCat(allCats)
    })
  }, [])
  return (
    <>
      {isLoading ? (
        <LoadingSpin src={Loading} />
      ) : (
        <CatDisplay>
          <Header>Categories</Header>
          <ul>
            {cats.map((cat) => {
              return <CatCard cat={cat} key={cat.slug} />
            })}
          </ul>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button>Home</Button>
          </Link>
        </CatDisplay>
      )}
    </>
  )
}

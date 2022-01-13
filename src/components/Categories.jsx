import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CatCard } from './CatCard'
import { AllCategories } from '../utils/api'
import Loading from '../img/loading.svg'
import styled from 'styled-components'

const CatDisplay = styled.div``
const Button = styled.button`
  background-color: #ee6c1b;
  border: none;
  color: white;
  padding: 15px;
  margin: 10px;
  border-radius: 12px;
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
        <img src={Loading} />
      ) : (
        <CatDisplay>
          <h1>Categories</h1>
          <ul>
            {cats.map((cat) => {
              return <CatCard cat={cat} key={cat.slug} />
            })}
          </ul>

          <Link to="/">
            <Button>Home</Button>
          </Link>
        </CatDisplay>
      )}
    </>
  )
}

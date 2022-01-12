import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CatCard } from './CatCard'
import { AllCategories } from '../utils/api'
import Loading from '../img/loading.svg'
import styled from 'styled-components'

const CatDisplay = styled.div``

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
          <h1>Reviews by Category</h1>
          <ul>
            {cats.map((cat) => {
              return <CatCard cat={cat} key={cat.slug} />
            })}
          </ul>

          <Link to="/">
            <button>Home</button>
          </Link>
        </CatDisplay>
      )}
    </>
  )
}

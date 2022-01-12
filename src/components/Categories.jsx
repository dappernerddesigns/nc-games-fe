import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CatCard } from './CatCard'
import { AllCategories } from '../utils/api'
import Loading from '../img/loading.svg'

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
        <div>
          <ul>
            {cats.map((cat) => {
              return <CatCard cat={cat} key={cat.slug} />
            })}
          </ul>

          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      )}
    </>
  )
}

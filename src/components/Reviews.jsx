import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AllReviews } from '../utils/api'
import { ReviewCard } from './ReviewCard'
import Loading from '../img/loading.svg'
import { useSearchParams } from 'react-router-dom'

export const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)

  const category = searchParams.get('category')
  console.log(searchParams.get('category'))

  useEffect(() => {
    if (category) {
      AllReviews(category).then((allReviews) => {
        setIsLoading(false)
        setReviews(allReviews)
      })
    } else {
      AllReviews().then((res) => {
        setIsLoading(false)
        setReviews(res)
      })
    }
  }, [])

  return (
    <>
      {isLoading ? (
        <img src={Loading} />
      ) : (
        <div>
          <h1>All reviews</h1>
          <ul>
            {reviews.map((review) => {
              return <ReviewCard review={review} />
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

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AllReviews, AllReviewsByQuery } from '../utils/api'
import { ReviewCard } from './ReviewCard'
import Loading from '../img/loading.svg'
import { useSearchParams, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Sort } from './Sort'

const List = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  padding: 0;
  margin-top: 50px;
`
const Header = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`
const Span = styled.span`
  font-style: italic;
  font-size: 1.5rem;
  text-transform: capitalize;
`
const Button = styled.button`
  background-color: #ee6c1b;
  border: none;
  color: white;
  padding: 15px;
  margin: 10px;
  border-radius: 12px;
`

export const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams] = useSearchParams()

  const category = searchParams.get('category')

  const query = useLocation()

  useEffect(() => {
    if (query.search) {
      AllReviewsByQuery(query.search).then((res) => {
        setIsLoading(false)
        setReviews(res)
      })
    } else
      AllReviews().then((res) => {
        setIsLoading(false)
        setReviews(res)
      })
  }, [query])

  const sortBy = () => {}

  return (
    <>
      {isLoading ? (
        <img src={Loading} />
      ) : (
        <div>
          {category ? (
            <Header>
              Reviews for <Span>{category} games</Span>
            </Header>
          ) : (
            <Header>All game reviews</Header>
          )}
          <Sort query={query.search} />
          <List>
            <ul>
              {reviews.map((review) => {
                return <ReviewCard review={review} key={review.review_id} />
              })}
            </ul>
          </List>
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </div>
      )}
    </>
  )
}

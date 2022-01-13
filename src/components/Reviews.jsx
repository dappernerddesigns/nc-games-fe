import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AllReviewsByQuery } from '../utils/api'
import { ReviewCard } from './ReviewCard'
import Loading from '../img/loading.svg'
import { useSearchParams } from 'react-router-dom'
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
  const [data, setData] = useState('')
  const [searchParams] = useSearchParams()

  const category = searchParams.get('category')

  const query = useLocation()

  function handleChange(e) {
    if (query.search.includes('category')) {
      setData(`${query.search}&${e.target.value}`)
    } else {
      setData(`?${e.target.value}`)
    }
  }

  useEffect(() => {
    console.log('refreshing list')
    AllReviewsByQuery(data).then((res) => {
      setIsLoading(false)
      setReviews(res)
    })
  }, [data])

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
          <Sort dropChange={handleChange} />
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

import { Link, useParams } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { useState, useEffect } from 'react'
import { ReviewByID } from '../utils/api'
import Loading from '../img/loading.svg'

export const Review = () => {
  const params = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const [OneReview, setOneReview] = useState({})

  useEffect(() => {
    ReviewByID(params.review_id).then((result) => {
      setIsLoading(false)
      setOneReview(result)
      console.log(result)
    })
  }, [])
  return (
    <>
      {isLoading ? (
        <img src={Loading} />
      ) : (
        <div>
          <h2>{OneReview.title}</h2>
          <p>Contributor: {OneReview.owner}</p>
          <p>Game Designer: {OneReview.designer}</p>
          <img className="review-img" src={OneReview.review_img_url} />
          <p>{OneReview.review_body}</p>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      )}
    </>
  )
}

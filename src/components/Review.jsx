import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { ReviewByID } from '../utils/api'
import Loading from '../img/loading.svg'
import { Comments } from './Comments'
import { Votes } from './Votes'

export const Review = () => {
  const params = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const [OneReview, setOneReview] = useState({})
  const [showComment, setShowComment] = useState(false)

  useEffect(() => {
    ReviewByID(params.review_id).then((result) => {
      setIsLoading(false)
      setOneReview(result)
    })
  }, [])

  function isClicked() {
    if (showComment === false) {
      setShowComment(true)
    } else {
      setShowComment(false)
    }
  }
  console.log(OneReview.votes)
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
          <p>Comments: {OneReview.comment_count}</p>

          {OneReview.review_id && (
            <Votes votes={OneReview.votes} review_id={OneReview.review_id} />
          )}
          {showComment ? null : (
            <button onClick={isClicked}>Show comments</button>
          )}
          {showComment ? (
            <button onClick={isClicked}>Hide comments</button>
          ) : null}
          {showComment ? <Comments /> : null}

          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      )}
    </>
  )
}

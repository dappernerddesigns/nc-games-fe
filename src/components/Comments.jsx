import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CommentsByReview } from '../utils/api'
import { CommentCard } from './CommentCard'
import Loading from '../img/loading.svg'

export const Comments = () => {
  const { review_id } = useParams()

  const [comments, setComments] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    CommentsByReview(review_id).then((res) => {
      setComments(res)
      setIsLoading(false)
      console.log(res)
    })
  }, [])

  return (
    <>
      {isLoading ? (
        <img src={Loading} />
      ) : (
        <div>
          <ul>
            {comments.map((comment) => {
              return <CommentCard comment={comment} key={comment.comment_id} />
            })}
          </ul>
        </div>
      )}
    </>
  )
}

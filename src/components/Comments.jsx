import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CommentsByReview, AddComment } from '../utils/api'
import { CommentCard } from './CommentCard'
import Loading from '../img/loading.svg'
import { PostComment } from './PostComment'
import styled from 'styled-components'

const CommentContainer = styled.div`
  padding: 0;
`

export const Comments = () => {
  const { review_id } = useParams()

  const [comments, setComments] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    CommentsByReview(review_id).then((res) => {
      setComments(res)
      setIsLoading(false)
    })
  }, [review_id])

  const addComment = (text) => {
    console.log('user commented>>', text)
    AddComment(review_id, text)
      .then((res) => {
        setComments((currentComments) => {
          return [res, ...currentComments]
        })
      })
      .catch((err) => {
        console.log(err, '<<<errors')
      })
  }

  console.log(comments)
  return (
    <>
      {isLoading ? (
        <img src={Loading} />
      ) : (
        <div>
          <div className="comments-form">
            <PostComment submitLabel="Write" handleSubmit={addComment} />
          </div>
          <CommentContainer>
            <ul>
              {comments.map((comment) => {
                return (
                  <CommentCard comment={comment} key={comment.comment_id} />
                )
              })}
            </ul>
          </CommentContainer>
        </div>
      )}
    </>
  )
}

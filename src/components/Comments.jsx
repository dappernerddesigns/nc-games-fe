import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CommentsByReview, AddComment, RemoveComment } from '../utils/api'
import { CommentCard } from './CommentCard'
import Loading from '../img/loading.svg'
import { PostComment } from './PostComment'
import styled from 'styled-components'
import { ErrorPage } from './ErrorPage'

const CommentContainer = styled.div`
  background-color: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 1rem;
  margin: 15px;
  margin-top: 15px;
  padding: 12px;
  text-align: center;
`

export const Comments = ({ commentCount }) => {
  const { review_id } = useParams()

  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const loggedInUser = 'jessjelly'

  useEffect(() => {
    CommentsByReview(review_id)
      .then((res) => {
        setComments(res)
        setIsLoading(false)
      })
      .catch((err) => {
        setError({ err })
      })
  }, [review_id])

  const addComment = (text) => {
    setIsLoading(true)

    AddComment(review_id, text)
      .then((res) => {
        setComments((currentComments) => {
          return [res[0], ...currentComments]
        })
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const deleteComment = (comment_id) => {
    setIsLoading(true)
    RemoveComment(comment_id)
      .then((res) => {
        const newComments = comments.filter(
          (comment) => comment.comment_id !== comment_id,
        )
        setComments(newComments)

        setIsLoading(false)
      })
      .catch((err) => {
        setError({ err })
      })
  }

  if (error) {
    return <ErrorPage message={error} />
  }
  return (
    <>
      {isLoading ? (
        <img src={Loading} />
      ) : (
        <div className="comments-form">
          <PostComment submitLabel="Write" handleSubmit={addComment} />
        </div>
      )}

      {commentCount === 0 ? (
        <CommentContainer>
          <p>Looks like no one has commented yet, start a conversation!</p>
        </CommentContainer>
      ) : (
        <div>
          <ul>
            {comments.map((comment) => {
              return (
                <CommentCard
                  comment={comment}
                  user={loggedInUser}
                  key={comment.comment_id}
                  handleClick={deleteComment}
                />
              )
            })}
          </ul>
        </div>
      )}
    </>
  )
}

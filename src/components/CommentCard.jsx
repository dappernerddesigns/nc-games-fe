import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CommentCard = ({ comment }) => {
  return (
    <div>
      <p>User: {comment.author}</p>
      <p>{comment.body}</p>

      <i className="fas fa-arrow-up"></i>
      <p>{comment.votes}</p>
      <i className="fas fa-arrow-down"></i>
    </div>
  )
}

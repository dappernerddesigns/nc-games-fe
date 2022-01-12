import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CommentDisplay = styled.div`
  background-color: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 1rem;
  margin: 15px;
  padding: 12px;
`

export const CommentCard = ({ comment }) => {
  return (
    <CommentDisplay>
      <p>User: {comment.author}</p>
      <p>{comment.body}</p>

      <p>
        <i className="fas fa-arrow-up"></i>
        {comment.votes} <i className="fas fa-arrow-down"></i>
      </p>
    </CommentDisplay>
  )
}

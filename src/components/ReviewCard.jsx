import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CardContainer = styled.div`
  border: 1px solid red;
  margin: 20px;
`
export const ReviewCard = ({ review }) => {
  return (
    <>
      <Link to={`/reviews/${review.review_id}`}>
        <CardContainer>
          <h2> {review.title}</h2>
          <p>Author: {review.owner}</p>
          <p>Game Designer: {review.designer}</p>
          <p>Review votes: {review.votes}</p>
        </CardContainer>
      </Link>
    </>
  )
}

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { dateFormat } from '../utils/utilFunctions'

const CardContainer = styled.div`
  background-color: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 1rem;
  margin-left: -40px;
  margin-right: 0;

  margin-bottom: 20px;
  padding: 12px;

  &:hover {
    box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.53);
  }
`
const CardImg = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: white;
  float: left;
  margin-right: 12px;
  margin-bottom: 12px;
`
const CardContents = styled.div``

export const ReviewCard = ({ review }) => {
  let date = dateFormat(review.created_at)

  return (
    <>
      <Link
        to={`/reviews/${review.review_id}`}
        style={{ textDecoration: 'none' }}
      >
        <CardContainer>
          <h2> {review.title}</h2>

          <CardImg>
            <img className="thumbnail" src={review.review_img_url} />
          </CardImg>
          <CardContents>
            <p>Author: {review.owner}</p>
            <p>Posted: {date}</p>
            <p>Game Designer: {review.designer}</p>
            <p>Review votes: {review.votes}</p>
            <p>{review.comment_count} comments</p>
          </CardContents>
        </CardContainer>
      </Link>
    </>
  )
}

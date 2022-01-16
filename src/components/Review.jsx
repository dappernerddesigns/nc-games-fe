import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { ReviewByID } from '../utils/api'
import Loading from '../img/loading.svg'
import { Comments } from './Comments'
import { Votes } from './Votes'
import avatar from '../img/avatar.png'
import { ErrorPage } from './ErrorPage'
import { dateFormat } from '../utils/utilFunctions'

const HeroImg = styled.img`
  border-radius: 12px;
`
const MainReview = styled.div`
  background-color: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 1rem;
  margin: 15px;
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto, 1fr, auto;
  grid-column-gap: 6px;
  grid-row-gap: 6px;
`
const UpVoteDisplay = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  margin: 0;
  padding: 0;
  margin-top: 20px;
  justify-self: center;
  align-self: flex-start;
`
const Title = styled.div`
  grid-area: 1 / 2 / 2 / 5;
  margin: 0;
  padding: 0;
`
const ImgContainer = styled.div`
  grid-area: 2 / 2 / 4 / 5;
  margin: 0;
  padding-right: 6px;
`
const ReviewBody = styled.div`
  grid-area: 4 / 2 / 6 / 5;
  margin: 0;
  padding-right: 6px;
`

const AVImg = styled.img`
  grid-area: 4 / 1 / 5 / 2;
  object-fit: cover;
  max-width: 70px;
  max-height: 70px;
  justify-self: center;
  border: 2px solid #222629;
  border-radius: 50%;
  background-color: white;
`
const CommentsContainer = styled.div``

const Button = styled.button`
  background-color: #ee6c1b;
  border: none;
  color: white;
  padding: 15px;
  margin: 10px;
  border-radius: 12px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  &:hover {
    background-color: transparent;
    border: 4px solid white;
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`

const Span = styled.span`
  font-weight: bold;
`
const TitleText = styled.h1`
  font-size: 2rem;
`
export const Review = () => {
  const params = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const [OneReview, setOneReview] = useState({})
  const [showComment, setShowComment] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    ReviewByID(params.review_id)
      .then((result) => {
        setIsLoading(false)
        setOneReview(result)
      })
      .catch((err) => {
        setError({ err })
      })
  }, [params.review_id])

  function isClicked() {
    if (showComment === false) {
      setShowComment(true)
    } else {
      setShowComment(false)
    }
  }
  if (error) {
    let errorStatus = error.err.response.status
    return <ErrorPage message={errorStatus} />
  }

  let date = dateFormat(OneReview.created_at)

  return (
    <>
      {isLoading ? (
        <img src={Loading} />
      ) : (
        <div>
          <MainReview>
            <UpVoteDisplay>
              {OneReview.review_id && (
                <Votes
                  votes={OneReview.votes}
                  review_id={OneReview.review_id}
                />
              )}
            </UpVoteDisplay>
            <Title>
              <TitleText>{OneReview.title}</TitleText>
            </Title>
            <ImgContainer>
              <HeroImg className="review-img" src={OneReview.review_img_url} />
            </ImgContainer>

            <ReviewBody>
              <p>
                <Span>Contributor: </Span>
                {OneReview.owner}
              </p>
              <p>
                <Span>Game Designer: </Span>
                {OneReview.designer}
              </p>
              <p>
                <Span>Posted: </Span>
                {date}
              </p>
              <p>{OneReview.review_body}</p>

              <p>Comments: {OneReview.comment_count}</p>
            </ReviewBody>

            <AVImg src={avatar} />
          </MainReview>

          <CommentsContainer>
            {showComment ? null : (
              <Button onClick={isClicked}>Show comments</Button>
            )}
            {showComment ? (
              <Button onClick={isClicked}>Hide comments</Button>
            ) : null}
            {showComment ? (
              <Comments commentCount={OneReview.comment_count} />
            ) : null}
          </CommentsContainer>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button>Home</Button>
          </Link>
        </div>
      )}
    </>
  )
}

import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { ReviewByID } from '../utils/api'
import Loading from '../img/loading.svg'
import { Comments } from './Comments'
import { Votes } from './Votes'
import avatar from '../img/avatar.png'

const VoteDisplay = styled.div`
  border: 1px solid red;

  padding-left: 5%;
  padding-right: 5%;
  margin: none;

  font-size: 1.2rem;
`
const HeroImg = styled.img``
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
  grid-template-rows: 50px auto;
  grid-column-gap: 6px;
  grid-row-gap: 6px;
`
const UpVoteDisplay = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  border: 1px solid red;
  margin: 0;
  padding: 0;
`
const Title = styled.div`
  grid-area: 1 / 2 / 2 / 5;

  margin: 0;
  padding: 0;
`
const ImgContainer = styled.div`
  grid-area: 2 / 2 / 4 / 5;

  margin: 0;
  padding: 0;
`
const ReviewBody = styled.div`
  grid-area: 4 / 2 / 6 / 5;

  margin: 0;
  padding: 0;
`
const UserAvatar = styled.div`
  grid-area: 4 / 1 / 5 / 2;
  border: 1px solid red;
  margin: 0;
  padding: 0;
`
const AVImg = styled.img`
  grid-area: 4 / 1 / 5 / 2;
  object-fit: cover;
  max-width: 70px;
`
const CommentsContainer = styled.div``

const Button = styled.button`
  background-color: #ee6c1b;
  border: none;
  color: white;
  padding: 15px;
  margin: 10px;
  border-radius: 12px;
`
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
  }, [params.review_id])

  function isClicked() {
    if (showComment === false) {
      setShowComment(true)
    } else {
      setShowComment(false)
    }
  }

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
              <h2>{OneReview.title}</h2>
            </Title>
            <ImgContainer>
              <HeroImg className="review-img" src={OneReview.review_img_url} />
            </ImgContainer>

            <ReviewBody>
              <p>Contributor: {OneReview.owner}</p>
              <p>Game Designer: {OneReview.designer}</p>
              <p>{OneReview.review_body}</p>

              <p>Comments: {OneReview.comment_count}</p>
            </ReviewBody>
            <UserAvatar>
              <AVImg src={avatar} />
            </UserAvatar>
          </MainReview>
          <CommentsContainer>
            {showComment ? null : (
              <Button onClick={isClicked}>Show comments</Button>
            )}
            {showComment ? (
              <Button onClick={isClicked}>Hide comments</Button>
            ) : null}
            {showComment ? <Comments /> : null}
          </CommentsContainer>
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </div>
      )}
    </>
  )
}

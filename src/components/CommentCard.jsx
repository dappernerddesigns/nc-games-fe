import styled from 'styled-components'
import avatar from '../img/avatar.png'

import { CommentVotes } from './CommentVotes'

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
  width: 85%;
  display: grid;
  grid-template-columns: 15% auto;
  grid-template-rows: 15% auto;
  grid-column-gap: 10px;
  grid-row-gap: 4px;
`
const UserName = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`

const UserAvatar = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`

const AVImg = styled.img`
  grid-area: 1 / 1 / 2 / 2;
  object-fit: cover;
  max-width: 40px;
`

const UserComment = styled.div`
  grid-area: 2 / 2 / 4 / 3;
`
const ShowCommentVotes = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`

export const CommentCard = ({ comment, user, handleClick }) => {
  const deleteCom = () => {
    handleClick(comment.comment_id)
  }

  return (
    <CommentDisplay>
      <UserName>
        <p>User: {comment.author}</p>
      </UserName>
      <UserAvatar>
        <AVImg src={avatar} />
      </UserAvatar>
      <UserComment>
        <p>{comment.body}</p>
        {user === comment.author ? (
          <button onClick={deleteCom}>Delete</button>
        ) : null}
      </UserComment>
      <ShowCommentVotes>
        <CommentVotes
          comment_id={comment.comment_id}
          commentVotes={comment.votes}
        />
      </ShowCommentVotes>
    </CommentDisplay>
  )
}

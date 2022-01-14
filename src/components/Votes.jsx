import { useState } from 'react'
import { ReviewVotes } from '../utils/api'
import styled from 'styled-components'

const VoteCount = styled.h2`
  font-size: 2rem;

  margin: 0;
  padding: 0;
  margin-top: 6px;
  margin-bottom: 6px;
  text-align: center;
`

const Icon = styled.i`
  font-size: 2.5rem;

  color: #ee6c1b;
`
export const Votes = ({ votes, review_id }) => {
  const [userVotes, setUserVotes] = useState(votes)

  const upVote = () => {
    setUserVotes((currentVotes) => currentVotes + 1)
    ReviewVotes(review_id, 1)
  }

  const downVote = () => {
    setUserVotes((currentVotes) => currentVotes - 1)
    ReviewVotes(review_id, -1)
  }

  return (
    <div>
      <span className="votes" onClick={upVote}>
        <Icon className="fas fa-arrow-up" />
      </span>
      <VoteCount>{userVotes}</VoteCount>
      <span className="votes" onClick={downVote}>
        <Icon className="fas fa-arrow-down" />
      </span>
    </div>
  )
}

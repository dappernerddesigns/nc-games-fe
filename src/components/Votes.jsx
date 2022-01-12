import { useState } from 'react'
import { ReviewVotes } from '../utils/api'
import { Link } from 'react-router-dom'

export const Votes = ({ votes, review_id }) => {
  const [userVotes, setUserVotes] = useState(votes)
  const [isError, setIsError] = useState(false)

  const upVote = () => {
    setUserVotes((currentVotes) => currentVotes + 1)
    ReviewVotes(review_id, 1)
  }

  const downVote = () => {
    setUserVotes((currentVotes) => currentVotes - 1)
    ReviewVotes(review_id, 1)
  }

  return (
    <div>
      <span className="votes" onClick={upVote}>
        <i className="fas fa-arrow-up"></i>
      </span>
      <p>Votes : {votes}</p>
      <span className="votes" onClick={downVote}>
        <i className="fas fa-arrow-down"></i>
      </span>
    </div>
  )
}

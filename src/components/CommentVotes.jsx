import { useState } from 'react'
import { commentVoting } from '../utils/api'

export const CommentVotes = ({ comment_id, commentVotes }) => {
  const [newCommentVotes, setNewCommentVotes] = useState(commentVotes)

  const upVote = () => {
    setNewCommentVotes((currentVotes) => currentVotes + 1)
    commentVoting(comment_id, 1)
  }

  const downVote = () => {
    setNewCommentVotes((currentVotes) => currentVotes - 1)
    commentVoting(comment_id, -1)
  }

  return (
    <div>
      <span className="votes" onClick={upVote}>
        <i className="fas fa-arrow-up"></i>
      </span>
      <p>{newCommentVotes}</p>
      <span className="votes" onClick={downVote}>
        <i className="fas fa-arrow-down"></i>
      </span>
    </div>
  )
}

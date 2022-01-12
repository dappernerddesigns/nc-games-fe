import { useState } from 'react'

export const PostComment = ({ submitLabel, handleSubmit }) => {
  const [text, setText] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(text)
    setText('')
  }

  const isBoxDisabled = text.length === 0

  return (
    <div>
      <form onSubmit={onSubmit}>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />

        <button disabled={isBoxDisabled}>{submitLabel}</button>
      </form>
    </div>
  )
}

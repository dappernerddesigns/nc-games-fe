import { useState } from 'react'
import styled from 'styled-components'

const PostBox = styled.div`
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
const Button = styled.button`
  background-color: #ee6c1b;
  border: none;
  color: white;
  padding: 15px;
  margin: 10px;
  border-radius: 12px;
`
const Textarea = styled.textarea`
  width: 70%;
  height: 100px;
  border: none;
  border-radius: 12px;
`
export const PostComment = ({ submitLabel, handleSubmit }) => {
  const [text, setText] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(text)
    setText('')
  }

  return (
    <PostBox>
      <p>Username : jessjelly</p>
      <form onSubmit={onSubmit}>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />

        <Button>{submitLabel}</Button>
      </form>
    </PostBox>
  )
}

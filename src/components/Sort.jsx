import { useState } from 'react'

export const Sort = () => {
  const [value, setValue] = useState('time')

  function handleChange(e) {
    setValue(e.target.value)
  }
  return (
    <div>
      <p>Sort:</p>
      <select defaultValue={value} onChange={handleChange}>
        <option value="time">Date Newest</option>
        <option value="comments">Comment count</option>
        <option value="votes">Vote count</option>
      </select>
    </div>
  )
}

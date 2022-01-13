import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Sort = ({ query }) => {
  const [link, setLink] = useState('')

  function handleChange(e) {
    if (query.includes('category')) {
      let sortString = `${query}&${e.target.value}`
      setLink(sortString)
      console.log(sortString)
    } else {
      let sortString = `?${e.target.value}`
      setLink(sortString)
      console.log(sortString)
    }
  }

  console.log(query)
  return (
    <div>
      <p>Sort:</p>
      <select
        defaultValue={'sort_by=created_at&order=DESC'}
        onChange={handleChange}
      >
        <option value="sort_by=created_at&order=DESC">Date Newest</option>
        <option value="sort_by=created_at&order=ASC">Date Oldest</option>
        <option value="sort_by=comment_count&order=ASC">
          Comments Low-High
        </option>
        <option value="sort_by=comment_count&order=DESC">
          Comments High-Low
        </option>
        <option value="sort_by=votes&order=ASC">Votes Low-High</option>
        <option value="sort_by=votes&order=DESC">Votes High-Low</option>
      </select>
      <Link to={link}>
        <button>Go!</button>
      </Link>
    </div>
  )
}

export const Sort = ({ dropChange }) => {
  return (
    <div>
      <p>Sort:</p>
      <select
        defaultValue={'sort_by=created_at&order=DESC'}
        onChange={dropChange}
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
    </div>
  )
}

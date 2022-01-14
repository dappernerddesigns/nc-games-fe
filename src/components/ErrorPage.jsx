import { Link } from 'react-router-dom'

export const ErrorPage = (message) => {
  let statusCode = message.message
  console.log(statusCode)
  return (
    <div>
      <h1>Oh no!</h1>
      <p>
        Looks like a {statusCode} error has occurred. What you're looking for
        doesn't appear to be here.
      </p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  )
}

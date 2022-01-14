import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GetUser } from '../utils/api'
import Loading from '../img/loading.svg'
import { UserCards } from './UserCards'

export const Users = ({ userName }) => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    GetUser(userName).then((allTheUsers) => {
      setIsLoading(false)
      setUsers(allTheUsers)
      console.log(allTheUsers)
    })
  }, [])
  return (
    <>
      {isLoading ? (
        <img src={Loading} />
      ) : (
        <div>
          <ul>
            {users.map((user) => {
              return <UserCards user={user} key={user.user_id} />
            })}
          </ul>
        </div>
      )}
    </>
  )
}

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AllUsers } from '../utils/api'
import Loading from '../img/loading.svg'
import { UserCards } from './UserCards'

export const Users = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    AllUsers().then((res) => {
      setIsLoading(false)
      setUsers(res)
      console.log('does this call work?')
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

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AllUsers } from '../utils/api'
import Loading from '../img/loading.svg'

export const Users = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    AllUsers().then((allTheUsers) => {
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
            {/* {users.map((user) => {
              return <p>{user.username}</p>
            })} */}
          </ul>
        </div>
      )}
    </>
  )
}

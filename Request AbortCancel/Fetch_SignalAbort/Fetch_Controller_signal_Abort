import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

function DataFetch() {
  const [user, setUser] = useState({})
  const id = useLocation().pathname.split("/")[2]

  const controller = new AbortController()
  const signal = controller.signal

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
      .then(res => setUser(res.data))
      .catch(error => {
        if (error === 'AbortError') {
          console.log(`Request for Id: ${id} was cancelled`)
        }
        else {
          console.log(error)
        }
      })

    return () => {
      controller.abort()
    }
  }, [id])

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <Link to="/users/1">Lint to Post 1</Link><br />
      <Link to="/users/2">Lint to Post 2</Link><br />
      <Link to="/users/3">Lint to Post 3</Link>
    </div>
  )
}

export default DataFetch

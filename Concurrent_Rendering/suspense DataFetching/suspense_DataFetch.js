import React, { useState, useEffect, Suspense, lazy } from "react";
const Profiles = lazy(() => import('./Profile'))

export default function App() {
  return (
    <div>
      <h1>Welcome to Concurent Rendering...</h1>
      <Suspense fallback={<div>Loading Profile...</div>}>
        <Profiles />
      </Suspense>
    </div>
  );
}


function Profile() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setUser({ name: 'kranti', age: 20 })
    }, 1000)
  }, [])

  if (!user) {
    return <div>Loading user data...</div>
  }

  return (
    <>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </>
  )
}

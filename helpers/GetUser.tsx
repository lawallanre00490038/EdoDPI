import React from 'react'
import { currentUser } from '@clerk/nextjs/server'


const GetUser = async() => {
  const user = await currentUser()
  if (!user) return null

  return (
    <div>{user.fullName}</div>
  )
}

export default GetUser
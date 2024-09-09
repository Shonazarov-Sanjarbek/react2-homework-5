import React from 'react'
import "./AllUsers.css"
import Users from '../../components/users/Users'
import Empty from '../../components/Empty/Empty'

function AllUsers() {
  let users = true
  return (
    <div className='all__users'>
      {
        users ? <Users/> : <Empty/>
      }
    </div>
  )
}

export default AllUsers
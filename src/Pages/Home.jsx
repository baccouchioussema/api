import React from 'react'
import UsersList from '../components/UsersList'

const Home = ({users , loadUsers}) => {
  return (
    <div>
        <UsersList users={users} loadUsers={loadUsers}/>
    </div>
  )
}

export default Home
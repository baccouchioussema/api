import React from 'react'
import { Spinner } from 'react-bootstrap'
import UsersCard from './UsersCard'
import"./usersList/usersList.css"

const UsersList = ({users , loadUseres}) => {
  return (
    <div style={{display:'flex' , flexWrap:"wrap" , justifyContent:'space-around'}}>
{
loadUseres ?(
<>
<h1>loding</h1>
    <Spinner animation="border" variant="primary" />
    </>
) : (
users.map((el)=><UsersCard user= {el} key={el.id}/>)
)

}

    </div>
)
}

export default UsersList
import React from 'react'
import { Card , ListGroup } from 'react-bootstrap'

const UsersCard = ({user}) => {
    // console.log(user)
  return (
    <Card style={{ width: '18rem', margin:"20px" }}>
        <Card.Header> Name : {user.name + " " + user.username }</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item> Email : {user.email}</ListGroup.Item>
        <ListGroup.Item> Phone : {user.phone}</ListGroup.Item>
        <ListGroup.Item> City : {user.address.city}</ListGroup.Item>
        <ListGroup.Item> company : {user.company.name}</ListGroup.Item>
        <ListGroup.Item> WebSite : {user.website}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default UsersCard

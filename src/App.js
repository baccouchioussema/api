
import { useState  , useEffect} from 'react';
import axios from 'axios';
import Home from './Pages/Home';

import './App.css';

function App() {
const [users , setUsers] = useState([])
const [loadUsers , setLoadUsers] = useState(true)
const getUsers =()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(res=>{
    setUsers(res.data)
    setLoadUsers(false)
  })
  .catch((err)=>console.log(err))
}
useEffect(()=>{
  getUsers()
}, [])


  return (
    <div >
      <Home users={users} loadUsers={loadUsers} />
    </div>
  );
}

export default App;

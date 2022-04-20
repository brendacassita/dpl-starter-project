import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { Button } from "react-bootstrap";



const Profile = () => {
  const [name, setName] = useState('');

  const auth = useContext(AuthContext)
 
  const {  user, setUser } = useContext(AuthContext)


  
 

 
  return (
    <div className="App">
      <h1>Profile Page</h1>
      
      {user.image && <img src={user.image} width={300} />}
      {!user.image && <p>no image</p>}
      <p>{user.name}</p>
      < br/>
      < br/>

    
    </div>
  );
}

export default Profile
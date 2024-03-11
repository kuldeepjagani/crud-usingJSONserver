import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from '@mui/material'
import React from 'react';
import { useState } from 'react';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';
// import Validation from './Validation';
import '../App.css';



const Container = styled(FormGroup)`
          width:50%;
            margin: auto;

            & > div {
              margin-top:20px;
            }
`

// const initialValue = {
//   name: '',
//   username: '',
//   email: '',
//   phone: ''
// }

const Adduser = () => {

  const [msgError, setMsgError] = useState(false)
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
  });
  const navigate = useNavigate();

  const onValueChange = (e) => {
    // name as key and value is different filed
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // function handelValidation() {
  //   // e.preventDefault()
  //   setError(Validation(user))

  // }
  const addUserDetails = async () => {
    const { name, username, email, phone } = user;
    if (name && username && email && phone) {

      await addUser(user)
      navigate('/alluser')
    } else {
      setMsgError("Empty")
    }
    // await addUser(user)
  }



  return (
    <div className='containers'>

      <Container>
        <Typography variant='h4'>Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" required />
          <p>{msgError}</p>

        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='username' required />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='email' required />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='phone' required />
        </FormControl>
        <FormControl>
          <Button onClick={() => addUserDetails()} variant='contained'>Add User</Button>
        </FormControl>
      </Container>
    </div>
  )
}

export default Adduser

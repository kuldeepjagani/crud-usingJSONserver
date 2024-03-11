import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from '@mui/material'
import React, { useEffect } from 'react';
import { useState } from 'react';
import { getUser, editUSer } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';



const Container = styled(FormGroup)`
          width:50%;
            margin: auto;

            & > div {
              margin-top:20px;
            }
`

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Edit = () => {

    const [user, setUser] = useState(initialValue);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUsrData();
    }, [])


    const getUsrData = async () => {
        let response = await getUser(id);
        setUser(response.data)
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await editUSer(user, id)
        navigate('/alluser')
    }

    return (
        <div className='containers'>

            <Container>
                <Typography variant='h4'>Edit User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
                </FormControl>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='username' value={user.username} />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='email' value={user.email} />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='phone' value={user.phone} />
                </FormControl>
                <FormControl>
                    <Button onClick={() => addUserDetails()} variant='contained'>Edit User</Button>
                </FormControl>
            </Container>
        </div>
    )
}

export default Edit

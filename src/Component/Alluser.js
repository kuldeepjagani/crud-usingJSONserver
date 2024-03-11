import { Table, TableBody, TableCell, TableHead, TableRow, Button, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../App.css';
import { getUsers, deletUser } from '../service/api';
import { Link } from 'react-router-dom'


// css for table

const StyledTable = styled(Table)`
width: 80%;
        margin: auto;

}
`

const Thead = styled(TableRow)`
 background: #000;

 & > th {
    color: #fff;
    font-size: 20px
 }
`

const TBody = styled(TableRow)`
 & > td {
    
    font-size: 20px
 }
`




const Alluser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = async () => {
        let response = await getUsers();
        console.log(response)
        setUsers(response.data);
    }

    const deleteUserData = async (id) => {
        await deletUser(id);
        await deletUser(id);
        getUserDetails();
    }
    return (

        <div className='containers'>
            <StyledTable>
                <TableHead>
                    <Thead>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>

                    </Thead>
                </TableHead>

                <TableBody>
                    {

                        users.map(user => (
                            <TBody>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button variant='contained' style={{ marginRight: 10 }} color='secondary' component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                    <Button variant='contained' style={{ marginRight: 10 }} onClick={() => deleteUserData(user.id)}>Delete</Button>
                                </TableCell>
                            </TBody>
                        ))
                    }
                </TableBody>
            </StyledTable>

        </div >
    )
}

export default Alluser

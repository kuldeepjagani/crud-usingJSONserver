import React from 'react';
import { AppBar, Toolbar, Typography, styled } from '@mui/material';

import { Link } from 'react-router-dom'

const Header = styled(AppBar)`

background : #111111;
`;

const Tabs = styled(Link)`
font-size : 20px;
cursor:pointer;
color:inherit;
margin-right:30px;
text-decoration:none;
`

const Navbar = () => {
    return (
        <Header>
            <Toolbar>
                <Tabs to='/'>Code for interview</Tabs>
                <Tabs to='/alluser'>All User</Tabs>
                <Tabs to='/adduser'>Add User</Tabs>
            </Toolbar>
        </Header>
    )
}

export default Navbar

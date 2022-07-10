import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import {Avatar , IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
    return (
        <div className='header'>

            <div className='header-left'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://i.pinimg.com/564x/ae/47/fa/ae47fa9a8fd263aa364018517020552d.jpg" alt="" />
            </div>

            <div className='header-middle'>
                <SearchIcon />
                <input placeholder='Search-mail' type="text" name="" value="" />
                <ArrowDropDownIcon className='header-input'/>
            </div>

            <div className='header-right'>
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton><NotificationsIcon /></IconButton>
                <Avatar />

            </div>
     
        </div>
    )
}

export default Header
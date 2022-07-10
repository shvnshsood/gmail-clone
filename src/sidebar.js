import React from 'react'
import './sidebar.css'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import Option from './sidebaroption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Button className='sidebar-compose'  startIcon = {<AddIcon fontSize = "large" />}>Compose</Button>
        <Option Icon={InboxIcon} title = "Inbox" number= {54} selected = {true} />
        <Option Icon={StarIcon} title = "Starred" number= {54} />
        <Option Icon={AccessTimeIcon} title = "Snoozed" number= {54} />
        <Option Icon={LabelImportantIcon} title = "Important" number= {54} />
        <Option Icon={NearMeIcon} title = "Sent" number= {54} />
        <Option Icon={NoteIcon} title = "Drafts" number= {54} />
        <Option Icon={ExpandMoreIcon} title = "More" number= {54} />

    </div>
  )
}

export default Sidebar
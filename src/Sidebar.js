import { Button, IconButton } from '@mui/material';
import React from 'react';
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import SidebarOpt from './SidebarOpt';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoTwoToneIcon from '@mui/icons-material/DuoTwoTone';
import PhoneIcon from '@mui/icons-material/Phone';
import {useDispatch} from 'react-redux';
import {openSendMessage} from './features/mailslice'

const Sidebar = ({Icon,title,number}) => {
    const dispatch=useDispatch();
    return (
        <div className="sidebar">
            <Button 
            startIcon={<AddIcon fontSize="large"/>}
            className="sidebar_compose"
            onClick={()=>dispatch(openSendMessage())}
            >
                Compose
            </Button>
            <SidebarOpt 
            Icon={MoveToInboxIcon}
             title="Index"
             selected={true}
             number={57}/>
               <SidebarOpt  Icon={StarIcon} title="Stared" number={57}/>
               <SidebarOpt  Icon={AccessTimeIcon} title="Snoozed" number={57}/>
               <SidebarOpt  Icon={LabelImportantIcon} title="Important" number={57}/>
               <SidebarOpt  Icon={NearMeIcon} title="Sent" number={57}/>
               <SidebarOpt  Icon={NoteIcon} title="Draft" number={57}/>
               <SidebarOpt  Icon={ExpandMoreIcon} title="More" number={57}/> 
        <div className="Sidebar__footer">
            <div className="Sidebar__footerIcons">
              <IconButton>
                  <PersonIcon/>
              </IconButton>
              <IconButton>
                  <DuoTwoToneIcon/>
              </IconButton>
              <IconButton>
                  <PhoneIcon/>
              </IconButton>
            </div>
            </div>
        </div>
    );
}

export default Sidebar;

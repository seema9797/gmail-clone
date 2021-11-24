import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton,Avatar} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@mui/icons-material/Apps';
import {useSelector} from 'react-redux';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {selectUser,logout} from './features/userSlice';
import {useDispatch} from 'react-redux';
import {auth} from './firebase';
function Headers() {
    const user =useSelector(selectUser)
   const dispatch=useDispatch;

    return (
        <div className="header">
             <div className="header_left">
                <IconButton>
                   <MenuIcon/>
                 </IconButton>
                 <img alt="gmail" name="Gmail" src="https://cdn.vox-cdn.com/thumbor/GA-ktuAXTLCSCQRxsWaOavzin7g=/0x0:1320x880/920x613/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68491189/newgmaillogo.0.jpg
"/>

             </div>
             <div className="header_middle">
                  <SearchIcon/>
                  <input placeholder="Search mail" type="text"/>
                  <ArrowDropDownIcon className='header_inputCaret'/>  
             </div>
            <div className="header_right">
          <IconButton>
              <AppsIcon/>
          </IconButton>
          <IconButton>
              <NotificationsIcon/>
          </IconButton>
          <Avatar src={user?.photoUrl}/>
            </div>
        </div>
    )
}

export default Headers

import React from 'react';
import {IconButton} from '@material-ui/core'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './Mail.css';
import {selectOpenMail} from './features/mailslice'
import { useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux'

const Mail = () => {
    const history=useHistory()
    const selectedMail = useSelector(selectOpenMail)
    return (
        <div className="mail">
            <div className="mail__Tool">
          <div className="mail__toolLeft">
           <IconButton onClick={() => history.push("/")}>
               <ArrowBackIosIcon/>
           </IconButton>
           <IconButton>
               <MoveToInboxIcon/>
           </IconButton>
           <IconButton>
               <ErrorIcon/>
           </IconButton>
           <IconButton>
               <DeleteIcon/>
           </IconButton>
           <IconButton>
               <EmailIcon/>
           </IconButton>
           <IconButton>
               <WatchLaterIcon/>
           </IconButton>
           <IconButton>
               <CheckCircleIcon/>
           </IconButton>
           <IconButton>
               <LabelImportantIcon/>
           </IconButton>
           <IconButton>
               <MoreVertIcon/>
           </IconButton>
          </div>
          <div className="mail_toolRight">
         <IconButton>
             <UnfoldMoreIcon/>
         </IconButton>
         <IconButton>
             <PrintIcon/>
         </IconButton>
         <IconButton>
             <ExitToAppIcon/>
         </IconButton>
          </div>
          </div>
          <div className="mail__Body">
              <div className="mail__bodyHeader">
            <h2>{selectedMail?.subject}</h2>
            <LabelImportantIcon className='mail__important'/>
            <p>{selectedMail?.title}</p>
            <p className='mail__time'> {selectedMail?.time}</p>
          </div>
          <div className="mail__message">
          <p>{selectedMail?.description}</p>
          </div>
          </div>
        </div>
    );
}

export default Mail;

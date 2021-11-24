import React from 'react';
import {Checkbox ,IconButton} from '@material-ui/core'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import './EmailRow.css';
import {useDispatch} from 'react-redux';
import {selectMail} from './features/mailslice'
import {useHistory} from 'react-router-dom'
const Emailrow = ({id,title,subject,description,time}) => {
const history=useHistory();
const dispatch = useDispatch()


const openMail=()=>{
    dispatch(selectMail({
        id,
        title,
        subject,
        description,
        time
    }))
    history.push("/mail")
}
    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow_option">
                <Checkbox/>
                 <IconButton>
                     <StarBorderOutlinedIcon/>
                 </IconButton>
                 <IconButton>
                     <LabelImportantOutlinedIcon/>
                 </IconButton>
                </div>
                <h3 className='emailRow__title'>{title}</h3>
                <div className="email__Message">
                    <h4>{subject}-{" "}
                    <span className="emailRow__description">{description}</span>
                    </h4>
               </div>
               <p className="emailRow__time">
                {time}
               </p>
        </div>
    );
}

export default Emailrow;

import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import {Button} from '@material-ui/core';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {closeSendMessage} from './features/mailslice';
import {db} from './firebase'
import firebase from 'firebase'


const Sendmail = () => {
  const {register, handleSubmit, watch, error} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
         console.log(formData);
         db.collection('emails').add({
             to: formData.to,
             subject: formData.subject,
             message: formData.message,
             timestamp: firebase.firestore.FieldValue.serverTimestamp(),

         });
         dispatch(closeSendMessage());
    };
    return (
        <div className="sendMail">
           <div className="sendMail__header">
               <h3>New Message</h3>
               <CloseIcon 
               onClick={()=>dispatch(closeSendMessage())}
               className="sendMail__Close"
               />
               </div> 
               <form onSubmit={handleSubmit(onSubmit)}>
                   <input
                    name="to"
                    placeholder="To" 
                    type="text" 
                    {...register('to', { required: true })}
                    />
                  {error && <p className="sendMail__error">This field is required</p>}
                   <input 
                    name="subject"
                   placeholder="Subject" 
                   type="text"
                   {...register('subject', { required: true })}
                   />
      {error && <p className="sendMail__error">This field is required</p>}
                   <input
                    name="message"
                    placeholder="Message..."
                    type="text" 
                    className="sendMail__message"
                    {...register('message', { required: true })}
                    />
      {error && <p className="sendMail__error">This field is required</p>}
                   <div className="sendMail__options">     
                      <Button
                       className="sendMail__Button"
                       variant="contained"
                       color="primary"
                       type="submit"
                       >Send</Button>
                   </div>
               </form> 
        </div>
    );
}

export default Sendmail;

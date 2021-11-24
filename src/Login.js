import React from 'react';
import './Login.css';
import {login} from './features/userSlice'
import {useDispatch} from 'react-redux';
import {auth , provider} from './firebase';
import Button from '@mui/material/Button';
const Login = () => {
    const dispatch = useDispatch()
    
    
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(({user}) => {
                dispatch(login({
                   displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }))
            })
            .catch((error)=> alert(error.message))
   };

    
    return (
        <div className="login">
            <div className="login_container">
            <img alt="gmail" name="Gmail" src="https://cdn.vox-cdn.com/thumbor/GA-ktuAXTLCSCQRxsWaOavzin7g=/0x0:1320x880/920x613/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68491189/newgmaillogo.0.jpg
"/>
      <Button variant="contained" onClick={signIn}>Login</Button>
            </div>
        </div>
    );
}

export default Login;

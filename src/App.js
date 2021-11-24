import React, {useEffect} from 'react';
import './App.css';
import Header from './Headers'
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import {selectSendMessageIsOpen} from './features/mailslice';
import Login from './Login';
import {login,selectUser} from './features/userSlice'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {auth} from './firebase';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
function App() {
  const sendMessageIsOpen=useSelector(selectSendMessageIsOpen)
  const user=useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((user => {
        if(user){
          dispatch
           (login({
               displayName: user.displayName,
               email: user.email,
               photoURL: user.photoURL
           }))
        }

    }))

}, [])
  return (
    <Router>
      {!user ? (
        <Login/>
      ):(
<div className="app">
      <Header/>
      <div className="app__body">
      <Sidebar/>
      <Switch>
        <Route path="/mail">
          <Mail/>
        </Route>
        <Route path="/">
          <EmailList/>
        </Route>
      </Switch>
      </div>
      {sendMessageIsOpen && <SendMail/>}
    </div>
     )}
    </Router>
     
    
  );
}

export default App;

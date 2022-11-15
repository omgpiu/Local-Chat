import {useState} from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import ChatContent from './components/Chat/ChatContent';
import { useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();

  const [users, setUsers] = useState({name: ''})

  const singIn = () => {
    console.log('Login')
    setUsers()
    navigate('/chat')
  }


  return (
    <div className='app'>
      {(users.name !== '') ? (
        <div>
          <ChatContent />
        </div>
        ) : (
          <LoginForm Login={Login} /> 
      )} 
    </div>   
  )
}

export default App;

import {useState} from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import ChatContent from './components/Chat/ChatContent';
import { useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();

  const [users, setUsers] = useState({name: ''})

  const singIn = (name,chatName) => {
    //TODO do something with it
    console.log(name,chatName)
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
          <LoginForm singIn={singIn} /> 
      )} 
    </div>   
  )
}

export default App;

import {useState} from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import ChatContent from './components/Chat/ChatContent';
import { useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();

  const [name, setName] = useState('')

  const Login = () => {
    setName()
    navigate('/chat')
  }


  return (
    <div className='app'>
      {(name !== '') ? (
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

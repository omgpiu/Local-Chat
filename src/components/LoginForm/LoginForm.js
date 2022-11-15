import React, {useState, useEffect} from 'react';
import './LoginForm.css';

const LoginForm = ( {Login} ) => {

    const [name, setName] = useState('');
    const [chat, setChat] = useState('');

    useEffect (() => {
        localStorage.setItem('name', JSON.stringify(name))
        localStorage.setItem('chatName', JSON.stringify(chat))
    }, [name, chat])

    useEffect (() => {
        setName(JSON.parse(localStorage.getItem('name')))
        setChat(JSON.parse(localStorage.getItem('chatName')))
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();

        Login(name);
        Login(chat);
    }   

    return (
        <form onSubmit={submitHandler}>
            <div className='loginform'>
                <h2 className='loginform-header'>Enter your name and name of chat to start chatting</h2>

                    <input 
                        className='loginform-input'
                        placeholder='Name'
                        type='text' 
                        name='name' 
                        id='name' 
                        onChange={(e) => setName(e.target.value)} 
                        value={name} 
                        required/>
               
               
                    <input 
                        className='loginform-input'
                        placeholder='Chat name'
                        type='text' 
                        name='chatName' 
                        id='chatName' 
                        onChange={(e) => setChat(e.target.value)} 
                        value={chat} 
                        required/>
            
                <button className='loginform-button' type='submit'><b>LOGIN</b></button>
            </div>
        </form>
    )
}

export default LoginForm;

import React, {useState, useEffect, useRef} from 'react';
import ChatMessages from './ChatMessages';
import MessageForm from './MessageForm';
import { useNavigate } from "react-router-dom";
import './ChatUI/ChatContent.css';


const ChatContent = () => {
    
    //router 
    const navigate = useNavigate();
    
    //state
    const [messages, setMessages] = useState(usersMessage);
    
    //hooks 
    const messagesEnd = useRef(null);
    
    //variables
    const usersMessage = localStorage.getItem('message')
        ? JSON.parse(localStorage.getItem('message'))
        : []; 
   
    const chatname = JSON.parse(localStorage.getItem('chatName'));
    
    const filteredChat = messages.filter((message) => {
        return message.chat === chatname;
    });
    
    //funcs
    
    const sendMessage = (messageInput) => {
        if(messageInput) {
            const newMessage = {
                user: JSON.parse(localStorage.getItem('name')),
                chat: JSON.parse(localStorage.getItem('chatName')),
                id: Date.now(),
                text: messageInput
            }
            setMessages(prev => [newMessage, ...prev])
        }
    }
   
    const logOut = () => {
        console.log('Logout')
        navigate("/")
    }
    
    
   useEffect(() => {
            localStorage.setItem('message', JSON.stringify(messages))
    }, [messages])
    
    useEffect(() => {
        messagesEnd.current?.scrollIntoView()
    }, [messages])

    return (
        <>
        <div className='chatcontent'>
            <div className='chatcontent-header'>
                <button className='logout-button' onClick={logOut}>
                    <span className='material-symbols-outlined'>arrow_back</span>
                </button>
                <h2 className='chatcontent-name'>{chatname}</h2> 
            </div>
            <div className='chatcontent-messages'>
            {filteredChat.length === 0 ? <p className='chatcontent-empty'><b>No messages yet</b></p> :
                filteredChat.map((message) => 
                    <ChatMessages 
                        chat={message.chat}
                        message={message}
                        key={message.id}
                        />
            ).reverse()}</div>
           <MessageForm sendMessage={sendMessage}/>
           <div ref={messagesEnd}/> 
        </div>
        </>
        
    )
}

export default ChatContent;

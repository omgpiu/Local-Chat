import React, {useState, useEffect, useRef} from 'react';
import ChatMessages from './ChatMessages';
import MessageForm from './MessageForm';
import { useNavigate } from "react-router-dom";
import './ChatUI/ChatContent.css';


const ChatContent = () => {
    
    const usersMessage = localStorage.getItem('message')
        ? JSON.parse(localStorage.getItem('message'))
        : []; 
    
    const [messages, setMessages] = useState(usersMessage);
   
    useEffect(() => {
            localStorage.setItem('message', JSON.stringify(messages))
        }, [messages])

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

    const messagesEnd = useRef(null);
    useEffect(() => {
        messagesEnd.current?.scrollIntoView()
    }, [messages])

    const chatname = JSON.parse(localStorage.getItem('chatName'));
    const filteredChat = messages.filter((message) => {
        return message.chat === chatname;
    });

    const navigate = useNavigate();
    const Logout = () => {
        console.log('Logout')
        navigate("/")
    }

    return (
        <>
        <div className='chatcontent'>
            <div className='chatcontent-header'>
                <button className='logout-button' onClick={Logout}>
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

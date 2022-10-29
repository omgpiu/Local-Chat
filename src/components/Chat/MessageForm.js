import React, {useState} from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatUI/MessageForm.css';

const MessageForm = ({sendMessage}) => {

const [messageInput, setMessageInput] = useState('');
const [emojisOpen, setEmojisOpen] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(messageInput)
    setMessageInput('')
}

const handleChange = (e) => {
    setMessageInput(e.currentTarget.value)
}

const onKeyPress = (e) => {
    if(e.key === 'Enter') {
        handleSubmit(e)
    }
}

const onEmojiClick = ({emoji}) => {
    setMessageInput(prev => prev + emoji);
    setEmojisOpen(false)
}

    return (
        <form className='messageform' onSubmit={handleSubmit}>
            {emojisOpen && <EmojiPicker 
            onEmojiClick={onEmojiClick} />}
            <div className='emoji'>    
                <div className='emoji-button' onClick={() => {setEmojisOpen(val => !val)}}>
                    <span className="material-symbols-outlined">sentiment_satisfied</span>
                </div>
            </div>  
            <input 
                className='messageform-input'
                type="text"
                placeholder='Message'
                value={messageInput}
                onChange={handleChange} 
                onKeyDown={onKeyPress}
                />
            <button className='sendmessage-button'>
                <span className="material-symbols-outlined">arrow_upward</span>
            </button> 
        </form>

    )
}

export default MessageForm;
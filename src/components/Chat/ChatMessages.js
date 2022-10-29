import './ChatUI/ChatMessage.css';

const ChatMessages = ({message}) => {
    
    const username = JSON.parse(localStorage.getItem('name'));

    return (
        <div className={message.user !== username ? 'message-fromthem' : 'message-fromyou'} key={message.id}>
            <p className='message-author'><b>{message.user}</b></p>
            <p className='message-text'>{message.text}</p>
        </div>

    )
}

export default ChatMessages;
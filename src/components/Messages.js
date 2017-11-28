import React from 'react'
import Message from './Message'

const Messages = ({messages, toggleStar}) => {
  return (
    <div>
      {messages.map(message => (<Message key={message.id} message={message} toggleStar={toggleStar}/>))}
    </div>
  )
}

export default Messages

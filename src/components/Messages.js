import React from 'react'
import Message from './Message'

const Messages = ({
  messages,
  toggleStar,
}) => {
  const messageComponents = messages.map(message => (
    <Message
      key={message.id}
      message={message}
      toggleStar={toggleStar}
      />
  ))

  return (
    <div>
      {messageComponents}
    </div>
  )
}

export default Messages

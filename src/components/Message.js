import React from 'react'

const Message = ({message, toggleStar, toggleSelect}) => {
  const starClass = message.starred ? 'fa-star' : 'fa-star-o'
  const selectedClass = message.selected ? 'selected' : ""

  const starMessage = (e) => {
    e.stopPropagation()
    toggleStar(message)
  }

  const checkBox = (e) => {
    toggleSelect(message)
  }

  return (
    <div className={`row message ${selectedClass}`} >
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2" onClick={ checkBox }>
            <input type="checkbox" readOnly = { true } checked={ !!message.selected }/>
          </div>
          <div className="star-container col-xs-2" onClick={ starMessage }>
            <i className={`star fa ${starClass}`}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {message.subject}
      </div>
    </div>
  )
}

export default Message

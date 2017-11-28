import React, { Component } from 'react';
import Messages from '../components/Messages'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { messages: props.messages }
  }

  toggleStar = (message) => {
    const messages = this.state.messages.slice()
    const index = this.state.messages.indexOf(message)
    messages[index].starred = !messages[index].starred
    this.setState({messages: messages})
  }

  toggleSelect = (message) => {
    const messages = this.state.messages.slice()
    const index = this.state.messages.indexOf(message)
    messages[index].selected = !messages[index].selected
    this.setState({messages: messages})
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-default" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">React Inbox</a>
            </div>
          </div>
        </div>
        <div className="container">
          <Messages messages={this.state.messages} toggleStar={this.toggleStar} toggleSelect={this.toggleSelect}/>
        </div>
      </div>
    );
  }
}

export default App;

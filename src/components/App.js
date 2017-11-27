import React, { Component } from 'react';
import Messages from '../components/Messages'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { messages: props.messages }
  }


  toggleStar = (message) => {
    console.log("This is the message: ", message)
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

          <Messages
            messages={this.state.messages}
            toggleStar={this.toggleStar}
            />
        </div>
      </div>
    );
  }
}

export default App;
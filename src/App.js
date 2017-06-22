import React, { Component } from 'react';
import logo from './logo.svg';
import profilePic from './assets/images/profile-pic.jpg';
import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
		  <div><h2>Welcome to Infotron</h2></div>
        </div>
        <p className="App-intro">
		{/*Your source of information !*/}
        </p>
		<div className="profile-card">
		<Card centered={true} color='blue'>
    <Image src={profilePic}/>
    <Card.Content>
      <Card.Header>
        Amit Sirohiya
      </Card.Header>
      <Card.Meta>
        <span className='date'>
			24, Software Engineer
        </span>
      </Card.Meta>
      <Card.Description>
        Software Engineer
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Sanaganer, Jaipur
      </a>
    </Card.Content>
  </Card>
  </div>
      </div>
    );
  }
}

export default App;

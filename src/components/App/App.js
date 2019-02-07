import React, { Component } from 'react';
// import LandingPage from './components/landingPage'
import { connect } from 'react-redux';
import LandingPage from '../LandingPage'

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: {
        username: '',
        pwd: ''
      }
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleLogin() {
    if (this.state.login.username === this.props.id && this.state.login.pwd === this.props.password) {
     alert('success')
    } else {
      alert('failed')
    }
  }

  handleChange(e) {
    let login = this.state.login;
    if(e.target.name === 'user') login.username = e.target.value;
    if(e.target.name === 'pwwd') login.pwd = e.target.value;
    this.setState({ login })
  }


  render() {
    return (
      <div className="background">
      <img src={require('../../assets/truck.jpeg')} alt="truck" />
      <div className="shadow"></div>
        <div className="login-container">
         
          <input type="text" name="user" placeholder="Enter username..." onChange={this.handleChange} />
          {/* <p>Forgot Username <span>?</span></p> */}
          
          <input type="password" name="pwwd" placeholder="Enter password..." onChange={this.handleChange} />
          {/* <p>Forgot Username <span>?</span></p> */}
          <button onClick={this.handleLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.loginReducer.id,
    password: state.loginReducer.pwd
  }
}

export default connect(mapStateToProps) (App);
import React from 'react';
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  componentDidMount(){
    this.loginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
        .then(response => {
          if(response.data.logged_in) {
            this.handleLogin(response)
          } else {
            this.handleLogout()
          }
        })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={props => (
              <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />
            )} />
            <Route exact path="/login" render={props => (
              <Login {...props} handleLogin={this.state.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
            )} />
            <Route exact path="/signup" render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
            )} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
  

export default App;

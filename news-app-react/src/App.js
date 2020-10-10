import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import AdminHomePage from './components/admin/AdminHomePage'
import CreateArticle from './components/admin/CreateArticle'


class App extends React.Component {

  state = {
      isLoggedIn: false,
      user: {}
  }

  handleLogin = (data) => {
    console.log("handleLogin")
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

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={props => (
              <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />
            )} />
            <Route exact path="/login" render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
            )} />
            <Route exact path="/signup" render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
            )} />
            <Route exact path="/adminhomepage" render={props => (
              <AdminHomePage {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />
            )} />
            <Route exact path="/createarticle" render={props => (
              <CreateArticle {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />
            )} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
  

export default App;

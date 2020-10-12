import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import AdminHomePage from './components/admin/AdminHomePage'
import CreateArticle from './components/admin/CreateArticle'
import FrontPage from './components/FrontPage'
import { connect } from 'react-redux'


class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={props => (
              <Home {...props} loggedInStatus={this.props.loggedIn} />
            )} />
            <Route exact path="/login" render={props => (
              <Login {...props} loggedInStatus={this.props.loggedIn}/>
            )} />
            <Route exact path="/signup" render={props => (
              <Signup {...props} loggedInStatus={this.props.loggedIn} />
            )} />
            <Route exact path="/adminhomepage" render={props => (
              <AdminHomePage {...props} loggedInStatus={this.props.loggedIn} />
            )} />
            <Route exact path="/createarticle" render={props => (
              <CreateArticle {...props} loggedInStatus={this.props.loggedIn} />
            )} />
            <Route exact path="/frontpage" render={props => (
              <FrontPage {...props} loggedInStatus={this.props.loggedIn} />
            )} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = ({ loggedIn }) => {
  return { loggedIn }
}
  

export default connect(mapStateToProps)(App)

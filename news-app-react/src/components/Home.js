import React from 'react';
import { Link } from 'react-router-dom'
import AdminHomePage from './admin/AdminHomePage';
import Articles from './Articles'
import { logoutUser } from '../actions/index'
import { connect } from 'react-redux'

const Home = (props) => {

    const handleLogout = () => {
      props.logoutUser()
      props.history.push('/')
    }


  return (
    <div>

    { props.loggedInStatus ? null :
    <div>
      <Link style={{position: "relative", left: "75vw"}} to='/login'>Log In</Link>
      <Link style={{position: "relative", left: "85vw"}} to='/signup'>Sign Up</Link>
      <br></br>
      </div>
        }
      {
        props.loggedInStatus ? 

        <div>
        <Link style={{color: "red"}} to="/" onClick={handleLogout}>Log Out</Link>
        <br />
        <AdminHomePage loggedInStatus={props.loggedInStatus} />
        </div>

        : null
      }
      <hr/>
      <div>
        <Articles />
      </div>

    </div>
  )
}

export default connect(null, { logoutUser })(Home)
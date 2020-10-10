import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { loginStatus } from '../actions/index'
import AdminHomePage from './admin/AdminHomePage';
import Articles from './Articles'

const Home = (props) => {

    const handleLogout = () => {
        axios.delete('http://localhost:3001/logout', { withCredentials: true})
            .then(response => {
                props.handleLogout()
                props.history.push('/')
            })
            console.log("user logged out")
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
        <Link style={{color: "red"}} to="/logout" onClick={handleLogout}>Log Out</Link>
        <br />
        <AdminHomePage loggedInStatus={loginStatus} />
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

export default Home
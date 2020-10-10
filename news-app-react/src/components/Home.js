import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { loginStatus } from '../actions/index'
import AdminHomePage from './admin/AdminHomePage';

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
      <Link to='/login'>Log In</Link>
      <br></br>
      <Link to='/signup'>Sign Up</Link>
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

    </div>
  )
}

export default Home
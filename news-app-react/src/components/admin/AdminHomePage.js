import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const AdminHomePage = ({ loggedInStatus, admin }) => {
  
  return (
    <div>
        {  loggedInStatus && admin ?
        <div>
            <Link to="/createarticle">Create Article</Link>
        </div> : <div>Not an admin</div>
        }
    </div> 
  )
}

const mapStateToProps = ({ admin }) => {
  return { admin }
}

export default connect(mapStateToProps)(AdminHomePage)
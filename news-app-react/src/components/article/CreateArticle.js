import React from 'react'
import { connect } from 'react-redux'

const CreateArticle = ({ loggedInStatus, admin }) => {

  return (
    <div>
        { loggedInStatus && admin ?
        <div>
            CreateArticle
        </div> : <div>Not an admin</div>
        }
    </div> 
  )
}

const mapStateToProps = ({ admin }) => {
  return { admin }
}

export default connect(mapStateToProps)(CreateArticle)
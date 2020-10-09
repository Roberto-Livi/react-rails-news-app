import React from 'react'

const CreateArticle = ({ loggedInStatus }) => {

  return (
    <div>
        { loggedInStatus ? 
        <div>
            CreateArticle
        </div> : null
        }
    </div> 
  )
}

export default CreateArticle
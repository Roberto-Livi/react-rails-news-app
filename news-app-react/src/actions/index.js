import users from '../api/users'
import axios from 'axios'
import {
    LOGIN_USER,
    FETCH_USER,
    CREATE_ARTICLE
} from './types'

export const loginUser = (user) => {
    return { 
        type: LOGIN_USER, 
        payload: user
    }
}

export const fetchUserInfo = (userId) => {
    return {
        type: FETCH_USER,
        payload: userId
    }
}

export const createArticle = (article) => {
    return {
        type: CREATE_ARTICLE,
        payload: article
    }
}


export const loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
        .then(response => {
          if(response.data.logged_in) {
            this.handleLogin(response)
          } else {
            this.handleLogout()
          }
        })
  }
import users from '../api/users'
import axios from 'axios'
import {
    LOGIN_USER,
    FETCH_ARTICLES,
    CREATE_ARTICLE,
    CREATE_USER
} from './types'

export const loginUser = (user) => {
    return { 
        type: LOGIN_USER, 
        payload: user
    }
}

export const createUser = ({ user }) => async dispatch => {
    const response = await users.post('/users', { user })

    if(response.data.status === "created"){
        return dispatch({ type: CREATE_USER, payload: response.data })
    } else {
        console.log("error signing up user")
    }
}

export const fetchArticles = () => async dispatch => {
    const response = await users.get('/articles')

    dispatch({ type: FETCH_ARTICLES, payload: response.data.articles })
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


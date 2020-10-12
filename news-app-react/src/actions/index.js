import users from '../api/users'

import {
    LOGIN_USER,
    FETCH_ARTICLES,
    CREATE_ARTICLE,
    CREATE_USER,
    LOGOUT_USER
} from './types'

export const loginUser = ({ user }) => async dispatch => {
    const response = await users.post('/login', { user })

    if(response.data.logged_in){
        dispatch({ type: LOGIN_USER, payload: response.data })
    } else {
        console.log("error logging in user")
    }
}

export const logoutUser = () => dispatch => {
    users.delete(`/logout`)

    dispatch({ type: LOGOUT_USER })
}

export const createUser = ({ user }) => async dispatch => {
    const response = await users.post('/users', { user })

    if(response.data.status === "created"){
        dispatch({ type: CREATE_USER, payload: response.data })
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




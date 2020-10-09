import users from '../api/users'
import {
    LOGIN_USER,
    FETCH_USER
} from './types'

export const loginUser = (user) => {
    return { 
        type: LOGIN_USER, 
        payload: user
    }
}
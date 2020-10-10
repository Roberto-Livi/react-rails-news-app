import { LOGIN_USER, FETCH_USER, CREATE_ARTICLE } from '../actions/types'

const INITIAL_STATE = {
    id: '', 
    username: '', 
    admin: false, 
    articles: []
}

const manageUser = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_USER:
            console.log("LOGIN_USER")
            return { ...state, 
                id: action.payload.id, 
                username: action.payload.username, 
                admin: action.payload.admin 
            }
        case CREATE_ARTICLE:
            console.log("CREATE_ARTICLE")
            return { ...state, articles: [...state.articles, action.payload] }
        default:
            return state;
    }
}

export default manageUser
import { 
    LOGIN_USER, 
    FETCH_ARTICLES, 
    CREATE_ARTICLE, 
    CREATE_USER,
    LOGOUT_USER
 } from '../actions/types'

const INITIAL_STATE = {
    id: '', 
    username: '', 
    admin: false,
    loggedIn: false,
    articles: [],
    allArticles: []
}

const manageUser = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_USER:
            console.log("LOGIN_USER")
            console.log(action.payload)
            return { ...state, 
                id: action.payload.user.id, 
                username: action.payload.user.username, 
                admin: action.payload.user.admin,
                loggedIn: true
            }
        case LOGOUT_USER:
            console.log("LOGOUT_USER")
            return { ...state, 
                id: '', 
                username: '', 
                admin: false,
                loggedIn: false,
                articles: []  }
        case CREATE_USER:
            console.log("CREATE_USER")
            return { ...state, 
                id: action.payload.user.id, 
                username: action.payload.user.username, 
                admin: action.payload.user.admin,
                loggedIn: true
            }
        case CREATE_ARTICLE:
            console.log("CREATE_ARTICLE")
            return { ...state, articles: [...state.articles, action.payload] }
        case FETCH_ARTICLES:
            console.log("FETCH_ARTICLES")
            return { ...state, allArticles: action.payload }
        default:
            return state;
    }
}

export default manageUser
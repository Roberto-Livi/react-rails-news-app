import { LOGIN_USER, FETCH_ARTICLES, CREATE_ARTICLE, CREATE_USER } from '../actions/types'

const INITIAL_STATE = {
    id: '', 
    username: '', 
    admin: false, 
    articles: [],
    allArticles: [],
    loggedIn: false
}

const manageUser = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_USER:
            console.log("LOGIN_USER")
            console.log(action.payload)
            return { ...state, 
                id: action.payload.id, 
                username: action.payload.username, 
                admin: action.payload.admin,
                loggedIn: true
            }
        case CREATE_USER:
            console.log("CREATE_USER")
            return { ...state, 
                id: action.payload.id, 
                username: action.payload.username, 
                admin: action.payload.admin,
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
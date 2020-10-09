const manageUser = (state = { username: '', admin: false, articles: [] }, action) => {
    switch(action.type) {
        case "LOGIN_USER":
            return { ...state, username: action.user.username, admin: action.user.admin }
        default:
            return state;
    }
}

export default manageUser
export function newContactReducer(state = {
    name: '',
    mobile: '',
    email: ''
}, action) {
    switch(action.type) {
        case 'CHANGE_NAME':
            return {...state, name: action.payload}
        case 'CHANGE_MOBILE':
            return {...state, mobile: action.payload}
        case 'CHANGE_EMAIL':
            return {...state, email: action.payload}
        default:
            return state
    }
}
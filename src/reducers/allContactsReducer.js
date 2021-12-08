export function allContactsReducer(state = [
    {
        name: "Virat Kholi",
        mobile: "9999999999",
        email: "virat@indiancricketteam.com",
        isFav: false
    },
    {
        name: "Rohit Sharma",
        mobile: "9999998999",
        email: "rohit@indiancricketteam.com",
        isFav: false
    },
    {
        name: "Yuvi Chahal",
        mobile: "9999988999",
        email: "yuvi@indiancricketteam.com",
        isFav: false
    },
], action) {
    switch(action.type) {
        case 'NEW_CONTACT':
            return [...state, {...action.payload, isFav: false}]
        case 'TOGGLE_FAV':
            return state
        default:
            return state
    }
}
export function new_contact(contact) {
    return {
        type: 'NEW_CONTACT',
        payload: contact
    }
}

export function toggle_fav(id) {
    return {
        type: 'TOGGLE_FAV',
        payload: id
    }
}

export function changeName(name) {
    return {
        type: 'CHANGE_NAME',
        payload: name
    }
}

export function changeMobile(Mobile) {
    return {
        type: 'CHANGE_MOBILE',
        payload: Mobile
    }
}

export function changeEmail(email) {
    return {
        type: 'CHANGE_EMAIL',
        payload: email
    }
}
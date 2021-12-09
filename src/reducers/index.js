import {combineReducers} from 'redux';
import { allContactsReducer } from './allContactsReducer';
import { newContactReducer } from './newContactReducer';


const allReducers = combineReducers({
    allContacts : allContactsReducer,
    newContact: newContactReducer
})

export default allReducers;
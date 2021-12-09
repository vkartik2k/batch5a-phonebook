import React from 'react'
import {useSelector} from 'react-redux'
import ContactCard from './ContactCard'

function AllContacts() {
    const contacts = useSelector(state => state.allContacts)

    console.log(contacts)

    return (
        <div>
            {
                contacts.map(element => {
                    return (<ContactCard name={element.name} mobile={element.mobile} isFav={element.isFav} id={element.id}/>)
                })
            }
        </div>
    )
}

export default AllContacts

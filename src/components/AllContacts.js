import React from 'react'
import ContactCard from './ContactCard'

function AllContacts() {
    return (
        <div>
            <ContactCard name="Virat Kholi" mobile="9999999999" isFav={true}/>
            <ContactCard name="Rohit Sharma" mobile="9998889999" isFav={false}/>
            <ContactCard name="Yuvi Chahal" mobile="9999999999" isFav={true}/>
        </div>
    )
}

export default AllContacts

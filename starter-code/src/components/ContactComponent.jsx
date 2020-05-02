import React, { Component } from 'react'
import ContactItem from './ContactItem'

export default class ContactComponent extends Component {

    render() {
        return (
            <div>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody className='contact-table'>
                    {this.props.contacts.map( (contact, index) =>  
                    <ContactItem key={index}
                    name = {contact.name}
                    picture = {contact.pictureUrl}
                    popularity = {contact.popularity}/> )
                    }
                </tbody>               
            </table>
        </div>
        )
    }
}
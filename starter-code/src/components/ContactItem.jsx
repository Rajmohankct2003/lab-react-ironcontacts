import React, { Component } from 'react'
import './Contacts.css'
export default class ContactItem extends Component {
    render() {
        return (
            <div>
                <tr>
                    <td><img className="contact-image"src={this.props.picture} alt="contact"></img></td>
                    <td>{this.props.name}</td>
                    <td>{this.props.popularity}</td>
                </tr>               
            </div>
        )
    }
}


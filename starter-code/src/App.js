import React, { Component } from 'react';
import ContactComponent from './components/ContactComponent'
import './App.css';
import contactsFull from './contacts.json';


class App extends Component {

  state = {
    contacts: []
  }
  componentDidMount(){ 
    //this.setState({contacts:contactsFull.slice(0,5)})
    this.updateContacts();
  }

  updateContacts() {
      for(let i=0; i<5; i++){     
        this.setState( prevState => ({
          contacts: [...prevState.contacts, contactsFull[i]]
        }))
      }
  }
  addRandomContacts() {
    let randomNumber = this.state.contacts.length() + 
                      (Math.floor
                         ( Math.random() * ( contactsFull.length() - 
                                             this.state.contacts.length()
                                            )
                         )
                      )
    this.setState( prevState => ({
      contacts: [...prevState.contacts, contactsFull[randomNumber]]
    }))
  }
   render() {
        return (
          <React.Fragment>
              <h2>IronContacts</h2>
              <button onClick={this.addRandomContacts} className="random-contact">Add Random Contact </button>
                <div className="App">
                    <ContactComponent contacts = {this.state.contacts}/> 
                </div>
          </React.Fragment>
        );
    }
  }

export default App;

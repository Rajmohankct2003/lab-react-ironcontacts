import React, { Component } from 'react';
import ContactComponent from './components/ContactComponent'
import './App.css';
import contacts from './contacts.json';


class App extends Component {

  state = {
    items: []
  }
  componentDidMount(){ 
    this.setState({items:contacts.slice(0,5)})
  }
  
  render() {
    return (
        <div className="App">
            <ContactComponent contacts = {this.state.items}/> 
        </div>

    );
  }
}

export default App;

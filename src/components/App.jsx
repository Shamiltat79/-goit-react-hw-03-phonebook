import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactSearch } from './ContactSearch/ContactSearch';
import { Contacts } from './ContactList/ContactList';




const Container = styled.div`
  width: 500px;
  text-align: left;
  margin: auto;
  padding: 24px;
  `

const Tittle = styled.h1`
font-size: 32px;
font-weight: 700;
`




export class App extends Component {
  
   state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
   
  }
  componentDidMount() {
        
    const contacts = JSON.parse(localStorage.getItem('contacts')) || this.state.contacts;
    this.setState({ contacts });
  }
  
 
  componentDidUpdate = (prevProps, prevState) => {
    
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    } 
  }

 onInputChange = event => {
  const { name, value } = event.target;
  this.setState({
     
    [name]: value,
      
  })
    };

  

  handleSubmitSearch = evt => {
    evt.preventDefault();
    console.log(this.state.filter)
  }
   
  formSubmitHandler = data => {
    console.log(data);
    const normalizedName = data.name.toLowerCase();
    this.state.contacts.find(contact => contact.name.toLowerCase() === normalizedName) ? 
      alert(`${data.name} is already in contacts `) :
      this.setState(prevState => ({
    contacts: [...prevState.contacts,
      {
        id: nanoid(),
        name: data.name,
        number: data.number,
    }]
  })
  )
  }
   deleteHandler = (contactID) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID)
    }))
  }
   
 
   ContactFilterId = nanoid();
  

  render() {
   
   
    // 
    
    return (
    <Container>
        <Tittle>Phonebook</Tittle>
        <ContactForm onSubmit={this.formSubmitHandler } />
        <ContactSearch onInputHandler={ this.onInputChange} />
        <Tittle>Contacts</Tittle>
        <Contacts contactsArr={this.state.contacts} filter={this.state.filter} deleteHandler={this.deleteHandler}/>
        
          
        

    </Container>
      );
    };
  
};
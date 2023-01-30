import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  text-align: center;
  /* margin: auto; */
  padding: 24px;
   border: 1px solid black; 

button {
 width: 120px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  border-radius: 4px;
  border-color: #716f6f;
}
 

label {
    width: 100%;
text-align: left;
   margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 16px;}


input {
font-size: 14px;
  margin-bottom: 15px;} `


export class ContactForm extends Component {
    
    state = {
        name: '',
        number: '',
    }
    
handleChange = event => {
  const { name, value } = event.target;
  this.setState({
     
    [name]: value,
      
  })
    };
      handleSubmit = evt => {
    
    evt.preventDefault();
  this.props.onSubmit(this.state)
      
    this.reset()
  };
  
    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    };

    ContactInputId = nanoid();
    NumberInputId = nanoid();
    
    render() {
        const { name, number } = this.state;
        return (

            
            <FormWrapper onSubmit={this.handleSubmit}>
  <label htmlFor={ this.ContactInputId }>Name</label>
      <input
      id={this.ContactInputId }      
      type="text"
      name="name"
      value={name}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={this.handleChange}
          />
  <label htmlFor={ this.NumberInputId }>Number</label>        
          <input
            id={this.NumberInputId}
  type="tel"
            name="number"
            value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
/>
  <button type='submit'>Add contact</button>
          
        </FormWrapper>
        )
    }


};
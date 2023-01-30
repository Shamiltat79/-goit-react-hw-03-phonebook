import React from 'react';
import styled from 'styled-components';

const ContactList = styled.ul`
  font-size: 24px;
  font-weight: 700;

`
const ContactItem = styled.li`

  margin-top: 10px;
  margin-bottom: 10px;
`

export const Contacts = ({ contactsArr, filter, deleteHandler }) => {
    const normalizedName = filter.toLowerCase();
    const ContactsByFilter = contactsArr.filter(contact => contact.name.toLowerCase().includes(normalizedName));
    return (
        <ContactList>
            {ContactsByFilter.map(contact => {
                return (<ContactItem key={contact.id}>{contact.name}:  <span>{contact.number}</span>    <button onClick={() => deleteHandler(contact.id)}>Delete</button></ContactItem>)
            })}
            
        </ContactList>
    )
};

  
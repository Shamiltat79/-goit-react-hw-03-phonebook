import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

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
  border-color: #716f6f;}

label {
  width: 100%;
  text-align: left;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 16px;}

input {
    font-size: 14px;
  margin-bottom: 15px;}`

export const ContactSearch = ({ onInputHandler, filterValue }) => {

    const ContactFilterId = nanoid();
       
    return (<FormWrapper>
        <label htmlFor={ContactFilterId}>Find contacts by name</label>
        <input
            id={ContactFilterId}
            name="filter"
            value={filterValue}
            onChange={onInputHandler}
        />
        <button type='submit'>Search</button>
    </FormWrapper>)
};
  


ContactSearch.propTypes = {
    onInputHandler: PropTypes.func.isRequired,
    filterValue: PropTypes.string.isRequired,
}
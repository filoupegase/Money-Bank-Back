import React, { useState } from 'react';
import styled from 'styled-components';
import { changeUserInfo, editingMode } from '../../redux_store/callApiFunction';
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { colorStyle } from '../../utils/style/ColorStyle';


function EditNameForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const reduxState = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    event.target.id === 'first-name' ? setFirstName(event.target.value) : setLastName(event.target.value);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    dispatch(changeUserInfo(firstName, lastName));
    dispatch(editingMode());
  };

  return (
      <EditFormContainer>
        <form onSubmit={ handleEditFormSubmit }>
          <input
              required
              type="text"
              id="first-name"
              placeholder={ reduxState.firstName }
              onChange={ handleInputChange }
          />
          <input
              required
              type="text"
              id="last-name"
              placeholder={ reduxState.lastName }
              onChange={ handleInputChange }
          />
          <ButtonsContainer>
            <Button
                type="submit"
                text="Save"
                onClick={ () => {
                } } />
            <Button
                type="button"
                text="Close"
                center={ true }
                onClick={ () => dispatch(editingMode()) }
            />
          </ButtonsContainer>
        </form>
      </EditFormContainer>
  );
}

const EditFormContainer = styled.div`
  margin: 1.5rem 0;
  input {
    width: 16rem;
    margin: 0 0.5rem;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 0.25rem;
    font-size: 1.5rem;
    font-weight: 700;
    &::placeholder {
      color: ${ colorStyle.neutral400 };
    }
}`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  button {
    width: 10rem;
    margin: 1rem 0.5rem 0 0.5rem;
    padding: 0.5rem 1.5rem;
    border: 0.125rem solid ${ colorStyle.primary.primary600 };
    color: ${ colorStyle.primary.primary600 };
    background: white;
    &:hover {
      border-color: white;
      color: white;
      background: ${ colorStyle.primary.primary300 };
    }
  }`;

export default EditNameForm;
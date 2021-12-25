import React from 'react';
import styled from 'styled-components';
import { editingMode } from '../../redux_store/action';
import { Button } from '../Button';
import { useDispatch } from 'react-redux';
import { colorStyle } from '../../utils/style/ColorStyle';


function EditNameForm() {
  const dispatch = useDispatch();

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
      <EditFormContainer>
        <form onSubmit={ handleEditFormSubmit }>
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
  }
`;

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
  }
`;

export default EditNameForm;
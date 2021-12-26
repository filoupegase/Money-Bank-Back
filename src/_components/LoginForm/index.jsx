import React, { useState } from 'react';
import styled from 'styled-components';
import { colorStyle } from '../../utils/style/ColorStyle';
import { Button } from '../Button';


function LoginForm() {
  const [formIsSubmited, setFormIsSubmited] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [userInputs, setUserInputs] = useState({
    email: '',
    password: ''
  });


  const handleLoginSubmit = (event) => {
    const inputName = event.target.value;

    event.preventDefault();

    setFormIsSubmited(true);
  };

  const handleInputChange = (event) => {
    const inputName = event.target.value;
    console.log(inputName);
  };

  return (
      <>
        <form onSubmit={ handleLoginSubmit }>
          <LabeledInput>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" onChange={ handleInputChange } />
          </LabeledInput>
          <LabeledInput>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={ handleInputChange } />
          </LabeledInput>
          <LabeledCheckbox>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </LabeledCheckbox>
          <ErrorMessage className={ submitError ? 'show-error' : '' }>
            { submitError ? 'Incorrect email or password' : '' }
          </ErrorMessage>

          <Button type="submit" text="Sign In" fullWidth={ true } />
        </form>
      </>
  );
}

const LabeledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 1.5rem 0;
  text-align: left;
  label {
    margin: 0 0 0.25rem 0;
    font-size: 1.1rem;
    font-weight: 700;
  }
  input {
    padding: 0.5rem;
    border: 1px solid ${ colorStyle.neutral900 };
    border-radius: 0.25rem;
    font-size: 1.2rem;}`;

const LabeledCheckbox = styled.div`
  display: flex;
  label {
    margin: 0 0 0 0.5rem;}`;

const ErrorMessage = styled.p`
  margin: 1rem 0 1.5rem 0;
  height: 0;
  color: transparent;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 350ms;
  &.show-error {
    height: auto;
    color: ${ colorStyle.danger };}`;

export default LoginForm;
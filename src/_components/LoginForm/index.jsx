import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { colorStyle } from '../../utils/style/ColorStyle';
import { Button } from '../Button';
import { loginRequest } from '../../redux_store/action';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const reduxState = useSelector((state) => state);
  const dispatch = useDispatch();


  const handleInputChange = (event) => {
    event.target.id === 'username'
        ? setEmail(event.target.value)
        : setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    dispatch(loginRequest(email, password));
  };

  if (reduxState.logged) {
    return <Navigate to="/profile" />;
  }
  return (
      <>
        <form onSubmit={ handleLoginSubmit }>
          <LabeledInput>
            <label htmlFor="username">E-mail</label>
            <input
                type="text"
                id="username"
                value={ email }
                autoComplete="username"
                onChange={ handleInputChange }
            />
          </LabeledInput>
          <LabeledInput>
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={ password }
                autoComplete="current-password"
                onChange={ handleInputChange }
            />
          </LabeledInput>
          <LabeledCheckbox>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </LabeledCheckbox>
          <ErrorMessage className={ reduxState.error ? 'show-error' : '' }>
            { reduxState.error ? 'Incorrect email or password' : '' }
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
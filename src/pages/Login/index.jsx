import React from 'react';
import styled from 'styled-components';
import { colorStyle } from '../../utils/style/ColorStyle';
import LoginForm from '../../_components/LoginForm';


function Login() {
  return (
      <LoginMain>
        <LoginFormContainer>
          <i className="fa fa-user-circle" />

          <h2>Sign In</h2>
          <LoginForm />

        </LoginFormContainer>
      </LoginMain>
  );
}

const LoginMain = styled.main`
  padding: 3rem;
  background: ${ colorStyle.secondary.main };`;

const LoginFormContainer = styled.section`
  width: 20rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 0.25rem;
  background: white;
  i {
    color: ${ colorStyle.secondary.main };
    font-size: 3rem;}`;

export default Login;
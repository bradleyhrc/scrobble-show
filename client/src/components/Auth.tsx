import React, { useState } from 'react';
import styled from 'styled-components';

import BasicButton from './BasicButton';
import StyledButton from './StyledButton';
import StyledInput from './StyledInput';

interface AuthProps {
  setIsAuth: any;
};

const Auth: React.FC<AuthProps> = ({ setIsAuth }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleUserChange = (event: any) => {
    setUser(event.target.value);
  };

  const handlePassChange = (event: any) => {
    setPass(event.target.value);
  };

  return (
    <Column>
      <WelcomeBack>Welcome back!</WelcomeBack>
      <Subtitle>Sign in to access and search your videos!</Subtitle>
      <FieldNames>Username</FieldNames>
      <StyledInput type="text" value={user} onChange={handleUserChange} placeholder="" />
      <FieldNames>Password</FieldNames>
      <StyledInput type="text" value={pass} onChange={handlePassChange} placeholder="" />
      <div style={{ textAlign: "right", marginBottom: 16 }}>
        <Forgot>Forgot password</Forgot>
      </div>
      <StyledButton onClick={() => setIsAuth(true)}>Sign In</ StyledButton>
      <BasicButton onClick={() => setIsAuth(true)}>Sign Up</BasicButton>
    </Column>
  );
};

export default Auth;

const Column = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 650px;
  height: 100%;
  padding: 12px 150px 150px 150px;
`;

const WelcomeBack = styled.h2`
  color: #2F3E46;
  font-size: 48px;
  margin-bottom: 0;
`;

const Subtitle = styled.p`
  color: #2F3E46;
  margin-top: 8px;
  font-weight: 400;
`;

const FieldNames = styled.p`
  color: #2F3E46;
  font-weight: 500;
  margin-bottom: 4px;
`;

const Forgot = styled.p`
  color: #2F3E46;
  font-size: 14px;
  font-weight: 600;
  
`;

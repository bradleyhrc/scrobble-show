import React, { useState } from 'react';
import styled from 'styled-components';

import BasicButton from './BasicButton';
import StyledButton from './StyledButton';
import StyledInput from './StyledInput';

import s from '../img/s.png';
import upload from '../img/upload.svg';

import { BsCloudUpload } from "react-icons/bs";

interface MainProps {
  
};

const Main: React.FC = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleUserChange = (event: any) => {
    setUser(event.target.value);
  };

  const handlePassChange = (event: any) => {
    setPass(event.target.value);
  };

  return (
    <AppWrap>
      <LeftBar>
        {/*<Logo src={s} alt="Logo" />*/}
        <NewLogo>§</NewLogo>
        {/*<UploadIcon src={upload} onClick={() => console.log("lulzz")} />*/}
        <Icon>
          <BsCloudUpload style={{ width: "60%", height: "60%" }} color='white' onClick={() => console.log("lulzz")} />
        </Icon>
      </LeftBar>
      <FillBox>
        <NavBar>
          <Title>
            ScrobbleShow
          </Title>
          <div />
        </NavBar>
      </FillBox>
    </AppWrap>
  );
};

export default Main;

const LeftBar = styled.div`
  background-color: #52796F;
  height: 100%;
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
`;

const AppWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Logo = styled.img`
  padding: 30px;
`;

const NewLogo = styled.h3`
  padding: 28px;
  font-size: 48px;
  color: white;
  margin: 0;
`;

const FillBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`;

const NavBar = styled.div`
  height: 100px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 rgba(82,121,111, 0.5);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-text: center;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: #2F3E46;
  padding: 21px;
`;

const UploadIcon = styled.img`
  width: 42px;
  height: 42px;
`;

const Icon = styled.div`
  padding: 10px;
  background-color: #52796F; // Default background color
  &:hover {
    background-color: #456255; // Darker shade when hovered
    cursor: pointer;
  }
  display: inline-flex; // To center the icon, if necessary
  justify-content: center;
  align-items: center;
  border-radius: 12px; // Optional: makes the background circle-shaped
  width: 50px; // Adjust size as needed
  height: 50px; // Adjust size as needed
  transition: background-color 0.3s; // Smooth transition for the background color
  margin-top: 14px;
`;

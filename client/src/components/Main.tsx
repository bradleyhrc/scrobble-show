import React, { useState } from 'react';
import styled from 'styled-components';

import { BsCloudUpload } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import StyledInput from './StyledInput';


interface MainProps {
  setIsAuth: any;
};

const Main: React.FC<MainProps> = ({ setIsAuth }) => {
  const [query, setQuery] = useState("");

  const handleUpload = (video: any) => {
    if (!video) return;

    const formData = new FormData();
    formData.append('video', video);

    fetch("http://127.0.0.1:5000/upload", {
      method: 'POST',
      body: formData,
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error("Error uploading file:", error));
  };

  const handleFileChange = (event: any) => {
    handleUpload(event.target.files[0]);
  };

  const handlePromptChange = (event: any) => {
    setQuery(event.target.value);
  };

  return (
    <AppWrap>
      <LeftBar>
        <NewLogo>§</NewLogo>
        <Icon htmlFor="file-upload">
          <BsCloudUpload style={{ width: "60%", height: "60%" }} color='white' />
        </Icon>
      </LeftBar>
      <FillBox>
        <NavBar>
          <Title>
            ScrobbleShow
          </Title>
          <LogOut>
            <LuLogOut style={{ width: "60%", height: "60%" }} color='#2F3E46' onClick={() => setIsAuth(false)} />
          </LogOut>
        </NavBar>
        <input id="file-upload" type="file" accept='.mp4' style={{ display: 'none' }} onChange={handleFileChange} />
        <Body>
          <QuerySec>
            <StyledInput style={{ width: "92%" }} type="text" value={query} onChange={handlePromptChange} placeholder="Search your videos..." />
            <SubmitButton>Search</SubmitButton>
          </QuerySec>
        </Body>
      </FillBox>
    </AppWrap>
  );
};

export default Main;

const SubmitButton = styled.div`
  width: 90px;

  background-color: #52796F; 
  color: #f9f9f9; 
  padding: 10px 12px;
  border: none;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 rgba(82,121,111, 0.5);
  outline: none;

  &:hover {
    background-color: #52796F; 
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82,121,111, 0.72);
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    background-color: #A9A9A9;
    cursor: not-allowed;
  }
`;

const QuerySec = styled.div`
  width: 500px;
  margin-top: 10px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  gap: 2em;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

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
  height: 90px;
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

const Icon = styled.label`
  padding: 10px;
  background-color: transparent; // Default background color
  &:hover {
    background-color: rgb(100,100,100,0.2); // Darker shade when hovered
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

const LogOut = styled.div`
  padding: 10px;
  background-color: transparent; // Default background color
  &:hover {
    background-color: rgb(100,100,100,0.15); // Darker shade when hovered
    cursor: pointer;
  }
  display: inline-flex; // To center the icon, if necessary
  justify-content: center;
  align-items: center;
  border-radius: 12px; // Optional: makes the background circle-shaped
  width: 50px; // Adjust size as needed
  height: 50px; // Adjust size as needed
  transition: background-color 0.3s; // Smooth transition for the background color
  margin: 16px;
`;

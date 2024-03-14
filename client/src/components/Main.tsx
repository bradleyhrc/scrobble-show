import React, { useState } from 'react';
import styled from 'styled-components';

import { BsCloudUpload } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import StyledInput from './StyledInput';
import { RiGalleryFill } from "react-icons/ri";

import VideoPlayer from '../VideoPlayer';
import DwarfCat from '../img/dwarfcat.png';

interface MainProps {
  setIsAuth: any;
};

const Main: React.FC<MainProps> = ({ setIsAuth }) => {
  const [prompt, setPrompt] = useState("");
  const [video, setVideo] = useState(null);
  const [startTime, setStartTime] = useState(0);

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
    setPrompt(event.target.value);
  };

  const getMatch = () => {
    fetch(`http://127.0.0.1:5000/api/match?prompt=${prompt}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      setVideo(data["File_Path"]);
      setStartTime(data["Start_Time"]);
      function settime() {
        var video = document.getElementById("video1") as HTMLVideoElement | null;
        if (video) video.currentTime = data["Start_Time"];
      }
      settime();
    })
    .catch(error => console.error("Error getting match:", error));
  };

  return (
    <AppWrap>
      <LeftBar>
        <NewLogo>§</NewLogo>
        <Icon htmlFor="file-upload">
          <BsCloudUpload style={{ width: "60%", height: "60%" }} color='white' />
        </Icon>
        <Icon>
          <RiGalleryFill style={{ width: "60%", height: "60%"}} color="white" />
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
        <Row>
          <Divider>
            <input id="file-upload" type="file" accept='.mp4' style={{ display: 'none' }} onChange={handleFileChange} />
            <Body>
              <QuerySec>
                <StyledInput style={{ width: "92%" }} type="text" value={prompt} onChange={handlePromptChange} placeholder="Search your videos..." />
                <SubmitButton onClick={getMatch} >Search</SubmitButton>
              </QuerySec>
              <VideoSection>
                {video && (
                  <VideoPlayer key={video} file_path={video} start_time={startTime} />
                )}
                {
                  video && (
                    <VideoTitle>Demo!</VideoTitle>
                  )
                }
                {
                  video && (
                    <VideoData>Mar 13, 2024</VideoData>
                  )
                }
              </VideoSection>
            </Body>
          </Divider>
          <RightSide>
            <MoreResults>
              More Results...
            </MoreResults>
            {
              video && (
                <img src={DwarfCat} style={{ width: "370px"}} alt="dwarf-cat-core" />
              )
            }
            {
              video && (
                <img src={DwarfCat} style={{ width: "370px"}} alt="dwarf-cat-core" />
              )
            }
            {
              video && (
                <img src={DwarfCat} style={{ width: "370px"}} alt="dwarf-cat-core" />
              )
            }
            {
              video && (
                <img src={DwarfCat} style={{ width: "370px"}} alt="dwarf-cat-core" />
              )
            }
          </RightSide>
        </Row>
      </FillBox>
    </AppWrap>
  );
};

export default Main;

const MoreResults = styled.div`
  padding: 12px;
  padding-top: 36px;
  text-align: left;
  padding-left: 24px;
  font-weight: 600;
  font-size: 16px;
  color: #2F3E46;
`;

const RightSide = styled.div`
  width: 25%;
  height: 100%;
`

const Divider = styled.div`
  width: 68%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  height: 100%;
  width: 100%;
`;

const VideoTitle = styled.div`
  font-weight: 500;
  padding: 4px;
  color: #2F3E46;
`;

const VideoData = styled.div`
  font-size: 14px;
  color: #2F3E46;
`;

const VideoSection = styled.div`
  width: 92%;
  padding: 24px;
`;

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
  padding-left: 24px;
  padding-bottom: 0;
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

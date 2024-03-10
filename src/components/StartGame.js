import React from 'react';
import styled from 'styled-components';
import image from './dices.png';
 

function StartGame( {toggle}) {
  return (
    <Container>
    <StartContainer>
      <ImageContainer>
        <img src={image} alt="" />
      </ImageContainer>
      <div className="side">
        <h1> DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    
    </StartContainer>
     <p>---We may throw the dice, but the Lord determines how they fall.</p>
     </Container>
  );
}

export default StartGame;

const Container = styled.div`
  p{
  font-size: 26px;
  display: flex;
  align-items: center;
 justify-content: end;
 text-shadow: 0 0 10px gray;

}`
const StartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
  background: #eeedfa;
  
  .side h1{
    font-size:80px;
    white-space: nowrap;
    &:hover{
      text-shadow: 0px 0px  10px gray ;
      border: none;
    }  // for text stay in one line
    
  }

`;

const ImageContainer = styled.div`
  /* margin-right: 0px; Add some spacing between the image and the side content */
`;

const Button = styled.button`
  background: black;
  color: white;
  padding: 15px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  min-width: 220px;
  font-size: 20px;
  transition: 0.4s background ease-in;
  box-shadow: 0px 0px  30px gray ;


  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background  ease-in;
    box-shadow: 0px 0px  10px gray ;

  }
`;
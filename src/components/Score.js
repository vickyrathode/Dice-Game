import React from 'react';
 
import styled from 'styled-components';

function Score({score}) {

   
  return (
    <ScoreContainer>
       <h1>{score}</h1> 
       <p>Total Score</p>
    </ScoreContainer>
  )
}

export default Score


const ScoreContainer = styled.div`
 
  h1{
   font-size: 100px;
   font-weight: 700;
  margin-top: -20px;
  padding-top: 10px;

}
p{
  font-size: 24px;
  font-weight: 500;
  margin-top: -75px;
  margin-left: -20px;
}
`
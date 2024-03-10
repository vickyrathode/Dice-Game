import React from 'react';
import styled from 'styled-components';

function ShowRules() {
  return (
    <ShowRulesContainer>
      <h2> How to play dice game</h2>
<p> Select any number</p>
<p> Click on dice image</p>
<p>after click on  dice  if selected number is equal to dice number you will get same point as dice</p>
<p>if you get wrong guess then  2 point will be dedcuted</p>
    </ShowRulesContainer>
  )
}

export default ShowRules

const ShowRulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
background-color: #f7edd2;
padding: 5px;
border: 1px solid black;
border-radius: 5px;
align-items: center;
display: flex;
flex-direction: column;
margin-top: 10px;

`
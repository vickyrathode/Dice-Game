import React from 'react';
import styled from 'styled-components';

function RollDice({currentDice,rollDice}) {

  
  return (
    <DicesContainer>
        <div className='image' onClick={rollDice}> 
       <img   src= {`./images/dice_${currentDice}.png`} alt="image" />
       </div>
       <p>Click on Dice to Roll</p>
       </DicesContainer>
    
  )
}

export default RollDice

const DicesContainer = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    flex-direction: column;
    .image{
        cursor: pointer;
    }
    p{
        font-size: 24px;
    }

`

import React from 'react';
import styled from 'styled-components';
import Score from './Score';
import SelectNum from './SelectNum';
import RollDice from './RollDice';
import { useState } from 'react';
import ShowRules from './ShowRules';
function GamePlay() {
  const [score, setScore] = useState(0);
  const [select, setSelect] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [rules, setRules] = useState();

      
  const generateRandamNumer = (min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
   
  }
  const rollDice = ()=>{
    if(!select)
    {
      setError("You have not selected any number")
      return 
    }
  
    const randamNumber = generateRandamNumer(1,7);
    setCurrentDice ((prev) => randamNumber);


    if(select === randamNumber)
    {
     setScore((prev) => prev + randamNumber)
    }
    else {
     setScore((prev) => prev - 2)
    }

    setSelect(undefined)
  }
  const restart =()=>{
    setScore(0)
    setError("")
  }
 
 

  return (
    <GamePlayContainer>
      <div className="score">
        <Score score={score}/>
        <SelectNum error={error} setError={setError} select={select} setSelect={setSelect}/>
      </div>
        <RollDice currentDice={currentDice}  rollDice={rollDice}/>
        <div className="image">
      <Button className='primary' onClick={restart}>Reset Score</Button>
        <Button className='secondary' onClick={()=> setRules((prev)=>!prev)}>{rules ? "Hide":"Show"} Rules</Button>
      </div>
     {rules && <ShowRules/>}
    </GamePlayContainer>
  );
}

export default GamePlay;

const GamePlayContainer = styled.div`
 .score{
    display: flex;
    justify-content:space-around ;
    align-items: end;
    background-color: #f2f2f0;
 }
 .image{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
 }
 .image .primary{
  display: flex;
  background: black;
  color: white;
  padding: 15px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  font-size: 20px;
  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
  }
}
  .image .secondary{
    display: flex;
  background: white;
  color: black;
  padding: 15px;
  border: 1px solid black;
  border-radius: 5px;
  align-items: center;
justify-content: center;
  cursor: pointer;
  min-width: 200px;
  font-size: 20px;
  &:hover {
    background: black;
    color: white;
    border: 1px solid transparent;
  }
}
 
`;
const Button =styled.section`
  /* background: black;
  color: white;
  padding: 15px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  min-width: 220px;
  font-size: 20px;
  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
  } */
`

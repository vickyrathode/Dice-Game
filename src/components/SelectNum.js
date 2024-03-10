import React from 'react'
import styled from 'styled-components'
function SelectNum({error,setError,select,setSelect}) {

  const arrNumber= [1,2,3,4,5,6];
   const handleChange =(value)=>{
    setSelect(value);
    setError("");
   }
  return (
    <SelectorContainer>
      <p className='error'>{error}</p>
        <div className="selecter">   
          {arrNumber.map((value,i)=>(
            <Box isSelected ={value === select}  key={i} onClick={()=>{ handleChange(value)} }>{value}</Box>
          ))}
        </div>
      <p>Select any Number</p>
    </SelectorContainer>
  )
}

export default SelectNum

const Box = styled.div`
height: 72px ;
width: 72px;
border: 1px solid black;
text-align: center;
line-height: 70px;
font-size: 24px;
font-weight: 700;
background-color:  ${(props)=>(props.isSelected? "black" :"white")};
color:  ${(props)=>(props.isSelected? "white" :"black")};

`
const SelectorContainer = styled.div`
 display: flex;
flex-direction:column;
align-items: end;
.selecter{
  display: flex;
   
  gap: 12px;
}
p{
  font-size: 24px;
}
.error{
   color: red;
   height: 10px;
}

`
import React from 'react';
import styled from'styled-components';

const Wrap = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: space-around; 
    height: 100vh;
    background-color: ${props => props.color}
 ` 


const Container=(props)=> {
  return (
    <Wrap color={props.color}>
      {props.children}
    </Wrap>
  )
}

export default Container;

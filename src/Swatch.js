import React from 'react';
import styled from 'styled-components';

const Box = styled.input`
  width: 50px;
  height: 40px;
  border: none;
  margin: none;
  background-color: transparent;
  type: color;
  `
const Row = styled.div`
  width: 50%;
  // background: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // align-self: flex-start;
`

const Swatch=(props)=> {
  return (
    <Row>
      <Box type="color" {...props}/>
      <p>{props.label}</p> {props.color}
    </Row>
  )
}

export default Swatch;


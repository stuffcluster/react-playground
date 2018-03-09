import React from 'react';

const Field = (props) => {
  return <div 
    style={{
      margin: '20px',
      border: '1px solid #000000',
      width: '200px', 
      height: '200px',
      background: props.color 
    }}
    onMouseMove={props.mouseHandler}
  ></div>
}

export default Field;

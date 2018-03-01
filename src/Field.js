import React from 'react';

const Field = (props) => {
  return <div 
    style={{
      margin: '20px',
      width: '200px', 
      height: '200px',
      background: props.color 
    }}
    onMouseMove={props.mouseHandler}
  ></div>
}

export default Field;

import React from 'react';

const Field = (props) => {
  return <div 
    style={{
        border: 'thin solid black',
      margin: '20px',
      width: '200px', 
      height: '200px',
      background: props.color 
    }}
    onMouseMove={props.mouseHandler}
  >color field</div>
}

export default Field;

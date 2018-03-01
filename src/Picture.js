import React from 'react';

const Picture = (props)=> {
  { return props.number.map(thing => <img src={props.imageSource} alt={props.alt} />)}
}
  

export {Picture};

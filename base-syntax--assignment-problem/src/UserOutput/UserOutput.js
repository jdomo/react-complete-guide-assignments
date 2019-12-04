import React from 'react';

const UserOutput = (props) => {
  const outputStyle = {
    color: 'blue'
  }
  return (
    <div>
      <p style={outputStyle}>I'm User 1, named {props.name}</p>
      <p>I'm User 2, named {props.name}</p>
    </div>
  )
}

export default UserOutput;
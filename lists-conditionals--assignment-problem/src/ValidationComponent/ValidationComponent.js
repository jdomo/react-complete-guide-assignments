import React from 'react';

const ValidationComponent = (props) => {
  
  let result = null;

  if (props.length < 5) {
    result = <p>Result too short</p>
  } else {
    result = <p>Result long enough</p>
  }

  return (
    <div>  
      {result}
    </div>
  )
}

export default ValidationComponent;
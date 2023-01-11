import React from "react"; 

function Market(props){
  return (
    <React.Fragment>
      <p>{props.day}</p>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </React.Fragment>  
  )
}

export default Market;
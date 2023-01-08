import React from "react"; 

function Produce(props){
  return (
    <React.Fragment>
      <p>{props.month}</p>
      <p>{props.selection}</p>
    </React.Fragment>  
  )
}

export default Produce;
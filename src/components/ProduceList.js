import React from "react";
import Produce from "./Produce"; 
import { v4 } from 'uuid';

function ProduceList(props){
  console.log(props.produceList)
  return (
    <React.Fragment>
      <hr/>
        <Produce month={props.produceList.month}
            selection={props.produceList.selection}
            id={props.produceList.id} />
    </React.Fragment>
  );
}

export default ProduceList; 
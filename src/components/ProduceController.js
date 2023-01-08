import React from "react"; 
import ProduceList from "./ProduceList"
import MonthSelectionForm from "./ProduceMonthSelectionForm";

class ProduceController extends React.Component { 
  
  constructor(props){
    super(props);
    this.state = {
    formVisibleOnPage:true
    };
  };

  render(){
    let currentlyVisibleState = null;
    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }


}

export default ProduceController;
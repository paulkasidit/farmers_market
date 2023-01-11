import React from "react"; 
import Market from "./Market";

function MarketList(props){
  console.log(props.produceList)
  return (
    <React.Fragment>
      <hr/>
        <Market month= {props.thisDayMarketDetails.day}
            selection= {props.thisDayMarketDetails.location}
            hours  = {props.thisDayMarketDetails.hours}
            booth = {props.thisDayMarketDetails.booth}
            id={props.thisDayMarketDetails.id} />
    </React.Fragment>
  );
}

export default MarketList; 
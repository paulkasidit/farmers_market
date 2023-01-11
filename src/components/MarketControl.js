import React from "react"; 
import MarketList from "./MarketList";
import MarketDaySelectionForm from "./MarketDaySelectionForm";
import { v4 } from 'uuid';

class MarketController extends React.Component { 
  
  constructor(props){
    super(props);
    this.state = {
    formVisibleOnPage:true,
    thisDay: null,
    thisDayMarketDetails: null
    };
  };

  handleAddingDaySelectionToDay = (selectedDay) => {
    
    const marketSchedule = [  
      {  
         day: "Sunday",
         location: "Lents International",
         hours: "9:00am - 2:00pm",
         booth: "4A"
      },
      {  
         day: "Monday",
         location: "Pioneer Courthouse Square",
         hours: "10:00am - 2:00pm",
         booth: "7C"
      },
      {  
         day: "Tuesday",
         location: "Hillsboro",
         hours: "5:00pm - 8:30pm",
         booth: "1F"
      },
      {  
         day: "Wednesday",
         location: "Shemanski Park",
         hours: "10:00am - 2:00pm",
         booth: "3E"
      },
      {  
         day: "Thursday",
         location: "Northwest Portland",
         hours: "2:00pm - 6:00pm",
         booth: "6D"
      },
      {  
         day: "Saturday",
         location: "Beaverton",
         hours: "10:00am - 1:30pm",
         booth: "9G"
      }
     ];

    function showState (index) {
      return function showArray(object){
        console.log(object[index].selection);
        return object[index].selection; 
      }
    }

    const currentMarketSchedule = {
      day: marketSchedule[selectedDay].day,
      selection: showState(selectedDay)(marketSchedule),
      id: v4() };
    
    this.setState({
      thisday: marketSchedule[selectedDay].day,
      thisDayMarketDetails: currentMarketSchedule,
      formVisibleOnPage: false
    });
  }

  render(){
      let currentlyVisibleState = null;
      if (this.state.formVisibleOnPage) {
         currentlyVisibleState = <daySelectionForm thisDayMarketDetails = {this.handleAddingdaySelectionToday}/>
         // buttonText = "Return to Produce List"
      } 
      else {
         currentlyVisibleState = <MarketList thisDayMarketDetails = {this.state.thisDayMarketDetails}/>
         // buttonText = "Return to Form"
      }

    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }

}

export default MarketController;
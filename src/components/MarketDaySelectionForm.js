import React from "react"; 
import { v4 } from 'uuid';

function MarketDaySelectionForm(props){

  function handleDaySelectionFormSubmission(event){
    event.preventDefault();
    props.onNewSelectedMonth(event.target.day.value);

    console.log(event.target.day.value)
  }

  return (
    <React.Fragment>
      <form onSubmit = {handleDaySelectionFormSubmission}>
        <label for = "day">Choose a day</label>
        <select id = "day" name = "day">
          <option value = "0">Sunday</option>
          <option value = "1">Monday</option>
          <option value = "2">Tuesday</option>
          <option value = "3">Wednesday</option>
          <option value = "4">Thursday</option>
          <option value = "5">Friday</option>
          <option value = "6">Saturday</option>
        </select>
        <button type = "submit">View location</button>
      </form>
    </React.Fragment>
  )
}
export default MarketDaySelectionForm;
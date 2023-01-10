import React from "react"; 

function MonthSelectionForm(props){

  function handleMonthSelectionFormSubmission(event){
    event.preventDefault();
    let selectedMonth = document.getElementById("month");
    return props.onNewSelectedMonth(selectedMonth.value);
  }

  return (
    <React.Fragment>
      <form onSubmit = {handleMonthSelectionFormSubmission}>
        <label for = "month">Choose a month</label>
        <select id = "month" name = "month">
          <option value = "0">January</option>
          <option value = "1">February</option>
          <option value = "2">March</option>
          <option value = "3">April</option>
          <option value = "4">May</option>
          <option value = "5">June</option>
          <option value = "6">July</option>
          <option value = "7">August</option>
          <option value = "8">September</option>
          <option value = "9">October</option>
          <option value = "10">November</option>
          <option value = "11">December</option>
        </select>
        <button type = "submit">View Produce</button>
      </form>
    </React.Fragment>
  )
}
export default MonthSelectionForm;
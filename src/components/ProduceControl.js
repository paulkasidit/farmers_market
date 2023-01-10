import React from "react"; 
import ProduceList from "./ProduceList"
import MonthSelectionForm from "./ProduceMonthSelectionForm";
import { v4 } from 'uuid';

class ProduceController extends React.Component { 
  
  constructor(props){
    super(props);
    this.state = {
    formVisibleOnPage:true,
    thisMonth: null,
    thisMonthProduceList: {}
    };
  };

//   handleAddingNewProduceToList = (newProduce) => {
//    const newMonthProduceList = this.state.thisMonthProduceList.concat(newTicket);
//    this.setState({thisMonthProduceList: newMonthProduceList,
//                   formVisibleOnPage: false});
//   }

  handleAddingMonthSelectionToMonth = (selectedMonth) => {
    
    const availableProduce = [  
      {  
         month: "January",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
            "Garlic",
            "Mushrooms",
            "Onions",
            "Potatoes",
            "Turnips"
         ]
      },
      {  
         month: "February",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
            "Garlic",
            "Mushrooms",
            "Onions",
            "Potatoes"
         ]
      },
      {  
         month: "March",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
            "Rhubarb",
            "Garlic",
            "Mushrooms",
            "Onions",
            "Potatoes"
         ]
      },
      {  
         month: "April",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
            "Rhubarb",
            "Asparagus",
            "Garlic",
            "Lettuce",
            "Mushrooms",
            "Onions",
            "Potatoes"
         ]
      },
      {  
         month: "May",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
            "Rhubarb",
            "Asparagus",
            "Cauliflower",
            "Garlic",
            "Lettuce",
            "Potatoes",
            "Radishes"
         ]
      },
      {  
         month: "June",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
            "Rhubarb",
            "Blackberries",
            "Cherries",
            "Raspberries",
            "Strawberries",
            "Asparagus",
            "Broccoli",
            "Cauliflower",
            "Kohlrabi",
            "Lettuce",
            "Mushrooms",
            "Potatoes",
            "Radishes",
            "Squash"
         ]
      },
      {  
         month: "July",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
            "Rhubarb",
            "Apricots",
            "Blackberries",
            "Blueberries",
            "Cherries",
            "Melons",
            "Nectarines",
            "Peaches",
            "Raspberries",
            "Strawberries",
            "Tomatoes",
            "Beets",
            "Broccoli",
            "Brussel Sprouts",
            "Cabbage",
            "Carrots",
            "Cauliflower",
            "Cucumber",
            "Eggplant",
            "Garlic",
            "Green Beans",
            "Kohlrabi",
            "Lettuce",
            "Mushrooms",
            "Potatoes",
            "Radishes",
            "Squash",
            "Turnips"
         ]
      },
      {  
         month: "August",
         selection: [  
            "Apples",
            "Apricots",
            "Blackberries",
            "Blueberries",
            "Cherries",
            "Melons",
            "Nectarines",
            "Peaches",
            "Pears",
            "Plums",
            "Raspberries",
            "Rhubarb",
            "Strawberries",
            "Tomatoes",
            "Beets",
            "Broccoli",
            "Brussel Sprouts",
            "Cabbage",
            "Carrots",
            "Cauliflower",
            "Corn",
            "Cucumber",
            "Eggplant",
            "Garlic",
            "Green Beans",
            "Kohlrabi",
            "Lettuce",
            "Mushrooms",
            "Onions",
            "Peas",
            "Peppers",
            "Potatoes",
            "Radishes",
            "Squash",
            "Turnips"
         ]
      },
      {  
         month: "September",
         selection: [  
            "Apples",
            "Blueberries",
            "Grapes",
            "Melons",
            "Peaches",
            "Pears",
            "Plums",
            "Raspberries",
            "Tomatoes",
            "Broccoli",
            "Brussel Sprouts",
            "Cabbage",
            "Carrots",
            "Cauliflower",
            "Corn",
            "Cucumber",
            "Eggplant",
            "Garlic",
            "Green Beans",
            "Kohlrabi",
            "Lettuce",
            "Mushrooms",
            "Onions",
            "Peas",
            "Peppers",
            "Potatoes",
            "Radishes",
            "Squash",
            "Turnips"
         ]
      },
      {  
         month: "October",
         selection: [  
            "Apples",
            "Grapes",
            "Hazelnuts",
            "Melons",
            "Peaches",
            "Pears",
            "Tomatoes",
            "Broccoli",
            "Brussel Sprouts",
            "Cabbage",
            "Carrots",
            "Cauliflower",
            "Corn",
            "Cucumber",
            "Eggplant",
            "Garlic",
            "Green Beans",
            "Kohlrabi",
            "Lettuce",
            "Mushrooms",
            "Onions",
            "Peas",
            "Peppers",
            "Potatoes",
            "Pumpkins",
            "Radishes",
            "Squash",
            "Turnips"
         ]
      },
      {  
         month: "November",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
            "Broccoli",
            "Carrots",
            "Cauliflower",
            "Garlic",
            "Mushrooms",
            "Onions",
            "Potatoes",
            "Squash",
            "Turnips"
         ]
      },
      {  
         month: "December",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
           "Broccoli",
            "Carrots",
            "Cauliflower",
            "Garlic",
            "Mushrooms",
            "Onions",
            "Potatoes",
            "Turnips"
         ]
      }
    ];

    function showState (index) {
      return function showArray(object){
        console.log(object[index].selection);
        return object[index].selection; 
      }
    }

    const newProduceList = {
      month: availableProduce[selectedMonth].month,
      selection: showState(selectedMonth)(availableProduce),
      id: v4() };
    
    this.setState({
      thisMonth: availableProduce[selectedMonth].month,
      thisMonthProduceList: newProduceList,
      formVisibleOnPage: false
    });
  }

  render(){
      let currentlyVisibleState = null;
      if (this.state.formVisibleOnPage) {
         currentlyVisibleState = <MonthSelectionForm onNewSelectedMonth = {this.handleAddingMonthSelectionToMonth}/>
         // buttonText = "Return to Produce List"
      } 
      else {
         currentlyVisibleState = <ProduceList produceList = {this.state.thisMonthProduceList}/>
         // buttonText = "Return to Form"
      }

   //  let currentlyVisibleState = <MonthSelectionForm onNewSelectedMonth = {this.handleAddingMonthSelectionToMonth}/>
   //  // if (this.state.formVisbileOnPage){
   //  //   currentlyVisibleState = <MonthSelectionForm onNewSelectedMonth = {this.handleAddingMonthSelectionToMonth}/>
   //  // }

    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }

}

export default ProduceController;
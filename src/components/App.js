import React from "react"; 
import Header from './Header'; 
import ProduceControl from './ProduceControl'; 
import MarketController from './MarketControl';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <ProduceControl />
      <MarketController />
    </React.Fragment>
  );
}

export default App;

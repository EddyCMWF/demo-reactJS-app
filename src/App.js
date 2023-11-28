import DataEntryField from './Components/DataEntryField';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useState } from "react";
import { DisplayField } from './Components/DisplayField';

function App() {
  const [excValue, setExcValue] = useState(0);
  const [incValue, setIncValue] = useState(0);

  const vatRate = 20.0

  const addVat = (price) => {
    const totalLocalPrice = price * ((vatRate/100.)+1);
    setExcValue(price);
    setIncValue(totalLocalPrice);
    console.log("Adding VAT")
  }

  const removeVat = (price) => {
    const totalLocalPrice = price / ((vatRate/100.)+1);
    setExcValue(totalLocalPrice);
    setIncValue(price);
    console.log("Removing VAT")
  }

  return (
    <><div className='App orange-border left-align'>
      <Header/>
      <p>Eddy pays tax</p>
      {/* <p>{DataEntryField({label: 'test', handleValueChanged: setValue, value: {inputValue}})}</p> */}
      <DataEntryField
        label='Price excluding VAT' handleValueChanged={addVat}
        value={excValue === 0 ? "": excValue} 
      />
      <DisplayField label="VAT to Pay: " value={vatRate}/>
      {excValue>=0 ?
      <DataEntryField
        label='Price including VAT' handleValueChanged={removeVat}
        value={incValue === 0 ? "": incValue}
      />: <></>}
      <Footer incValue={incValue} />
    </div></>
  );
}

export default App;

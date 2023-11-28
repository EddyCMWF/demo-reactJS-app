import DataEntryField from './Components/DataEntryField';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useState } from "react";

function App() {
  const [inputValue, setValue] = useState(0);

  return (
    <><div className='App orange-border left-align'>
      <Header/>
      <p>Eddy pays tax</p>
      <p>{DataEntryField({label: 'test', handleValueChanged: setValue, value: {inputValue}})}</p>
      <DataEntryField label='Price excluding VAT' handleValueChanged={setValue} value={inputValue} />
      <DataEntryField label='Price inluding VAT' handleValueChanged={setValue} value={inputValue} />
      <Footer value={inputValue} />
    </div></>
  );
}

export default App;

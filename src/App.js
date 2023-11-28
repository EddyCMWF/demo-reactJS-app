import DataEntryField from './Components/DataEntryField';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <><div className='App orange-border left-align'>
      <Header/>
      <p>Eddy pays tax</p>
      <p>{DataEntryField({label: `This is a test entry`})}</p>
      <DataEntryField label='Price excluding VAT'/>
      <DataEntryField label='Price inluding VAT'/>
    </div></>
  );
}

export default App;
